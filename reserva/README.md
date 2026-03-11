# 🍽️ Landing Page - Restaurante Sabor del Mar

Landing page responsive para restaurante construida con **HTML5**, **CSS3**, **Bootstrap 5** y **JavaScript Vanilla** siguiendo las mejores prácticas de desarrollo web.

## 📁 Estructura del Proyecto

```
Restaurant_LP/
│
├── index.html                 # Página principal (punto de entrada)
│
├── assets/                    # Recursos del sitio
│   ├── css/
│   │   └── styles.css        # Hoja de estilos personalizada
│   │
│   ├── js/
│   │   └── main.js           # JavaScript principal
│   │
│   └── img/                  # Imágenes del proyecto (Cuando aplique/hayan)
│
└── README.md                 # Este archivo
```

### 📐 Arquitectura Implementada

Esta estructura sigue las **mejores prácticas** de organización de proyectos web:

✅ **Separación de responsabilidades**: HTML (estructura), CSS (presentación), JS (comportamiento)  
✅ **Carpeta assets**: Agrupa todos los recursos estáticos  
✅ **Nombres descriptivos**: `index.html` como punto de entrada estándar  
✅ **Modularidad**: Archivos organizados por tipo y función  
✅ **Escalabilidad**: Fácil agregar más recursos en subcarpetas

## ✨ Características del Sitio

### 🎨 Diseño
- ✅ **Responsive Design**: Adaptable a móviles, tablets y escritorio
- ✅ **Navbar funcional**: Menú con hamburguesa en móviles (Bootstrap)
- ✅ **Hero Section**: Imagen fullscreen con CTA
- ✅ **Grid de cards**: 6 platos con diseño en columnas responsivas
- ✅ **Formulario Bootstrap**: Limpio, centrado y validado
- ✅ **Footer**: 4 columnas con contraste claro

### 💻 JavaScript Básico

#### Eventos desde HTML (onclick)
```javascript
<button onclick="agregarAlPedido('Ceviche', 15990)">Agregar</button>
```

#### Uso de alert()
- Mensajes de bienvenida
- Confirmaciones de acciones
- Validaciones de formulario
- Información de términos y privacidad

#### Captura de datos
```javascript
const nombre = document.getElementById('nombre').value;
const email = document.getElementById('email').value;
```

#### Manipulación del DOM
```javascript
elemento.style.backgroundColor = '#d4af37';
heroTitle.textContent = 'Nuevo texto';
```

## 🚀 Cómo Usar

### Opción 1: Abrir directamente
1. Navega a la carpeta `landing-restaurante/`
2. Doble click en `index.html`
3. Se abrirá en tu navegador predeterminado

### Opción 2: Live Server (VS Code)
```bash
# Instalar extensión "Live Server"
# Click derecho en index.html → "Open with Live Server"
```

### Opción 3: Servidor HTTP Simple
```bash
# Python 3
cd landing-restaurante
python -m http.server 8000

# Navega a: http://localhost:8000
```

## 📱 Breakpoints Responsive

```css
/* Móviles pequeños */
@media (max-width: 576px) { ... }

/* Móviles */
@media (max-width: 768px) { ... }

/* Tablets */
@media (max-width: 992px) { ... }

/* Desktop */
@media (min-width: 992px) { ... }

/* Desktop XL */
@media (min-width: 1400px) { ... }
```

## 🎨 Paleta de Colores

```css
:root {
    --primary-color: #d4af37;    /* Dorado */
    --secondary-color: #1a1a1a;  /* Negro */
    --accent-color: #c19a6b;     /* Dorado claro */
    --light-bg: #f8f9fa;         /* Gris claro */
    --dark-bg: #212529;          /* Negro oscuro */
}
```

## 🛠️ Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| HTML5 | - | Estructura semántica |
| CSS3 | - | Estilos y animaciones |
| Bootstrap | 5.3.0 | Framework CSS responsive |
| Bootstrap Icons | 1.10.0 | Iconografía |
| JavaScript | ES6+ | Manipulación del DOM |

## 📚 Funcionalidades JavaScript

### 🔹 Interacciones Principales

```javascript
// Agregar platos al carrito
agregarAlPedido(nombrePlato, precio)

// Procesar reserva del formulario
procesarReserva(event)

// Ampliar imágenes del menú
ampliarImagen(imagen)

// Cambiar color de navegación activa
cambiarColorNav(elemento)
```

### ⌨️ Atajos de Teclado
- **R**: Ir a sección de Reservas
- **C**: Ver carrito de pedidos

## ✅ Requisitos Cumplidos

### Diseño
- [x] Responsive (móvil y escritorio)
- [x] Navbar con menú hamburguesa
- [x] Hero con imagen, título, subtítulo y botón
- [x] Menú con cards en columnas
- [x] Formulario estilizado con Bootstrap
- [x] Footer con contraste y redes sociales

### JavaScript Básico
- [x] Eventos onclick desde HTML
- [x] Alertas con alert()
- [x] Captura de datos de formularios
- [x] Modificación de contenido
- [x] Modificación de estilos
- [x] Manipulación del DOM

## 🎯 Buenas Prácticas Aplicadas

### HTML
✅ Estructura semántica (`<nav>`, `<section>`, `<footer>`)  
✅ Meta tags para SEO  
✅ Atributos `alt` en imágenes  
✅ Labels asociados a inputs  
✅ Validación nativa HTML5

### CSS
✅ Variables CSS (`:root`)  
✅ Mobile-first approach  
✅ Media queries organizadas  
✅ Nombres de clases descriptivos  
✅ Animaciones suaves

### JavaScript
✅ Funciones con documentación JSDoc  
✅ Nombres descriptivos de variables  
✅ Separación de responsabilidades  
✅ Event listeners organizados  
✅ Validación de datos

### Arquitectura
✅ Separación de archivos por tipo  
✅ Carpeta `assets/` para recursos  
✅ `index.html` como punto de entrada  
✅ Rutas relativas correctas  
✅ Estructura escalable

## 🔧 Personalización

### Cambiar Colores
Edita las variables en `assets/css/styles.css`:
```css
:root {
    --primary-color: #TU_COLOR_AQUI;
}
```

### Agregar Platos
Duplica una card en `index.html` y modifica:
```html
<div class="col-md-6 col-lg-4">
    <div class="card menu-card h-100">
        <!-- Tu contenido aquí -->
    </div>
</div>
```

### Cambiar Imágenes
Reemplaza las URLs de Unsplash o agrega imágenes en `assets/img/`:
```html
<img src="assets/img/tu-imagen.jpg" alt="Descripción">
```

## 📊 Performance

- ✅ CDN para Bootstrap (carga rápida)
- ✅ Imágenes optimizadas desde Unsplash
- ✅ CSS y JS minificables para producción
- ✅ Scroll suave nativo CSS

## 🌐 Compatibilidad

| Navegador | Versión Mínima |
|-----------|----------------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |
| Opera | 76+ |

## 📝 Licencia

Este es un proyecto educativo para demostrar conocimientos fundamentales de desarrollo web frontend.

## 👨‍💻 Desarrollo

**Proyecto académico** - Fundamentos de Desarrollo Web  
**Stack**: HTML5, CSS3, Bootstrap 5, JavaScript Vanilla  
**Fecha**: Febrero 2026

---

**Creado con ❤️ para aprendizaje de HTML, CSS y JavaScript básico**

🎓 Proyecto que demuestra:
- Estructura HTML semántica
- Diseño responsive con CSS y Bootstrap
- Manipulación básica del DOM con JavaScript
- Arquitectura de proyecto web profesional
