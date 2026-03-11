// FUNCIONES BÁSICAS CON ALERT()

// Muestra un mensaje de bienvenida usando alert()
function mostrarMensaje(mensaje) {
    alert(mensaje);
}


//Cambia el color del enlace de navegación al hacer click
//Ejemplo de manipulación del DOM cambiando estilos
function cambiarColorNav(elemento) {
    // Remover clase active de todos los enlaces
    const enlaces = document.querySelectorAll('.nav-link');
    enlaces.forEach(link => {
        link.style.backgroundColor = '';
        link.style.color = '';
    });

    // Agregar estilo al enlace clickeado
    elemento.style.backgroundColor = '#d4af37';
    elemento.style.color = '#1a1a1a';
}

//Hace scroll suave a la sección de reservas
function scrollToReservas() {
    const seccionReservas = document.getElementById('reservas');
    seccionReservas.scrollIntoView({ behavior: 'smooth' });
}

// INTERACCIÓN CON IMÁGENES
// Amplía una imagen cuando se hace click
// Manipula el DOM cambiando estilos dinámicamente
function ampliarImagen(imagen) {
    // Cambiar el tamaño de la imagen
    if (imagen.style.transform === 'scale(1.5)') {
        imagen.style.transform = 'scale(1)';
        imagen.style.position = 'relative';
        imagen.style.zIndex = '1';
    } else {
        imagen.style.transform = 'scale(1.5)';
        imagen.style.position = 'relative';
        imagen.style.zIndex = '1000';
        imagen.style.transition = 'transform 0.3s ease';
    }
}





// FORMULARIO DE RESERVAS
// Actualiza el mensaje cuando se selecciona número de personas
// Manipulación del DOM en tiempo real
function actualizarPersonas() {
    const selectPersonas = document.getElementById('personas');
    const valor = selectPersonas.value;

    if (valor) {
        // Crear o actualizar mensaje debajo del select
        let mensajeDiv = document.getElementById('mensajePersonas');
        if (!mensajeDiv) {
            mensajeDiv = document.createElement('div');
            mensajeDiv.id = 'mensajePersonas';
            mensajeDiv.style.marginTop = '10px';
            mensajeDiv.style.padding = '10px';
            mensajeDiv.style.backgroundColor = '#d4af37';
            mensajeDiv.style.borderRadius = '5px';
            mensajeDiv.style.color = '#1a1a1a';
            mensajeDiv.style.fontWeight = 'bold';
            selectPersonas.parentElement.appendChild(mensajeDiv);
        }

        if (valor === '6+') {
            mensajeDiv.textContent = '¡Grupo grande! Te contactaremos para confirmar disponibilidad.';
        } else {
            mensajeDiv.textContent = 'Mesa para ' + valor + ' persona(s) - ¡Excelente elección!';
        }
    }
}

// Procesa el formulario de reserva
// Captura todos los datos del formulario y los muestra
function procesarReserva(event) {
    // Prevenir el envío del formulario
    event.preventDefault();

    // Capturar datos del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const personas = document.getElementById('personas').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const comentarios = document.getElementById('comentarios').value;
    const terminos = document.getElementById('terminos').checked;

    // Validar que los términos estén aceptados
    if (!terminos) {
        alert('⚠️ Debes aceptar los términos y condiciones');
        return;
    }

    // Formatear la fecha
    const fechaObj = new Date(fecha + 'T' + hora);
    const opciones = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const fechaFormateada = fechaObj.toLocaleDateString('es-ES', opciones);

    // Crear mensaje de confirmación
    let mensaje = '🎉 ¡RESERVA CONFIRMADA!\n\n';
    mensaje += '👤 Nombre: ' + nombre + '\n';
    mensaje += '📧 Email: ' + email + '\n';
    mensaje += '📱 Teléfono: ' + telefono + '\n';
    mensaje += '👥 Personas: ' + personas + '\n';
    mensaje += '📅 Fecha: ' + fechaFormateada + '\n';
    mensaje += '🕐 Hora: ' + hora + '\n';

    if (comentarios) {
        mensaje += '💬 Comentarios: ' + comentarios + '\n';
    }

    mensaje += '\n✅ Te enviaremos un email de confirmación a: ' + email;

    // Mostrar alerta con los datos
    alert(mensaje);

    // Cambiar el estilo del formulario para indicar éxito
    const form = document.getElementById('reservaForm');
    form.style.backgroundColor = '#d4f8e8';
    form.style.padding = '20px';
    form.style.borderRadius = '10px';
    form.style.transition = 'all 0.3s ease';

    // Deshabilitar el formulario
    const inputs = form.querySelectorAll('input, select, textarea, button');
    inputs.forEach(input => {
        input.disabled = true;
    });

    // Agregar mensaje de éxito visible en el DOM
    const mensajeExito = document.createElement('div');
    mensajeExito.style.marginTop = '20px';
    mensajeExito.style.padding = '20px';
    mensajeExito.style.backgroundColor = '#28a745';
    mensajeExito.style.color = 'white';
    mensajeExito.style.borderRadius = '10px';
    mensajeExito.style.textAlign = 'center';
    mensajeExito.style.fontSize = '1.2rem';
    mensajeExito.innerHTML = '<i class="bi bi-check-circle-fill"></i> ¡Reserva confirmada para ' + nombre + '!';
    form.appendChild(mensajeExito);
}

// Limpia el formulario de reservas
// Manipulación del DOM reseteando valores
function limpiarFormulario() {
    const confirmacion = confirm('¿Estás seguro de que deseas limpiar el formulario?');

    if (confirmacion) {
        document.getElementById('reservaForm').reset();

        // Remover mensaje de personas si existe
        const mensajePersonas = document.getElementById('mensajePersonas');
        if (mensajePersonas) {
            mensajePersonas.remove();
        }

        alert('✓ Formulario limpiado correctamente');
    }
}


// FOOTER Y REDES SOCIALES

// Función para redes sociales (sin alerta)
function abrirRedSocial(redSocial) {
    // Sin alerta - el enlace abre directamente la red social
}

// Muestra información de privacidad
function mostrarPrivacidad() {
    const mensaje = `
🔒 POLÍTICA DE PRIVACIDAD

Tus datos personales están seguros con nosotros.
Solo los usamos para:
• Confirmar tu reserva
• Contactarte si es necesario
• Enviarte promociones (si lo autorizas)

No compartimos tu información con terceros.
    `;

    alert(mensaje);
}

// Muestra términos de uso
function mostrarTerminos() {
    const mensaje = `
📋 TÉRMINOS Y CONDICIONES

• Las reservas deben hacerse con 24h de anticipación
• Cancelaciones gratuitas hasta 2 horas antes
• Tolerancia de 15 minutos de retraso
• Prohibido fumar en áreas cerradas
• Nos reservamos el derecho de admisión

Al reservar, aceptas estos términos.
    `;

    alert(mensaje);
}


// EFECTOS ADICIONALES AL CARGAR


// Se ejecuta cuando la página termina de cargar
// Manipulación del DOM inicial
window.onload = function () {
    // Mostrar mensaje de bienvenida
    setTimeout(function () {
        alert('👋 ¡Bienvenido a Sabor del Mar!\n\nDisfruta de nuestra carta y haz tu reserva.');
    }, 500);

    // Agregar fecha mínima al input de fecha (hoy)
    const inputFecha = document.getElementById('fecha');
    const hoy = new Date().toISOString().split('T')[0];
    inputFecha.min = hoy;

    // Cambiar color del navbar al hacer scroll
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = '#1a1a1a';
            navbar.style.transition = 'background-color 0.3s ease';
        } else {
            navbar.style.backgroundColor = '';
        }
    });

    // Agregar animación a las cards al aparecer en viewport
    const observador = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';

                setTimeout(function () {
                    entry.target.style.transition = 'all 0.5s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
            }
        });
    });

    // Observar todas las cards del menú
    const cards = document.querySelectorAll('.menu-card');
    cards.forEach(function (card) {
        observador.observe(card);
    });
};


// FUNCIÓN PARA MOSTRAR INFO DEL PEDIDO


// Muestra el resumen del carrito actual
function verCarrito() {
    if (carritoPedidos.length === 0) {
        alert('🛒 Tu carrito está vacío\n\n¡Agrega algunos platos deliciosos!');
        return;
    }

    let mensaje = '🛒 TU PEDIDO ACTUAL:\n\n';

    carritoPedidos.forEach(function (item, index) {
        let precio = new Intl.NumberFormat('es-CL', {
            style: 'currency',
            currency: 'CLP'
        }).format(item.precio);

        mensaje += (index + 1) + '. ' + item.nombre + ' - ' + precio + '\n';
    });

    let total = carritoPedidos.reduce((sum, item) => sum + item.precio, 0);
    let totalFormateado = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP'
    }).format(total);

    mensaje += '\n━━━━━━━━━━━━━━━━━━\n';
    mensaje += 'TOTAL: ' + totalFormateado;
    mensaje += '\n\n¿Listo para hacer tu reserva? 👇';

    alert(mensaje);

    // Preguntar si quiere ir a reservar
    const irAReservar = confirm('¿Deseas ir a la sección de reservas?');
    if (irAReservar) {
        scrollToReservas();
    }
}


// EVENTOS DEL TECLADO


// Detectar teclas específicas para acciones rápidas
document.addEventListener('keydown', function (event) {
    // Presionar 'R' para ir a reservas
    if (event.key === 'r' || event.key === 'R') {
        if (!event.target.matches('input, textarea')) {
            scrollToReservas();
        }
    }

    // Presionar 'C' para ver carrito
    if (event.key === 'c' || event.key === 'C') {
        if (!event.target.matches('input, textarea')) {
            verCarrito();
        }
    }
});

// Log de éxito en consola
console.log('🎉 JavaScript cargado correctamente');
console.log('💡 Tip: Presiona "R" para ir a Reservas o "C" para ver tu Carrito');
