// Importa las funciones de manejo de eventos desde el archivo 'login.js'.
import {
    eventDibujar,
    eventCategorias, eventCarrito,
    eventVerMasInformacion,
    dibujarProductoSeleccionado,
    cerrarSesion
} from './paginaPrincipal.js';

/**
* Función principal que inicializa los eventos de la aplicación.
*/
const main = () => {
    let path = window.location.pathname;

    if (path.includes('paginaPrincipal.html')) {
        eventDibujar()
        eventCategorias()
        eventCarrito()
        eventVerMasInformacion()
        cerrarSesion()
    } else if (path.includes('informacionProducto.html')) {
        dibujarProductoSeleccionado()
        cerrarSesion()
    }
}
document.addEventListener("DOMContentLoaded", main);