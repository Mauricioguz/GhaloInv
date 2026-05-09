import { PrismaClient } from '../generated/client';

const prisma = new PrismaClient();

export class InventoryService {
  /**
   * Procesa un documento de inventario (Entrada, Salida, Traslado, Ajuste)
   * y actualiza saldos, kardex y costos promedios en una transacción de base de datos.
   */
  async processDocument(docData: any) {
    if (!docData.document_number) {
      docData.document_number = await this.generateNextNumber(docData.doc_type);
    }
    
    return prisma.$transaction(async (tx) => {
      // 1. Crear Documento Principal
      const document = await tx.inventoryDocument.create({
        data: {
          doc_type: docData.doc_type,
          document_number: docData.document_number,
          status: 'APPLIED',
          warehouse_from_id: docData.warehouse_from_id ? Number(docData.warehouse_from_id) : null,
          warehouse_to_id: docData.warehouse_to_id ? Number(docData.warehouse_to_id) : null,
          third_party_id: docData.third_party_id ? Number(docData.third_party_id) : null,
          date: new Date(docData.date),
          notes: docData.notes,
          attachment_url: docData.attachment_url,
          created_by: docData.created_by || 1,
        }
      });

      // 2. Procesar Líneas del Documento
      for (const line of docData.lines) {
        // Crear la Línea
        const docLine = await tx.inventoryDocumentLine.create({
          data: {
            document_id: document.id,
            product_id: line.product_id,
            qty: line.qty,
            unit_cost: line.unit_cost,
            total_cost: line.total_cost || (line.qty * Number(line.unit_cost)),
            unit_sale: line.unit_sale ? Number(line.unit_sale) : null,
            total_sale: line.total_sale ? Number(line.total_sale) : null,
            lot: line.lot
          }
        });

        // 3. Actualizar Saldos y Costos (Lógica Core Kardex)
        if (docData.doc_type === 'IN') {
          await this.processEntry(tx, document, docLine);
        } else if (docData.doc_type === 'OUT') {
          await this.processExit(tx, document, docLine);
        } else if (docData.doc_type === 'TR') {
          await this.processTransfer(tx, document, docLine);
        } else if (docData.doc_type === 'AJ') {
          await this.processAdjustment(tx, document, docLine);
        }
      }

      return document;
    });
  }

  private async processEntry(tx: any, doc: any, line: any) {
    const lotToUse = line.lot || 'SIN-LOTE';
    
    // Buscar saldo actual por Producto, Bodega y LOTE
    let balance = await tx.inventoryBalance.findUnique({
      where: {
        product_id_warehouse_id_lot: {
          product_id: line.product_id,
          warehouse_id: doc.warehouse_to_id,
          lot: lotToUse
        }
      }
    });

    if (!balance) {
      balance = await tx.inventoryBalance.create({
        data: {
          product_id: line.product_id,
          warehouse_id: doc.warehouse_to_id,
          lot: lotToUse,
          qty_on_hand: 0,
          avg_cost: 0,
          value_total: 0
        }
      });
    }

    // Calcular Nuevo Costo Promedio (el promedio es por lote en esta implementación para mayor precisión)
    const val_anterior = Number(balance.qty_on_hand) * Number(balance.avg_cost);
    const val_ingreso = Number(line.qty) * Number(line.unit_cost);
    const new_qty = Number(balance.qty_on_hand) + Number(line.qty);
    const new_avg_cost = new_qty > 0 ? (val_anterior + val_ingreso) / new_qty : 0;
    const new_val_total = new_qty * new_avg_cost;

    // Actualizar Balance
    await tx.inventoryBalance.update({
      where: { id: balance.id },
      data: {
        qty_on_hand: new_qty,
        avg_cost: new_avg_cost,
        value_total: new_val_total
      }
    });

    // Registrar en Ledger
    await tx.inventoryLedger.create({
      data: {
        product_id: line.product_id,
        warehouse_id: doc.warehouse_to_id,
        lot: lotToUse,
        movement_type: 'IN',
        doc_id: doc.id,
        qty_in: line.qty,
        qty_out: 0,
        balance_qty: new_qty,
        unit_cost: line.unit_cost,
        avg_cost_after: new_avg_cost,
        value_after: new_val_total,
        created_by: doc.created_by
      }
    });
  }

  private async processExit(tx: any, doc: any, line: any) {
    let lotToUse = line.lot;

    // Si no viene lote, buscar el lote más antiguo con existencias (FIFO)
    if (!lotToUse) {
      const fifoLot = await tx.inventoryBalance.findFirst({
        where: {
          product_id: line.product_id,
          warehouse_id: doc.warehouse_from_id,
          qty_on_hand: { gt: 0 }
        },
        orderBy: { updated_at: 'asc' }
      });

      if (!fifoLot) {
        throw new Error(`No hay existencias disponibles para el producto ID ${line.product_id} en la bodega seleccionada.`);
      }
      lotToUse = fifoLot.lot;
    }

    // Buscar saldo actual por lote
    const balance = await tx.inventoryBalance.findUnique({
      where: {
        product_id_warehouse_id_lot: {
          product_id: line.product_id,
          warehouse_id: doc.warehouse_from_id,
          lot: lotToUse
        }
      }
    });

    if (!balance || Number(balance.qty_on_hand) < Number(line.qty)) {
      throw new Error(`Stock insuficiente en el lote ${lotToUse} para el producto ID ${line.product_id}. Disponible: ${balance?.qty_on_hand || 0}`);
    }

    const new_qty = Number(balance.qty_on_hand) - Number(line.qty);
    const new_val_total = new_qty * Number(balance.avg_cost);

    // Actualizar Balance
    await tx.inventoryBalance.update({
      where: { id: balance.id },
      data: {
        qty_on_hand: new_qty,
        value_total: new_val_total
      }
    });

    // Registrar en Ledger
    await tx.inventoryLedger.create({
      data: {
        product_id: line.product_id,
        warehouse_id: doc.warehouse_from_id,
        lot: lotToUse,
        movement_type: 'OUT',
        doc_id: doc.id,
        qty_in: 0,
        qty_out: line.qty,
        balance_qty: new_qty,
        unit_cost: balance.avg_cost,
        avg_cost_after: balance.avg_cost,
        value_after: new_val_total,
        created_by: doc.created_by
      }
    });

    // Devolver el lote usado para actualizar la línea del documento si es necesario
    return lotToUse;
  }

  private async processTransfer(tx: any, doc: any, line: any) {
    // Salida de origen (determina el lote si es automático)
    const usedLot = await this.processExit(tx, { ...doc, doc_type: 'OUT', warehouse_from_id: doc.warehouse_from_id }, line);
    
    // Buscar costo del balance que acabamos de usar
    const sourceBalance = await tx.inventoryBalance.findUnique({
      where: {
        product_id_warehouse_id_lot: {
          product_id: line.product_id,
          warehouse_id: doc.warehouse_from_id,
          lot: usedLot
        }
      }
    });
    
    const transferCost = sourceBalance.avg_cost;
    
    // Entrada a destino con el MISMO lote y costo
    await this.processEntry(tx, { ...doc, doc_type: 'IN', warehouse_to_id: doc.warehouse_to_id }, { ...line, lot: usedLot, unit_cost: transferCost });
  }

  private async processAdjustment(tx: any, doc: any, line: any) {
    if (line.qty > 0) {
       await this.processEntry(tx, { ...doc, doc_type: 'IN', warehouse_to_id: doc.warehouse_to_id || doc.warehouse_from_id }, line);
    } 
    else if (line.qty < 0) {
       await this.processExit(tx, { ...doc, doc_type: 'OUT', warehouse_from_id: doc.warehouse_from_id || doc.warehouse_to_id }, { ...line, qty: Math.abs(line.qty) });
    }
  }
  async generateNextNumber(docType: string) {
    const dateStr = new Date().toISOString().split('T')[0].replace(/-/g, '');
    const prefix = `${docType}-${dateStr}-`;
    
    const lastDoc = await prisma.inventoryDocument.findFirst({
      where: { document_number: { startsWith: prefix } },
      orderBy: { document_number: 'desc' }
    });

    let sequence = 1;
    if (lastDoc) {
      const lastSeq = parseInt(lastDoc.document_number.split('-').pop() || '0');
      sequence = lastSeq + 1;
    }

    return `${prefix}${sequence.toString().padStart(3, '0')}`;
  }

  async voidDocument(docId: number) {
    console.log(`[SERVICE] Voiding document ID: ${docId}`);
    return await prisma.$transaction(async (tx) => {
      const doc = await tx.inventoryDocument.findUnique({
        where: { id: docId },
        include: { lines: true }
      });

      if (!doc) throw new Error('Documento no encontrado');
      if (doc.status === 'CANCELLED') throw new Error('El documento ya está anulado');

      // Revertir cada línea
      for (const line of doc.lines) {
        if (doc.doc_type === 'IN') {
          // Revertir Entrada con una Salida del almacén de destino
          await this.processExit(tx, { ...doc, doc_type: 'OUT', warehouse_from_id: doc.warehouse_to_id }, line);
        } else if (doc.doc_type === 'OUT') {
          // Revertir Salida con una Entrada al almacén de origen
          await this.processEntry(tx, { ...doc, doc_type: 'IN', warehouse_to_id: doc.warehouse_from_id }, line);
        } else if (doc.doc_type === 'TR') {
          // Revertir Traslado: Salida de destino, Entrada a origen
          await this.processExit(tx, { ...doc, doc_type: 'OUT', warehouse_from_id: doc.warehouse_to_id }, line);
          await this.processEntry(tx, { ...doc, doc_type: 'IN', warehouse_to_id: doc.warehouse_from_id }, line);
        } else if (doc.doc_type === 'AJ') {
          if (line.qty > 0) {
            await this.processExit(tx, { ...doc, doc_type: 'OUT', warehouse_from_id: doc.warehouse_to_id || doc.warehouse_from_id }, { ...line, qty: Math.abs(line.qty) });
          } else if (line.qty < 0) {
            await this.processEntry(tx, { ...doc, doc_type: 'IN', warehouse_to_id: doc.warehouse_from_id || doc.warehouse_to_id }, { ...line, qty: Math.abs(line.qty) });
          }
        }
      }

      // Actualizar estado del documento
      return await tx.inventoryDocument.update({
        where: { id: docId },
        data: { status: 'CANCELLED' }
      });
    });
  }
}
