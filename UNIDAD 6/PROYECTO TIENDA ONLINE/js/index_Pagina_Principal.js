// Importa las funciones de manejo de eventos desde el archivo 'login.js'.
import { eventDibujar } from './paginaPrincipal.js';

/**
* Función principal que inicializa los eventos de la aplicación.
*/
const main = () => {
    eventDibujar()
}
document.addEventListener("DOMContentLoaded", main);