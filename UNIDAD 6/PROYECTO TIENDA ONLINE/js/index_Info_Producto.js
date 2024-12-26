// Importa las funciones de manejo de eventos desde el archivo 'login.js'.
import { dibujarProductoSeleccionado } from './infoProducto.js';

/**
* Función principal que inicializa los eventos de la aplicación.
*/
const main = () => {
    dibujarProductoSeleccionado()
}
document.addEventListener("DOMContentLoaded", main);