/* ══════════════════════════════════════
   MDS PORTAL — APP JAVASCRIPT
══════════════════════════════════════ */

// ── DATA ──────────────────────────────
const TEAM = [
  { id:1,  name:'Ana Torres',    role:'Senior Frontend Dev', area:'dev',    img:'https://i.pravatar.cc/150?img=5',  email:'a.torres@mds.cl',  projects:6 },
  { id:2,  name:'Marco Silva',   role:'Backend Engineer',    area:'dev',    img:'https://i.pravatar.cc/150?img=8',  email:'m.silva@mds.cl',   projects:4 },
  { id:3,  name:'Valeria López', role:'UX/UI Designer',      area:'design', img:'https://i.pravatar.cc/150?img=15', email:'v.lopez@mds.cl',   projects:5 },
  { id:4,  name:'Diego Muñoz',   role:'Project Manager',     area:'pm',     img:'https://i.pravatar.cc/150?img=22', email:'d.munoz@mds.cl',   projects:8 },
  { id:5,  name:'Sofía Reyes',   role:'Full Stack Dev',      area:'dev',    img:'https://i.pravatar.cc/150?img=3',  email:'s.reyes@mds.cl',   projects:3 },
  { id:6,  name:'Fernando  Arriaza',   role:'Administrador',       area:'pm',     img:'https://raw.githubusercontent.com/Farriaza/img/main/yo1.jpg', email:'f.arriaza@mds.cl',    projects:10 },
  { id:7,  name:'Fernanda Ríos', role:'Visual Designer',     area:'design', img:'https://i.pravatar.cc/150?img=9',  email:'f.rios@mds.cl',    projects:4 },
  { id:8,  name:'Pablo Castro',  role:'DevOps Engineer',     area:'dev',    img:'https://i.pravatar.cc/150?img=11', email:'p.castro@mds.cl',  projects:5 },
  { id:9,  name:'Ignacia Bravo', role:'QA Analyst',          area:'dev',    img:'https://i.pravatar.cc/150?img=18', email:'i.bravo@mds.cl',   projects:3 },
  { id:10, name:'Tomás Herrera', role:'Scrum Master',        area:'pm',     img:'https://i.pravatar.cc/150?img=33', email:'t.herrera@mds.cl', projects:7 },
  { id:11, name:'Camila Ortiz',  role:'Motion Designer',     area:'design', img:'https://i.pravatar.cc/150?img=44', email:'c.ortiz@mds.cl',   projects:2 },
  { id:12, name:'Rodrigo Pinto', role:'Mobile Developer',    area:'dev',    img:'https://i.pravatar.cc/150?img=51', email:'r.pinto@mds.cl',   projects:4 },
];

const CLIENTS = [
  { id:1, name:'Fiscalía Sur', short:'FS', type:'Público', sector:'Justicia', email:'contacto@fiscaliasur.cl', phone:'+56 2 2345 6789', city:'Santiago', status:'active', color:'#3b6bff', projects:['Portal Intranet v2','Dashboard Analytics','App Gestión'], start:'2023', revenue:'$42.500.000', contact:'Jefa TI: Patricia Morales' },
  { id:2, name:'Municipalidad Maipú', short:'MM', type:'Municipal', sector:'Gobierno Local', email:'ti@maipu.cl', phone:'+56 2 2567 8901', city:'Maipú', status:'active', color:'#0dcfb4', projects:['ERP Municipal','Portal Ciudadano'], start:'2024', revenue:'$28.000.000', contact:'Dir. Informática: Luis González' },
  { id:3, name:'Banco Sur Chile', short:'BS', type:'Privado', sector:'Finanzas', email:'tech@bancosur.cl', phone:'+56 2 2890 1234', city:'Providencia', status:'active', color:'#f59e0b', projects:['App Banca Móvil','Sistema Reportes'], start:'2022', revenue:'$85.000.000', contact:'CTO: Andrés Fuentes' },
  { id:4, name:'Clínica Las Condes Digital', short:'CD', type:'Privado', sector:'Salud', email:'sistemas@clinica.cl', phone:'+56 2 2210 4567', city:'Las Condes', status:'negotiat', color:'#f43f5e', projects:['Plataforma Pacientes'], start:'2025', revenue:'—', contact:'Gerente TI: Claudia Vera' },
  { id:5, name:'SEREMI Educación RM', short:'SE', type:'Público', sector:'Educación', email:'info@seremiedu.cl', phone:'+56 2 2399 0011', city:'Santiago', status:'active', color:'#8b5cf6', projects:['Portal Docentes','Sistema Matrícula'], start:'2023', revenue:'$31.000.000', contact:'Coordinador TI: Roberto Soto' },
  { id:6, name:'Constructora Andina', short:'CA', type:'Privado', sector:'Construcción', email:'it@constructoraandina.cl', phone:'+56 9 9876 5432', city:'Vitacura', status:'inactive', color:'#6b7280', projects:['Intranet Corporativa'], start:'2021', revenue:'$18.000.000', contact:'Gerente: Marcelo Ibáñez' },
];

const POSTS = [
  { id:1, user:'Ana Torres', avatar:'https://i.pravatar.cc/40?img=5', area:'dev', badge:'badge-dev', areaLabel:'Desarrollo', text:'🚀 Terminamos el deploy del Portal Fiscalía Sur v2.1 en producción. ¡Sin downtime y todo funcionando perfecto! Gracias al equipo completo por el esfuerzo esta semana.', img:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&q=80', tags:['#FiscalíaSur','#Deploy','#EquipoMDS'], likes:14, comments:5, time:'Hace 2 horas', liked:false },
  { id:2, user:'Valeria López', avatar:'https://i.pravatar.cc/40?img=15', area:'design', badge:'badge-design', areaLabel:'Diseño', text:'Compartiendo los nuevos wireframes de la App de Gestión RRHH. Enfocamos el diseño en simplicidad y accesibilidad. ¿Qué opinan del nuevo flujo de onboarding? 💬', img:'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=700&q=80', tags:['#UXDesign','#AppRRHH','#Wireframes'], likes:22, comments:8, time:'Hace 4 horas', liked:false },
  { id:3, user:'Diego Muñoz', avatar:'https://i.pravatar.cc/40?img=22', area:'pm', badge:'badge-pm', areaLabel:'Gestión', text:'Cerramos el Sprint 12 con un 94% de tareas completadas. 💪 Récord del equipo este trimestre. Revisión retrospectiva mañana a las 10:00 — ¡los espero a todos!', img:null, tags:['#Agile','#Sprint12','#MDS2026'], likes:31, comments:12, time:'Ayer 17:30', liked:true },
  { id:4, user:'Pablo Castro', avatar:'https://i.pravatar.cc/40?img=11', area:'dev', badge:'badge-dev', areaLabel:'DevOps', text:'Pipeline CI/CD configurado y funcionando con GitHub Actions. Deploy automático a staging en menos de 3 minutos. Documentación disponible en el portal. 📖', img:null, tags:['#DevOps','#CI-CD','#GitHub'], likes:9, comments:3, time:'Ayer 11:00', liked:false },
];

const DOCS = [
  { name:'Contrato Fiscalía Sur 2025',   type:'pdf',  cat:'contratos', size:'2.4 MB', date:'05 Mar 2026' },
  { name:'Informe Avance Q1 2026',       type:'pdf',  cat:'informes',  size:'1.1 MB', date:'01 Mar 2026' },
  { name:'Manual Empleados MDS',         type:'word', cat:'rrhh',      size:'850 KB', date:'15 Feb 2026' },
  { name:'Planilla Remuneraciones Feb',  type:'xls',  cat:'rrhh',      size:'340 KB', date:'28 Feb 2026' },
  { name:'Documentación API REST v2',    type:'pdf',  cat:'tecnicos',  size:'3.2 MB', date:'10 Mar 2026' },
  { name:'Contrato Municipalidad Maipú', type:'pdf',  cat:'contratos', size:'1.8 MB', date:'03 Mar 2026' },
  { name:'Propuesta Técnica Banco Sur',  type:'word', cat:'contratos', size:'1.4 MB', date:'20 Feb 2026' },
  { name:'Informe KPI Dashboard',        type:'xls',  cat:'informes',  size:'520 KB', date:'08 Mar 2026' },
  { name:'Wireframes App RRHH',          type:'img',  cat:'tecnicos',  size:'12 MB',  date:'07 Mar 2026' },
  { name:'Contrato Banco Sur 2026',      type:'pdf',  cat:'contratos', size:'2.1 MB', date:'02 Mar 2026' },
  { name:'Reglamento Interno 2026',      type:'word', cat:'rrhh',      size:'780 KB', date:'01 Jan 2026' },
  { name:'Arquitectura Sistema ERP',     type:'img',  cat:'tecnicos',  size:'8.3 MB', date:'25 Feb 2026' },
];

const USERS_ADMIN = [
  { user:'a.torres',  name:'Ana Torres',    cargo:'Frontend Developer',  area:'Desarrollo', role:'editor', active:true,  img:'https://i.pravatar.cc/32?img=5',  email:'a.torres@mds.cl',  telefono:'+56 9 8765 4321' },
  { user:'m.silva',   name:'Marco Silva',   cargo:'Backend Engineer',    area:'Desarrollo', role:'editor', active:true,  img:'https://i.pravatar.cc/32?img=8',  email:'m.silva@mds.cl',   telefono:'+56 9 7654 3210' },
  { user:'v.lopez',   name:'Valeria López', cargo:'UX/UI Designer',      area:'Diseño',     role:'editor', active:true,  img:'https://i.pravatar.cc/32?img=15', email:'v.lopez@mds.cl',   telefono:'+56 9 6543 2109' },
  { user:'d.munoz',   name:'Diego Muñoz',   cargo:'Project Manager',     area:'Gestión',    role:'admin',  active:true,  img:'https://i.pravatar.cc/32?img=22', email:'d.munoz@mds.cl',   telefono:'+56 9 5432 1098' },
  { user:'s.reyes',   name:'Sofía Reyes',   cargo:'Full Stack Dev',      area:'Desarrollo', role:'user',   active:true,  img:'https://i.pravatar.cc/32?img=3',  email:'s.reyes@mds.cl',   telefono:'+56 9 4321 0987' },
  { user:'f.arriaza',    name:'Fernando  Arriaza',   cargo:'Administrador',       area:'Gestión',    role:'admin',  active:true,  img:'https://raw.githubusercontent.com/Farriaza/img/main/yo1.jpg', email:'f.arriaza@mds.cl',    telefono:'+56 9 3210 9876' },
  { user:'f.rios',    name:'Fernanda Ríos', cargo:'Visual Designer',     area:'Diseño',     role:'user',   active:true,  img:'https://i.pravatar.cc/32?img=9',  email:'f.rios@mds.cl',    telefono:'+56 9 2109 8765' },
  { user:'p.castro',  name:'Pablo Castro',  cargo:'DevOps Engineer',     area:'Desarrollo', role:'editor', active:true,  img:'https://i.pravatar.cc/32?img=11', email:'p.castro@mds.cl',  telefono:'+56 9 1098 7654' },
  { user:'i.bravo',   name:'Ignacia Bravo', cargo:'QA Analyst',          area:'Desarrollo', role:'user',   active:false, img:'https://i.pravatar.cc/32?img=18', email:'i.bravo@mds.cl',   telefono:'+56 9 0987 6543' },
  { user:'t.herrera', name:'Tomás Herrera', cargo:'Scrum Master',        area:'Gestión',    role:'editor', active:true,  img:'https://i.pravatar.cc/32?img=33', email:'t.herrera@mds.cl', telefono:'+56 9 9876 5432' },
];

const QUICK_PANELS = {
  capacitaciones: {
    title: 'Capacitaciones',
    sub: 'Programa de formación continua MDS 2026',
    icon: 'bi-mortarboard',
    color: '#3b6bff',
    items: [
      { titulo:'Certificación AWS Solutions Architect', fecha:'15 Mar 2026', estado:'Disponible', vacantes:10 },
      { titulo:'Taller UX Research Avanzado', fecha:'20 Mar 2026', estado:'Disponible', vacantes:8 },
      { titulo:'Curso Git & GitHub Actions', fecha:'25 Mar 2026', estado:'Disponible', vacantes:15 },
      { titulo:'Scrum Master Certification', fecha:'01 Apr 2026', estado:'Inscripción abierta', vacantes:6 },
      { titulo:'React + TypeScript Workshop', fecha:'10 Apr 2026', estado:'Próximamente', vacantes:12 },
      { titulo:'Seguridad Informática Básica', fecha:'18 Apr 2026', estado:'Próximamente', vacantes:20 },
    ]
  },
  liquidaciones: {
    title: 'Liquidaciones de Sueldo',
    sub: 'Historial de remuneraciones',
    icon: 'bi-receipt',
    color: '#10b981',
    items: [
      { titulo:'Liquidación Marzo 2026', fecha:'31 Mar 2026', estado:'Pendiente', monto:'$1.850.000' },
      { titulo:'Liquidación Febrero 2026', fecha:'28 Feb 2026', estado:'Pagado', monto:'$1.850.000' },
      { titulo:'Liquidación Enero 2026', fecha:'31 Jan 2026', estado:'Pagado', monto:'$1.820.000' },
      { titulo:'Liquidación Diciembre 2025', fecha:'31 Dec 2025', estado:'Pagado', monto:'$1.820.000' },
      { titulo:'Liquidación Noviembre 2025', fecha:'30 Nov 2025', estado:'Pagado', monto:'$1.800.000' },
    ]
  },
  permisos: {
    title: 'Solicitud de Permisos',
    sub: 'Gestión de ausencias y vacaciones',
    icon: 'bi-calendar-check',
    color: '#f59e0b',
    items: [
      { titulo:'Vacaciones Anuales 2026', fecha:'15 - 26 Abr 2026', estado:'Aprobado', dias:'10 días' },
      { titulo:'Permiso Médico', fecha:'05 Mar 2026', estado:'Aprobado', dias:'1 día' },
      { titulo:'Capacitación Externa', fecha:'25 Mar 2026', estado:'Pendiente', dias:'1 día' },
      { titulo:'Día Administrativo', fecha:'28 Mar 2026', estado:'Pendiente', dias:'1 día' },
    ]
  },
  noticias: {
    title: 'Noticias Institucionales',
    sub: 'Novedades y comunicados MDS',
    icon: 'bi-newspaper',
    color: '#f43f5e',
    items: [
      { titulo:'MDS certificada ISO 27001 en Seguridad de la Información', fecha:'08 Mar 2026', estado:'Destacado', categoria:'Institucional' },
      { titulo:'Nuevo contrato con Ministerio de Educación firmado', fecha:'06 Mar 2026', estado:'Nuevo', categoria:'Comercial' },
      { titulo:'Lanzamiento del Portal Fiscalía Sur v2.1 exitoso', fecha:'05 Mar 2026', estado:'Nuevo', categoria:'Proyectos' },
      { titulo:'Actividades de aniversario MDS: 5 años innovando', fecha:'01 Mar 2026', estado:'Evento', categoria:'Corporativo' },
      { titulo:'Incorporación de 3 nuevos profesionales al equipo', fecha:'25 Feb 2026', estado:'General', categoria:'RRHH' },
    ]
  },
  inventario: {
    title: 'Inventario Tecnológico',
    sub: 'Equipos y activos digitales asignados',
    icon: 'bi-boxes',
    color: '#8b5cf6',
    items: [
      { titulo:'MacBook Pro 14" M3 Pro', fecha:'Asignado: 15 Jan 2026', estado:'Activo', codigo:'EQ-001' },
      { titulo:'Monitor Dell 27" 4K', fecha:'Asignado: 15 Jan 2026', estado:'Activo', codigo:'EQ-002' },
      { titulo:'iPhone 15 Pro corporativo', fecha:'Asignado: 10 Feb 2026', estado:'Activo', codigo:'EQ-003' },
      { titulo:'Licencia Adobe CC 2026', fecha:'Vence: 31 Dec 2026', estado:'Activo', codigo:'SW-001' },
      { titulo:'Licencia Figma Professional', fecha:'Vence: 30 Jun 2026', estado:'Activo', codigo:'SW-002' },
      { titulo:'Teclado Logitech MX Keys', fecha:'Asignado: 15 Jan 2026', estado:'Activo', codigo:'EQ-004' },
    ]
  }
};

// ── STATE ─────────────────────────────
let currentView = 'dashboard';
let posts = [...POSTS];
let nextPostId = posts.length + 1;
let pendingView = null;
let editingUserIdx = null;

// ── INIT ──────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initCountUps();
  setupLandingLogin();
  setupNavigation();
  setupSidebar();
  setupNotifications();
  setupKanban();
  setupTeamFilters();
  setupDocCats();
  setupScrollLinks();
});

// ── PARTICLES ─────────────────────────
function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  let W = window.innerWidth, H = window.innerHeight;

  canvas.width = W; canvas.height = H;
  window.addEventListener('resize', () => {
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = W; canvas.height = H;
  });

  for (let i = 0; i < 60; i++) {
    particles.push({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.5 + .5,
      vx: (Math.random() - .5) * .4,
      vy: (Math.random() - .5) * .4,
      o: Math.random() * .4 + .1
    });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(107,143,255,${p.o})`;
      ctx.fill();
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
    });
    requestAnimationFrame(draw);
  }
  draw();
}

// ── COUNT UPS (landing) ────────────────
function initCountUps() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.querySelectorAll('.count-up').forEach(el => {
        const target = parseInt(el.dataset.target);
        let curr = 0;
        const step = Math.max(1, Math.floor(target / 50));
        const iv = setInterval(() => {
          curr = Math.min(curr + step, target);
          el.textContent = curr;
          if (curr >= target) clearInterval(iv);
        }, 25);
      });
      observer.unobserve(entry.target);
    });
  }, { threshold: .3 });

  const strip = document.querySelector('.stats-strip');
  if (strip) observer.observe(strip);
}

// ── SCROLL HELPER ─────────────────────
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function setupScrollLinks() {
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const href = a.getAttribute('href').replace('#','');
      scrollToSection(href);
    });
  });
}

// ── LOGIN FLOW ────────────────────────
function setupLandingLogin() {
  // Buttons that open modal
  ['navLoginBtn','heroLoginBtn','ctaLoginBtn'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', () => openLoginModal());
  });

  // Feature cards on landing
  document.querySelectorAll('.feat-card').forEach(card => {
    card.addEventListener('click', () => {
      if (card.getAttribute('onclick')) return; // handled inline
    });
  });

  // Close modal
  document.getElementById('loginModalClose').addEventListener('click', closeLoginModal);
  document.getElementById('loginModal').addEventListener('click', e => {
    if (e.target === document.getElementById('loginModal')) closeLoginModal();
  });

  // Submit
  document.getElementById('loginForm').addEventListener('submit', handleLogin);
}

function openLoginModal(targetView) {
  if (targetView) pendingView = targetView;
  document.getElementById('loginModal').classList.remove('hidden');
  document.getElementById('loginUser').focus();
}

function closeLoginModal() {
  document.getElementById('loginModal').classList.add('hidden');
  pendingView = null;
}

function loginAndGoTo(view) {
  pendingView = view;
  openLoginModal(view);
}

function handleLogin(e) {
  e.preventDefault();
  const btn = document.getElementById('loginSubmitBtn');
  btn.disabled = true;
  btn.innerHTML = '<span>Ingresando...</span>';

  setTimeout(() => {
    // Hide landing + modal
    document.getElementById('landingScreen').classList.add('hidden');
    document.getElementById('loginModal').classList.add('hidden');
    document.getElementById('appShell').classList.remove('hidden');

    // Init app
    initApp();

    // Go to view if pending
    if (pendingView) {
      switchView(pendingView);
      pendingView = null;
    }

    // Reset button for next logout
    btn.disabled = false;
    btn.innerHTML = '<span><i class="bi bi-box-arrow-in-right"></i> Ingresar</span>';
  }, 700);
}

// ── APP INIT ──────────────────────────
function initApp() {
  renderTeam(TEAM);
  renderClients();
  renderPosts();
  renderDocs('all');
  renderUsersTable();
  animateKPIs();
  setupClientSearch();
  setupUserSearch();
}

// ── NAVIGATION ────────────────────────
function setupNavigation() {
  document.querySelectorAll('.nav-item[data-view]').forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      switchView(item.dataset.view);
      if (window.innerWidth <= 768) {
        document.getElementById('sidebar').classList.remove('open');
      }
    });
  });
}

function switchView(viewName) {
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const navTarget = document.querySelector(`.nav-item[data-view="${viewName}"]`);
  if (navTarget) navTarget.classList.add('active');

  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const view = document.getElementById(`view-${viewName}`);
  if (view) view.classList.add('active');

  currentView = viewName;
  closeNotifications();
}

// ── QUICK PANELS ──────────────────────
function openQuickPanel(name) {
  const data = QUICK_PANELS[name];
  if (!data) return;

  document.getElementById('quickPanelTitle').textContent = data.title;
  document.getElementById('quickPanelSub').textContent = data.sub;

  const content = document.getElementById('quickPanelContent');
  const stateColors = {
    'Disponible': 'background:rgba(16,185,129,.1);color:#059669',
    'Inscripción abierta': 'background:rgba(59,107,255,.1);color:#3b6bff',
    'Próximamente': 'background:rgba(107,114,128,.1);color:#6b7280',
    'Pagado': 'background:rgba(16,185,129,.1);color:#059669',
    'Pendiente': 'background:rgba(245,158,11,.1);color:#d97706',
    'Aprobado': 'background:rgba(16,185,129,.1);color:#059669',
    'Activo': 'background:rgba(16,185,129,.1);color:#059669',
    'Destacado': 'background:rgba(244,63,94,.1);color:#f43f5e',
    'Nuevo': 'background:rgba(59,107,255,.1);color:#3b6bff',
    'Evento': 'background:rgba(139,92,246,.1);color:#8b5cf6',
    'General': 'background:rgba(107,114,128,.1);color:#6b7280',
  };

  const extraField = {
    capacitaciones: i => `<span style="font-size:.75rem;color:var(--text-lt)">${i.vacantes} vacantes</span>`,
    liquidaciones:  i => `<span style="font-size:.82rem;font-weight:700;color:var(--navy)">${i.monto}</span>`,
    permisos:       i => `<span style="font-size:.75rem;color:var(--text-lt)">${i.dias}</span>`,
    noticias:       i => `<span style="font-size:.72rem;padding:2px 8px;background:var(--gray-2);border-radius:10px;color:var(--text-lt)">${i.categoria}</span>`,
    inventario:     i => `<span style="font-size:.72rem;font-family:monospace;background:var(--gray-1);padding:2px 8px;border-radius:6px;color:var(--text-lt)">${i.codigo}</span>`,
  };

  content.innerHTML = `
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:14px">
      ${data.items.map(item => `
        <div class="qp-card">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px">
            <span style="font-size:.7rem;font-weight:700;padding:3px 9px;border-radius:20px;${stateColors[item.estado] || ''}">${item.estado}</span>
            ${extraField[name] ? extraField[name](item) : ''}
          </div>
          <h5 style="font-size:.92rem;font-weight:700;color:var(--navy);margin-bottom:6px">${item.titulo}</h5>
          <p style="font-size:.8rem;color:var(--text-lt)">${item.fecha}</p>
          <button onclick="showToast('${item.titulo.substring(0,30)}... ✓')" style="margin-top:12px;padding:7px 14px;background:var(--blue);border:none;border-radius:8px;color:white;font-family:'DM Sans',sans-serif;font-size:.8rem;font-weight:600;cursor:pointer">
            Ver detalles →
          </button>
        </div>
      `).join('')}
    </div>
  `;

  switchView('quick');
}

// ── SIDEBAR ───────────────────────────
function setupSidebar() {
  const toggle = document.getElementById('sidebarToggle');
  const sidebar = document.getElementById('sidebar');
  toggle.addEventListener('click', () => sidebar.classList.toggle('open'));

  document.getElementById('logoutBtn').addEventListener('click', () => {
    document.getElementById('appShell').classList.add('hidden');
    document.getElementById('landingScreen').classList.remove('hidden');
    showToast('Sesión cerrada correctamente');
    // Scroll to top of landing
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Close on outside click mobile
  document.addEventListener('click', e => {
    if (window.innerWidth <= 768 && sidebar.classList.contains('open') &&
        !sidebar.contains(e.target) && e.target !== toggle) {
      sidebar.classList.remove('open');
    }
  });
}

// ── KPI ANIMATION ─────────────────────
function animateKPIs() {
  document.querySelectorAll('.kpi-val[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target);
    let curr = 0;
    const step = Math.max(1, Math.floor(target / 40));
    const iv = setInterval(() => {
      curr = Math.min(curr + step, target);
      el.textContent = curr;
      if (curr >= target) clearInterval(iv);
    }, 30);
  });
}

// ── TEAM ──────────────────────────────
function renderTeam(members) {
  const grid = document.getElementById('teamGrid');
  if (!grid) return;
  grid.innerHTML = members.map(m => `
    <div class="team-card">
      <img src="${m.img}" alt="${m.name}" loading="lazy">
      <h5>${m.name}</h5>
      <p class="role">${m.role}</p>
      <span class="area-badge area-${m.area}">
        ${m.area === 'dev' ? 'Desarrollo' : m.area === 'design' ? 'Diseño' : 'Gestión'}
      </span>
      <div class="team-card-actions">
        <a href="mailto:${m.email}" onclick="return false;" title="${m.email}">✉ Email</a>
        <a href="#" onclick="showToast('${m.projects} proyectos asignados');return false;">${m.projects} proyectos</a>
      </div>
    </div>
  `).join('');
}

function setupTeamFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      renderTeam(filter === 'all' ? TEAM : TEAM.filter(m => m.area === filter));
    });
  });
}

// ── CLIENTS ───────────────────────────
function renderClients() {
  const list = document.getElementById('clientList');
  if (!list) return;
  list.innerHTML = CLIENTS.map(c => `
    <li class="client-item" data-id="${c.id}" onclick="selectClient(${c.id})">
      <div class="client-logo" style="background:${c.color}">${c.short}</div>
      <div class="client-item-info">
        <strong>${c.name}</strong>
        <small>${c.type} · ${c.sector}</small>
      </div>
      <span class="client-status cs-${c.status}">
        ${c.status === 'active' ? 'Activo' : c.status === 'negotiat' ? 'Negociación' : 'Inactivo'}
      </span>
    </li>
  `).join('');
}

function selectClient(id) {
  const c = CLIENTS.find(x => x.id === id);
  if (!c) return;
  document.querySelectorAll('.client-item').forEach(i => i.classList.remove('active'));
  const li = document.querySelector(`.client-item[data-id="${id}"]`);
  if (li) li.classList.add('active');

  const panel = document.getElementById('clientDetail');
  panel.style.cssText = 'align-items:flex-start;justify-content:flex-start;';

  panel.innerHTML = `
    <div class="detail-content">
      <div class="detail-header">
        <div class="detail-logo" style="background:${c.color}">${c.short}</div>
        <div>
          <h3>${c.name}</h3>
          <p>${c.type} · ${c.sector} · ${c.city}</p>
        </div>
        <span class="client-status cs-${c.status}" style="margin-left:auto">
          ${c.status === 'active' ? 'Activo' : c.status === 'negotiat' ? 'En negociación' : 'Inactivo'}
        </span>
      </div>
      <div class="detail-kpis">
        <div class="detail-kpi"><strong>${c.projects.length}</strong><small>Proyectos</small></div>
        <div class="detail-kpi"><strong>${c.start}</strong><small>Cliente desde</small></div>
        <div class="detail-kpi"><strong style="font-size:1rem">${c.revenue}</strong><small>Facturado</small></div>
      </div>
      <div style="margin-bottom:18px">
        <div style="font-size:.78rem;color:var(--text-lt);font-weight:700;margin-bottom:8px;letter-spacing:.5px">INFORMACIÓN DE CONTACTO</div>
        <div style="font-size:.88rem;color:var(--text);margin-bottom:4px">📧 ${c.email}</div>
        <div style="font-size:.88rem;color:var(--text);margin-bottom:4px">📞 ${c.phone}</div>
        <div style="font-size:.88rem;color:var(--text)">👤 ${c.contact}</div>
      </div>
      <div>
        <div style="font-size:.78rem;color:var(--text-lt);font-weight:700;margin-bottom:10px;letter-spacing:.5px">PROYECTOS ASOCIADOS</div>
        <div style="display:flex;flex-direction:column;gap:8px">
          ${c.projects.map(p => `
            <div class="detail-proj-item">
              <strong>📁 ${p}</strong>
              <span class="status-badge ongoing">Activo</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function setupClientSearch() {
  const input = document.getElementById('clientSearch');
  if (!input) return;
  input.addEventListener('input', () => {
    const q = input.value.toLowerCase();
    document.querySelectorAll('.client-item').forEach(item => {
      item.style.display = item.textContent.toLowerCase().includes(q) ? '' : 'none';
    });
  });
}

// ── SOCIAL ────────────────────────────
function renderPosts() {
  const feed = document.getElementById('socialFeed');
  if (!feed) return;
  feed.querySelectorAll('.post-card').forEach(p => p.remove());
  posts.forEach(p => feed.appendChild(buildPostCard(p)));
}

function buildPostCard(p) {
  const div = document.createElement('div');
  div.className = 'post-card';
  div.dataset.id = p.id;
  div.innerHTML = `
    <div class="post-header">
      <img src="${p.avatar}" alt="${p.user}">
      <div><div class="name">${p.user}</div><div class="time">${p.time}</div></div>
      <span class="badge ${p.badge}">${p.areaLabel}</span>
    </div>
    <div class="post-body">
      <p>${p.text}</p>
      ${p.img ? `<img src="${p.img}" alt="post" loading="lazy">` : ''}
      <div class="post-tags">${p.tags.map(t => `<span class="post-tag">${t}</span>`).join('')}</div>
    </div>
    <div class="post-footer">
      <button class="post-action ${p.liked ? 'liked' : ''}" onclick="toggleLike(${p.id}, this)">
        <i class="bi bi-heart${p.liked ? '-fill' : ''}"></i><span>${p.likes}</span>
      </button>
      <button class="post-action" onclick="addComment(${p.id}, this)">
        <i class="bi bi-chat"></i><span>${p.comments} comentarios</span>
      </button>
      <button class="post-action" onclick="showToast('Enlace copiado ✓')">
        <i class="bi bi-share"></i><span>Compartir</span>
      </button>
    </div>
  `;
  return div;
}

function toggleLike(id, btn) {
  const post = posts.find(p => p.id === id);
  if (!post) return;
  post.liked = !post.liked;
  post.likes += post.liked ? 1 : -1;
  btn.querySelector('i').className = `bi bi-heart${post.liked ? '-fill' : ''}`;
  btn.querySelector('span').textContent = post.likes;
  btn.classList.toggle('liked', post.liked);
}

function addComment(id, btn) {
  const post = posts.find(p => p.id === id);
  if (!post) return;
  post.comments++;
  btn.querySelector('span').textContent = `${post.comments} comentarios`;
  showToast('Comentario agregado ✓');
}

function createPost() {
  const input = document.getElementById('postInput');
  const text = input.value.trim();
  if (!text) {
    input.style.borderColor = 'var(--rose)';
    setTimeout(() => input.style.borderColor = '', 1200);
    return;
  }
  const newPost = {
    id: nextPostId++, user:'Fernando  Arriaza', avatar:'https://raw.githubusercontent.com/Farriaza/img/main/yo1.jpg',
    area:'pm', badge:'badge-pm', areaLabel:'Gestión',
    text, img:null, tags:['#MDS2026'], likes:0, comments:0,
    time:'Ahora mismo', liked:false
  };
  posts.unshift(newPost);
  input.value = '';
  const feed = document.getElementById('socialFeed');
  const createCard = feed.querySelector('.create-post-card');
  feed.insertBefore(buildPostCard(newPost), createCard.nextSibling);
  showToast('Publicación creada 🚀');
}

function addEmoji() {
  const emojis = ['🚀','💡','✅','🎯','🔥','💪','🎉','🌟','⚡','🛠️'];
  const input = document.getElementById('postInput');
  input.value += ' ' + emojis[Math.floor(Math.random() * emojis.length)];
  input.focus();
}

// ── DOCS ──────────────────────────────
function renderDocs(cat) {
  const grid = document.getElementById('docsGrid');
  if (!grid) return;
  const filtered = cat === 'all' ? DOCS : DOCS.filter(d => d.cat === cat);
  const icons = { pdf:'bi-file-earmark-pdf', word:'bi-file-earmark-word', xls:'bi-file-earmark-excel', img:'bi-file-earmark-image' };
  const classes = { pdf:'doc-pdf', word:'doc-word', xls:'doc-xls', img:'doc-img' };
  grid.innerHTML = filtered.map(d => `
    <div class="doc-item ${classes[d.type]}" onclick="showToast('Descargando: ${d.name}')">
      <i class="bi ${icons[d.type]}"></i>
      <h6>${d.name}</h6>
      <small>${d.size}</small>
      <span class="doc-date">${d.date}</span>
    </div>
  `).join('');
}

function setupDocCats() {
  document.querySelectorAll('.doc-cat').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.doc-cat').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderDocs(btn.dataset.cat);
    });
  });
}

// ── USERS TABLE ───────────────────────
function renderUsersTable(filter = '') {
  const tbody = document.getElementById('usersTableBody');
  if (!tbody) return;
  const f = filter.toLowerCase();
  const filtered = USERS_ADMIN.filter(u =>
    u.user.includes(f) || u.name.toLowerCase().includes(f) ||
    u.cargo.toLowerCase().includes(f) || u.area.toLowerCase().includes(f)
  );
  tbody.innerHTML = filtered.map((u, idx) => `
    <tr>
      <td><div class="user-cell"><img src="${u.img}" alt="${u.user}"> ${u.user}</div></td>
      <td>${u.name}</td>
      <td>${u.cargo}</td>
      <td>${u.area}</td>
      <td><span class="role-badge role-${u.role}">${u.role.charAt(0).toUpperCase()+u.role.slice(1)}</span></td>
      <td>${u.active ? '<span class="active-badge">Activo</span>' : '<span class="inactive-badge">Inactivo</span>'}</td>
      <td><button class="edit-btn" onclick="openEditUser(${USERS_ADMIN.indexOf(u)})">Editar</button></td>
    </tr>
  `).join('');
}

function setupUserSearch() {
  const input = document.getElementById('userSearch');
  if (!input) return;
  input.addEventListener('input', () => renderUsersTable(input.value.trim()));
}

// ── EDIT USER ─────────────────────────
function openEditUser(idx) {
  editingUserIdx = idx;
  const u = USERS_ADMIN[idx];
  if (!u) return;

  document.getElementById('editUserBody').innerHTML = `
    <div style="display:flex;align-items:center;gap:14px;padding:10px 0 16px;border-bottom:1px solid var(--gray-2);margin-bottom:4px">
      <img src="${u.img}" style="width:56px;height:56px;border-radius:50%;object-fit:cover;border:3px solid var(--blue)">
      <div>
        <strong style="font-size:1rem;color:var(--navy)">${u.name}</strong>
        <p style="font-size:.8rem;color:var(--text-lt);margin:2px 0 0">${u.email}</p>
      </div>
      <span class="role-badge role-${u.role}" style="margin-left:auto">${u.role.charAt(0).toUpperCase()+u.role.slice(1)}</span>
    </div>
    <div class="form-grid2">
      <div class="form-row"><label>Nombre</label><input type="text" id="eu_nombre" value="${u.name.split(' ')[0]}"></div>
      <div class="form-row"><label>Apellido</label><input type="text" id="eu_apellido" value="${u.name.split(' ').slice(1).join(' ')}"></div>
    </div>
    <div class="form-row"><label>Email</label><input type="email" id="eu_email" value="${u.email}"></div>
    <div class="form-grid2">
      <div class="form-row"><label>Cargo</label><input type="text" id="eu_cargo" value="${u.cargo}"></div>
      <div class="form-row"><label>Teléfono</label><input type="text" id="eu_tel" value="${u.telefono}"></div>
    </div>
    <div class="form-grid2">
      <div class="form-row"><label>Área</label>
        <select id="eu_area">
          ${['Desarrollo','Diseño','Gestión','Administración'].map(a => `<option ${u.area===a?'selected':''}>${a}</option>`).join('')}
        </select>
      </div>
      <div class="form-row"><label>Rol</label>
        <select id="eu_rol">
          ${['user','editor','admin'].map(r => `<option value="${r}" ${u.role===r?'selected':''}>${r.charAt(0).toUpperCase()+r.slice(1)}</option>`).join('')}
        </select>
      </div>
    </div>
    <div class="form-row">
      <label style="display:flex;align-items:center;gap:8px;cursor:pointer">
        <input type="checkbox" id="eu_active" ${u.active?'checked':''} style="accent-color:var(--blue)">
        Usuario activo
      </label>
    </div>
  `;
  openModal('modalEditarUsuario');
}

function saveEditUser() {
  if (editingUserIdx === null) return;
  const u = USERS_ADMIN[editingUserIdx];
  const nombre  = document.getElementById('eu_nombre')?.value.trim();
  const apellido = document.getElementById('eu_apellido')?.value.trim();
  if (nombre)   u.name   = `${nombre} ${apellido}`;
  const email  = document.getElementById('eu_email')?.value.trim();
  if (email)   u.email  = email;
  const cargo  = document.getElementById('eu_cargo')?.value.trim();
  if (cargo)   u.cargo  = cargo;
  const tel    = document.getElementById('eu_tel')?.value.trim();
  if (tel)     u.telefono = tel;
  u.area   = document.getElementById('eu_area')?.value || u.area;
  u.role   = document.getElementById('eu_rol')?.value  || u.role;
  u.active = document.getElementById('eu_active')?.checked ?? u.active;

  closeModal('modalEditarUsuario');
  renderUsersTable(document.getElementById('userSearch')?.value || '');
  showToast(`Usuario ${u.name} actualizado ✓`);
  editingUserIdx = null;
}

// ── KANBAN ────────────────────────────
function setupKanban() {
  const cols = document.querySelectorAll('.kanban-cards');
  let dragged = null;

  document.querySelectorAll('.k-card').forEach(card => {
    card.addEventListener('dragstart', () => {
      dragged = card;
      setTimeout(() => card.style.opacity = '0.4', 0);
    });
    card.addEventListener('dragend', () => {
      card.style.opacity = '1';
      dragged = null;
      cols.forEach(c => c.parentElement.classList.remove('drag-over'));
    });
  });

  cols.forEach(col => {
    col.addEventListener('dragover', e => {
      e.preventDefault();
      col.parentElement.classList.add('drag-over');
    });
    col.addEventListener('dragleave', () => col.parentElement.classList.remove('drag-over'));
    col.addEventListener('drop', e => {
      e.preventDefault();
      col.parentElement.classList.remove('drag-over');
      if (dragged && dragged.parentElement !== col) {
        col.appendChild(dragged);
        updateColCounts();
        showToast('Tarea movida ✓');
      }
    });
  });
}

function updateColCounts() {
  ['col-pendiente','col-progreso','col-revision','col-completado'].forEach(id => {
    const col = document.getElementById(id);
    if (!col) return;
    const header = col.parentElement.querySelector('.col-count');
    if (header) header.textContent = col.querySelectorAll('.k-card').length;
  });
}

// ── MODALS ────────────────────────────
function openModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.remove('hidden');
}
function closeModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.add('hidden');
}
document.addEventListener('click', e => {
  if (e.target.classList.contains('modal-overlay')) e.target.classList.add('hidden');
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay:not(.hidden)').forEach(m => m.classList.add('hidden'));
    closeNotifications();
  }
});

// ── NOTIFICATIONS ─────────────────────
function setupNotifications() {
  const btn = document.getElementById('notifBtn');
  if (!btn) return;
  btn.addEventListener('click', e => {
    e.stopPropagation();
    document.getElementById('notifPanel').classList.toggle('hidden');
  });
  document.addEventListener('click', e => {
    const panel = document.getElementById('notifPanel');
    if (panel && !panel.classList.contains('hidden') && !panel.contains(e.target) && e.target !== btn) {
      panel.classList.add('hidden');
    }
  });
}
function closeNotifications() {
  const p = document.getElementById('notifPanel');
  if (p) p.classList.add('hidden');
}

// ── FOLLOW BUTTONS ────────────────────
document.addEventListener('click', e => {
  if (e.target.classList.contains('btn-follow')) {
    const btn = e.target;
    const isFollowing = btn.classList.toggle('following');
    btn.textContent = isFollowing ? '✓' : '+';
    btn.style.background = isFollowing ? 'var(--gray-2)' : 'var(--blue)';
    btn.style.color = isFollowing ? 'var(--text-lt)' : 'white';
    showToast(isFollowing ? '¡Ahora sigues a este usuario!' : 'Usuario dejado de seguir');
  }
});

// ── TOAST ─────────────────────────────
function showToast(msg) {
  let toast = document.getElementById('globalToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'globalToast';
    Object.assign(toast.style, {
      position:'fixed', bottom:'24px', right:'24px',
      background:'var(--navy)', color:'white',
      padding:'12px 20px', borderRadius:'10px',
      fontFamily:"'DM Sans',sans-serif", fontSize:'.88rem', fontWeight:'500',
      boxShadow:'0 8px 30px rgba(11,20,55,.3)',
      zIndex:'99999', transition:'all .3s ease',
      opacity:'0', transform:'translateY(10px)',
      display:'flex', alignItems:'center', gap:'8px'
    });
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<i class="bi bi-check-circle-fill" style="color:var(--teal)"></i> ${msg}`;
  requestAnimationFrame(() => { toast.style.opacity='1'; toast.style.transform='translateY(0)'; });
  clearTimeout(toast._t);
  toast._t = setTimeout(() => { toast.style.opacity='0'; toast.style.transform='translateY(10px)'; }, 2800);
}