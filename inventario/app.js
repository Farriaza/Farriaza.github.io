/* ================================================================
   DATOS GLOBALES
================================================================ */
let currentUser = null;
let movChart = null;
let historialMov = [];
let nextVentaId = 1000;
let nextProdId = 10;
let nextClienteId = 5;
let nextPersonalId = 4;
let chatHistory = [];
let invMode = 'producto';

const USERS = [
  { id:1, username:'admin', password:'1234', nombre:'Administrador', apellido:'Sistema', role:'Admin',    email:'admin@kento.cl',  telefono:'+56 9 1234 5678', cargo:'Administrador del Sistema', avatar:'' },
  { id:2, username:'juan',  password:'1234', nombre:'Juan',          apellido:'Pérez',   role:'Operador', email:'juan@kento.cl',   telefono:'+56 9 9876 5432', cargo:'Operador de Bodega',        avatar:'' },
];

let productos = [
  { id:1,  ean:'7891234560001', dun:'17891234560001', nombre:'Leche Entera 1L',          descripcion:'Leche entera UHT',         precio:1490, ubicacion:'NV1-A-01-01', stock:45,  stock_minimo:20, stock_maximo:100 },
  { id:2,  ean:'7891234560002', dun:'17891234560002', nombre:'Arroz Largo Fino 1kg',      descripcion:'Arroz de grano largo',     precio:1890, ubicacion:'NV1-B-02-01', stock:8,   stock_minimo:15, stock_maximo:80  },
  { id:3,  ean:'7891234560003', dun:'17891234560003', nombre:'Aceite Vegetal 900ml',      descripcion:'Aceite vegetal mixto',     precio:3290, ubicacion:'NV2-A-01-02', stock:0,   stock_minimo:10, stock_maximo:60  },
  { id:4,  ean:'7891234560004', dun:'',               nombre:'Azúcar Refinada 1kg',       descripcion:'Azúcar blanca refinada',   precio:1290, ubicacion:'NV1-C-03-01', stock:130, stock_minimo:20, stock_maximo:100 },
  { id:5,  ean:'7891234560005', dun:'17891234560005', nombre:'Fideos Spaghetti 400g',     descripcion:'Pasta de trigo',           precio:890,  ubicacion:'NV1-B-01-03', stock:55,  stock_minimo:25, stock_maximo:150 },
  { id:6,  ean:'7891234560006', dun:'17891234560006', nombre:'Atún en Conserva 170g',     descripcion:'Atún en aceite',           precio:2190, ubicacion:'NV3-A-02-01', stock:6,   stock_minimo:20, stock_maximo:80  },
  { id:7,  ean:'7891234560007', dun:'',               nombre:'Café Molido Premium 500g',  descripcion:'Café arábica molido',      precio:7990, ubicacion:'NV2-B-01-01', stock:22,  stock_minimo:10, stock_maximo:50  },
  { id:8,  ean:'7891234560008', dun:'17891234560008', nombre:'Harina Sin Polvos 1kg',     descripcion:'Harina de trigo',          precio:990,  ubicacion:'NV1-A-02-01', stock:3,   stock_minimo:20, stock_maximo:100 },
  { id:9,  ean:'7891234560009', dun:'17891234560009', nombre:'Sal Gruesa 1kg',             descripcion:'Sal para cocina',          precio:490,  ubicacion:'NV2-A-02-01', stock:70,  stock_minimo:15, stock_maximo:80  },
];

let clientes = [
  { id:1, rut:'12.345.678-9', nombre:'Supermercado El Roble',      email:'compras@elroble.cl',    telefono:'+56 2 2345 6789', direccion:'Av. Principal 1234, Santiago',  activo:true  },
  { id:2, rut:'98.765.432-1', nombre:'Distribuciones Norte Ltda.', email:'ventas@dnorte.cl',      telefono:'+56 2 8765 4321', direccion:'Calle Norte 567, Antofagasta',  activo:true  },
  { id:3, rut:'11.222.333-K', nombre:'Minimarket Los Andes',       email:'pedidos@losandes.cl',   telefono:'+56 9 1122 3344', direccion:'Los Andes 890, Valparaíso',     activo:true  },
  { id:4, rut:'55.666.777-8', nombre:'Restaurante La Cazuela',     email:'admin@lacazuela.cl',    telefono:'+56 9 5566 7788', direccion:'Barrio Italia 321, Santiago',   activo:false },
];

let personal = [
  { id:1, rut:'15.234.567-8', nombre:'Carlos',  apellido:'Morales',   cargo:'Jefe de Bodega',    email:'carlos@kento.cl',  telefono:'+56 9 4455 6677', turno:'Mañana',  activo:true  },
  { id:2, rut:'16.345.678-9', nombre:'Ana',     apellido:'Rodríguez', cargo:'Operadora de Piso', email:'ana@kento.cl',     telefono:'+56 9 5566 7788', turno:'Tarde',   activo:true  },
  { id:3, rut:'17.456.789-K', nombre:'Pedro',   apellido:'Sánchez',   cargo:'Conductor',         email:'pedro@kento.cl',   telefono:'+56 9 6677 8899', turno:'Noche',   activo:false },
];

let ventas = [
  { id:1001, cliente_id:1, items:[{prod_id:1,cantidad:10,precio:1490},{prod_id:5,cantidad:5,precio:890}], total:19350, fecha:'2025-05-10 09:30', estado:'picking',    motivo_anulacion:'' },
  { id:1002, cliente_id:2, items:[{prod_id:4,cantidad:20,precio:1290}],                                   total:25800, fecha:'2025-05-11 14:15', estado:'completada', motivo_anulacion:'' },
  { id:1003, cliente_id:3, items:[{prod_id:7,cantidad:3,precio:7990}],                                    total:23970, fecha:'2025-05-12 11:00', estado:'pendiente',  motivo_anulacion:'' },
  { id:1004, cliente_id:4, items:[{prod_id:6,cantidad:8,precio:2190}],                                    total:17520, fecha:'2025-05-13 16:45', estado:'anulada',    motivo_anulacion:'Cliente canceló la compra' },
];

let pickings = [
  { id:1, venta_id:1001, cliente_id:1, estado:'en_proceso', fecha:'2025-05-10' },
  { id:2, venta_id:1003, cliente_id:3, estado:'pendiente',  fecha:'2025-05-12' },
];

/* ================================================================
   UTILIDADES
================================================================ */
function kentoAlert(msg, tipo='success') {
  const box = document.getElementById('kento-alert');
  box.style.background = tipo==='success'?'#1f8b4c':tipo==='error'?'#da4e4e':'#e6a735';
  box.textContent = msg;
  box.classList.add('show');
  setTimeout(() => box.classList.remove('show'), 2800);
}
function estadoProd(p) {
  if(p.stock===0)                              return {key:'sin',   label:'Sin Stock',   cls:'badge-sin'  };
  if(p.stock<p.stock_minimo)                   return {key:'bajo',  label:'Stock Bajo',  cls:'badge-bajo' };
  if(p.stock_maximo>0&&p.stock>p.stock_maximo) return {key:'sobre', label:'Sobre Stock', cls:'badge-sobre'};
  return                                              {key:'ok',    label:'OK',          cls:'badge-ok'   };
}
function nomCliente(id){ const c=clientes.find(x=>x.id==id); return c?c.nombre:'—'; }
function nomProd(id)   { const p=productos.find(x=>x.id==id); return p?p.nombre:'—'; }
function fmtCLP(n)     { return '$'+(n||0).toLocaleString('es-CL'); }
function now()         { return new Date().toLocaleString('es-CL',{hour:'2-digit',minute:'2-digit'}); }
function abrirModal(id) { document.getElementById(id).classList.add('open'); }
function cerrarModal(id){ document.getElementById(id).classList.remove('open'); }
function cerrarModalOut(e,id){ if(e.target.classList.contains('kento-modal-overlay')) cerrarModal(id); }

/* ================================================================
   AUTH
================================================================ */
function openLoginModal(){ document.getElementById('loginModal').classList.add('open'); }
function openRegModal()  { document.getElementById('regModal').classList.add('open'); }
function closeAllModals(){ ['loginModal','regModal'].forEach(id=>document.getElementById(id).classList.remove('open')); }
function switchModal(){
  const l=document.getElementById('loginModal'), r=document.getElementById('regModal');
  if(l.classList.contains('open')){ l.classList.remove('open'); r.classList.add('open'); }
  else { r.classList.remove('open'); l.classList.add('open'); }
}
function doLogin(){
  const u=document.getElementById('loginUser').value.trim();
  const p=document.getElementById('loginPass').value;
  const alertEl=document.getElementById('loginAlert');
  const user=USERS.find(x=>x.username===u&&x.password===p);
  if(!user){ alertEl.innerHTML='<div class="lm-alert error">❌ Usuario o contraseña incorrectos.</div>'; return; }
  alertEl.innerHTML='<div class="lm-alert success">✅ Bienvenido '+user.nombre+'</div>';
  currentUser=user;
  setTimeout(()=>enterApp(), 900);
}
function doRegister(){
  const u=document.getElementById('regUser').value.trim();
  const n=document.getElementById('regNombre').value.trim();
  const p=document.getElementById('regPass').value;
  const p2=document.getElementById('regPass2').value;
  const alertEl=document.getElementById('regAlert');
  if(!u||!n){ alertEl.innerHTML='<div class="lm-alert error">❌ Completa los campos obligatorios.</div>'; return; }
  if(p!==p2){ alertEl.innerHTML='<div class="lm-alert error">❌ Las contraseñas no coinciden.</div>'; return; }
  USERS.push({id:USERS.length+1,username:u,password:p,nombre:n,apellido:document.getElementById('regApellido').value||'',role:'Operador',email:'',telefono:'',cargo:'Operador',avatar:''});
  alertEl.innerHTML='<div class="lm-alert success">✅ Usuario creado.</div>';
  setTimeout(()=>{ document.getElementById('regModal').classList.remove('open'); document.getElementById('loginModal').classList.add('open'); },1200);
}
function enterApp(){
  closeAllModals();
  document.getElementById('pageLogin').style.display='none';
  document.getElementById('pageApp').style.display='block';
  actualizarHeaderUsuario();
  navTo('dashboard');
}
function actualizarHeaderUsuario(){
  const nombre=(currentUser.nombre+' '+(currentUser.apellido||'')).trim();
  document.getElementById('userName').textContent=nombre;
  document.getElementById('userRoleDisplay').textContent=currentUser.role||'Conectado';
  const avatarEl=document.getElementById('userAvatar');
  if(currentUser.avatar){
    avatarEl.innerHTML=`<img src="${currentUser.avatar}" style="width:100%;height:100%;border-radius:50%;object-fit:cover;">`;
    avatarEl.style.background='transparent';
    avatarEl.style.fontSize='0';
  } else {
    avatarEl.innerHTML=nombre[0].toUpperCase();
    avatarEl.style.background='';
    avatarEl.style.fontSize='';
  }
}
function doLogout(){
  if(!confirm('¿Cerrar sesión?')) return;
  document.getElementById('pageApp').style.display='none';
  document.getElementById('pageLogin').style.display='flex';
  currentUser=null; chatHistory=[];
}

/* ================================================================
   PERFIL DE USUARIO
================================================================ */
function abrirPerfil(){
  if(!currentUser) return;
  document.getElementById('perfil_nombre').value   = currentUser.nombre    ||'';
  document.getElementById('perfil_apellido').value = currentUser.apellido  ||'';
  document.getElementById('perfil_email').value    = currentUser.email     ||'';
  document.getElementById('perfil_telefono').value = currentUser.telefono  ||'';
  document.getElementById('perfil_cargo').value    = currentUser.cargo     ||'';
  document.getElementById('perfil_username').value = currentUser.username  ||'';
  document.getElementById('perfil_pass').value     = '';
  document.getElementById('perfil_pass2').value    = '';
  const prev=document.getElementById('perfilAvatarPreview');
  prev.dataset.newAvatar='';
  if(currentUser.avatar){
    prev.innerHTML=`<img src="${currentUser.avatar}" style="width:80px;height:80px;border-radius:50%;object-fit:cover;border:3px solid var(--primary);">`;
  } else {
    const n=(currentUser.nombre+' '+(currentUser.apellido||'')).trim();
    prev.innerHTML=`<div class="profile-avatar-circle">${n[0].toUpperCase()}</div>`;
  }
  abrirModal('modalPerfil');
}
function cargarImagenPerfil(input){
  const file=input.files[0]; if(!file) return;
  if(!file.type.startsWith('image/')){ kentoAlert('Solo se permiten imágenes.','error'); return; }
  const reader=new FileReader();
  reader.onload=function(e){
    const prev=document.getElementById('perfilAvatarPreview');
    prev.innerHTML=`<img src="${e.target.result}" style="width:80px;height:80px;border-radius:50%;object-fit:cover;border:3px solid var(--primary);">`;
    prev.dataset.newAvatar=e.target.result;
  };
  reader.readAsDataURL(file);
}
function guardarPerfil(){
  const nombre=document.getElementById('perfil_nombre').value.trim();
  const apellido=document.getElementById('perfil_apellido').value.trim();
  const email=document.getElementById('perfil_email').value.trim();
  const telefono=document.getElementById('perfil_telefono').value.trim();
  const cargo=document.getElementById('perfil_cargo').value.trim();
  const pass=document.getElementById('perfil_pass').value;
  const pass2=document.getElementById('perfil_pass2').value;
  if(!nombre){ kentoAlert('El nombre es obligatorio.','error'); return; }
  if(pass&&pass!==pass2){ kentoAlert('Las contraseñas no coinciden.','error'); return; }
  const prev=document.getElementById('perfilAvatarPreview');
  if(prev.dataset.newAvatar) currentUser.avatar=prev.dataset.newAvatar;
  Object.assign(currentUser,{nombre,apellido,email,telefono,cargo});
  if(pass) currentUser.password=pass;
  const idx=USERS.findIndex(u=>u.id===currentUser.id);
  if(idx>=0) USERS[idx]={...USERS[idx],...currentUser};
  actualizarHeaderUsuario();
  cerrarModal('modalPerfil');
  kentoAlert('Perfil actualizado correctamente.');
}

/* ================================================================
   NAVEGACIÓN
================================================================ */
const titulos={dashboard:'Panel Administrativo',control:'Panel de Control',ventas:'Gestión de Ventas',picking:'Historial de Picking',inventario:'Gestión de Inventario',chatbot:'Kento Assistant'};
function navTo(section){
  document.querySelectorAll('.page-section').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.nav-item a').forEach(a=>a.classList.remove('active'));
  document.getElementById('sec-'+section).classList.add('active');
  const nav=document.getElementById('nav-'+section); if(nav) nav.classList.add('active');
  document.getElementById('headerTitle').textContent=titulos[section]||'';
  if(section==='dashboard')   cargarDashboard();
  if(section==='ventas')      renderVentas();
  if(section==='picking')     renderPicking();
  if(section==='inventario'){ renderInv(); calcKPIs(); }
  if(section==='control')     initControl();
}

/* ================================================================
   DASHBOARD
================================================================ */
function cargarDashboard(){
  const alertas=productos.filter(p=>estadoProd(p).key!=='ok');
  const activePick=pickings.filter(p=>p.estado!=='finalizado'&&p.estado!=='cancelado');
  document.getElementById('db-prod').textContent   = productos.length;
  document.getElementById('db-pick').textContent   = activePick.length;
  document.getElementById('db-alert').textContent  = alertas.length;
  document.getElementById('db-ventas').textContent = ventas.filter(v=>v.estado!=='anulada').length;

  const cont=document.getElementById('db-alertas-list');
  if(!alertas.length){ cont.innerHTML='<p class="kd-muted">✅ Todos los stocks están OK.</p>'; }
  else cont.innerHTML=alertas.map(p=>{
    const est=estadoProd(p);
    const cls=est.key==='sobre'?'kd-alert-warning':'kd-alert-danger';
    const icon=est.key==='sin'?'✕':est.key==='sobre'?'▲':'!';
    return `<div class="kd-alert ${cls}"><span class="kd-alert-icon">${icon}</span><div><strong>${p.nombre}</strong> — Stock: <strong>${p.stock}</strong> (mín:${p.stock_minimo}) <span class="badge ${est.cls}">${est.label}</span></div></div>`;
  }).join('');

  const tbody=document.getElementById('db-pickings-table');
  if(!activePick.length){ tbody.innerHTML='<tr><td colspan="5" class="kd-muted">No hay pickings activos.</td></tr>'; }
  else tbody.innerHTML=activePick.map(pk=>{
    const v=ventas.find(x=>x.id===pk.venta_id)||{};
    const items=(v.items||[]);
    return `<tr><td>${items.map(i=>nomProd(i.prod_id)).join(', ')}</td><td>${nomCliente(pk.cliente_id)}</td><td>${items.reduce((s,i)=>s+i.cantidad,0)}</td><td><span class="kento-badge ${pk.estado==='pendiente'?'kento-badge-pendiente':'kento-badge-proceso'}">${pk.estado}</span></td><td>${pk.fecha}</td></tr>`;
  }).join('');

  const ctx=document.getElementById('movChart').getContext('2d');
  if(movChart) movChart.destroy();
  movChart=new Chart(ctx,{type:'bar',data:{labels:['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],datasets:[{label:'Ventas',data:[12,19,8,15,22,10,18,25,14,20,16,23],backgroundColor:'rgba(37,109,103,.7)'},{label:'Mov. Inventario',data:[8,12,15,10,18,14,20,16,12,22,9,17],backgroundColor:'rgba(100,134,218,.7)'}]},options:{responsive:true,plugins:{legend:{position:'bottom'}},scales:{y:{beginAtZero:true}}}});
}

/* ================================================================
   VENTAS
================================================================ */
function renderVentas(){
  const sel=document.getElementById('ventaCliente');
  sel.innerHTML='<option value="">Seleccione cliente...</option>'+clientes.filter(c=>c.activo).map(c=>`<option value="${c.id}">${c.rut} - ${c.nombre}</option>`).join('');
  if(!document.getElementById('ventaItems').children.length){ document.getElementById('ventaItems').innerHTML=''; agregarItemVenta(); }
  filtrarVentas();
}
function filtrarVentas(){
  const txt=(document.getElementById('buscarVenta')||{}).value||'';
  const tbody=document.getElementById('tbodyVentas');
  const lista=txt?ventas.filter(v=>nomCliente(v.cliente_id).toLowerCase().includes(txt.toLowerCase())||String(v.id).includes(txt)):ventas;
  if(!lista.length){ tbody.innerHTML='<tr><td class="empty-row" colspan="6" style="display:table-cell;">No hay ventas.</td></tr>'; return; }
  tbody.innerHTML=lista.map(v=>{
    const est=v.estado;
    const badge=`<span class="badge badge-${est}">${est.charAt(0).toUpperCase()+est.slice(1)}</span>`;
    const btns=est!=='anulada'
      ?`<button class="kento-btn kento-btn-secondary" style="padding:6px 10px;" onclick="editarVenta(${v.id})"><i class="bi bi-pencil"></i></button><button class="kento-btn kento-btn-danger" style="padding:6px 10px;" onclick="pedirAnular(${v.id})"><i class="bi bi-x-circle"></i></button>`
      :`<button class="kento-btn kento-btn-success" style="padding:6px 10px;" onclick="reactivarVenta(${v.id})"><i class="bi bi-arrow-counterclockwise"></i></button>`;
    return `<tr><td><strong style="color:var(--primary)">#${v.id}</strong></td><td>${nomCliente(v.cliente_id)}</td><td>${fmtCLP(v.total)}</td><td style="font-size:.84rem;color:var(--text-soft)">${v.fecha}</td><td>${badge}</td><td>${btns}</td></tr>`;
  }).join('');
}
function agregarItemVenta(){
  const cont=document.getElementById('ventaItems');
  const opts=productos.map(p=>`<option value="${p.id}" data-precio="${p.precio}">${p.nombre} ($${p.precio.toLocaleString('es-CL')})</option>`).join('');
  const div=document.createElement('div');
  div.className='kento-product-row';
  div.innerHTML=`<div class="kento-field"><label>Producto</label><select class="erp-input venta-prod"><option value="">Seleccionar...</option>${opts}</select></div><div class="kento-field"><label>Cantidad</label><input type="number" class="erp-input venta-qty" min="1" value="1" oninput="calcTotalVenta()"></div><div class="kento-field"><label>Precio Unit.</label><input type="text" class="erp-input venta-precio" readonly placeholder="—"></div><div class="kento-field" style="justify-content:flex-end"><button type="button" class="kento-btn kento-btn-danger" style="margin-top:22px;" onclick="this.closest('.kento-product-row').remove();calcTotalVenta()"><i class="bi bi-trash"></i></button></div>`;
  div.querySelector('.venta-prod').addEventListener('change',function(){ const opt=this.selectedOptions[0]; const precio=opt?parseInt(opt.dataset.precio||0):0; this.closest('.kento-product-row').querySelector('.venta-precio').value=precio?'$'+precio.toLocaleString('es-CL'):''; calcTotalVenta(); });
  cont.appendChild(div);
}
function calcTotalVenta(){
  let total=0;
  document.querySelectorAll('#ventaItems .kento-product-row').forEach(row=>{ const sel=row.querySelector('.venta-prod'); const opt=sel.selectedOptions[0]; const precio=opt?parseInt(opt.dataset.precio||0):0; const qty=parseInt(row.querySelector('.venta-qty').value)||0; total+=precio*qty; });
  document.getElementById('totalVenta').textContent=total.toLocaleString('es-CL');
}
function registrarVenta(){
  const cid=parseInt(document.getElementById('ventaCliente').value); if(!cid){ kentoAlert('Seleccione un cliente.','warning'); return; }
  const items=[]; let total=0; let ok=true;
  document.querySelectorAll('#ventaItems .kento-product-row').forEach(row=>{ const sel=row.querySelector('.venta-prod'); const opt=sel.selectedOptions[0]; const pid=parseInt(sel.value); const qty=parseInt(row.querySelector('.venta-qty').value)||0; const precio=opt?parseInt(opt.dataset.precio||0):0; if(!pid||qty<1){ ok=false; return; } items.push({prod_id:pid,cantidad:qty,precio}); total+=precio*qty; });
  if(!ok||!items.length){ kentoAlert('Completa todos los productos.','warning'); return; }
  const id=nextVentaId++;
  ventas.unshift({id,cliente_id:cid,items,total,fecha:new Date().toLocaleString('es-CL'),estado:'pendiente',motivo_anulacion:''});
  pickings.push({id:pickings.length+1,venta_id:id,cliente_id:cid,estado:'pendiente',fecha:new Date().toLocaleDateString('es-CL')});
  cerrarModal('modalNuevaVenta'); document.getElementById('ventaItems').innerHTML=''; filtrarVentas();
  kentoAlert('Venta #'+id+' registrada.');
}
function pedirAnular(id){ document.getElementById('anularVentaId').value=id; abrirModal('modalAnular'); }
function confirmarAnular(){
  const id=parseInt(document.getElementById('anularVentaId').value); const motivo=document.getElementById('motivoAnular').value;
  const v=ventas.find(x=>x.id===id); if(v){ v.estado='anulada'; v.motivo_anulacion=motivo; }
  const pk=pickings.find(x=>x.venta_id===id); if(pk) pk.estado='cancelado';
  cerrarModal('modalAnular'); filtrarVentas(); kentoAlert('Venta anulada.','warning');
}
function reactivarVenta(id){ if(!confirm('¿Reactivar esta venta?')) return; const v=ventas.find(x=>x.id===id); if(v){ v.estado='pendiente'; v.motivo_anulacion=''; } filtrarVentas(); kentoAlert('Venta reactivada.'); }
function editarVenta(){ kentoAlert('Edición disponible en versión con backend.','warning'); }

/* ================================================================
   PICKING
================================================================ */
function renderPicking(){
  const tbody=document.getElementById('tbodyPicking');
  const visibles=pickings.filter(p=>p.estado!=='cancelado');
  if(!visibles.length){ tbody.innerHTML='<tr><td class="empty-row" colspan="6" style="display:table-cell;">No hay pickings.</td></tr>'; return; }
  tbody.innerHTML=visibles.map(pk=>{
    const v=ventas.find(x=>x.id===pk.venta_id)||{items:[],total:0};
    const badge=pk.estado==='pendiente'?`<span class="kento-badge kento-badge-pendiente"><i class="bi bi-clock"></i> Pendiente</span>`:pk.estado==='en_proceso'?`<span class="kento-badge kento-badge-proceso"><i class="bi bi-gear"></i> En Proceso</span>`:`<span class="kento-badge kento-badge-finalizado"><i class="bi bi-check-circle"></i> Finalizado</span>`;
    const btns=pk.estado==='pendiente'?`<button class="kento-btn kento-btn-success" onclick="cambiarEstadoPick(${pk.id},'en_proceso')">Iniciar</button>`:pk.estado==='en_proceso'?`<button class="kento-btn kento-btn-primary" onclick="cambiarEstadoPick(${pk.id},'finalizado')">Finalizar</button>`:'';
    const items=(v.items||[]).map(i=>`${nomProd(i.prod_id)} ×${i.cantidad}`).join(', ');
    return `<tr><td><strong style="color:var(--primary)">Venta #${pk.venta_id}</strong></td><td>${nomCliente(pk.cliente_id)}</td><td style="font-size:.83rem;color:var(--text-soft);text-align:left">${items}</td><td>${fmtCLP(v.total)}</td><td>${badge}</td><td>${btns}</td></tr>`;
  }).join('');
}
function cambiarEstadoPick(id,nuevoEstado){
  const pk=pickings.find(x=>x.id===id); if(!pk) return;
  pk.estado=nuevoEstado;
  if(nuevoEstado==='finalizado'){ const v=ventas.find(x=>x.id===pk.venta_id); if(v) v.estado='completada'; }
  renderPicking(); kentoAlert('Estado actualizado: '+nuevoEstado);
}

/* ================================================================
   INVENTARIO — Vista Producto y Vista Ubicación
================================================================ */
function calcKPIs(){
  document.getElementById('kpiTotal').textContent    = productos.length;
  document.getElementById('kpiUnidades').textContent = productos.reduce((s,p)=>s+p.stock,0).toLocaleString('es-CL');
  document.getElementById('kpiBajo').textContent     = productos.filter(p=>p.stock>0&&p.stock<p.stock_minimo).length;
  document.getElementById('kpiSinStock').textContent = productos.filter(p=>p.stock===0).length;
}

function setInvMode(mode){
  invMode=mode;
  document.querySelectorAll('.inv-mode-btn').forEach(b=>b.classList.remove('active'));
  document.querySelector(`.inv-mode-btn[data-mode="${mode}"]`).classList.add('active');
  document.getElementById('inv-table-area').style.display  = mode==='producto'  ?'':'none';
  document.getElementById('ubicacion-view').style.display  = mode==='ubicacion' ?'block':'none';
  document.getElementById('buscadorInv').placeholder = mode==='producto'?'🔍 Buscar por nombre, EAN...':'🔍 Buscar por ubicación, pasillo, zona...';
  filtrarInv();
}

function renderInv(lista){
  if(!lista) lista=productos;
  if(invMode==='ubicacion'){ renderInvUbicacion(lista); return; }
  const tbody=document.getElementById('tbodyInv');
  if(!lista.length){ tbody.innerHTML='<tr><td class="empty-row" colspan="9" style="display:table-cell;">No hay productos.</td></tr>'; return; }
  tbody.innerHTML='';
  lista.forEach(p=>{
    const est=estadoProd(p);
    const pct=p.stock_maximo>0?Math.min(100,Math.round(p.stock/p.stock_maximo*100)):50;
    const col=est.key==='sin'?'#aaa':est.key==='bajo'?'#da4e4e':est.key==='sobre'?'#e6a735':'#256d67';
    const tr=document.createElement('tr');
    tr.dataset.estado=est.key;
    tr.dataset.texto=(p.ean+p.nombre+p.ubicacion).toLowerCase();
    tr.innerHTML=`<td><code style="font-size:.8rem;color:#555">${p.ean}</code></td><td style="text-align:left;font-weight:600">${p.nombre}</td><td><span class="ubic-tag">${p.ubicacion}</span></td><td><strong>${p.stock.toLocaleString('es-CL')}</strong><div class="stock-bar-wrap"><div class="stock-bar-fill" style="width:${pct}%;background:${col}"></div></div></td><td style="color:var(--text-soft)">${p.stock_minimo}</td><td style="color:var(--text-soft)">${p.stock_maximo||'—'}</td><td><span class="badge ${est.cls}">${est.label}</span></td><td>${fmtCLP(p.precio)}</td><td><button class="kento-btn kento-btn-secondary" style="padding:6px 10px" onclick="editarProd(${p.id})"><i class="bi bi-pencil-square"></i></button><button class="kento-btn kento-btn-danger" style="padding:6px 10px" onclick="eliminarProd(${p.id})"><i class="bi bi-trash3"></i></button></td>`;
    tbody.appendChild(tr);
  });
  const sel=document.getElementById('movProducto');
  sel.innerHTML='<option value="">Seleccione producto...</option>'+productos.map(p=>`<option value="${p.id}">${p.nombre} (Stock: ${p.stock})</option>`).join('');
}

function renderInvUbicacion(lista){
  if(!lista) lista=productos;
  const cont=document.getElementById('ubicacion-view');
  if(!lista.length){ cont.innerHTML='<p class="kd-muted" style="padding:24px;text-align:center">No se encontraron productos.</p>'; return; }
  // Agrupar por zona (ej: NV1-A, NV2-B)
  const grupos={};
  lista.forEach(p=>{ const zona=p.ubicacion.split('-').slice(0,2).join('-'); if(!grupos[zona]) grupos[zona]=[]; grupos[zona].push(p); });
  const zonas=Object.keys(grupos).sort();
  cont.innerHTML=zonas.map(zona=>{
    const prods=grupos[zona];
    const nalerts=prods.filter(p=>estadoProd(p).key!=='ok').length;
    const alertaBadge=nalerts?`<span class="badge badge-bajo">${nalerts} alerta${nalerts>1?'s':''}</span>`:`<span class="badge badge-ok">OK</span>`;
    return `<div class="ubicacion-card">
      <div class="ubicacion-card-header">
        <i class="bi bi-geo-alt-fill" style="color:var(--primary);font-size:1.1rem;"></i>
        <span class="ubicacion-badge">${zona}</span>
        <span style="font-size:.85rem;color:var(--text-soft);flex:1">${prods.length} producto(s) en esta zona</span>
        ${alertaBadge}
      </div>
      <div class="kento-table-wrapper">
        <table class="kento-table" style="min-width:540px">
          <thead><tr><th>Posición Exacta</th><th>EAN</th><th>Nombre</th><th>Stock Actual</th><th>Mín</th><th>Estado</th><th>Acciones</th></tr></thead>
          <tbody>${prods.sort((a,b)=>a.ubicacion.localeCompare(b.ubicacion)).map(p=>{
            const est=estadoProd(p);
            const pct=p.stock_maximo>0?Math.min(100,Math.round(p.stock/p.stock_maximo*100)):50;
            const col=est.key==='sin'?'#aaa':est.key==='bajo'?'#da4e4e':est.key==='sobre'?'#e6a735':'#256d67';
            return `<tr>
              <td><span class="ubic-tag ubic-exact">${p.ubicacion}</span></td>
              <td><code style="font-size:.78rem">${p.ean}</code></td>
              <td style="text-align:left;font-weight:600">${p.nombre}</td>
              <td><strong>${p.stock}</strong><div class="stock-bar-wrap"><div class="stock-bar-fill" style="width:${pct}%;background:${col}"></div></div></td>
              <td style="color:var(--text-soft)">${p.stock_minimo}</td>
              <td><span class="badge ${est.cls}">${est.label}</span></td>
              <td><button class="kento-btn kento-btn-secondary" style="padding:5px 9px" onclick="editarProd(${p.id})"><i class="bi bi-pencil-square"></i></button><button class="kento-btn kento-btn-danger" style="padding:5px 9px" onclick="eliminarProd(${p.id})"><i class="bi bi-trash3"></i></button></td>
            </tr>`;
          }).join('')}</tbody>
        </table>
      </div>
    </div>`;
  }).join('');
}

function filtrarInv(){
  const txt=document.getElementById('buscadorInv').value.toLowerCase().trim();
  const est=document.getElementById('filtroEstado').value;
  if(invMode==='producto'){
    document.querySelectorAll('#tbodyInv tr[data-estado]').forEach(tr=>{
      const mt=!txt||tr.dataset.texto.includes(txt);
      const me=!est||tr.dataset.estado===est;
      tr.style.display=mt&&me?'':'none';
    });
  } else {
    const lista=productos.filter(p=>{ const mt=!txt||(p.ean+p.nombre+p.ubicacion+p.descripcion).toLowerCase().includes(txt); const me=!est||estadoProd(p).key===est; return mt&&me; });
    renderInvUbicacion(lista);
  }
}

function mostrarTabInv(nombre){
  ['tabLista','tabAlertas','tabMovInv'].forEach(id=>{ const el=document.getElementById(id); if(el) el.style.display='none'; });
  document.querySelectorAll('#sec-inventario .erp-tab').forEach(t=>t.classList.remove('active'));
  document.getElementById(nombre).style.display='block';
  const idx=['tabLista','tabAlertas','tabMovInv'].indexOf(nombre);
  document.querySelectorAll('#sec-inventario .erp-tab')[idx].classList.add('active');
  if(nombre==='tabAlertas') renderAlertas();
  if(nombre==='tabMovInv'){ const s=document.getElementById('movProducto'); s.innerHTML='<option value="">Seleccione producto...</option>'+productos.map(p=>`<option value="${p.id}">${p.nombre} (Stock:${p.stock})</option>`).join(''); }
  if(nombre==='tabLista'){ renderInv(); calcKPIs(); }
}

function renderAlertas(){
  const cont=document.getElementById('alertasContainer');
  const prob=productos.filter(p=>estadoProd(p).key!=='ok');
  if(!prob.length){ cont.innerHTML='<div style="text-align:center;padding:28px;color:var(--text-soft)"><i class="bi bi-check-circle-fill" style="font-size:2rem;color:var(--primary)"></i><p style="margin-top:10px">Todos los stocks están dentro de los límites.</p></div>'; return; }
  cont.innerHTML=prob.map(p=>{
    const est=estadoProd(p); const icon=est.key==='sin'?'✕':est.key==='sobre'?'▲':'!'; const cls=est.key==='sobre'?'kd-alert-warning':'kd-alert-danger';
    return `<div class="kd-alert ${cls}"><span class="kd-alert-icon">${icon}</span><div><strong>${p.nombre}</strong> — <span class="ubic-tag">${p.ubicacion}</span> — Stock: <strong>${p.stock}</strong> (mín:${p.stock_minimo}${p.stock_maximo?', máx:'+p.stock_maximo:''}) <span class="badge ${est.cls}">${est.label}</span></div></div>`;
  }).join('');
}

function abrirModalProducto(){
  document.getElementById('edit_id').value='';
  document.getElementById('modalProdTitulo').innerHTML='<i class="bi bi-plus-circle"></i> Nuevo Producto';
  ['f_ean','f_dun','f_nombre','f_descripcion','f_precio','f_ubicacion','f_stock','f_stock_minimo','f_stock_maximo'].forEach(x=>document.getElementById(x).value='');
  abrirModal('modalProducto');
}
function editarProd(id){
  const p=productos.find(x=>x.id===id); if(!p) return;
  document.getElementById('edit_id').value=p.id;
  document.getElementById('modalProdTitulo').innerHTML='<i class="bi bi-pencil-square"></i> Editar Producto';
  document.getElementById('f_ean').value=p.ean; document.getElementById('f_dun').value=p.dun; document.getElementById('f_nombre').value=p.nombre; document.getElementById('f_descripcion').value=p.descripcion; document.getElementById('f_precio').value=p.precio; document.getElementById('f_ubicacion').value=p.ubicacion; document.getElementById('f_stock').value=p.stock; document.getElementById('f_stock_minimo').value=p.stock_minimo; document.getElementById('f_stock_maximo').value=p.stock_maximo;
  abrirModal('modalProducto');
}
function guardarProducto(){
  const id=document.getElementById('edit_id').value; const ean=document.getElementById('f_ean').value.trim(); const nombre=document.getElementById('f_nombre').value.trim(); const ubic=document.getElementById('f_ubicacion').value.trim();
  if(!ean||!nombre||!ubic){ kentoAlert('EAN, Nombre y Ubicación son obligatorios.','warning'); return; }
  const datos={ean,dun:document.getElementById('f_dun').value.trim(),nombre,descripcion:document.getElementById('f_descripcion').value.trim(),precio:parseFloat(document.getElementById('f_precio').value)||0,ubicacion:ubic,stock:parseInt(document.getElementById('f_stock').value)||0,stock_minimo:parseInt(document.getElementById('f_stock_minimo').value)||0,stock_maximo:parseInt(document.getElementById('f_stock_maximo').value)||0};
  if(id){ const idx=productos.findIndex(p=>p.id==id); productos[idx]={...productos[idx],...datos}; kentoAlert('Producto actualizado.'); }
  else  { datos.id=nextProdId++; productos.push(datos); kentoAlert('Producto registrado.'); }
  cerrarModal('modalProducto'); renderInv(); calcKPIs();
}
function eliminarProd(id){ if(!confirm('¿Eliminar este producto?')) return; productos=productos.filter(p=>p.id!==id); renderInv(); calcKPIs(); kentoAlert('Producto eliminado.','warning'); }

function aplicarMovimiento(){
  const pid=parseInt(document.getElementById('movProducto').value); const tipo=document.getElementById('movTipo').value; const cantidad=parseInt(document.getElementById('movCantidad').value); const motivo=document.getElementById('movMotivo').value.trim();
  if(!pid){ kentoAlert('Seleccione un producto.','warning'); return; } if(!cantidad||cantidad<1){ kentoAlert('Cantidad inválida.','warning'); return; }
  const prod=productos.find(p=>p.id===pid); if(!prod) return;
  if(tipo==='entrada') prod.stock+=cantidad;
  else if(tipo==='salida'){ if(cantidad>prod.stock){ kentoAlert('Stock insuficiente.','error'); return; } prod.stock-=cantidad; }
  else prod.stock=cantidad;
  historialMov.unshift({hora:now(),producto:prod.nombre,tipo:tipo==='entrada'?'Entrada':tipo==='salida'?'Salida':'Ajuste',cantidad,stockRes:prod.stock,motivo:motivo||'Sin especificar'});
  renderHistorial(); renderInv(); calcKPIs(); kentoAlert(`${prod.nombre} → Stock: ${prod.stock} u.`); limpiarMovimiento();
}
function limpiarMovimiento(){ document.getElementById('movProducto').value=''; document.getElementById('movTipo').value='entrada'; document.getElementById('movCantidad').value=1; document.getElementById('movMotivo').value=''; }
function renderHistorial(){
  const tbody=document.getElementById('tbodyHistorial');
  if(!historialMov.length){ tbody.innerHTML='<tr><td class="empty-row" colspan="6" style="display:table-cell;">Sin movimientos.</td></tr>'; return; }
  tbody.innerHTML=historialMov.slice(0,20).map(h=>{ const col=h.tipo==='Entrada'?'var(--success)':h.tipo==='Salida'?'var(--danger)':'var(--accent)'; return `<tr><td style="font-size:.82rem;color:var(--text-soft)">${h.hora}</td><td style="text-align:left;font-weight:600">${h.producto}</td><td><span style="color:${col};font-weight:700">${h.tipo}</span></td><td>${h.tipo==='Ajuste'?'=':h.tipo==='Entrada'?'+':'−'}${h.cantidad}</td><td><strong>${h.stockRes}</strong></td><td style="font-size:.84rem;color:var(--text-soft)">${h.motivo}</td></tr>`; }).join('');
}
function exportarCSV(){
  const cols=['EAN','DUN','Nombre','Descripción','Precio','Ubicación','Stock','Mín','Máx','Estado'];
  const rows=productos.map(p=>[p.ean,p.dun,`"${p.nombre}"`,`"${p.descripcion}"`,p.precio,p.ubicacion,p.stock,p.stock_minimo,p.stock_maximo,estadoProd(p).label].join(','));
  const csv=[cols.join(','),...rows].join('\n');
  const a=document.createElement('a'); a.href=URL.createObjectURL(new Blob(['\uFEFF'+csv],{type:'text/csv;charset=utf-8;'})); a.download='inventario_kento.csv'; a.click(); kentoAlert('CSV exportado.');
}

/* ================================================================
   PANEL DE CONTROL — Clientes, Productos, Personal
================================================================ */
function initControl(){
  document.getElementById('ctrl-users').textContent = USERS.length;
  document.getElementById('ctrl-kpi-clientes').textContent  = clientes.filter(c=>c.activo).length;
  document.getElementById('ctrl-kpi-personal').textContent  = personal.filter(p=>p.activo).length;
  document.getElementById('ctrl-kpi-productos').textContent = productos.length;
  renderCtrlClientes();
  renderCtrlPersonal();
  renderCtrlProductos();
}

function mostrarTabControl(tab){
  document.querySelectorAll('.ctrl-section').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.ctrl-tab').forEach(t=>t.classList.remove('active'));
  const el=document.getElementById('ctrl-'+tab); if(el) el.classList.add('active');
  const mapa={herramientas:0,clientes:1,productos:2,personal:3};
  const tabs=document.querySelectorAll('.ctrl-tab'); if(tabs[mapa[tab]]) tabs[mapa[tab]].classList.add('active');
}

/* ---- CLIENTES ---- */
function renderCtrlClientes(){
  const tbody=document.getElementById('tbodyCtrlClientes'); if(!tbody) return;
  const txt=(document.getElementById('buscarCliente')||{}).value||'';
  const fil=(document.getElementById('filtroCliente')||{}).value||'';
  let lista=txt?clientes.filter(c=>(c.nombre+c.rut+c.email).toLowerCase().includes(txt.toLowerCase())):[...clientes];
  if(fil==='activo')   lista=lista.filter(c=>c.activo);
  if(fil==='inactivo') lista=lista.filter(c=>!c.activo);
  if(!lista.length){ tbody.innerHTML='<tr><td class="empty-row" colspan="7" style="display:table-cell;">Sin clientes.</td></tr>'; return; }
  tbody.innerHTML=lista.map(c=>`<tr>
    <td style="font-size:.82rem;color:#555;font-family:monospace">${c.rut}</td>
    <td style="text-align:left;font-weight:600">${c.nombre}</td>
    <td style="font-size:.84rem">${c.email||'—'}</td>
    <td style="font-size:.84rem">${c.telefono||'—'}</td>
    <td style="font-size:.83rem;color:var(--text-soft);max-width:180px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${c.direccion||'—'}</td>
    <td><span class="badge ${c.activo?'badge-activo':'badge-inactivo'}">${c.activo?'Activo':'Inactivo'}</span></td>
    <td>
      <button class="kento-btn kento-btn-secondary" style="padding:5px 9px" title="Editar" onclick="editarCliente(${c.id})"><i class="bi bi-pencil"></i></button>
      <button class="kento-btn ${c.activo?'kento-btn-warning':'kento-btn-success'}" style="padding:5px 9px" title="${c.activo?'Desactivar':'Activar'}" onclick="toggleCliente(${c.id})"><i class="bi bi-${c.activo?'pause-circle':'play-circle'}"></i></button>
      <button class="kento-btn kento-btn-danger" style="padding:5px 9px" title="Eliminar" onclick="eliminarCliente(${c.id})"><i class="bi bi-trash3"></i></button>
    </td>
  </tr>`).join('');
}
function abrirNuevoCliente(){ document.getElementById('edit_cliente_id').value=''; document.getElementById('modalClienteTitulo').innerHTML='<i class="bi bi-person-plus"></i> Nuevo Cliente'; ['c_rut','c_nombre','c_email','c_telefono','c_direccion'].forEach(id=>document.getElementById(id).value=''); abrirModal('modalCliente'); }
function editarCliente(id){ const c=clientes.find(x=>x.id===id); if(!c) return; document.getElementById('edit_cliente_id').value=c.id; document.getElementById('modalClienteTitulo').innerHTML='<i class="bi bi-pencil"></i> Editar Cliente'; document.getElementById('c_rut').value=c.rut; document.getElementById('c_nombre').value=c.nombre; document.getElementById('c_email').value=c.email||''; document.getElementById('c_telefono').value=c.telefono||''; document.getElementById('c_direccion').value=c.direccion||''; abrirModal('modalCliente'); }
function guardarCliente(){ const id=document.getElementById('edit_cliente_id').value; const rut=document.getElementById('c_rut').value.trim(); const nombre=document.getElementById('c_nombre').value.trim(); if(!rut||!nombre){ kentoAlert('RUT y Nombre son obligatorios.','warning'); return; } const datos={rut,nombre,email:document.getElementById('c_email').value.trim(),telefono:document.getElementById('c_telefono').value.trim(),direccion:document.getElementById('c_direccion').value.trim()}; if(id){ const idx=clientes.findIndex(c=>c.id==id); clientes[idx]={...clientes[idx],...datos}; kentoAlert('Cliente actualizado.'); } else { clientes.push({id:nextClienteId++,...datos,activo:true}); kentoAlert('Cliente registrado.'); } cerrarModal('modalCliente'); renderCtrlClientes(); document.getElementById('ctrl-kpi-clientes').textContent=clientes.filter(c=>c.activo).length; }
function toggleCliente(id){ const c=clientes.find(x=>x.id===id); if(!c) return; c.activo=!c.activo; renderCtrlClientes(); document.getElementById('ctrl-kpi-clientes').textContent=clientes.filter(c=>c.activo).length; kentoAlert(`Cliente ${c.activo?'activado':'desactivado'}.`,'warning'); }
function eliminarCliente(id){ if(!confirm('¿Eliminar este cliente?')) return; clientes=clientes.filter(c=>c.id!==id); renderCtrlClientes(); document.getElementById('ctrl-kpi-clientes').textContent=clientes.filter(c=>c.activo).length; kentoAlert('Cliente eliminado.','warning'); }

/* ---- PERSONAL ---- */
function renderCtrlPersonal(){
  const tbody=document.getElementById('tbodyCtrlPersonal'); if(!tbody) return;
  const txt=(document.getElementById('buscarPersonal')||{}).value||'';
  const fil=(document.getElementById('filtroPersonal')||{}).value||'';
  let lista=txt?personal.filter(p=>(p.nombre+' '+p.apellido+p.rut+p.cargo).toLowerCase().includes(txt.toLowerCase())):[...personal];
  if(fil==='activo')   lista=lista.filter(p=>p.activo);
  if(fil==='inactivo') lista=lista.filter(p=>!p.activo);
  if(!lista.length){ tbody.innerHTML='<tr><td class="empty-row" colspan="7" style="display:table-cell;">Sin personal.</td></tr>'; return; }
  tbody.innerHTML=lista.map(p=>`<tr>
    <td style="font-size:.82rem;color:#555;font-family:monospace">${p.rut}</td>
    <td style="text-align:left;font-weight:600">${p.nombre} ${p.apellido}</td>
    <td>${p.cargo}</td>
    <td style="font-size:.84rem">${p.email||'—'}</td>
    <td><span class="kento-badge ${p.turno==='Mañana'?'kento-badge-finalizado':p.turno==='Tarde'?'kento-badge-proceso':p.turno==='Noche'?'kento-badge-pendiente':'kento-badge-proceso'}">${p.turno}</span></td>
    <td><span class="badge ${p.activo?'badge-activo':'badge-inactivo'}">${p.activo?'Activo':'Inactivo'}</span></td>
    <td>
      <button class="kento-btn kento-btn-secondary" style="padding:5px 9px" title="Editar" onclick="editarPersonal(${p.id})"><i class="bi bi-pencil"></i></button>
      <button class="kento-btn ${p.activo?'kento-btn-warning':'kento-btn-success'}" style="padding:5px 9px" title="${p.activo?'Desactivar':'Activar'}" onclick="togglePersonal(${p.id})"><i class="bi bi-${p.activo?'pause-circle':'play-circle'}"></i></button>
      <button class="kento-btn kento-btn-danger" style="padding:5px 9px" title="Eliminar" onclick="eliminarPersonal(${p.id})"><i class="bi bi-trash3"></i></button>
    </td>
  </tr>`).join('');
}
function abrirNuevoPersonal(){ document.getElementById('edit_personal_id').value=''; document.getElementById('modalPersonalTitulo').innerHTML='<i class="bi bi-person-badge"></i> Nuevo Personal'; ['p_rut','p_nombre','p_apellido','p_cargo','p_email','p_telefono'].forEach(id=>document.getElementById(id).value=''); document.getElementById('p_turno').value='Mañana'; abrirModal('modalPersonal'); }
function editarPersonal(id){ const p=personal.find(x=>x.id===id); if(!p) return; document.getElementById('edit_personal_id').value=p.id; document.getElementById('modalPersonalTitulo').innerHTML='<i class="bi bi-pencil"></i> Editar Personal'; document.getElementById('p_rut').value=p.rut; document.getElementById('p_nombre').value=p.nombre; document.getElementById('p_apellido').value=p.apellido; document.getElementById('p_cargo').value=p.cargo; document.getElementById('p_email').value=p.email||''; document.getElementById('p_telefono').value=p.telefono||''; document.getElementById('p_turno').value=p.turno||'Mañana'; abrirModal('modalPersonal'); }
function guardarPersonal(){ const id=document.getElementById('edit_personal_id').value; const rut=document.getElementById('p_rut').value.trim(); const nombre=document.getElementById('p_nombre').value.trim(); const cargo=document.getElementById('p_cargo').value.trim(); if(!rut||!nombre||!cargo){ kentoAlert('RUT, Nombre y Cargo son obligatorios.','warning'); return; } const datos={rut,nombre,apellido:document.getElementById('p_apellido').value.trim(),cargo,email:document.getElementById('p_email').value.trim(),telefono:document.getElementById('p_telefono').value.trim(),turno:document.getElementById('p_turno').value}; if(id){ const idx=personal.findIndex(p=>p.id==id); personal[idx]={...personal[idx],...datos}; kentoAlert('Personal actualizado.'); } else { personal.push({id:nextPersonalId++,...datos,activo:true}); kentoAlert('Personal registrado.'); } cerrarModal('modalPersonal'); renderCtrlPersonal(); document.getElementById('ctrl-kpi-personal').textContent=personal.filter(p=>p.activo).length; }
function togglePersonal(id){ const p=personal.find(x=>x.id===id); if(!p) return; p.activo=!p.activo; renderCtrlPersonal(); document.getElementById('ctrl-kpi-personal').textContent=personal.filter(p=>p.activo).length; kentoAlert(`Personal ${p.activo?'activado':'desactivado'}.`,'warning'); }
function eliminarPersonal(id){ if(!confirm('¿Eliminar este registro?')) return; personal=personal.filter(p=>p.id!==id); renderCtrlPersonal(); document.getElementById('ctrl-kpi-personal').textContent=personal.filter(p=>p.activo).length; kentoAlert('Personal eliminado.','warning'); }

/* ---- PRODUCTOS EN CONTROL ---- */
function renderCtrlProductos(){
  const tbody=document.getElementById('tbodyCtrlProductos'); if(!tbody) return;
  const txt=(document.getElementById('buscarCtrlProd')||{}).value||'';
  const fil=(document.getElementById('filtroCtrlProd')||{}).value||'';
  let lista=txt?productos.filter(p=>(p.nombre+p.ean+p.ubicacion).toLowerCase().includes(txt.toLowerCase())):[...productos];
  if(fil) lista=lista.filter(p=>estadoProd(p).key===fil);
  if(!lista.length){ tbody.innerHTML='<tr><td class="empty-row" colspan="7" style="display:table-cell;">Sin productos.</td></tr>'; return; }
  tbody.innerHTML=lista.map(p=>{ const est=estadoProd(p); return `<tr>
    <td><code style="font-size:.8rem">${p.ean}</code></td>
    <td style="text-align:left;font-weight:600">${p.nombre}</td>
    <td><span class="ubic-tag">${p.ubicacion}</span></td>
    <td><strong>${p.stock}</strong> <span style="color:var(--text-soft);font-size:.82rem">/ mín ${p.stock_minimo}</span></td>
    <td>${fmtCLP(p.precio)}</td>
    <td><span class="badge ${est.cls}">${est.label}</span></td>
    <td>
      <button class="kento-btn kento-btn-secondary" style="padding:5px 9px" onclick="editarProd(${p.id})"><i class="bi bi-pencil"></i></button>
      <button class="kento-btn kento-btn-danger" style="padding:5px 9px" onclick="eliminarProdCtrl(${p.id})"><i class="bi bi-trash3"></i></button>
    </td>
  </tr>`; }).join('');
  document.getElementById('ctrl-kpi-productos').textContent=productos.length;
}
function eliminarProdCtrl(id){ if(!confirm('¿Eliminar este producto?')) return; productos=productos.filter(p=>p.id!==id); renderCtrlProductos(); document.getElementById('ctrl-kpi-productos').textContent=productos.length; kentoAlert('Producto eliminado.','warning'); }

/* ================================================================
   CHATBOT
================================================================ */
function addChatMsg(text,role){ const msgs=document.getElementById('chatMessages'); const div=document.createElement('div'); div.className='msg '+role; div.innerHTML=`<div class="msg-bubble">${text}</div><div class="msg-time">${now()}</div>`; msgs.appendChild(div); msgs.scrollTop=msgs.scrollHeight; }
function showTyping(){ const msgs=document.getElementById('chatMessages'); const div=document.createElement('div'); div.className='msg bot'; div.id='typingIndicator'; div.innerHTML=`<div class="msg-bubble"><div class="typing-dots"><span></span><span></span><span></span></div></div>`; msgs.appendChild(div); msgs.scrollTop=msgs.scrollHeight; }
function removeTyping(){ const t=document.getElementById('typingIndicator'); if(t) t.remove(); }

async function sendChat(){
  const input=document.getElementById('chatInput'); const text=input.value.trim(); if(!text) return;
  input.value=''; addChatMsg(text,'user'); chatHistory.push({role:'user',content:text}); showTyping();
  const systemPrompt=`Eres Kento Assistant, el asistente IA integrado en el sistema ERP Kento.\nINVENTARIO (${productos.length} productos):\n${productos.map(p=>`- ${p.nombre}: stock=${p.stock}, mín=${p.stock_minimo}, ubicación=${p.ubicacion}`).join('\n')}\nVENTAS: ${ventas.length} total, ${ventas.filter(v=>v.estado!=='anulada').length} activas.\nCLIENTES: ${clientes.filter(c=>c.activo).length} activos de ${clientes.length}.\nPERSONAL: ${personal.filter(p=>p.activo).length} activos de ${personal.length}.\nPICKINGS ACTIVOS: ${pickings.filter(p=>p.estado!=='finalizado'&&p.estado!=='cancelado').length}.\nALERTAS STOCK: ${productos.filter(p=>estadoProd(p).key!=='ok').length} productos con problemas.\nResponde en español, conciso y útil.`;
  try {
    const response=await fetch('https://api.anthropic.com/v1/messages',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'claude-sonnet-4-20250514',max_tokens:1000,system:systemPrompt,messages:chatHistory})});
    const data=await response.json(); removeTyping();
    const reply=data.content&&data.content[0]?data.content[0].text:'No pude procesar tu consulta.';
    chatHistory.push({role:'assistant',content:reply});
    addChatMsg(reply.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/\n/g,'<br>'),'bot');
  } catch(err){
    removeTyping();
    addChatMsg(getFallbackResponse(text),'bot');
  }
}
function getFallbackResponse(text){
  const t=text.toLowerCase();
  if(t.includes('stock')||t.includes('inventario')){ const b=productos.filter(p=>estadoProd(p).key==='bajo'); const s=productos.filter(p=>p.stock===0); return `📦 <strong>Inventario:</strong> ${productos.length} productos. Sin stock: ${s.length} | Bajo: ${b.length}${b.length?'<br>⚠️ '+b.map(p=>p.nombre).join(', '):''}`;  }
  if(t.includes('venta')){ const a=ventas.filter(v=>v.estado!=='anulada'); return `💰 <strong>Ventas:</strong> ${ventas.length} total, ${a.length} activas. Total: ${fmtCLP(a.reduce((s,v)=>s+v.total,0))}`; }
  if(t.includes('cliente')){ return `👥 <strong>Clientes:</strong> ${clientes.length} total, ${clientes.filter(c=>c.activo).length} activos.`; }
  if(t.includes('personal')||t.includes('empleado')){ return `👤 <strong>Personal:</strong> ${personal.length} total, ${personal.filter(p=>p.activo).length} activos.`; }
  if(t.includes('picking')){ return `🚚 <strong>Pickings activos:</strong> ${pickings.filter(p=>p.estado!=='finalizado'&&p.estado!=='cancelado').length} en proceso.`; }
  return '👋 Puedo ayudarte con inventario, ventas, clientes, personal o pickings. ¿Qué necesitas?';
}

/* ================================================================
   INIT
================================================================ */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('chatInput').addEventListener('keydown', e=>{ if(e.key==='Enter'&&!e.shiftKey){ e.preventDefault(); sendChat(); } });
});