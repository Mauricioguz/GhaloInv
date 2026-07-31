import React, { useState, useEffect, useMemo } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

const Sidebar = ({ activeTab, setActiveTab, onResetClick }: { activeTab: string, setActiveTab: (t: string) => void, onResetClick: () => void }) => (
  <aside className="sidebar">
    <div className="logo"><span style={{ fontSize: '1.8rem' }}>☕</span> GHALOCAFE</div>
    <nav className="nav-links" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '1.5rem' }}>
      <a href="#" className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('dashboard')}>📊 Dashboard</a>
      <a href="#" className={`nav-item ${activeTab === 'products' ? 'active' : ''}`} onClick={() => setActiveTab('products')}>📦 Productos</a>
      <a href="#" className={`nav-item ${activeTab === 'warehouses' ? 'active' : ''}`} onClick={() => setActiveTab('warehouses')}>🏠 Bodegas</a>
      <a href="#" className={`nav-item ${activeTab === 'sellers' ? 'active' : ''}`} onClick={() => setActiveTab('sellers')}>👤 Vendedores</a>
      <a href="#" className={`nav-item ${activeTab === 'transactions' ? 'active' : ''}`} onClick={() => setActiveTab('transactions')}>🔄 Transacciones</a>
      <a href="#" className={`nav-item ${activeTab === 'reports' ? 'active' : ''}`} onClick={() => setActiveTab('reports')}>📑 Reportes</a>
      <a href="#" className={`nav-item ${activeTab === 'bi' ? 'active' : ''}`} onClick={() => setActiveTab('bi')}>📈 Inteligencia BI</a>
    </nav>
    <div className="sidebar-footer" style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <button className="btn btn-outline" style={{ width: '100%', borderColor: 'var(--danger)', color: 'var(--danger)', padding: '8px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }} onClick={onResetClick}>
        ⚠️ Reiniciar Datos
      </button>
    </div>
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
                                <th>Lote</th>
                                <th>Existencia</th>
                                <th>Costo Promedio</th>
                                <th>Valor Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {inventory.map((item: any) => (
                                <tr key={item.id} onClick={() => onProductClick(item.product_id)} style={{ cursor: 'pointer' }}>
                                    <td style={{ fontWeight: 600 }}>{item.product?.name}</td>
                                    <td><span className="badge" style={{ background: 'rgba(255,255,255,0.05)' }}>{item.product?.type === 'GRANO' ? 'Grano' : 'Molido'}</span></td>
                                    <td>{item.product?.presentation_g}g</td>
                                    <td><span className="badge" style={{ background: 'rgba(198, 160, 82, 0.15)', color: '#c6a052', border: '1px solid rgba(198, 160, 82, 0.3)' }}>{item.lot || 'SIN-LOTE'}</span></td>
                                    <td style={{ fontWeight: 700, color: 'var(--primary)' }}>{item.qty_on_hand} ud</td>
                                    <td>{new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(item.avg_cost || 0)}</td>
                                    <td>{new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(item.value_total || 0)}</td>
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

const TransactionEngine = ({ products, warehouses, sellers = [], onRefresh }: any) => {
    const [docType, setDocType] = useState('IN');
    const [formData, setFormData] = useState({ 
        document_number: '', 
        warehouse_from_id: null as number | null, 
        warehouse_to_id: null as number | null, 
        seller_id: null as number | null,
        lines: [{ product_id: 0, qty: 0, unit_cost: 0, unit_sale: 0, lot: '' }] 
    });
    const [attachment, setAttachment] = useState<File | null>(null);
    const [loadingNum, setLoadingNum] = useState(false);
    const [correctingDocId, setCorrectingDocId] = useState<number | null>(null);
    const [history, setHistory] = useState<any[]>([]);
    const [filterWarehouseId, setFilterWarehouseId] = useState<number | string>('');
    const [filterSellerId, setFilterSellerId] = useState<number | string>('');

    const filteredHistory = useMemo(() => {
        return history.filter((doc: any) => {
            if (filterWarehouseId !== '') {
                const whId = Number(filterWarehouseId);
                const matchFrom = Number(doc.warehouse_from_id) === whId;
                const matchTo = Number(doc.warehouse_to_id) === whId;
                if (!matchFrom && !matchTo) return false;
            }
            if (filterSellerId !== '') {
                const selId = Number(filterSellerId);
                if (Number(doc.seller_id) !== selId) return false;
            }
            return true;
        });
    }, [history, filterWarehouseId, filterSellerId]);

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
            
            setFormData({ document_number:'', warehouse_from_id:null, warehouse_to_id:null, seller_id:null, lines:[{ product_id:0, qty:0, unit_cost:0, unit_sale: 0, lot: '' }] }); 
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
            seller_id: doc.seller_id,
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
                <div className="glass-card" style={{display:'grid', gridTemplateColumns: docType === 'OUT' ? 'repeat(4, 1fr)' : 'repeat(3, 1fr)', gap:'1.5rem', marginBottom:'1.5rem'}}>
                    <div style={{position:'relative'}}>
                        <input className="glass-card" placeholder="N° Documento" value={formData.document_number} onChange={e=>setFormData({...formData, document_number:e.target.value})} required readOnly={loadingNum} style={{backgroundColor: loadingNum ? 'rgba(255,255,255,0.05)' : ''}} />
                        {loadingNum && <small style={{position:'absolute', bottom:'-15px', left:0, fontSize:'9px', color:'var(--primary)'}}>Generando...</small>}
                    </div>

                    {docType!=='IN' && (
                        <select className="glass-card" value={formData.warehouse_from_id||''} onChange={e=>setFormData({...formData, warehouse_from_id:parseInt(e.target.value), seller_id: null, lines:[{product_id:0,qty:0,unit_cost:0, lot: ''}]})} required>
                            <option value="">Bodega Origen (Con Existencias)</option>
                            {activeWFrom.map((w:any)=><option key={w.id} value={w.id}>{w.name}</option>)}
                        </select>
                    )}

                    {docType==='OUT' && (
                        <select className="glass-card" value={formData.seller_id||''} onChange={e=>setFormData({...formData, seller_id:parseInt(e.target.value)})} required>
                            <option value="">Vendedor...</option>
                            {sellers.filter((s:any) => s.active && Number(s.warehouse_id) === Number(formData.warehouse_from_id)).map((s:any)=>(
                                <option key={s.id} value={s.id}>{s.name} [{s.code}]</option>
                            ))}
                        </select>
                    )}
                    
                    {docType!=='OUT' && (
                        <select className="glass-card" value={formData.warehouse_to_id||''} onChange={e=>setFormData({...formData, warehouse_to_id:parseInt(e.target.value)})} required>
                            <option value="">Bodega Destino</option>
                            {warehouses.filter((w:any)=>w.active).map((w:any)=><option key={w.id} value={w.id}>{w.name}</option>)}
                        </select>
                    )}

                    {docType==='OUT' && (
                        <div>
                            <input type="file" className="glass-card" onChange={e => setAttachment(e.target.files?.[0] || null)} style={{padding:'7px 10px', fontSize:'0.75rem', width: '100%', boxSizing: 'border-box'}} />
                        </div>
                    )}
                </div>

                <div className="glass-card">
                    <h3>Detalle de Items</h3>
                    {formData.lines.map((ln, idx) => {
                        const selectedProd = products.find((p: any) => Number(p.id) === Number(ln.product_id));
                        const stats = selectedProd ? getProductStats(selectedProd, ln.lot) : { qty: 0, cost: 0, lot: '' };
                        const productBalances = selectedProd ? (selectedProd.balances || []).filter(
                            (b: any) => Number(b.warehouse_id) === Number(formData.warehouse_from_id) && (b.qty_on_hand > 0 || (ln.lot && b.lot === ln.lot))
                        ) : [];

                        return (
                            <div key={idx} style={{display:'grid', gridTemplateColumns:'1.5fr 1fr 0.8fr 1fr 0.4fr', gap:'0.8rem', marginBottom:'1.5rem', borderBottom:'1px solid rgba(255,255,255,0.05)', paddingBottom:'1rem'}}>
                                <select value={ln.product_id||''} onChange={e=>{
                                    const pid = Number(e.target.value);
                                    const prod = products.find((p: any) => Number(p.id) === pid);
                                    const prodBalances = prod ? (prod.balances || []).filter(
                                        (b: any) => Number(b.warehouse_id) === Number(formData.warehouse_from_id) && b.qty_on_hand > 0
                                    ) : [];
                                    const defaultLot = prodBalances[0] ? prodBalances[0].lot : '';
                                    const defaultCost = prodBalances[0] ? prodBalances[0].avg_cost : 0;
                                    
                                    const nl = [...formData.lines];
                                    nl[idx].product_id = pid;
                                    nl[idx].unit_cost = docType === 'IN' ? 0 : defaultCost;
                                    nl[idx].lot = docType === 'IN' ? '' : defaultLot;
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
                                    {docType === 'IN' ? (
                                        <input placeholder="Lote" value={ln.lot} onChange={e=>{const nl=[...formData.lines]; nl[idx].lot=e.target.value; setFormData({...formData, lines:nl})}} required />
                                    ) : (
                                        <select value={ln.lot} onChange={e=>{
                                            const selectedLot = e.target.value;
                                            const lotBal = productBalances.find((b: any) => b.lot === selectedLot);
                                            const nl = [...formData.lines];
                                            nl[idx].lot = selectedLot;
                                            nl[idx].unit_cost = lotBal ? lotBal.avg_cost : 0;
                                            setFormData({...formData, lines:nl});
                                        }} required style={{ width: '100%' }}>
                                            <option value="">Lote...</option>
                                            {productBalances.map((b: any) => (
                                                <option key={b.id} value={b.lot}>
                                                    {b.lot} ({b.qty_on_hand} ud)
                                                </option>
                                            ))}
                                            {ln.lot && !productBalances.some((b: any) => b.lot === ln.lot) && (
                                                <option value={ln.lot}>{ln.lot} (0 ud)</option>
                                            )}
                                        </select>
                                    )}
                                    {docType!=='IN' && <small style={{position:'absolute', bottom:'-18px', left:0, fontSize:'9px', color:'var(--primary)'}}>Selección Manual</small>}
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
                        setFormData({ document_number:'', warehouse_from_id:null, warehouse_to_id:null, seller_id:null, lines:[{ product_id:0, qty:0, unit_cost:0, lot: '' }] });
                        fetchNextNumber(docType);
                    }}>CANCELAR EDICIÓN</button>
                )}
            </form>

            <div style={{marginTop:'3rem'}}>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'1rem', marginBottom:'1.2rem'}}>
                    <h2 style={{color:'var(--primary)', margin:0}}>Movimientos Recientes</h2>
                    <div style={{display:'flex', gap:'12px', flexWrap:'wrap', alignItems:'center'}}>
                        <select 
                            value={filterWarehouseId} 
                            onChange={e => setFilterWarehouseId(e.target.value)} 
                            style={{width:'auto', padding:'6px 12px', fontSize:'0.8rem', marginBottom:0}}
                        >
                            <option value="">Todas las Bodegas</option>
                            {warehouses.map((w: any) => (
                                <option key={w.id} value={w.id}>{w.name}</option>
                            ))}
                        </select>
                        <select 
                            value={filterSellerId} 
                            onChange={e => setFilterSellerId(e.target.value)} 
                            style={{width:'auto', padding:'6px 12px', fontSize:'0.8rem', marginBottom:0}}
                        >
                            <option value="">Todos los Vendedores</option>
                            {sellers.map((s: any) => (
                                <option key={s.id} value={s.id}>{s.name} [{s.code}]</option>
                            ))}
                        </select>
                        {(filterWarehouseId !== '' || filterSellerId !== '') && (
                            <button 
                                className="btn btn-outline" 
                                style={{padding:'6px 12px', fontSize:'0.75rem'}} 
                                onClick={() => { setFilterWarehouseId(''); setFilterSellerId(''); }}
                            >
                                Limpiar Filtros
                            </button>
                        )}
                    </div>
                </div>
                <div className="glass-card" style={{padding:'0', maxHeight:'450px', overflowY:'auto', border:'1px solid rgba(255,255,255,0.05)'}}>
                    <table style={{width:'100%', borderCollapse:'collapse'}}>
                        <thead style={{position:'sticky', top:0, background:'var(--bg-card)', zIndex:1, boxShadow:'0 1px 0 rgba(255,255,255,0.1)'}}>
                            <tr>
                                <th>Fecha</th>
                                <th>Número</th>
                                <th>Tipo</th>
                                <th>Bodega(s)</th>
                                <th>Producto(s)</th>
                                <th>Vendedor</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredHistory.slice(0, 50).map((doc: any) => (
                                <tr key={doc.id}>
                                    <td>{new Date(doc.date).toLocaleDateString()}</td>
                                    <td style={{fontWeight:600}}>{doc.document_number}</td>
                                    <td>
                                        <span className={`badge ${
                                            doc.doc_type === 'IN' ? 'badge-in' : 
                                            doc.doc_type === 'OUT' ? 'badge-out' : 
                                            doc.doc_type === 'TR' ? 'badge-tr' : 'badge-aj'
                                        }`} style={{padding:'2px 6px', fontSize:'0.75rem'}}>
                                            {doc.doc_type === 'IN' ? 'Entrada' : doc.doc_type === 'OUT' ? 'Salida' : doc.doc_type === 'TR' ? 'Traslado' : 'Ajuste'}
                                        </span>
                                    </td>
                                    <td style={{fontSize:'0.8rem'}}>
                                        {doc.doc_type === 'IN' && (
                                            <span style={{color:'rgba(46, 204, 113, 0.9)'}}>📥 {doc.warehouse_to?.name || 'N/A'}</span>
                                        )}
                                        {doc.doc_type === 'OUT' && (
                                            <span style={{color:'rgba(241, 196, 15, 0.9)'}}>📤 {doc.warehouse_from?.name || 'N/A'}</span>
                                        )}
                                        {doc.doc_type === 'TR' && (
                                            <span style={{color:'rgba(52, 152, 219, 0.9)'}}>
                                                🔄 {doc.warehouse_from?.name || 'N/A'} ➜ {doc.warehouse_to?.name || 'N/A'}
                                            </span>
                                        )}
                                        {doc.doc_type === 'AJ' && (
                                            <span style={{color:'rgba(231, 76, 60, 0.9)'}}>⚙️ {doc.warehouse_from?.name || doc.warehouse_to?.name || 'N/A'}</span>
                                        )}
                                    </td>
                                    <td style={{fontSize:'0.8rem', minWidth:'200px', maxWidth:'300px'}}>
                                        {doc.lines?.map((line: any, idx: number) => (
                                            <div key={line.id || idx} style={{display:'flex', justifyContent:'space-between', gap:'12px', marginBottom: idx < doc.lines.length - 1 ? '4px' : 0}}>
                                                <span style={{overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}} title={line.product?.name}>
                                                    • {line.product?.name || 'N/A'}
                                                </span>
                                                <span style={{fontWeight:600, color:'var(--primary)', whiteSpace:'nowrap', fontSize:'0.75rem'}}>
                                                    x{line.qty} {line.lot ? `[${line.lot}]` : ''}
                                                </span>
                                            </div>
                                        ))}
                                    </td>
                                    <td style={{fontSize:'0.8rem', fontWeight:500}}>
                                        {doc.seller ? doc.seller.name : <span style={{opacity:0.4}}>-</span>}
                                    </td>
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

                <div style={{display:'grid', gridTemplateColumns:'1.4fr 0.8fr', gap:'1.5rem', marginTop:'1.5rem'}}>
                    <div className="glass-card" style={{background:'rgba(0,0,0,0.2)'}}>
                        <h4 style={{marginBottom:'1rem', color:'var(--primary)'}}>Saldos Actuales por Bodega y Lote</h4>
                        <table>
                            <thead><tr><th>Bodega</th><th>Lote</th><th>Stock</th><th>Valor Total</th></tr></thead>
                            <tbody>
                                {p.balances?.map((b:any)=>(
                                    <tr key={b.id}>
                                        <td><div style={{display:'flex', alignItems:'center', gap:'8px'}}><div style={{width:'8px', height:'8px', borderRadius:'50%', background:b.warehouse?.color}} />{b.warehouse?.name}</div></td>
                                        <td><span className="badge" style={{ background: 'rgba(255,255,255,0.05)' }}>{b.lot || 'SIN-LOTE'}</span></td>
                                        <td style={{fontWeight:600}}>{b.qty_on_hand} unidades</td>
                                        <td>{new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(b.value_total)}</td>
                                    </tr>
                                ))}
                                {(!p.balances || p.balances.length === 0) && <tr><td colSpan={4} style={{textAlign:'center', opacity:0.5}}>Sin existencias registradas</td></tr>}
                            </tbody>
                        </table>
                    </div>
                    
                    <div className="glass-card" style={{background:'rgba(0,0,0,0.2)'}}>
                        <h4 style={{marginBottom:'1rem', color:'var(--primary)'}}>Resumen de Costos</h4>
                        <div style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
                            <div style={{display:'flex', justifyContent:'space-between'}}>
                                <span>Costo Promedio (Global)</span>
                                <strong style={{color:'var(--primary)'}}>
                                    {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(
                                        (() => {
                                            const totalQty = p.balances?.reduce((acc: number, b: any) => acc + b.qty_on_hand, 0) || 0;
                                            const totalVal = p.balances?.reduce((acc: number, b: any) => acc + b.value_total, 0) || 0;
                                            return totalQty > 0 ? totalVal / totalQty : 0;
                                        })()
                                    )}
                                </strong>
                            </div>
                            <div style={{display:'flex', justifyContent:'space-between'}}><span>Último Movimiento</span><span>{p.ledger?.[0] ? new Date(p.ledger[0].timestamp).toLocaleDateString() : 'N/A'}</span></div>
                        </div>
                    </div>
                </div>

                <div style={{marginTop:'1.5rem'}}>
                    <h4 style={{marginBottom:'1rem', color:'var(--primary)'}}>Historial de Movimientos (Kardex por Lote)</h4>
                    <div className="glass-card" style={{padding:'0', background:'rgba(0,0,0,0.1)'}}>
                        <table>
                            <thead><tr><th>Fecha</th><th>Tipo</th><th>Bodega</th><th>Lote</th><th>Cant.</th><th>Costo Unit.</th><th>N° Doc</th></tr></thead>
                            <tbody>
                                {p.ledger?.map((l:any)=>(
                                    <tr key={l.id}>
                                        <td>{new Date(l.timestamp).toLocaleString()}</td>
                                        <td><span className={`badge ${l.movement_type === 'IN' ? 'badge-in' : 'badge-out'}`}>{l.movement_type === 'IN' ? 'Entrada' : 'Salida'}</span></td>
                                        <td>{l.warehouse?.name || 'N/A'}</td>
                                        <td><span className="badge" style={{ background: 'rgba(255,255,255,0.05)' }}>{l.lot || 'SIN-LOTE'}</span></td>
                                        <td style={{fontWeight:600, color: l.movement_type === 'IN' ? 'var(--success)' : 'var(--danger)'}}>
                                            {l.movement_type === 'IN' ? '+' : '-'}{l.movement_type === 'IN' ? l.qty_in : l.qty_out} unidades
                                        </td>
                                        <td>{new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(l.unit_cost || 0)}</td>
                                        <td><small style={{opacity:0.6}}>{l.document?.document_number || 'Ajuste Manual'}</small></td>
                                    </tr>
                                ))}
                                {(!p.ledger || p.ledger.length === 0) && <tr><td colSpan={7} style={{textAlign:'center', opacity:0.5}}>No hay movimientos registrados</td></tr>}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SalesReport = ({ sellers = [], onProductClick }: any) => {
    const [data, setData] = useState<any[]>([]);
    const [commissionReport, setCommissionReport] = useState<any[]>([]);
    const [payoutsData, setPayoutsData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('');
    
    // Date Range Filters
    const [startDate, setStartDate] = useState(() => {
        const d = new Date();
        d.setDate(d.getDate() - 30); // Default to last 30 days
        return d.toISOString().split('T')[0];
    });
    const [endDate, setEndDate] = useState(() => new Date().toISOString().split('T')[0]);

    const fetchReport = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${API_URL}/documents/report/outputs`);
            if (res.ok) setData(await res.json());
            
            const resComm = await fetch(`${API_URL}/sellers/commissions/report`);
            if (resComm.ok) setCommissionReport(await resComm.json());

            const resPay = await fetch(`${API_URL}/sellers/payouts/all`);
            if (resPay.ok) setPayoutsData(await resPay.json());
        } catch (e) { console.error(e); }
        setLoading(false);
    };

    useEffect(() => { fetchReport(); }, []);

    // Filter documents by date range
    const filteredData = useMemo(() => {
        return data.filter(doc => {
            const docDate = doc.date.split('T')[0];
            return docDate >= startDate && docDate <= endDate;
        });
    }, [data, startDate, endDate]);

    // Filter payouts by date range
    const filteredPayouts = useMemo(() => {
        return payoutsData.filter(p => {
            const pDate = p.date.split('T')[0];
            return pDate >= startDate && pDate <= endDate;
        });
    }, [payoutsData, startDate, endDate]);

    // Historical earned commission per seller (All time)
    const historicalEarnedMap = useMemo(() => {
        const map: { [key: number]: number } = {};
        data.forEach(doc => {
            if (!doc.seller) return;
            const sId = doc.seller.id;
            const docSales = doc.lines.reduce((sum, line) => sum + (line.total_sale || 0), 0);
            const docCost = doc.lines.reduce((sum, line) => sum + (line.total_cost || 0), 0);
            const docUtility = docSales - docCost;
            const docCommission = docUtility > 0 ? docUtility * (doc.seller.commission_pct / 100) : 0;
            map[sId] = (map[sId] || 0) + docCommission;
        });
        return map;
    }, [data]);

    // Historical paid payouts per seller (All time)
    const historicalPaidMap = useMemo(() => {
        const map: { [key: number]: number } = {};
        payoutsData.forEach(p => {
            const sId = p.seller_id;
            map[sId] = (map[sId] || 0) + (p.amount || 0);
        });
        return map;
    }, [payoutsData]);

    const flattenedLines = useMemo(() => {
        const lines: any[] = [];
        filteredData.forEach(doc => {
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
                    total_cost: line.total_cost,
                    unit_sale: line.unit_sale || 0,
                    total_sale: line.total_sale || 0
                });
            });
        });
        return lines.filter(l => 
            l.product_name?.toLowerCase().includes(filter.toLowerCase()) || 
            l.product_sku?.toLowerCase().includes(filter.toLowerCase()) ||
            l.doc_number?.toLowerCase().includes(filter.toLowerCase())
        );
    }, [filteredData, filter]);

    const totals = useMemo(() => {
        return flattenedLines.reduce((acc, curr) => ({
            qty: acc.qty + curr.qty,
            value: acc.value + (curr.total_cost || 0),
            salesValue: acc.salesValue + (curr.total_sale || 0)
        }), { qty: 0, value: 0, salesValue: 0 });
    }, [flattenedLines]);

    const sellerStats = useMemo(() => {
        const statsMap: { [key: string]: { id: number, name: string, code: string, warehouse: string, sale: number, cost: number } } = {};

        filteredData.forEach(doc => {
            if (doc.seller) {
                const sId = doc.seller.id;
                if (!statsMap[sId]) {
                    statsMap[sId] = {
                        id: sId,
                        name: doc.seller.name,
                        code: doc.seller.code,
                        warehouse: doc.warehouse_from?.name || 'N/A',
                        sale: 0,
                        cost: 0
                    };
                }
                doc.lines.forEach((line: any) => {
                    statsMap[sId].sale += line.total_sale || 0;
                    statsMap[sId].cost += line.total_cost || 0;
                });
            } else {
                const sId = 'unassigned';
                if (!statsMap[sId]) {
                    statsMap[sId] = {
                        id: 0,
                        name: 'Sin Vendedor Asignado',
                        code: 'N/A',
                        warehouse: 'N/A',
                        sale: 0,
                        cost: 0
                    };
                }
                doc.lines.forEach((line: any) => {
                    statsMap[sId].sale += line.total_sale || 0;
                    statsMap[sId].cost += line.total_cost || 0;
                });
            }
        });

        // Map payouts in the selected date range
        const periodPayoutsMap: { [key: number]: number } = {};
        filteredPayouts.forEach(p => {
            const sId = p.seller_id;
            periodPayoutsMap[sId] = (periodPayoutsMap[sId] || 0) + (p.amount || 0);
        });

        return Object.values(statsMap)
            .map(s => {
                const periodPaid = periodPayoutsMap[s.id] || 0;
                // Subtract period payouts from utility
                const utility = s.sale - s.cost - periodPaid;
                const margin = s.sale > 0 ? (utility / s.sale) * 100 : 0;
                
                // Calculate historical outstanding balance
                const earned = historicalEarnedMap[s.id] || 0;
                const paid = historicalPaidMap[s.id] || 0;
                const balance = earned - paid;

                return { 
                    ...s, 
                    payouts: periodPaid, 
                    balance: balance, 
                    utility, 
                    margin 
                };
            })
            .sort((a, b) => b.utility - a.utility);
    }, [filteredData, filteredPayouts, historicalEarnedMap, historicalPaidMap]);

    return (
        <div className="view">
            <div className="header">
                <h1>Reporte Detallado de Salidas</h1>
                <button className="btn btn-outline" onClick={fetchReport}>🔄 Actualizar</button>
            </div>

            {/* Filtro por Rango de Fechas */}
            <div className="glass-card" style={{ marginBottom: '1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap', padding: '1rem' }}>
                <h4 style={{ margin: 0, color: 'var(--primary)', fontSize: '0.9rem' }}>📅 Filtrar por Rango de Fechas (Ranking y Detalles):</h4>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>Desde:</span>
                    <input 
                        type="date" 
                        value={startDate} 
                        onChange={e => setStartDate(e.target.value)} 
                        style={{ width: 'auto', marginBottom: 0, padding: '6px 10px' }}
                    />
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>Hasta:</span>
                    <input 
                        type="date" 
                        value={endDate} 
                        onChange={e => setEndDate(e.target.value)} 
                        style={{ width: 'auto', marginBottom: 0, padding: '6px 10px' }}
                    />
                </div>
                <button className="btn btn-outline" style={{ padding: '6px 12px', fontSize: '0.75rem' }} onClick={() => {
                    const d = new Date();
                    d.setDate(d.getDate() - 30);
                    setStartDate(d.toISOString().split('T')[0]);
                    setEndDate(new Date().toISOString().split('T')[0]);
                }}>Reestablecer</button>
            </div>

            {/* Ranking de Vendedores Table */}
            <div className="glass-card" style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>🏆 Ranking de Vendedores (Ventas vs Costos)</h3>
                <div style={{ padding: 0, overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr>
                                <th style={{ width: '50px', textAlign: 'center' }}>Rank</th>
                                <th>Vendedor</th>
                                <th>Bodega</th>
                                <th style={{ textAlign: 'right' }}>Vendido (Precio)</th>
                                <th style={{ textAlign: 'right' }}>Costo Inventario</th>
                                <th style={{ textAlign: 'right', color: 'var(--success)' }}>Comisión Pagada</th>
                                <th style={{ textAlign: 'right', color: 'var(--warning)' }}>Saldo Pendiente</th>
                                <th style={{ textAlign: 'right' }}>Diferencia (Utilidad Neta)</th>
                                <th style={{ textAlign: 'center', width: '100px' }}>Margen</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sellerStats.map((stat, idx) => {
                                const isUnassigned = stat.id === 0;
                                return (
                                    <tr key={stat.id || 'unassigned'} style={{ background: idx === 0 && stat.utility > 0 && !isUnassigned ? 'rgba(16, 185, 129, 0.04)' : 'transparent' }}>
                                        <td style={{ textAlign: 'center', fontWeight: 'bold', color: idx === 0 && !isUnassigned ? 'var(--warning)' : 'inherit' }}>
                                            {isUnassigned ? '-' : `#${idx + 1}`}
                                        </td>
                                        <td style={{ fontWeight: 600 }}>
                                            {stat.name} {!isUnassigned && <span style={{ fontSize: '0.75rem', opacity: 0.6, fontWeight: 'normal' }}>({stat.code})</span>}
                                        </td>
                                        <td>{stat.warehouse}</td>
                                        <td style={{ textAlign: 'right', fontWeight: 600, color: 'var(--success)' }}>
                                            {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(stat.sale)}
                                        </td>
                                        <td style={{ textAlign: 'right', opacity: 0.85 }}>
                                            {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(stat.cost)}
                                        </td>
                                        <td style={{ textAlign: 'right', color: 'var(--success)', fontWeight: 600 }}>
                                            {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(stat.payouts || 0)}
                                        </td>
                                        <td style={{ textAlign: 'right', fontWeight: 600, color: (stat.balance || 0) > 0 ? 'var(--warning)' : 'inherit' }}>
                                            {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(stat.balance || 0)}
                                        </td>
                                        <td style={{ textAlign: 'right', fontWeight: 700, color: stat.utility >= 0 ? 'var(--success)' : 'var(--danger)' }}>
                                            {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(stat.utility)}
                                        </td>
                                        <td style={{ textAlign: 'center' }}>
                                            <span className={`badge ${stat.utility >= 0 ? 'badge-in' : 'badge-out'}`} style={{ fontWeight: 'bold' }}>
                                                {stat.margin.toFixed(1)}%
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })}
                            {sellerStats.length === 0 && (
                                <tr>
                                    <td colSpan={9} style={{ textAlign: 'center', padding: '1.5rem', opacity: 0.5 }}>No hay datos de ventas para mostrar ranking.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Detailed outputs */}
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

const SellerManager = ({ sellers, warehouses, onRefresh }: any) => {
    const [showAdd, setShowAdd] = useState(false);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [formData, setFormData] = useState({ name: '', code: '', warehouse_id: '', commission_pct: '100' });
    
    // States for commission control
    const [reportData, setReportData] = useState<any[]>([]);
    const [loadingReport, setLoadingReport] = useState(true);
    const [detailsData, setDetailsData] = useState<any[]>([]);
    const [loadingDetails, setLoadingDetails] = useState(true);
    const [showPayModal, setShowPayModal] = useState(false);
    const [payForm, setPayForm] = useState({ seller_id: 0, seller_name: '', amount: 0, notes: '', month: 0, year: 0, date: new Date().toISOString().split('T')[0] });

    const fetchReport = async () => {
        setLoadingReport(true);
        setLoadingDetails(true);
        try {
            const res = await fetch(`${API_URL}/sellers/commissions/report`);
            if (res.ok) setReportData(await res.json());
            
            const resDet = await fetch(`${API_URL}/sellers/commissions/details`);
            if (resDet.ok) setDetailsData(await resDet.json());
        } catch (e) { console.error(e); }
        setLoadingReport(false);
        setLoadingDetails(false);
    };

    useEffect(() => {
        fetchReport();
    }, [sellers]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const url = editingId ? `${API_URL}/sellers/${editingId}` : `${API_URL}/sellers`;
            const method = editingId ? 'PUT' : 'POST';
            const res = await fetch(url, { 
                method, 
                headers: { 'Content-Type': 'application/json' }, 
                body: JSON.stringify({
                    name: formData.name,
                    code: formData.code,
                    warehouse_id: parseInt(formData.warehouse_id),
                    commission_pct: parseFloat(formData.commission_pct) || 0
                }) 
            });
            if (!res.ok) {
                const err = await res.json();
                throw new Error(err.error || 'Error al guardar vendedor');
            }
            setShowAdd(false); 
            setEditingId(null); 
            onRefresh();
        } catch (err: any) { alert(err.message); }
    };

    const deleteSeller = async (id: number) => {
        if (!confirm('¿Seguro que desea inactivar este vendedor?')) return;
        try {
            await fetch(`${API_URL}/sellers/${id}`, { method: 'DELETE' });
            onRefresh();
        } catch (err: any) { alert(err.message); }
    };

    const handlePaySubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch(`${API_URL}/sellers/${payForm.seller_id}/payouts`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    amount: payForm.amount,
                    date: payForm.date,
                    notes: payForm.notes,
                    month: payForm.month,
                    year: payForm.year
                })
            });
            if (!res.ok) throw new Error('Error al registrar el pago de comisión');
            setShowPayModal(false);
            fetchReport();
            alert('✅ Pago de comisión registrado con éxito.');
        } catch (err: any) { alert(err.message); }
    };

    // Calculate monthly summary for the chart
    const monthlySummary = useMemo(() => {
        const summary: { [key: string]: { label: string, earned: number, paid: number } } = {};
        reportData.forEach(item => {
            const key = `${item.year}-${item.month}`;
            const label = `${item.month}/${item.year}`;
            if (!summary[key]) {
                summary[key] = { label, earned: 0, paid: 0 };
            }
            summary[key].earned += item.commission_earned;
            summary[key].paid += item.payouts_total;
        });
        return Object.values(summary).sort((a,b) => {
            const [am, ay] = a.label.split('/').map(Number);
            const [bm, by] = b.label.split('/').map(Number);
            return ay !== by ? ay - by : am - bm;
        });
    }, [reportData]);

    const maxVal = useMemo(() => {
        return Math.max(...monthlySummary.map(s => Math.max(s.earned, s.paid)), 1000);
    }, [monthlySummary]);

    return (
        <div className="view">
            <div className="header">
                <h1>Vendedores</h1>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button className="btn btn-outline" onClick={() => {
                        setPayForm({
                            seller_id: 0,
                            seller_name: '',
                            amount: 0,
                            notes: '',
                            month: new Date().getMonth() + 1,
                            year: new Date().getFullYear(),
                            date: new Date().toISOString().split('T')[0]
                        });
                        setShowPayModal(true);
                    }}>💵 Registrar Pago de Comisión</button>
                    <button className="btn btn-primary" onClick={() => { 
                        setShowAdd(true); 
                        setEditingId(null); 
                        setFormData({name:'', code:'', warehouse_id:'', commission_pct: '0'}); 
                    }}>+ Nuevo Vendedor</button>
                </div>
            </div>
            {showAdd && (
                <div className="glass-card" style={{marginBottom:'2rem'}}>
                    <form onSubmit={handleSubmit} style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'1rem'}}>
                        <input placeholder="Nombre Completo" value={formData.name} onChange={e => setFormData({...formData, name:e.target.value})} required />
                        <input placeholder="Código / ID Vendedor" value={formData.code} onChange={e => setFormData({...formData, code:e.target.value})} required />
                        <select value={formData.warehouse_id} onChange={e => setFormData({...formData, warehouse_id:e.target.value})} required>
                            <option value="">Asignar Bodega...</option>
                            {warehouses.filter((w:any)=>w.active).map((w:any)=><option key={w.id} value={w.id}>{w.name}</option>)}
                        </select>
                        <input type="number" step="any" min="0" max="100" placeholder="% Comisión" value={formData.commission_pct} onChange={e => setFormData({...formData, commission_pct:e.target.value})} required />
                        <div style={{gridColumn:'span 4', display:'flex', gap:'10px', justifyContent:'flex-end'}}>
                            <button type="button" className="btn btn-outline" onClick={() => setShowAdd(false)}>Cancelar</button>
                            <button type="submit" className="btn btn-primary">Guardar Vendedor</button>
                        </div>
                    </form>
                </div>
            )}
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nombre</th>
                        <th>Bodega Asignada</th>
                        <th>% Comisión</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {sellers.map((s:any) => (
                        <tr key={s.id} style={{opacity: s.active ? 1 : 0.6}}>
                            <td style={{fontWeight:600}}>{s.code}</td>
                            <td>{s.name}</td>
                            <td>
                                <span className="badge" style={{background: s.warehouse?.color ? `${s.warehouse.color}33` : 'rgba(255,255,255,0.05)', color: s.warehouse?.color || 'inherit', border: s.warehouse?.color ? `1px solid ${s.warehouse.color}` : 'none'}}>
                                    {s.warehouse?.name || 'No asignada'}
                                </span>
                            </td>
                            <td style={{ fontWeight: 600, color: 'var(--primary)' }}>{s.commission_pct || 0}%</td>
                            <td>
                                <span className={`badge ${s.active ? 'badge-in' : 'badge-out'}`}>
                                    {s.active ? 'Activo' : 'Inactivo'}
                                </span>
                            </td>
                            <td>
                                <div style={{display:'flex', gap:'10px'}}>
                                    <button className="btn btn-outline" style={{padding:'4px 10px', fontSize:'0.75rem'}} onClick={() => { 
                                        setEditingId(s.id); 
                                        setFormData({name:s.name, code:s.code, warehouse_id:String(s.warehouse_id), commission_pct: String(s.commission_pct || 0)}); 
                                        setShowAdd(true); 
                                    }}>Editar</button>
                                    {s.active && (
                                        <button className="btn btn-outline" style={{padding:'4px 10px', fontSize:'0.75rem', color:'#e06c75', borderColor:'#e06c75'}} onClick={() => deleteSeller(s.id)}>Inactivar</button>
                                    )}
                                </div>
                            </td>
                        </tr>
                    ))}
                    {sellers.length === 0 && (
                        <tr>
                            <td colSpan={6} style={{textAlign:'center', padding:'2rem', opacity:0.5}}>No hay vendedores registrados.</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* Commissions vs Payments Analytics */}
            <div className="glass-card" style={{ marginTop: '3rem' }}>
                <h3 style={{ color: 'var(--primary)', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    📊 Analítica: Comisiones Devengadas (Púrpura) vs. Pagos de Comisión (Verde)
                </h3>
                {monthlySummary.length === 0 ? (
                    <div style={{ padding: '2.5rem', textAlign: 'center', opacity: 0.5 }}>No hay datos suficientes para mostrar analíticas en este periodo.</div>
                ) : (
                    <div>
                        <div style={{ height: '180px', display: 'flex', alignItems: 'flex-end', gap: '24px', padding: '15px 0 5px 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                            {monthlySummary.map((d, idx) => (
                                <div key={idx} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                                    <div style={{ display: 'flex', gap: '5px', alignItems: 'flex-end', height: '80%', width: '100%', justifyContent: 'center' }}>
                                        {/* Commission Bar (Purple) */}
                                        <div 
                                            style={{ 
                                                width: '26px', 
                                                height: `${(d.earned / maxVal) * 80}%`, 
                                                background: '#8b5cf6', 
                                                borderRadius: '4px 4px 0 0', 
                                                boxShadow: '0 0 10px rgba(139, 92, 246, 0.4)',
                                                transition: 'height 0.3s ease'
                                            }} 
                                            title={`Comisiones: ${new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(d.earned)}`}
                                        />
                                        {/* Payout Bar (Green) */}
                                        <div 
                                            style={{ 
                                                width: '26px', 
                                                height: `${(d.paid / maxVal) * 80}%`, 
                                                background: 'var(--success)', 
                                                borderRadius: '4px 4px 0 0', 
                                                boxShadow: '0 0 10px rgba(16, 185, 129, 0.4)',
                                                transition: 'height 0.3s ease'
                                            }} 
                                            title={`Pagos: ${new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(d.paid)}`}
                                        />
                                    </div>
                                    <span style={{ fontSize: '0.75rem', marginTop: '6px', color: 'var(--text-muted)', fontWeight: 600 }}>{d.label}</span>
                                </div>
                            ))}
                        </div>
                        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginTop: '1.2rem', fontSize: '0.8rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <div style={{ width: '12px', height: '12px', background: '#8b5cf6', borderRadius: '3px' }} />
                                <span style={{ opacity: 0.9 }}>Comisiones Devengadas</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <div style={{ width: '12px', height: '12px', background: 'var(--success)', borderRadius: '3px' }} />
                                <span style={{ opacity: 0.9 }}>Pagos Realizados (Salidas de Dinero)</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Balances and Payouts Control */}
            <div className="glass-card" style={{ marginTop: '2rem' }}>
                <h3 style={{ color: 'var(--primary)', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    💰 Control de Saldos de Comisión por Vendedor y Periodo
                </h3>
                <div style={{ overflowX: 'auto', padding: 0 }}>
                    {loadingReport ? (
                        <div style={{ padding: '2rem', textAlign: 'center', opacity: 0.5 }}>Cargando reporte de comisiones...</div>
                    ) : (
                        <table>
                            <thead>
                                <tr>
                                    <th>Periodo</th>
                                    <th>Vendedor</th>
                                    <th style={{ textAlign: 'right' }}>Ventas del Mes</th>
                                    <th style={{ textAlign: 'center' }}>% Com.</th>
                                    <th style={{ textAlign: 'right' }}>Comisión Devengada</th>
                                    <th style={{ textAlign: 'right' }}>Pagado</th>
                                    <th style={{ textAlign: 'right' }}>Saldo Pendiente</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reportData.map((item, idx) => (
                                    <tr key={idx}>
                                        <td style={{ fontWeight: 600 }}>{item.month}/{item.year}</td>
                                        <td>
                                            <div style={{ fontWeight: 600 }}>{item.seller_name}</div>
                                            <small style={{ opacity: 0.6 }}>{item.seller_code}</small>
                                        </td>
                                        <td style={{ textAlign: 'right', fontWeight: 600 }}>
                                            {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(item.sales_total)}
                                        </td>
                                        <td style={{ textAlign: 'center' }}>{item.commission_pct}%</td>
                                        <td style={{ textAlign: 'right', fontWeight: 600, color: 'var(--info)' }}>
                                            {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(item.commission_earned)}
                                        </td>
                                        <td style={{ textAlign: 'right', color: 'var(--success)', fontWeight: 600 }}>
                                            {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(item.payouts_total)}
                                        </td>
                                        <td style={{ textAlign: 'right', fontWeight: 700, color: item.balance > 0 ? 'var(--warning)' : 'inherit' }}>
                                            {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(item.balance)}
                                        </td>
                                        <td>
                                            {item.balance > 0 ? (
                                                <button 
                                                    className="btn btn-primary" 
                                                    style={{ padding: '5px 12px', fontSize: '0.75rem' }}
                                                    onClick={() => {
                                                        setPayForm({
                                                            seller_id: item.seller_id,
                                                            seller_name: item.seller_name,
                                                            amount: item.balance,
                                                            notes: `Pago comisión ${item.month}/${item.year}`,
                                                            month: item.month,
                                                            year: item.year,
                                                            date: new Date().toISOString().split('T')[0]
                                                        });
                                                        setShowPayModal(true);
                                                    }}
                                                >
                                                    💵 Pagar Comisión
                                                </button>
                                            ) : (
                                                <span style={{ fontSize: '0.75rem', opacity: 0.5, fontStyle: 'italic' }}>✅ Al día</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                                {reportData.length === 0 && (
                                    <tr>
                                        <td colSpan={8} style={{ textAlign: 'center', padding: '2.5rem', opacity: 0.5 }}>
                                            No se han registrado ventas con vendedor asignado para calcular comisiones.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>

            {/* Detalle de Comisiones por Venta (Fechas) */}
            <div className="glass-card" style={{ marginTop: '2rem' }}>
                <h3 style={{ color: 'var(--primary)', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    📅 Detalle de Comisiones por Fecha y Venta (Vendido vs. Costo)
                </h3>
                <div style={{ overflowX: 'auto', padding: 0 }}>
                    {loadingDetails ? (
                        <div style={{ padding: '2rem', textAlign: 'center', opacity: 0.5 }}>Cargando detalle de ventas...</div>
                    ) : (
                        <table>
                            <thead>
                                <tr>
                                    <th>Fecha</th>
                                    <th>N° Documento</th>
                                    <th>Vendedor</th>
                                    <th style={{ textAlign: 'right' }}>Valor Vendido</th>
                                    <th style={{ textAlign: 'right' }}>Costo Inventario</th>
                                    <th style={{ textAlign: 'right' }}>Diferencia / Utilidad</th>
                                    <th style={{ textAlign: 'center' }}>% Com.</th>
                                    <th style={{ textAlign: 'right' }}>Comisión Devengada</th>
                                </tr>
                            </thead>
                            <tbody>
                                {detailsData.map((item, idx) => (
                                    <tr key={idx} style={{ opacity: item.utility > 0 ? 1 : 0.65 }}>
                                        <td>{new Date(item.date).toLocaleDateString()}</td>
                                        <td><small style={{ fontWeight: 600 }}>{item.document_number}</small></td>
                                        <td>
                                            <div style={{ fontWeight: 600 }}>{item.seller_name}</div>
                                            <small style={{ opacity: 0.6 }}>{item.seller_code}</small>
                                        </td>
                                        <td style={{ textAlign: 'right', fontWeight: 600 }}>
                                            {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(item.sales_total)}
                                        </td>
                                        <td style={{ textAlign: 'right', color: '#e06c75' }}>
                                            {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(item.cost_total)}
                                        </td>
                                        <td style={{ textAlign: 'right', fontWeight: 600, color: item.utility > 0 ? 'var(--success)' : 'inherit' }}>
                                            {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(item.utility)}
                                        </td>
                                        <td style={{ textAlign: 'center' }}>{item.commission_pct}%</td>
                                        <td style={{ textAlign: 'right', fontWeight: 700, color: item.commission_earned > 0 ? 'var(--info)' : 'inherit' }}>
                                            {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(item.commission_earned)}
                                        </td>
                                    </tr>
                                ))}
                                {detailsData.length === 0 && (
                                    <tr>
                                        <td colSpan={8} style={{ textAlign: 'center', padding: '2.5rem', opacity: 0.5 }}>
                                            No hay salidas de inventario aplicadas para mostrar detalle de comisiones.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>

            {/* Payout Modal Form */}
            {showPayModal && (
                <div className="modal-overlay" onClick={() => setShowPayModal(false)}>
                    <div className="modal-content glass-card" onClick={e => e.stopPropagation()} style={{ maxWidth: '500px', width: '90%' }}>
                        <div className="header" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between' }}>
                            <h2 style={{ margin: 0 }}>💵 Registrar Pago (Salida de Dinero)</h2>
                            <button className="btn btn-outline" style={{ padding: '2px 8px' }} onClick={() => setShowPayModal(false)}>✕</button>
                        </div>
                        <form onSubmit={handlePaySubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                            <div>
                                <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>Vendedor:</label>
                                {payForm.seller_id === 0 ? (
                                    <select 
                                        value={payForm.seller_id || ''} 
                                        onChange={e => {
                                            const sid = parseInt(e.target.value);
                                            const sel = sellers.find((s: any) => s.id === sid);
                                            setPayForm({ ...payForm, seller_id: sid, seller_name: sel ? sel.name : '' });
                                        }} 
                                        required
                                        style={{ width: '100%', marginBottom: 0 }}
                                    >
                                        <option value="">Seleccione Vendedor...</option>
                                        {sellers.filter((s: any) => s.active).map((s: any) => (
                                            <option key={s.id} value={s.id}>{s.name} [{s.code}]</option>
                                        ))}
                                    </select>
                                ) : (
                                    <div style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--primary)' }}>{payForm.seller_name}</div>
                                )}
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>Periodo Correspondiente:</label>
                                    {payForm.seller_id === 0 ? (
                                        <div style={{ display: 'flex', gap: '5px' }}>
                                            <select 
                                                value={payForm.month || ''} 
                                                onChange={e => setPayForm({ ...payForm, month: parseInt(e.target.value) })} 
                                                required
                                                style={{ flex: 1.2, marginBottom: 0 }}
                                            >
                                                <option value="">Mes...</option>
                                                {Array.from({ length: 12 }, (_, i) => (
                                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                                ))}
                                            </select>
                                            <input 
                                                type="number" 
                                                value={payForm.year || new Date().getFullYear()} 
                                                onChange={e => setPayForm({ ...payForm, year: parseInt(e.target.value) || new Date().getFullYear() })} 
                                                required
                                                placeholder="Año"
                                                style={{ flex: 1, marginBottom: 0 }}
                                            />
                                        </div>
                                    ) : (
                                        <div style={{ fontWeight: 600 }}>{payForm.month}/{payForm.year}</div>
                                    )}
                                </div>
                                <div>
                                    <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>Fecha de Registro:</label>
                                    <input 
                                        type="date" 
                                        value={payForm.date} 
                                        onChange={e => setPayForm({ ...payForm, date: e.target.value })} 
                                        required 
                                        style={{ width: '100%', padding: '6px', marginBottom: 0 }}
                                    />
                                </div>
                            </div>
                            <div>
                                <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Monto a Pagar (COP):</label>
                                <input 
                                    type="number" 
                                    step="any" 
                                    value={payForm.amount || ''} 
                                    onChange={e => setPayForm({ ...payForm, amount: parseFloat(e.target.value) || 0 })} 
                                    required 
                                    min="1"
                                    style={{ width: '100%', padding: '10px' }}
                                />
                                {payForm.seller_id !== 0 && (
                                    <small style={{ color: 'var(--text-muted)' }}>Monto sugerido/pendiente: {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(payForm.amount)}</small>
                                )}
                            </div>
                            <div>
                                <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Notas / Observación:</label>
                                <textarea 
                                    value={payForm.notes} 
                                    onChange={e => setPayForm({ ...payForm, notes: e.target.value })} 
                                    placeholder="Ingrese comprobante, método de pago, etc."
                                    style={{ width: '100%', height: '70px', background: 'rgba(255,255,255,0.05)', color: 'var(--text)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '10px' }}
                                />
                            </div>
                            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', marginTop: '1rem' }}>
                                <button type="button" className="btn btn-outline" onClick={() => setShowPayModal(false)}>Cancelar</button>
                                <button type="submit" className="btn btn-primary">Confirmar Pago</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

const SystemResetModal = ({ onClose, onResetComplete }: any) => {
    const [keepCatalog, setKeepCatalog] = useState(true);
    const [confirmText, setConfirmText] = useState('');
    const [loading, setLoading] = useState(false);

    const handleReset = async () => {
        if (confirmText.toUpperCase() !== 'ELIMINAR') {
            alert('Por favor escribe ELIMINAR para confirmar.');
            return;
        }
        setLoading(true);
        try {
            const res = await fetch(`${API_URL}/admin/clear-data`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ keepCatalog })
            });
            if (!res.ok) throw new Error('Error al reiniciar los datos.');
            alert('✅ Sistema reiniciado correctamente.');
            onResetComplete();
            onClose();
        } catch (e: any) {
            alert(e.message);
        }
        setLoading(false);
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content glass-card" onClick={e => e.stopPropagation()} style={{ maxWidth: '500px', width: '90%' }}>
                <h2 style={{ color: 'var(--danger)', marginBottom: '1rem' }}>⚠️ Reiniciar Datos del Sistema</h2>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                    Esta acción borrará de forma permanente los registros seleccionados. Esta operación no se puede deshacer.
                </p>

                <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>Tipo de Reinicio:</label>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                            <input type="radio" name="resetType" checked={keepCatalog === true} onChange={() => setKeepCatalog(true)} />
                            <span><strong>Solo Movimientos de Inventario</strong> (Recomendado)<br /><small style={{ color: 'var(--text-muted)' }}>Mantiene Productos, Bodegas y Vendedores.</small></span>
                        </label>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                            <input type="radio" name="resetType" checked={keepCatalog === false} onChange={() => setKeepCatalog(false)} />
                            <span><strong>Reinicio de Fábrica Completo</strong><br /><small style={{ color: 'var(--text-muted)' }}>Borra todo, incluidos Productos, Bodegas y Vendedores.</small></span>
                        </label>
                    </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px' }}>Escribe <strong>ELIMINAR</strong> para confirmar:</label>
                    <input type="text" placeholder="ELIMINAR" value={confirmText} onChange={e => setConfirmText(e.target.value)} style={{ textTransform: 'uppercase', width: '100%' }} />
                </div>

                <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                    <button className="btn btn-outline" onClick={onClose} disabled={loading}>Cancelar</button>
                    <button className="btn btn-primary" style={{ background: 'var(--danger)', borderColor: 'var(--danger)' }} onClick={handleReset} disabled={loading}>
                        {loading ? 'Reiniciando...' : 'Confirmar Reinicio'}
                    </button>
                </div>
            </div>
        </div>
    );
};

const BIDashboard = ({ products, warehouses, sellers }: any) => {
    const [docs, setDocs] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [dateRange, setDateRange] = useState('30days'); // 7days, 30days, thismonth, all
    const [selectedWh, setSelectedWh] = useState('');
    const [selectedSeller, setSelectedSeller] = useState('');

    const fetchDocs = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${API_URL}/documents`);
            if (res.ok) setDocs(await res.json());
        } catch (e) { console.error(e); }
        setLoading(false);
    };

    useEffect(() => {
        fetchDocs();
    }, []);

    const filteredDocs = useMemo(() => {
        return docs.filter(doc => {
            if (doc.status !== 'APPLIED') return false;

            // 1. Date filter
            const docDate = new Date(doc.date);
            const now = new Date();
            if (dateRange === '7days') {
                const diffTime = Math.abs(now.getTime() - docDate.getTime());
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                if (diffDays > 7) return false;
            } else if (dateRange === '30days') {
                const diffTime = Math.abs(now.getTime() - docDate.getTime());
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                if (diffDays > 30) return false;
            } else if (dateRange === 'thismonth') {
                if (docDate.getMonth() !== now.getMonth() || docDate.getFullYear() !== now.getFullYear()) return false;
            }

            // 2. Warehouse filter
            if (selectedWh) {
                const whId = parseInt(selectedWh);
                if (doc.doc_type === 'OUT' && doc.warehouse_from_id !== whId) return false;
                if (doc.doc_type === 'IN' && doc.warehouse_to_id !== whId) return false;
                if (doc.doc_type !== 'OUT' && doc.doc_type !== 'IN' && doc.warehouse_from_id !== whId && doc.warehouse_to_id !== whId) return false;
            }

            // 3. Seller filter
            if (selectedSeller) {
                const sellerId = parseInt(selectedSeller);
                if (doc.seller_id !== sellerId) return false;
            }

            return true;
        });
    }, [docs, dateRange, selectedWh, selectedSeller]);

    const kpis = useMemo(() => {
        let totalSales = 0;
        let totalCostOfSales = 0;
        let totalMermas = 0; // Negative adjustments

        filteredDocs.forEach(doc => {
            if (doc.doc_type === 'OUT') {
                doc.lines.forEach((l: any) => {
                    totalSales += l.total_sale || 0;
                    totalCostOfSales += l.total_cost || 0;
                });
            } else if (doc.doc_type === 'AJ') {
                doc.lines.forEach((l: any) => {
                    if (l.qty < 0) {
                        totalMermas += Math.abs(l.total_cost || (l.qty * (l.unit_cost || 0)));
                    }
                });
            }
        });

        const utility = totalSales - totalCostOfSales;
        const margin = totalSales > 0 ? (utility / totalSales) * 100 : 0;

        return {
            sales: totalSales,
            cogs: totalCostOfSales,
            utility,
            margin,
            mermas: totalMermas
        };
    }, [filteredDocs]);

    const productPerformance = useMemo(() => {
        const prodMap: { [key: number]: { id: number, name: string, sku: string, qty: number, sale: number, cost: number } } = {};

        filteredDocs.filter(d => d.doc_type === 'OUT').forEach(doc => {
            doc.lines.forEach((l: any) => {
                const pId = l.product_id;
                if (!prodMap[pId]) {
                    const prod = products.find((p: any) => p.id === pId);
                    prodMap[pId] = {
                        id: pId,
                        name: prod?.name || 'Producto Desconocido',
                        sku: prod?.sku || 'N/A',
                        qty: 0,
                        sale: 0,
                        cost: 0
                    };
                }
                prodMap[pId].qty += l.qty;
                prodMap[pId].sale += l.total_sale || 0;
                prodMap[pId].cost += l.total_cost || 0;
            });
        });

        return Object.values(prodMap)
            .map(p => {
                const utility = p.sale - p.cost;
                const margin = p.sale > 0 ? (utility / p.sale) * 100 : 0;
                return { ...p, utility, margin };
            })
            .sort((a, b) => b.utility - a.utility);
    }, [filteredDocs, products]);

    const warehousePerformance = useMemo(() => {
        const whMap: { [key: number]: { id: number, name: string, color: string, sale: number, cost: number, mermas: number } } = {};

        warehouses.filter((w: any) => w.active).forEach((w: any) => {
            whMap[w.id] = { id: w.id, name: w.name, color: w.color, sale: 0, cost: 0, mermas: 0 };
        });

        filteredDocs.forEach(doc => {
            if (doc.doc_type === 'OUT' && doc.warehouse_from_id && whMap[doc.warehouse_from_id]) {
                doc.lines.forEach((l: any) => {
                    whMap[doc.warehouse_from_id!].sale += l.total_sale || 0;
                    whMap[doc.warehouse_from_id!].cost += l.total_cost || 0;
                });
            } else if (doc.doc_type === 'AJ') {
                doc.lines.forEach((l: any) => {
                    if (l.qty < 0) {
                        const whId = doc.warehouse_from_id || doc.warehouse_to_id;
                        if (whId && whMap[whId]) {
                            whMap[whId].mermas += Math.abs(l.total_cost || (l.qty * (l.unit_cost || 0)));
                        }
                    }
                });
            }
        });

        return Object.values(whMap)
            .map(w => {
                const utility = w.sale - w.cost;
                const margin = w.sale > 0 ? (utility / w.sale) * 100 : 0;
                return { ...w, utility, margin };
            })
            .sort((a, b) => b.sale - a.sale);
    }, [filteredDocs, warehouses]);

    const dailyTrend = useMemo(() => {
        const trendMap: { [key: string]: { date: string, label: string, sale: number, cost: number } } = {};
        
        let daysCount = 30;
        if (dateRange === '7days') daysCount = 7;
        else if (dateRange === 'thismonth') {
            const now = new Date();
            daysCount = now.getDate();
        }

        const datesList: string[] = [];
        for (let i = daysCount - 1; i >= 0; i--) {
            const d = new Date();
            d.setDate(d.getDate() - i);
            const dateStr = d.toISOString().split('T')[0];
            datesList.push(dateStr);
            
            trendMap[dateStr] = {
                date: dateStr,
                label: `${d.getDate()}/${d.getMonth()+1}`,
                sale: 0,
                cost: 0
            };
        }

        filteredDocs.filter(d => d.doc_type === 'OUT').forEach(doc => {
            const dateStr = doc.date.split('T')[0];
            if (trendMap[dateStr]) {
                doc.lines.forEach((l: any) => {
                    trendMap[dateStr].sale += l.total_sale || 0;
                    trendMap[dateStr].cost += l.total_cost || 0;
                });
            }
        });

        return datesList.map(date => trendMap[date]);
    }, [filteredDocs, dateRange]);

    const maxTrendValue = useMemo(() => {
        return Math.max(...dailyTrend.map(d => Math.max(d.sale, d.cost)), 1);
    }, [dailyTrend]);

    return (
        <div className="view">
            <div className="header" style={{ marginBottom: '1.5rem' }}>
                <div>
                    <h1 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>📈 Inteligencia de Negocio (BI)</h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '4px 0 0 0' }}>Análisis avanzado de ventas, costos, rentabilidad y pérdidas de inventario.</p>
                </div>
                <button className="btn btn-outline" onClick={fetchDocs} disabled={loading} style={{ fontSize: '0.8rem' }}>
                    {loading ? 'Cargando...' : '🔄 Sincronizar'}
                </button>
            </div>

            {/* Filters Row */}
            <div className="glass-card" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.5rem', padding: '1.2rem' }}>
                <div>
                    <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>Rango de Tiempo:</label>
                    <select value={dateRange} onChange={e => setDateRange(e.target.value)} style={{ width: '100%', marginBottom: 0 }}>
                        <option value="7days">Últimos 7 Días</option>
                        <option value="30days">Últimos 30 Días</option>
                        <option value="thismonth">Este Mes</option>
                        <option value="all">Todo el Historial</option>
                    </select>
                </div>
                <div>
                    <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>Bodega / Tienda:</label>
                    <select value={selectedWh} onChange={e => { setSelectedWh(e.target.value); setSelectedSeller(''); }} style={{ width: '100%', marginBottom: 0 }}>
                        <option value="">Todas las Bodegas</option>
                        {warehouses.filter((w: any) => w.active).map((w: any) => (
                            <option key={w.id} value={w.id}>{w.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>Vendedor:</label>
                    <select value={selectedSeller} onChange={e => setSelectedSeller(e.target.value)} style={{ width: '100%', marginBottom: 0 }}>
                        <option value="">Todos los Vendedores</option>
                        {sellers.filter((s: any) => s.active && (!selectedWh || Number(s.warehouse_id) === Number(selectedWh))).map((s: any) => (
                            <option key={s.id} value={s.id}>{s.name} [{s.code}]</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* KPI Cards Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
                <div className="glass-card stat-card" style={{ borderBottom: '4px solid var(--success)', padding: '1rem 1.2rem', gap: '0.3rem' }}>
                    <span className="stat-label" style={{ fontSize: '0.75rem' }}>Ventas Totales</span>
                    <span className="stat-value" style={{ fontSize: '1.3rem', color: 'var(--success)' }}>
                        {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(kpis.sales)}
                    </span>
                </div>
                <div className="glass-card stat-card" style={{ borderBottom: '4px solid rgba(255,255,255,0.4)', padding: '1rem 1.2rem', gap: '0.3rem' }}>
                    <span className="stat-label" style={{ fontSize: '0.75rem' }}>Costo de Ventas (COGS)</span>
                    <span className="stat-value" style={{ fontSize: '1.3rem' }}>
                        {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(kpis.cogs)}
                    </span>
                </div>
                <div className="glass-card stat-card" style={{ borderBottom: '4px solid var(--primary)', padding: '1rem 1.2rem', gap: '0.3rem' }}>
                    <span className="stat-label" style={{ fontSize: '0.75rem' }}>Utilidad Operativa</span>
                    <span className="stat-value" style={{ fontSize: '1.3rem', color: 'var(--primary)' }}>
                        {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(kpis.utility)}
                    </span>
                </div>
                <div className="glass-card stat-card" style={{ borderBottom: '4px solid var(--info)', padding: '1rem 1.2rem', gap: '0.3rem' }}>
                    <span className="stat-label" style={{ fontSize: '0.75rem' }}>Margen Comercial</span>
                    <span className="stat-value" style={{ fontSize: '1.3rem', color: 'var(--info)' }}>
                        {kpis.margin.toFixed(1)}%
                    </span>
                </div>
                <div className="glass-card stat-card" style={{ borderBottom: '4px solid var(--danger)', padding: '1rem 1.2rem', gap: '0.3rem' }}>
                    <span className="stat-label" style={{ fontSize: '0.75rem' }}>Mermas / Ajustes (-)</span>
                    <span className="stat-value" style={{ fontSize: '1.3rem', color: 'var(--danger)' }}>
                        {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(kpis.mermas)}
                    </span>
                </div>
            </div>

            {/* Daily evolution chart */}
            <div className="glass-card" style={{ marginBottom: '2rem' }}>
                <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>📈 Historial Diario: Ingresos (Verde) vs Costos (Gris)</h3>
                <div style={{ height: '160px', display: 'flex', alignItems: 'flex-end', gap: '6px', padding: '15px 0 5px 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    {dailyTrend.map((d, idx) => (
                        <div key={idx} style={{ flex: 1, display: 'flex', gap: '2px', alignItems: 'flex-end', height: '100%', position: 'relative' }} title={`Fecha: ${d.date}\nVentas: ${new Intl.NumberFormat('es-CO').format(d.sale)}\nCostos: ${new Intl.NumberFormat('es-CO').format(d.cost)}`}>
                            <div style={{ flex: 1, height: `${(d.cost / maxTrendValue) * 100}%`, background: 'rgba(255,255,255,0.12)', borderRadius: '2px 2px 0 0' }} />
                            <div style={{ flex: 1, height: `${(d.sale / maxTrendValue) * 100}%`, background: 'var(--success)', borderRadius: '2px 2px 0 0', boxShadow: d.sale > 0 ? '0 0 10px rgba(16, 185, 129, 0.2)' : 'none' }} />
                        </div>
                    ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '8px' }}>
                    <span>{dailyTrend[0]?.label}</span>
                    <span>Evolución diaria del periodo</span>
                    <span>{dailyTrend[dailyTrend.length-1]?.label}</span>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '1.5rem' }}>
                {/* Product profitability ranking */}
                <div className="glass-card" style={{ padding: '1.5rem 1.2rem' }}>
                    <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>📦 Rentabilidad por Producto (Pareto)</h3>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', fontSize: '0.85rem' }}>
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th style={{ textAlign: 'center' }}>Cant.</th>
                                    <th style={{ textAlign: 'right' }}>Ingreso (Ventas)</th>
                                    <th style={{ textAlign: 'right' }}>Utilidad</th>
                                    <th style={{ textAlign: 'center' }}>Margen</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productPerformance.map(p => (
                                    <tr key={p.id}>
                                        <td>
                                            <div style={{ fontWeight: 600 }}>{p.name}</div>
                                            <small style={{ opacity: 0.6 }}>{p.sku}</small>
                                        </td>
                                        <td style={{ textAlign: 'center', fontWeight: 600 }}>{p.qty} ud</td>
                                        <td style={{ textAlign: 'right' }}>
                                            {new Intl.NumberFormat('es-CO').format(p.sale)}
                                        </td>
                                        <td style={{ textAlign: 'right', fontWeight: 600, color: 'var(--success)' }}>
                                            {new Intl.NumberFormat('es-CO').format(p.utility)}
                                        </td>
                                        <td style={{ textAlign: 'center' }}>
                                            <span className="badge badge-in" style={{ fontSize: '0.75rem', padding: '2px 6px' }}>{p.margin.toFixed(1)}%</span>
                                        </td>
                                    </tr>
                                ))}
                                {productPerformance.length === 0 && (
                                    <tr>
                                        <td colSpan={5} style={{ textAlign: 'center', opacity: 0.5, padding: '2rem' }}>Sin datos de ventas en el periodo.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Warehouse breakdown and mermas */}
                <div className="glass-card" style={{ padding: '1.5rem 1.2rem' }}>
                    <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>🏠 Rendimiento y Pérdidas por Bodega</h3>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', fontSize: '0.85rem' }}>
                            <thead>
                                <tr>
                                    <th>Bodega</th>
                                    <th style={{ textAlign: 'right' }}>Vendido</th>
                                    <th style={{ textAlign: 'right' }}>Utilidad</th>
                                    <th style={{ textAlign: 'right', color: 'var(--danger)' }}>Mermas</th>
                                </tr>
                            </thead>
                            <tbody>
                                {warehousePerformance.map(w => (
                                    <tr key={w.id}>
                                        <td style={{ fontWeight: 600 }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: w.color }} />
                                                {w.name}
                                            </div>
                                        </td>
                                        <td style={{ textAlign: 'right' }}>
                                            {new Intl.NumberFormat('es-CO').format(w.sale)}
                                        </td>
                                        <td style={{ textAlign: 'right', fontWeight: 600, color: w.utility >= 0 ? 'var(--success)' : 'inherit' }}>
                                            {new Intl.NumberFormat('es-CO').format(w.utility)}
                                        </td>
                                        <td style={{ textAlign: 'right', fontWeight: 600, color: 'var(--danger)' }}>
                                            {w.mermas > 0 ? `-${new Intl.NumberFormat('es-CO').format(w.mermas)}` : '$0'}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [products, setProducts] = useState([]);
  const [warehouses, setWarehouses] = useState([]);
  const [sellers, setSellers] = useState([]);
  const [selId, setSelId] = useState<number | null>(null);
  const [selWhId, setSelWhId] = useState<number | null>(null);
  const [showResetModal, setShowResetModal] = useState(false);

  const fetchData = async () => {
    try {
        const pr = await fetch(`${API_URL}/products`);
        const wr = await fetch(`${API_URL}/warehouses`);
        const sl = await fetch(`${API_URL}/sellers`);
        setProducts(await pr.json());
        setWarehouses(await wr.json());
        setSellers(await sl.json());
    } catch (e) { console.error(e); }
  };

  useEffect(() => { fetchData(); }, []);

  return (
    <div style={{ display: 'contents' }}>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} onResetClick={() => setShowResetModal(true)} />
      <main className="main-content">
        {activeTab === 'dashboard' && <Dashboard products={products} warehouses={warehouses} onProductClick={setSelId} onWarehouseClick={setSelWhId} />}
        {activeTab === 'products' && <ProductManager products={products} onRefresh={fetchData} onProductClick={setSelId} />}
        {activeTab === 'transactions' && <TransactionEngine products={products} warehouses={warehouses} sellers={sellers} onRefresh={fetchData} />}
        {activeTab === 'warehouses' && <WarehouseManager warehouses={warehouses} onRefresh={fetchData} />}
        {activeTab === 'sellers' && <SellerManager sellers={sellers} warehouses={warehouses} onRefresh={fetchData} />}
        {activeTab === 'reports' && <SalesReport sellers={sellers} onProductClick={setSelId} />}
        {activeTab === 'bi' && <BIDashboard products={products} warehouses={warehouses} sellers={sellers} />}
      </main>
      {selId && <ProductDetailModal productId={selId} onClose={() => setSelId(null)} />}
      {selWhId && <WarehouseInventoryModal warehouseId={selWhId} warehouses={warehouses} products={products} onClose={() => setSelWhId(null)} onProductClick={setSelId} />}
      {showResetModal && <SystemResetModal onClose={() => setShowResetModal(false)} onResetComplete={fetchData} />}
    </div>
  );
}
