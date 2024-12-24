// Importa las funciones de manejo de eventos desde el archivo 'login.js'.
import { eventLogin, eventRegistrar, eventBorrar } from './login.js';

/**
* Función principal que inicializa los eventos de la aplicación.
*/
const main = () => {
    // Evento para el inicio de sesión.
    eventLogin();
    // Evento para registrar un nuevo usuario.
    eventRegistrar();
    // Evento para borrar un usuario existente.
    eventBorrar();
}
document.addEventListener("DOMContentLoaded", main);