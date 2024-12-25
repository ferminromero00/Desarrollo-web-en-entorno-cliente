// Importa las funciones de manejo de eventos desde el archivo 'login.js'.
import { eventDibujar, eventCategorias, eventCarrito } from './paginaPrincipal.js';

/**
* Función principal que inicializa los eventos de la aplicación.
*/
const main = () => {
    eventDibujar()
    eventCategorias()
    eventCarrito()
}
document.addEventListener("DOMContentLoaded", main);