import React, { useState, useEffect, useMemo } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

const Sidebar = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (t: string) => void }) => (
  <aside className="sidebar">
    <div className="logo"><span style={{ fontSize: '1.8rem' }}>☕</span> GHALOCAFE</div>
    <nav className="nav-links">
      <a href="#" className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('dashboard')}>📊 Dashboard</a>
      <a href="#" className={`nav-item ${activeTab === 'products' ? 'active' : ''}`} onClick={() => setActiveTab('products')}>📦 Productos</a>
      <a href="#" className={`nav-item ${activeTab === 'warehouses' ? 'active' : ''}`} onClick={() => setActiveTab('warehouses')}>🏠 Bodegas</a>
      <a href="#" className={`nav-item ${activeTab === 'transactions' ? 'active' : ''}`} onClick={() => setActiveTab('transactions')}>🔄 Transacciones</a>
      <a href="#" className={`nav-item ${activeTab === 'reports' ? 'active' : ''}`} onClick={() => setActiveTab('reports')}>📑 Reportes</a>
    </nav>
  </aside>
);

const Dashboard = ({ products, warehouses, onProductClick, onWarehouseClick }: any) => {
  const totalStock = products.reduce((acc: number, p: any) => acc + (p.balances?.reduce((bacc: number, b: any) => bacc + b.qty_on_hand, 0) || 0), 0);
  const totalValue = products.reduce((acc: number, p: any) => acc + (p.balances?.reduce((bacc: number, b: any) => bacc + b.value_total, 0) || 0), 0);
  
  const beanStock = products.filter((p: any) => p.type === 'GRANO').reduce((acc: number, p: any) => acc + (p.balances?.reduce((bacc: number, b: any) => bacc + b.qty_on_hand, 0) || 0), 0);
  const groundStock = products.filter((p: any) => p.type === 'MOLIDO').reduce((acc: number, p: any) => acc + (p.balances?.reduce((bacc: number, b: any) => bacc + b.qty_on_hand, 0) || 0), 0);

  const last7DaysLabels = [...Array(7)].map((_, i) => {
      const d = new Date(); d.setDate(d.getDate() - i);
      return `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}`;
  }).reverse();

  const last7DaysISO = [...Array(7)].map((_, i) => {
      const d = new Date(); d.setDate(d.getDate() - i);
      return d.toISOString().split('T')[0];
  }).reverse();

  const trendData = last7DaysISO.map((date, idx) => {
      let ins = 0, outs = 0;
      products.forEach((p: any) => p.ledger?.forEach((l: any) => {
          if (l.timestamp.startsWith(date)) {
              if (l.direction === 'IN') ins += Math.abs(l.qty_change);
              else outs += Math.abs(l.qty_change);
          }
      }));
      return { label: last7DaysLabels[idx], ins, outs };
  });

  const maxTrend = Math.max(...trendData.map(d => Math.max(d.ins, d.outs)), 1);

  const topProducts = [...products]
    .map(p => ({
        id: p.id, name: p.name, sku: p.sku, grams: p.presentation_g,
        total: p.balances?.reduce((acc: number, b: any) => acc + b.qty_on_hand, 0) || 0,
        segments: p.balances?.map((b: any) => {
            const w = warehouses.find((wh: any) => wh.id === b.warehouse_id);
            return { name: w?.name, color: w?.color || '#c6a052', qty: b.qty_on_hand };
        }) || []
    })).sort((a, b) => b.total - a.total).slice(0, 5);

  const maxStock = Math.max(...topProducts.map(p => p.total), 1);
  
  const warehouseStocks = warehouses.map((w: any) => ({
    name: w.name,
    color: w.color,
    total: w.balances?.reduce((acc: number, b: any) => acc + b.qty_on_hand, 0) || 0
  })).sort((a, b) => b.total - a.total);

  const maxWarehouseStock = Math.max(...warehouseStocks.map(ws => ws.total), 1);

  const getWarehouseIdByName = (name: string) => warehouses.find((w: any) => w.name === name)?.id;

  const [salesData, setSalesData] = useState<{cost: number, sale: number}[]>([]);
  
  useEffect(() => {
    fetch(`${API_URL}/documents/report/outputs`)
      .then(res => res.json())
      .then(docs => {
        const data = last7DaysISO.map(date => {
          let cost = 0, sale = 0;
          docs.forEach((doc: any) => {
            if (doc.date.startsWith(date)) {
              doc.lines.forEach((l: any) => {
                cost += l.total_cost || 0;
                sale += l.total_sale || 0;
              });
            }
          });
          return { cost, sale };
        });
        setSalesData(data);
      });
  }, [products]);

  const maxFinance = Math.max(...salesData.map(d => Math.max(d.cost, d.sale)), 1);

  return (
    <div className="view">
      <div className="header"><h1>Centro de Control GHALOCAFE</h1></div>
      <div className="dashboard-grid">
        <div className="glass-card stat-card" style={{ borderLeft: '4px solid var(--primary)' }}>
          <span className="stat-label">Valor Total COP</span>
          <span className="stat-value">{new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(totalValue)}</span>
        </div>
        <div className="glass-card stat-card"><span className="stat-label">Stock Unidades</span><span className="stat-value">{totalStock.toLocaleString()}</span></div>
        <div className="glass-card stat-card">
          <span className="stat-label">Composición</span>
          <div style={{ display:'flex', gap:'8px', fontSize:'0.9rem'}}><span>🫘 {Math.round((beanStock/(totalStock||1))*100)}%</span><span>☕ {Math.round((groundStock/(totalStock||1))*100)}%</span></div>
        </div>
        <div className="glass-card stat-card"><span className="stat-label">24h Flow</span><div style={{color:'var(--info)', textShadow: '0 0 10px var(--info)'}}>↑{trendData[6].ins} <span style={{color:'var(--danger)', textShadow: '0 0 10px var(--danger)'}}>↓{trendData[6].outs}</span></div></div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', gap: '1.5rem', marginTop: '1.5rem' }}>
        <div className="glass-card">
            <h3>Flujo de Inventario (7 Días)</h3>
            <div style={{ height: '150px', display: 'flex', alignItems: 'flex-end', gap: '8px', padding: '10px 0', borderBottom:'1px solid rgba(255,255,255,0.1)' }}>
                {trendData.map((d, i) => (
                    <div key={i} style={{ flex: 1, display: 'flex', gap: '2px', alignItems: 'flex-end', height: '100%' }}>
                        <div title={`In: ${d.ins}`} style={{ flex: 1, height: `${(d.ins / maxTrend) * 100}%`, background: 'var(--info)', borderRadius: '2px 2px 0 0', boxShadow: '0 0 10px rgba(59, 130, 246, 0.3)' }} />
                        <div title={`Out: ${d.outs}`} style={{ flex: 1, height: `${(d.outs / maxTrend) * 100}%`, background: 'var(--danger)', borderRadius: '2px 2px 0 0', boxShadow: '0 0 10px rgba(244, 63, 94, 0.3)' }} />
                    </div>
                ))}
            </div>
            <div style={{ display:'flex', justifyContent:'space-between', fontSize:'0.7rem', color:'var(--text-muted)', marginTop:'5px' }}>{trendData.map((d,i)=><span key={i}>{d.label}</span>)}</div>
        </div>
        
        <div className="glass-card">
            <h3>Stock por Bodega</h3>
            <div style={{ marginTop: '1rem' }}>
                {warehouseStocks.map((ws, idx) => (
                    <div key={idx} style={{ marginBottom: '1rem', cursor: 'pointer' }} onClick={() => onWarehouseClick(getWarehouseIdByName(ws.name))}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '4px' }}>
                            <span>{ws.name}</span>
                            <strong>{ws.total.toLocaleString()} ud</strong>
                        </div>
                        <div style={{ height: '10px', background: 'rgba(255,255,255,0.03)', borderRadius: '5px', overflow: 'hidden', boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.5)' }}>
                            <div style={{ 
                                width: `${(ws.total / maxWarehouseStock) * 100}%`, 
                                height: '100%', 
                                background: `linear-gradient(90deg, ${ws.color}, ${ws.color}88)`, 
                                boxShadow: `0 0 15px ${ws.color}66`,
                                borderRadius: '5px' 
                            }} />
                        </div>
                    </div>
                ))}
                {warehouseStocks.length === 0 && <div style={{ textAlign: 'center', opacity: 0.5, fontSize: '0.8rem' }}>Sin datos de bodega</div>}
            </div>
        </div>

        <div className="glass-card">
            <h3>Distribución Top 5</h3>
            {topProducts.map((p, idx) => (
                <div key={idx} onClick={() => onProductClick(p.id)} style={{ cursor:'pointer', marginBottom:'1rem' }}>
                    <div style={{ display:'flex', justifyContent:'space-between', fontSize:'0.8rem', marginBottom:'3px' }}>
                        <span>{p.name} <small style={{opacity:0.6}}>({p.sku})</small></span>
                        <strong>{p.total} ud</strong>
                    </div>
                    <div style={{ display:'flex', height:'8px', background:'rgba(255,255,255,0.05)', borderRadius:'4px', overflow:'hidden' }}>
                        {p.segments.map((seg: any, sidx: number) => (
                            <div key={sidx} title={`${seg.name}: ${seg.qty}`} style={{ width: `${(seg.qty / maxStock) * 100}%`, backgroundColor: seg.color }} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </div>

      <div className="glass-card" style={{marginTop:'1.5rem'}}>
          <h3>Análisis de Rentabilidad (Costo vs. Venta)</h3>
          <div style={{ height: '200px', display: 'flex', alignItems: 'flex-end', gap: '20px', padding: '20px 0', borderBottom:'1px solid rgba(255,255,255,0.1)' }}>
              {salesData.map((d, i) => {
                  const margin = d.sale - d.cost;
                  const marginPerc = d.sale > 0 ? (margin / d.sale) * 100 : 0;
                  return (
                      <div key={i} style={{ flex: 1, display: 'flex', flexDirection:'column', justifyContent:'flex-end', height: '100%', gap:'5px', position:'relative' }}>
                          {d.sale > 0 && (
                             <div style={{ position:'absolute', top:'-25px', left:'50%', transform:'translateX(-50%)', fontSize:'0.65rem', color:'var(--success)', fontWeight:700, whiteSpace:'nowrap', textShadow:'0 0 5px rgba(0,0,0,0.5)' }}>
                                 +{marginPerc.toFixed(0)}%
                             </div>
                          )}
                          <div style={{ display:'flex', gap:'4px', alignItems:'flex-end', height:'100%' }}>
                              <div title={`Costo: ${d.cost}`} style={{ flex: 1, height: `${(d.cost / maxFinance) * 100}%`, background: 'rgba(255,255,255,0.1)', borderRadius: '2px', border: '1px solid rgba(255,255,255,0.2)' }} />
                              <div title={`Venta: ${d.sale}`} style={{ flex: 1, height: `${(d.sale / maxFinance) * 100}%`, background: 'var(--success)', borderRadius: '2px', boxShadow: '0 0 15px var(--success)44' }} />
                          </div>
                          <div style={{ fontSize:'0.7rem', textAlign:'center', color:'var(--text-muted)' }}>{last7DaysLabels[i]}</div>
                      </div>
                  );
              })}
          </div>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:'1rem' }}>
              <div style={{ display:'flex', gap:'20px', fontSize:'0.8rem' }}>
                  <div style={{ display:'flex', alignItems:'center', gap:'5px' }}><div style={{ width:'10px', height:'10px', background:'rgba(255,255,255,0.2)' }}/> Costo Inventario</div>
                  <div style={{ display:'flex', alignItems:'center', gap:'5px' }}><div style={{ width:'10px', height:'10px', background:'var(--success)' }}/> Valor de Venta</div>
              </div>
              {salesData.length > 0 && salesData[6].sale > 0 && (
                  <div style={{ padding:'5px 12px', background:'rgba(16, 185, 129, 0.1)', borderRadius:'15px', border:'1px solid var(--success)', fontSize:'0.8rem', color:'var(--success)', fontWeight:600 }}>
                      Margen Hoy: {(((salesData[6].sale - salesData[6].cost) / salesData[6].sale) * 100).toFixed(1)}%
                  </div>
              )}
          </div>
      </div>
    </div>
  );
};

const WarehouseInventoryModal = ({ warehouseId, warehouses, products, onClose, onProductClick }: any) => {
    const warehouse = warehouses.find((w: any) => w.id === warehouseId);
    if (!warehouse) return null;

    const inventory = warehouse.balances
        ?.map((b: any) => ({
            ...b,
            product: products.find((p: any) => p.id === b.product_id)
        }))
        .filter((i: any) => i.qty_on_hand > 0)
        .sort((a: any, b: any) => b.qty_on_hand - a.qty_on_hand) || [];

    const totalValue = inventory.reduce((acc: number, curr: any) => acc + curr.value_total, 0);
    const totalQty = inventory.reduce((acc: number, curr: any) => acc + curr.qty_on_hand, 0);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="glass-card modal-content" onClick={e => e.stopPropagation()} style={{ width: '90%', maxWidth: '900px', maxHeight: '90vh', overflowY: 'auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: warehouse.color, boxShadow: `0 0 15px ${warehouse.color}` }} />
                            <h2 style={{ margin: 0 }}>Inventario: {warehouse.name}</h2>
                        </div>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{warehouse.location}</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Valor Inventario</div>
                        <div className="stat-value" style={{ fontSize: '1.5rem' }}>{new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(totalValue)}</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600 }}>{totalQty.toLocaleString()} unidades</div>
                    </div>
                </div>

                <div className="glass-card" style={{ padding: 0, background: 'rgba(0,0,0,0.2)' }}>
                    <table>
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Tipo</th>
                                <th>Presentación</th>
                                <th>Existencia</th>
                                <th>Costo Promedio</th>
                                <th>Valor Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {inventory.map((item: any) => (
                                <tr key={item.product_id} onClick={() => onProductClick(item.product_id)} style={{ cursor: 'pointer' }}>
                                    <td style={{ fontWeight: 600 }}>{item.product?.name}</td>
                                    <td><span className="badge" style={{ background: 'rgba(255,255,255,0.05)' }}>{item.product?.type === 'GRANO' ? 'Grano' : 'Molido'}</span></td>
                                    <td>{item.product?.presentation_g}g</td>
                                    <td style={{ fontWeight: 700, color: 'var(--primary)' }}>{item.qty_on_hand} ud</td>
                                    <td>{new Intl.NumberFormat('es-CO').format(item.unit_cost || 0)}</td>
                                    <td>{new Intl.NumberFormat('es-CO').format(item.value_total || 0)}</td>
                                </tr>
                            ))}
                            {inventory.length === 0 && (
                                <tr>
                                    <td colSpan={6} style={{ textAlign: 'center', padding: '3rem', opacity: 0.5 }}>No hay existencias en esta bodega.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
                    <button className="btn btn-outline" onClick={onClose}>Cerrar Detalle</button>
                </div>
            </div>
        </div>
    );
};

const ProductManager = ({ products, onRefresh, onProductClick }: any) => {
  const [showAdd, setShowAdd] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({ sku:'', name:'', type:'GRANO', presentation_g:250, packaging_unit:'Bolsa' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const url = editingId ? `${API_URL}/products/${editingId}` : `${API_URL}/products`;
      await fetch(url, { method: editingId ? 'PUT' : 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
      setShowAdd(false); setEditingId(null); onRefresh();
    } catch (err) { alert(err); }
  };

  return (
    <div className="view">
      <div className="header"><h1>Productos</h1><button className="btn btn-primary" onClick={() => { setShowAdd(true); setEditingId(null); setFormData({sku:'', name:'', type:'GRANO', presentation_g:250, packaging_unit:'Bolsa'}); }}>+ Nuevo</button></div>
      {showAdd && (
        <div className="glass-card" style={{ marginBottom: '2rem' }}>
            <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                <input placeholder="SKU" value={formData.sku} onChange={e => setFormData({...formData, sku:e.target.value})} required />
                <input placeholder="Nombre" value={formData.name} onChange={e => setFormData({...formData, name:e.target.value})} required />
                <select value={formData.type} onChange={e => setFormData({...formData, type:e.target.value})}><option value="GRANO">Grano</option><option value="MOLIDO">Molido</option></select>
                <div style={{display:'flex', alignItems:'center', gap:'5px'}}><input type="number" value={formData.presentation_g} onChange={e => setFormData({...formData, presentation_g:parseInt(e.target.value)})} style={{flex:1}} /><span>g</span></div>
                <input placeholder="Empaque" value={formData.packaging_unit} onChange={e => setFormData({...formData, packaging_unit:e.target.value})} />
                <button type="submit" className="btn btn-primary">Guardar</button>
            </form>
        </div>
      )}
      <table>
        <thead><tr><th>SKU</th><th>Nombre</th><th>Tipo</th><th>Presentación</th><th>Acciones</th></tr></thead>
        <tbody>
          {products.map((p: any) => (
            <tr key={p.id} onClick={() => onProductClick(p.id)} style={{cursor:'pointer'}}>
              <td>{p.sku}</td><td>{p.name}</td><td>{p.type === 'GRANO' ? 'Grano' : p.type === 'MOLIDO' ? 'Molido' : p.type}</td><td>{p.presentation_g} g</td>
              <td onClick={e=>e.stopPropagation()}><button className="btn btn-outline" onClick={() => { setEditingId(p.id); setFormData({sku:p.sku, name:p.name, type:p.type, presentation_g:p.presentation_g, packaging_unit:p.packaging_unit}); setShowAdd(true); }}>Editar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const WarehouseManager = ({ warehouses, onRefresh }: any) => {
    const [showAdd, setShowAdd] = useState(false);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [formData, setFormData] = useState({ name: '', location: '', type: 'STORE', color: '#10b981' });
    const COLORS = ['#10b981', '#3b82f6', '#8b5cf6', '#f43f5e', '#f59e0b', '#06b6d4'];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const url = editingId ? `${API_URL}/warehouses/${editingId}` : `${API_URL}/warehouses`;
            await fetch(url, { method: editingId ? 'PUT' : 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
            setShowAdd(false); setEditingId(null); onRefresh();
        } catch (err) { alert(err); }
    };

    const deleteWarehouse = async (id: number) => {
        if (!confirm('¿Seguro que desea inactivar esta bodega?')) return;
        try {
            await fetch(`${API_URL}/warehouses/${id}`, { method: 'DELETE' });
            onRefresh();
        } catch (err) { alert(err); }
    };

    return (
        <div className="view">
            <div className="header"><h1>Bodegas</h1><button className="btn btn-primary" onClick={() => { setShowAdd(true); setEditingId(null); setFormData({name:'', location:'', type:'STORE', color:'#c6a052'}); }}>+ Nueva</button></div>
            {showAdd && (
                <div className="glass-card" style={{marginBottom:'2rem'}}>
                    <form onSubmit={handleSubmit} style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:'1rem'}}>
                        <input placeholder="Nombre de Bodega" value={formData.name} onChange={e => setFormData({...formData, name:e.target.value})} required />
                        <input placeholder="Ubicación / Dirección" value={formData.location} onChange={e => setFormData({...formData, location:e.target.value})} required />
                        <select value={formData.type} onChange={e => setFormData({...formData, type:e.target.value})}>
                            <option value="PRODUCTION">Producción / Planta</option>
                            <option value="STORE">Tienda / Punto de Venta</option>
                            <option value="THIRD_PARTY">Externo / Terceros</option>
                        </select>
                        <div style={{display:'flex', gap:'8px', alignItems:'center'}}><label>Color Distintivo:</label>{COLORS.map(c => <div key={c} onClick={() => setFormData({...formData, color:c})} style={{width:'30px', height:'30px', borderRadius:'50%', background:c, cursor:'pointer', border:formData.color===c?'3px solid white':'none', transition:'transform 0.2s', transform: formData.color===c?'scale(1.2)':'scale(1)', boxShadow: `0 0 15px ${c}66`}} />)}</div>
                        <button type="submit" className="btn btn-primary">Guardar Bodega</button>
                    </form>
                </div>
            )}
            <table>
                <thead><tr><th>Color</th><th>Nombre</th><th>Ubicación</th><th>Tipo</th><th>Acciones</th></tr></thead>
                <tbody>
                    {warehouses.filter((w:any)=>w.active).map((w:any) => (
                        <tr key={w.id}>
                            <td><div style={{width:'16px', height:'16px', borderRadius:'50%', background:w.color, boxShadow:`0 0 10px ${w.color}88` }}/></td>
                            <td style={{fontWeight:600}}>{w.name}</td>
                            <td>{w.location}</td>
                            <td style={{fontSize:'0.8rem'}}>{w.type === 'PRODUCTION' ? 'Planta' : w.type === 'STORE' ? 'Punto de Venta' : 'Externo'}</td>
                            <td>
                                <div style={{display:'flex', gap:'10px'}}>
                                    <button className="btn btn-outline" style={{padding:'4px 10px', fontSize:'0.75rem'}} onClick={() => { setEditingId(w.id); setFormData({name:w.name, location:w.location || '', type:w.type, color:w.color}); setShowAdd(true); }}>Editar</button>
                                    <button className="btn btn-outline" style={{padding:'4px 10px', fontSize:'0.75rem', color:'#e06c75', borderColor:'#e06c75'}} onClick={() => deleteWarehouse(w.id)}>Inactivar</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const TransactionEngine = ({ products, warehouses, onRefresh }: any) => {
    const [docType, setDocType] = useState('IN');
    const [formData, setFormData] = useState({ 
        document_number: '', 
        warehouse_from_id: null as number | null, 
        warehouse_to_id: null as number | null, 
        lines: [{ product_id: 0, qty: 0, unit_cost: 0, unit_sale: 0, lot: '' }] 
    });
    const [attachment, setAttachment] = useState<File | null>(null);
    const [loadingNum, setLoadingNum] = useState(false);
    const [correctingDocId, setCorrectingDocId] = useState<number | null>(null);
    const [history, setHistory] = useState<any[]>([]);

    const fetchNextNumber = async (type: string) => {
        setLoadingNum(true);
        try {
            const res = await fetch(`${API_URL}/documents/next-number/${type}`);
            if (!res.ok) throw new Error("Failed to fetch number");
            const data = await res.json();
            setFormData(prev => ({ ...prev, document_number: data.nextNumber }));
        } catch (err) { console.error("Error fetching number", err); }
        setLoadingNum(false);
    };

    const fetchHistory = async () => {
        try {
            const res = await fetch(`${API_URL}/documents`);
            if (res.ok) setHistory(await res.json());
        } catch (e) { console.error(e); }
    };

    useEffect(() => {
        fetchNextNumber(docType);
        fetchHistory();
    }, [docType]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // Si estamos corrigiendo, anular el viejo primero
            if (correctingDocId) {
                const vRes = await fetch(`${API_URL}/documents/${correctingDocId}`, { method: 'DELETE' });
                if (!vRes.ok) throw new Error("No se pudo anular el registro original para corregir.");
            }

            // Subir archivo si existe
            let attachment_url = null;
            if (attachment) {
                const fData = new FormData();
                fData.append('file', attachment);
                const upRes = await fetch(`${API_URL}/documents/upload`, { method: 'POST', body: fData });
                if (upRes.ok) {
                    const upData = await upRes.json();
                    attachment_url = upData.url;
                }
            }

            const res = await fetch(`${API_URL}/documents/process`, { 
                method: 'POST', 
                headers: { 'Content-Type': 'application/json' }, 
                body: JSON.stringify({
                    ...formData, 
                    doc_type: docType, 
                    attachment_url,
                    date: new Date().toISOString(),
                    created_by: 1,
                    lines: formData.lines.map(l => ({
                        ...l,
                        total_sale: l.unit_sale ? l.qty * l.unit_sale : 0
                    }))
                }) 
            });
            if (!res.ok) { const er = await res.json(); throw new Error(er.error); }
            alert(correctingDocId ? "✅ Registro corregido con éxito (anterior anulado)." : "✅ Movimiento procesado con éxito."); 
            
            setFormData({ document_number:'', warehouse_from_id:null, warehouse_to_id:null, lines:[{ product_id:0, qty:0, unit_cost:0, unit_sale: 0, lot: '' }] }); 
            setAttachment(null);
            setCorrectingDocId(null);
            await onRefresh();
            fetchHistory();
            fetchNextNumber(docType);
        } catch (err:any) { alert("❌ Error: " + err.message); }
    };

    const handleVoid = async (id: number) => {
        if (!confirm("¿Seguro que desea ANULAR este registro? Esto revertirá el stock.")) return;
        try {
            const res = await fetch(`${API_URL}/documents/${id}`, { method: 'DELETE' });
            if (!res.ok) throw new Error("Error al anular");
            alert("✅ Registro anulado.");
            fetchHistory();
            onRefresh();
        } catch (e: any) { alert(e.message); }
    };

    const handleEdit = (doc: any) => {
        setDocType(doc.doc_type);
        setFormData({
            document_number: doc.document_number + " (CORRIGIERDO)",
            warehouse_from_id: doc.warehouse_from_id,
            warehouse_to_id: doc.warehouse_to_id,
            lines: doc.lines.map((l: any) => ({
                product_id: l.product_id,
                qty: l.qty,
                unit_cost: l.unit_cost,
                unit_sale: l.unit_sale || 0,
                lot: l.lot
            }))
        });
        setCorrectingDocId(doc.id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Helper to get stats for a specific lot or FIFO lot
    const getProductStats = (p: any, lot?: string) => {
        if (!formData.warehouse_from_id || !p.balances) return { qty: 0, cost: 0, lot: '' };
        
        let bal;
        if (lot) {
            bal = p.balances.find((b: any) => 
                Number(b.warehouse_id) === Number(formData.warehouse_from_id) && b.lot === lot
            );
        } else {
            // FIFO: Oldest lot with stock
            const lots = [...p.balances]
                .filter((b: any) => Number(b.warehouse_id) === Number(formData.warehouse_from_id) && b.qty_on_hand > 0)
                .sort((a, b) => new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime());
            bal = lots[0];
        }

        return { 
            qty: bal ? Number(bal.qty_on_hand) : 0, 
            cost: bal ? Number(bal.avg_cost) : 0,
            lot: bal ? bal.lot : ''
        };
    };

    const activeWFrom = useMemo(() => {
        return docType === 'IN' 
            ? warehouses.filter((w:any) => w.active)
            : warehouses.filter((w:any) => w.active && w.balances?.some((b:any) => b.qty_on_hand > 0));
    }, [docType, warehouses]);

    const availableProds = useMemo(() => {
        if (docType === 'IN' || !formData.warehouse_from_id) return products;
        return products.filter((p: any) => 
            p.balances?.some((b:any) => Number(b.warehouse_id) === Number(formData.warehouse_from_id) && b.qty_on_hand > 0)
        );
    }, [docType, formData.warehouse_from_id, products]);

    const fromWarehouseName = warehouses.find(w => Number(w.id) === Number(formData.warehouse_from_id))?.name || 'Origen';

    return (
        <div className="view">
            <div className="header">
                <h1>Control de Movimientos</h1>
                <button className="btn btn-outline" onClick={async () => { await onRefresh(); fetchNextNumber(docType); }} style={{fontSize:'0.8rem'}}>🔄 Sincronizar Datos</button>
            </div>
            <div style={{display:'flex', gap:'1rem', marginBottom:'2rem'}}>
                {['IN','OUT','TR','AJ'].map(t => (
                    <button key={t} className={`btn ${docType===t?'btn-primary':'btn-outline'}`} onClick={()=>{
                        setDocType(t);
                        setFormData({...formData, warehouse_from_id: null, warehouse_to_id: null, lines:[{product_id:0,qty:0,unit_cost:0, lot: ''}]});
                    }}>{t === 'IN' ? 'Entrada' : t === 'OUT' ? 'Salida' : t === 'TR' ? 'Traslado' : 'Ajuste'}</button>
                ))}
            </div>
            
            <form onSubmit={handleSubmit}>
                <div className="glass-card" style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'1.5rem', marginBottom:'1.5rem'}}>
                    <div style={{position:'relative'}}>
                        <input className="glass-card" placeholder="N° Documento" value={formData.document_number} onChange={e=>setFormData({...formData, document_number:e.target.value})} required readOnly={loadingNum} style={{backgroundColor: loadingNum ? 'rgba(255,255,255,0.05)' : ''}} />
                        {loadingNum && <small style={{position:'absolute', bottom:'-15px', left:0, fontSize:'9px', color:'var(--primary)'}}>Generando...</small>}
                    </div>

                    {docType==='OUT' && (
                        <div>
                            <label style={{fontSize:'0.7rem', display:'block', marginBottom:'2px'}}>Cerrar con Comprobante (Opcional):</label>
                            <input type="file" className="glass-card" onChange={e => setAttachment(e.target.files?.[0] || null)} style={{padding:'5px', fontSize:'0.75rem'}} />
                        </div>
                    )}
                    
                    {docType!=='IN' && (
                        <select className="glass-card" value={formData.warehouse_from_id||''} onChange={e=>setFormData({...formData, warehouse_from_id:parseInt(e.target.value), lines:[{product_id:0,qty:0,unit_cost:0, lot: ''}]})} required>
                            <option value="">Bodega Origen (Con Existencias)</option>
                            {activeWFrom.map((w:any)=><option key={w.id} value={w.id}>{w.name}</option>)}
                        </select>
                    )}
                    
                    {docType!=='OUT' && (
                        <select className="glass-card" value={formData.warehouse_to_id||''} onChange={e=>setFormData({...formData, warehouse_to_id:parseInt(e.target.value)})} required>
                            <option value="">Bodega Destino</option>
                            {warehouses.filter((w:any)=>w.active).map((w:any)=><option key={w.id} value={w.id}>{w.name}</option>)}
                        </select>
                    )}
                </div>

                <div className="glass-card">
                    <h3>Detalle de Items</h3>
                    {formData.lines.map((ln, idx) => {
                        const selectedProd = products.find((p: any) => Number(p.id) === Number(ln.product_id));
                        const stats = selectedProd ? getProductStats(selectedProd, ln.lot) : { qty: 0, cost: 0, lot: '' };

                        return (
                            <div key={idx} style={{display:'grid', gridTemplateColumns:'1.5fr 0.8fr 0.8fr 1fr 0.4fr', gap:'0.8rem', marginBottom:'1.5rem', borderBottom:'1px solid rgba(255,255,255,0.05)', paddingBottom:'1rem'}}>
                                <select value={ln.product_id||''} onChange={e=>{
                                    const pid = Number(e.target.value);
                                    const prod = products.find((p: any) => Number(p.id) === pid);
                                    const pStats = prod ? getProductStats(prod) : { qty: 0, cost: 0, lot: '' };
                                    
                                    const nl = [...formData.lines];
                                    nl[idx].product_id = pid;
                                    nl[idx].unit_cost = docType === 'IN' ? 0 : pStats.cost;
                                    nl[idx].lot = docType === 'IN' ? '' : pStats.lot;
                                    setFormData({...formData, lines:nl});
                                }} required>
                                    <option value="">Producto...</option>
                                    {availableProds.map((p: any) => (
                                        <option key={p.id} value={p.id}>
                                            {p.name} [{p.sku}] - {p.presentation_g}g | {p.type === 'GRANO' ? 'Grano' : 'Molido'}
                                        </option>
                                    ))}
                                </select>

                                <div style={{position:'relative'}}>
                                    <input placeholder="Lote" value={ln.lot} onChange={e=>{const nl=[...formData.lines]; nl[idx].lot=e.target.value; setFormData({...formData, lines:nl})}} required readOnly={docType!=='IN'} style={{background: docType!=='IN'?'rgba(255,255,255,0.05)':''}} />
                                    {docType!=='IN' && <small style={{position:'absolute', bottom:'-18px', left:0, fontSize:'9px', color:'var(--primary)'}}>Auto-FIFO</small>}
                                </div>
                                
                                <div style={{position:'relative'}}>
                                    <input type="number" step="any" placeholder="Cantidad" value={ln.qty||''} onChange={e=>{const nl=[...formData.lines]; nl[idx].qty=parseFloat(e.target.value); setFormData({...formData, lines:nl})}} required min="0.01" />
                                    {docType!=='IN' && formData.warehouse_from_id && (
                                        <small style={{position:'absolute', bottom:'-18px', left:0, fontSize:'9px', color:Number(ln.qty)>stats.qty?'var(--danger)':'var(--success)', whiteSpace:'nowrap'}}>
                                            Stock: <strong>{stats.qty}</strong>
                                        </small>
                                    )}
                                </div>
                                
                                <div style={{position:'relative'}}>
                                    <input type="number" step="any" placeholder="Costo Unitario" value={ln.unit_cost||''} onChange={e=>{const nl=[...formData.lines]; nl[idx].unit_cost=parseFloat(e.target.value); setFormData({...formData, lines:nl})}} required={docType==='IN'} readOnly={docType!=='IN'} />
                                    {docType!=='IN' && <small style={{position:'absolute', bottom:'-18px', left:0, fontSize:'9px', color:'var(--primary)'}}>Promedio: {new Intl.NumberFormat('es-CO').format(stats.cost)}</small>}
                                </div>
                                
                                {docType==='OUT' && (
                                    <div style={{position:'relative'}}>
                                        <input type="number" step="any" placeholder="Precio Venta" value={ln.unit_sale||''} onChange={e=>{const nl=[...formData.lines]; nl[idx].unit_sale=parseFloat(e.target.value); setFormData({...formData, lines:nl})}} required />
                                        <small style={{position:'absolute', bottom:'-18px', left:0, fontSize:'9px', color:'var(--success)'}}>Margen: {ln.unit_sale ? (((ln.unit_sale-ln.unit_cost)/ln.unit_sale)*100).toFixed(1)+'%' : '0%'}</small>
                                    </div>
                                )}
                                
                                <button type="button" className="btn btn-outline" style={{borderColor:'var(--danger)', color:'var(--danger)', height:'42px', padding:'0'}} onClick={()=>setFormData({...formData, lines:formData.lines.filter((_,i)=>i!==idx)})}>✕</button>
                            </div>
                        );
                    })}
                    <button type="button" className="btn btn-outline" style={{width:'100%', borderStyle:'dashed', padding:'0.5rem'}} onClick={()=>setFormData({...formData, lines:[...formData.lines, {product_id:0, qty:0, unit_cost:0, unit_sale: 0, lot: ''}]})}>+ Item</button>
                </div>
                <button type="submit" className="btn btn-primary" style={{marginTop:'2rem', width:'100%', padding:'1.2rem', fontSize:'1.1rem', fontWeight:600}}>
                    {correctingDocId ? 'GUARDAR CORRECCIÓN' : 'PROCESAR MOVIMIENTO'}
                </button>
                {correctingDocId && (
                    <button type="button" className="btn btn-outline" style={{width:'100%', marginTop:'0.5rem'}} onClick={() => {
                        setCorrectingDocId(null);
                        setFormData({ document_number:'', warehouse_from_id:null, warehouse_to_id:null, lines:[{ product_id:0, qty:0, unit_cost:0, lot: '' }] });
                        fetchNextNumber(docType);
                    }}>CANCELAR EDICIÓN</button>
                )}
            </form>

            <div style={{marginTop:'3rem'}}>
                <h2 style={{color:'var(--primary)', marginBottom:'1rem'}}>Movimientos Recientes</h2>
                <div className="glass-card" style={{padding:'0'}}>
                    <table>
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>Número</th>
                                <th>Tipo</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {history.slice(0, 10).map((doc: any) => (
                                <tr key={doc.id}>
                                    <td>{new Date(doc.date).toLocaleDateString()}</td>
                                    <td style={{fontWeight:600}}>{doc.document_number}</td>
                                    <td>{doc.doc_type === 'IN' ? 'Entrada' : doc.doc_type === 'OUT' ? 'Salida' : doc.doc_type === 'TR' ? 'Traslado' : 'Ajuste'}</td>
                                    <td>
                                        <span className={`badge ${doc.status === 'APPLIED' ? 'badge-in' : 'badge-out'}`} style={{opacity: doc.status === 'CANCELLED' ? 0.5 : 1}}>
                                            {doc.status === 'APPLIED' ? 'Aplicado' : doc.status === 'CANCELLED' ? 'Anulado' : doc.status}
                                        </span>
                                    </td>
                                    <td>
                                        <div style={{display:'flex', gap:'8px'}}>
                                            {doc.status !== 'CANCELLED' && (
                                                <>
                                                    <button className="btn btn-outline" style={{padding:'4px 10px', fontSize:'0.75rem'}} onClick={() => handleEdit(doc)}>Corregir</button>
                                                    <button className="btn btn-outline" style={{padding:'4px 10px', fontSize:'0.75rem', color:'var(--danger)', borderColor:'var(--danger)'}} onClick={() => handleVoid(doc.id)}>Anular</button>
                                                </>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

const ProductDetailModal = ({ productId, onClose }: any) => {
    const [p, setP] = useState<any>(null);
    useEffect(() => { 
        if(productId) fetch(`${API_URL}/products/${productId}`).then(r=>r.json()).then(setP); 
    }, [productId]);

    if(!productId || !p) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content glass-card" onClick={e=>e.stopPropagation()} style={{maxWidth:'900px', width:'90%', maxHeight:'90vh', overflowY:'auto'}}>
                <div className="header" style={{borderBottom:'1px solid rgba(255,255,255,0.1)', paddingBottom:'1rem'}}>
                    <div>
                        <h2 style={{color:'var(--primary)'}}>{p.name}</h2>
                        <small style={{color:'var(--text-muted)'}}>{p.sku} | {p.presentation_g}g {p.type === 'GRANO' ? 'Grano' : 'Molido'}</small>
                    </div>
                    <button className="btn btn-outline" onClick={onClose}>✕</button>
                </div>

                <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1.5rem', marginTop:'1.5rem'}}>
                    <div className="glass-card" style={{background:'rgba(0,0,0,0.2)'}}>
                        <h4 style={{marginBottom:'1rem', color:'var(--primary)'}}>Saldos Actuales por Bodega</h4>
                        <table>
                            <thead><tr><th>Bodega</th><th>Stock</th><th>Valor Total</th></tr></thead>
                            <tbody>
                                {p.balances?.map((b:any)=>(
                                    <tr key={b.warehouse_id}>
                                        <td><div style={{display:'flex', alignItems:'center', gap:'8px'}}><div style={{width:'8px', height:'8px', borderRadius:'50%', background:b.warehouse?.color}} />{b.warehouse?.name}</div></td>
                                        <td style={{fontWeight:600}}>{b.qty_on_hand} unidades</td>
                                        <td>{new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(b.value_total)}</td>
                                    </tr>
                                ))}
                                {(!p.balances || p.balances.length === 0) && <tr><td colSpan={3} style={{textAlign:'center', opacity:0.5}}>Sin existencias registradas</td></tr>}
                            </tbody>
                        </table>
                    </div>
                    
                    <div className="glass-card" style={{background:'rgba(0,0,0,0.2)'}}>
                        <h4 style={{marginBottom:'1rem', color:'var(--primary)'}}>Resumen de Costos</h4>
                        <div style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
                            <div style={{display:'flex', justifyContent:'space-between'}}><span>Costo Promedio (Global)</span><strong style={{color:'var(--primary)'}}>{new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(p.balances?.[0]?.avg_cost || 0)}</strong></div>
                            <div style={{display:'flex', justifyContent:'space-between'}}><span>Último Movimiento</span><span>{p.ledger?.[0] ? new Date(p.ledger[0].timestamp).toLocaleDateString() : 'N/A'}</span></div>
                        </div>
                    </div>
                </div>

                <div style={{marginTop:'1.5rem'}}>
                    <h4 style={{marginBottom:'1rem', color:'var(--primary)'}}>Historial de Movimientos (Kardex)</h4>
                    <div className="glass-card" style={{padding:'0', background:'rgba(0,0,0,0.1)'}}>
                        <table>
                            <thead><tr><th>Fecha</th><th>Tipo</th><th>Bodega</th><th>Cant.</th><th>N° Doc</th></tr></thead>
                            <tbody>
                                {p.ledger?.map((l:any)=>(
                                    <tr key={l.id}>
                                        <td>{new Date(l.timestamp).toLocaleString()}</td>
                                        <td><span className={`badge ${l.direction === 'IN' ? 'badge-in' : 'badge-out'}`}>{l.direction === 'IN' ? 'Entrada' : 'Salida'}</span></td>
                                        <td>{l.warehouse?.name}</td>
                                        <td style={{fontWeight:600, color: l.direction === 'IN' ? 'var(--success)' : 'var(--danger)'}}>{l.direction === 'IN' ? '+' : '-'}{l.qty_change} unidades</td>
                                        <td><small style={{opacity:0.6}}>{l.document?.document_number || 'Ajuste Manual'}</small></td>
                                    </tr>
                                ))}
                                {(!p.ledger || p.ledger.length === 0) && <tr><td colSpan={5} style={{textAlign:'center', opacity:0.5}}>No hay movimientos registrados</td></tr>}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SalesReport = ({ onProductClick }: any) => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('');

    const fetchReport = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${API_URL}/documents/report/outputs`);
            if (res.ok) setData(await res.json());
        } catch (e) { console.error(e); }
        setLoading(false);
    };

    useEffect(() => { fetchReport(); }, []);

    const flattenedLines = useMemo(() => {
        const lines: any[] = [];
        data.forEach(doc => {
            doc.lines.forEach((line: any) => {
                lines.push({
                    id: line.id,
                    date: doc.date,
                    doc_number: doc.document_number,
                    warehouse: doc.warehouse_from?.name || 'N/A',
                    product_id: line.product_id,
                    product_name: line.product?.name,
                    product_sku: line.product?.sku,
                    qty: line.qty,
                    unit_cost: line.unit_cost,
                    total_cost: line.total_cost
                });
            });
        });
        return lines.filter(l => 
            l.product_name?.toLowerCase().includes(filter.toLowerCase()) || 
            l.product_sku?.toLowerCase().includes(filter.toLowerCase()) ||
            l.doc_number?.toLowerCase().includes(filter.toLowerCase())
        );
    }, [data, filter]);

    const totals = useMemo(() => {
        return flattenedLines.reduce((acc, curr) => ({
            qty: acc.qty + curr.qty,
            value: acc.value + (curr.total_cost || 0)
        }), { qty: 0, value: 0 });
    }, [flattenedLines]);

    return (
        <div className="view">
            <div className="header">
                <h1>Reporte Detallado de Salidas</h1>
                <button className="btn btn-outline" onClick={fetchReport}>🔄 Actualizar</button>
            </div>

            <div className="glass-card" style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                    <input 
                        placeholder="Buscar por producto, SKU o documento..." 
                        value={filter} 
                        onChange={e => setFilter(e.target.value)}
                        style={{ width: '100%', marginBottom: 0 }}
                    />
                </div>
                <div style={{ display: 'flex', gap: '2rem' }}>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Total Unidades</div>
                        <div style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--primary)' }}>{totals.qty.toLocaleString()}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Valor Total (Costo)</div>
                        <div style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--primary)' }}>
                            {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(totals.value)}
                        </div>
                    </div>
                </div>
            </div>

            <div className="glass-card" style={{ padding: 0 }}>
                {loading ? (
                    <div style={{ padding: '2rem', textAlign: 'center', opacity: 0.5 }}>Cargando datos...</div>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>N° Documento</th>
                                <th>Bodega Origen</th>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Costo Unit.</th>
                                <th>Total Costo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {flattenedLines.map(l => (
                                <tr key={l.id} onClick={() => onProductClick(l.product_id)} style={{ cursor: 'pointer' }}>
                                    <td>{new Date(l.date).toLocaleDateString()}</td>
                                    <td><small style={{ opacity: 0.7 }}>{l.doc_number}</small></td>
                                    <td>{l.warehouse}</td>
                                    <td>
                                        <div style={{ fontWeight: 600 }}>{l.product_name}</div>
                                        <div style={{ fontSize: '0.7rem', opacity: 0.6 }}>{l.product_sku}</div>
                                    </td>
                                    <td style={{ fontWeight: 600, color: 'var(--danger)' }}>-{l.qty}</td>
                                    <td>{new Intl.NumberFormat('es-CO').format(l.unit_cost)}</td>
                                    <td style={{ fontWeight: 600 }}>{new Intl.NumberFormat('es-CO').format(l.total_cost)}</td>
                                </tr>
                            ))}
                            {flattenedLines.length === 0 && (
                                <tr>
                                    <td colSpan={7} style={{ textAlign: 'center', padding: '2rem', opacity: 0.5 }}>
                                        No se encontraron movimientos de salida.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [products, setProducts] = useState([]);
  const [warehouses, setWarehouses] = useState([]);
  const [selId, setSelId] = useState<number | null>(null);
  const [selWhId, setSelWhId] = useState<number | null>(null);

  const fetchData = async () => {
    try {
        const pr = await fetch(`${API_URL}/products`);
        const wr = await fetch(`${API_URL}/warehouses`);
        setProducts(await pr.json());
        setWarehouses(await wr.json());
    } catch (e) { console.error(e); }
  };

  useEffect(() => { fetchData(); }, []);

  return (
    <div style={{ display: 'contents' }}>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="main-content">
        {activeTab === 'dashboard' && <Dashboard products={products} warehouses={warehouses} onProductClick={setSelId} onWarehouseClick={setSelWhId} />}
        {activeTab === 'products' && <ProductManager products={products} onRefresh={fetchData} onProductClick={setSelId} />}
        {activeTab === 'transactions' && <TransactionEngine products={products} warehouses={warehouses} onRefresh={fetchData} />}
        {activeTab === 'warehouses' && <WarehouseManager warehouses={warehouses} onRefresh={fetchData} />}
        {activeTab === 'reports' && <SalesReport onProductClick={setSelId} />}
      </main>
      {selId && <ProductDetailModal productId={selId} onClose={() => setSelId(null)} />}
      {selWhId && <WarehouseInventoryModal warehouseId={selWhId} warehouses={warehouses} products={products} onClose={() => setSelWhId(null)} onProductClick={setSelId} />}
    </div>
  );
}
