naconst works = [
  {
    id: "w1",
    title: "Intranet Institucional",
    category: "Backend",
    description: "Plataforma interna para la gestión de roles, proyectos, clientes, noticias y documentos, con paneles personalizados según el perfil de usuario. Usuario:Fernando ; Password:Fer30Edu50",
    tags: ["Python", "Django", "RBAC", "PostgreSQL", "Institucional", "Modo Escritorio"],
    link: "https://kento01.pythonanywhere.com/",
    cover: "https://raw.githubusercontent.com/Farriaza/img/main/mds.png"
  },
  {
    id: "w2",
    title: "ERP de Inventario y Ventas",
    category: "Backend",
    description: "Sistema ERP completo que optimiza el control de stock, la gestión de ventas y el picking, con trazabilidad total de productos. Usuario:kento ; Password:Fedo3049+",
    tags: ["Python", "Django", "ERP", "Inventario", "PostgreSQL", "Modo Escritorio"],
    link: "https://atlasdevs.pythonanywhere.com/",
    cover: "https://raw.githubusercontent.com/Farriaza/img/main/Kento.png"
  },
  {
    id: "w3",
    title: "Módulo Social de Recetas",
    category: "Backend",
    description: "Red social de recetas con publicaciones moderadas, destacados y funciones de interacción para fomentar la participación de la comunidad.",
    tags: ["Python", "Django", "ORM", "Moderación", "Social", "Responsive"],
    link: "https://fedo.pythonanywhere.com/",
    cover: "https://raw.githubusercontent.com/Farriaza/img/main/recetas.png"
  },
  {
    id: "w4",
    title: "Restaurante Chino Beifong",
    category: "Backend",
    description: "Aplicación web completa para un restaurante\nSitio web interactivo con menú de platos, carrito, reseñas y contacto, junto con una sección administrativa para gestionar contenidos y pedidos.",
    tags: ["Python", "FastAPI", "JWT", "Docker", "API", "Modo Escritorio"],
    link: "https://ferbeifong.pythonanywhere.com/",
    cover: "https://raw.githubusercontent.com/Farriaza/img/main/restBeifong.png"
  },
 {
  id: "w5",
  title: "Landing Page IREK",
  category: "Frontend",
  description: "Landing page interactiva de una agencia de publicidad, desarrollada con HTML, CSS y JavaScript.",
  tags: ["JavaScript", "HTML", "CSS", "Portfolio", "Responsive", "Landing Page"],
   link: "/irek",
  cover: "https://raw.githubusercontent.com/Farriaza/img/main/irek.png"
},
  {
    id: "w6",
    title: "Rutina de gym en casa",
    category: "frontend",
    description: "Gestión de rutinas de ejercicio en casa, con seguimiento de progreso y recomendaciones personalizadas.",
    tags: ["JavaScript", "HTML", "CSS", "Diseño", "Responsive", "Landing Page"],
    link: "/gym",
    cover: "https://raw.githubusercontent.com/Farriaza/img/main/reingeneria.png"
  }
];


// =========================
// Helpers
// =========================
const $ = (q, el = document) => el.querySelector(q);
const $$ = (q, el = document) => Array.from(el.querySelectorAll(q));

const categoryLabel = (cat) => {
  if (cat === "branding") return "Branding";
  if (cat === "uiux") return "UI/UX";
  if (cat === "editorial") return "Editorial";
  return "Trabajo";
};

// =========================
// Render de trabajos
// =========================
const grid = $("#worksGrid");
let currentFilter = "all";
let currentQuery = "";

function renderWorks() {
  const filtered = works.filter(w => {
    const matchCat = currentFilter === "all" ? true : w.category === currentFilter;
    const q = currentQuery.trim().toLowerCase();
    const matchQuery = !q ? true : (w.title.toLowerCase().includes(q) || w.description.toLowerCase().includes(q));
    return matchCat && matchQuery;
  });

  grid.innerHTML = "";

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="card" style="grid-column: 1 / -1;">
        <h3 style="margin:0 0 6px;">No hay resultados</h3>
        <p class="muted" style="margin:0;">Prueba con otro filtro o cambia tu búsqueda.</p>
      </div>
    `;
    return;
  }

  for (const w of filtered) {
    const article = document.createElement("article");
    article.className = "card work";
    article.tabIndex = 0;
    article.setAttribute("role", "button");
    article.setAttribute("aria-label", `Abrir detalle de ${w.title}`);
    article.dataset.id = w.id;

    article.innerHTML = `
      <div class="work-cover">
        <img src="${w.cover}" alt="${w.title}" loading="lazy">
      </div>
      <div class="work-meta">
        <div>
          <h3 class="work-title">${w.title}</h3>
          <p class="work-desc">${w.description}</p>
        </div>
        <span class="badge">${categoryLabel(w.category)}</span>
      </div>
      <div class="work-tags">
        ${w.tags.map(t => `<span class="tag">${t}</span>`).join("")}
      </div>
    `;

    article.addEventListener("click", () => openModal(w.id));
    article.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(w.id);
      }
    });

    grid.appendChild(article);
  }
}

// =========================
// Modal
// =========================
const modal = $("#modal");
const modalClose = $("#modalClose");
const modalMedia = $("#modalMedia");
const modalCategory = $("#modalCategory");
const modalTitle = $("#modalTitle");
const modalDesc = $("#modalDesc");
const modalTags = $("#modalTags");
const modalLink = $("#modalLink");

let lastFocused = null;

function openModal(id) {
  const w = works.find(x => x.id === id);
  if (!w) return;

  lastFocused = document.activeElement;

  modalMedia.innerHTML = `<img src="${w.cover}" alt="${w.title}">`;
  modalCategory.textContent = categoryLabel(w.category);
  modalTitle.textContent = w.title;
  modalDesc.textContent = w.description;
  modalTags.innerHTML = w.tags.map(t => `<span class="tag">${t}</span>`).join("");
  modalLink.href = w.link || "#";

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modalClose.focus();
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  if (lastFocused && typeof lastFocused.focus === "function") {
    lastFocused.focus();
  }
}

modal.addEventListener("click", (e) => {
  if (e.target?.dataset?.close === "true") closeModal();
});

modalClose.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
});

// =========================
// Filtros + búsqueda
// =========================
const chips = $$(".chip");
chips.forEach(btn => {
  btn.addEventListener("click", () => {
    chips.forEach(c => c.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderWorks();
  });
});

$("#searchInput").addEventListener("input", (e) => {
  currentQuery = e.target.value;
  renderWorks();
});

// =========================
// Tema (dark/light)
// =========================
const themeToggle = $("#themeToggle");
const savedTheme = localStorage.getItem("theme");
if (savedTheme) document.documentElement.setAttribute("data-theme", savedTheme);

function updateThemeIcon() {
  const t = document.documentElement.getAttribute("data-theme") || "dark";
  themeToggle.textContent = t === "light" ? "🌞" : "🌙";
}
updateThemeIcon();

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  const next = current === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  updateThemeIcon();
});

// =========================
// Menú mobile
// =========================
const navToggle = $("#navToggle");
const navLinks = $("#navLinks");

navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});

$$(".nav-links a").forEach(a => {
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// =========================
// Form contacto (demo)
// =========================
// Usamos JavaScript puro para evitar dependencias innecesarias
const contactForm = document.getElementById("contactForm");
const statusMessage = document.getElementById("formStatus");

if (contactForm) {
  contactForm.addEventListener("submit", async function(e) {
    e.preventDefault(); // Detiene el envío normal y el mensaje demo
    
    // 1. Preparamos los datos
    const formData = new FormData(this);
    
    // 2. Feedback visual inmediato
    statusMessage.textContent = "Enviando mensaje...";
    statusMessage.style.color = "orange";

    try {
      // 3. Petición real al servidor de Formspree
      const response = await fetch("https://formspree.io/f/maqowbwd", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      // 4. Manejo de la respuesta
      if (response.ok) {
        statusMessage.textContent = "¡Mensaje enviado con éxito! Te responderé pronto.";
        statusMessage.style.color = "#28a745"; // Verde éxito
        contactForm.reset(); // Limpia el formulario
      } else {
        const data = await response.json();
        statusMessage.textContent = data.errors ? data.errors[0].message : "Error al enviar.";
        statusMessage.style.color = "#dc3545"; // Rojo error
      }
    } catch (error) {
      statusMessage.textContent = "Error de red. Revisa tu conexión.";
      statusMessage.style.color = "#dc3545";
    }
  });
}

// =========================
// Botón CV (demo)
// =========================


// =========================
// Año footer
// =========================
$("#year").textContent = String(new Date().getFullYear());

// Render inicial
renderWorks();
/* ===============================
   TYPEWRITER PERFIL USUARIO
================================ */

const codeLines = [
  "social/models.py\n\n",

  "class SocialPost(models.Model):\n",
  "    autor = models.ForeignKey(User, on_delete=models.CASCADE)\n",
  "    titulo = models.CharField(max_length=300, blank=True)\n",
  "    aprobado = models.BooleanField(default=False)\n\n",

  "    def total_likes(self):\n",
  "        return self.likes.count()\n"
];



const codeEl = document.getElementById("typingCode");
let line = 0;
let char = 0;

function typeCode() {
  if (line >= codeLines.length) return;

  const current = codeLines[line];
  codeEl.innerHTML += current.charAt(char);
  char++;

  if (char === current.length) {
    line++;
    char = 0;
  }

  setTimeout(typeCode, 22);
}

typeCode();







