// Importa las funciones de manejo de eventos desde el archivo 'login.js'.
import {
    eventDibujar,
    eventCategorias, eventCarrito,
    eventVerMasInformacion,
    dibujarProductoSeleccionado,
    cerrarSesion,
    verCarrito,
    pintarCarritoCompleto,
    vaciarCarrito,
    eventEmail
} from './paginaPrincipal.js';

/**
 * Función principal que inicializa los eventos de la aplicación.
 */
const main = () => {
    // Obtiene la ruta del archivo actual
    let path = window.location.pathname;

    // Verifica si la ruta incluye 'paginaPrincipal.html'
    if (path.includes('paginaPrincipal.html')) {
        eventDibujar();
        // Configura los eventos para las categorías de productos
        eventCategorias();
        // Configura los eventos para el carrito de compras
        eventCarrito();
        // Configura los eventos para ver más información de los productos
        eventVerMasInformacion();
        // Muestra el contenido del carrito
        verCarrito();
        // Configura el evento para cerrar sesión
        cerrarSesion();

        // Verifica si la ruta incluye 'informacionProducto.html'
    } else if (path.includes('informacionProducto.html')) {
        // Dibuja la información del producto seleccionado
        dibujarProductoSeleccionado();
        // Verifica si la ruta incluye 'Carrito.html'
    } else if (path.includes('Carrito.html')) {
        // Dibuja todos los elementos del carrito
        pintarCarritoCompleto();
        // Configura el evento para vaciar el carrito
        vaciarCarrito();
        // Configura el evento para enviar el carrito por email
        eventEmail();
        // Configura el evento para cerrar sesión
        cerrarSesion();
    }
}

// Ejecuta la función main cuando el contenido del documento ha sido completamente cargado
document.addEventListener("DOMContentLoaded", main);