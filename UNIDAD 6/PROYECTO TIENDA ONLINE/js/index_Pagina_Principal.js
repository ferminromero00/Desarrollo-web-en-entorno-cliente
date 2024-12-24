// Importa las funciones de manejo de eventos desde el archivo 'login.js'.
import { eventDibujar, eventCategorias } from './paginaPrincipal.js';

/**
* Función principal que inicializa los eventos de la aplicación.
*/
const main = () => {
    eventDibujar()
    eventCategorias()
}
document.addEventListener("DOMContentLoaded", main);