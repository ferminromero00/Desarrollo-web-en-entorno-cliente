// Importa las funciones de manejo de eventos desde el archivo 'login.js'.
import { eventLogin, eventRegistrar, eventBorrar } from './login.js';

/**
* Función principal que inicializa los eventos de la aplicación.
*/
const main = () => {
    // Configura el evento para el inicio de sesión.
    eventLogin();
    // Configura el evento para registrar un nuevo usuario.
    eventRegistrar();
    // Configura el evento para borrar un usuario existente.
    eventBorrar();
}
document.addEventListener("DOMContentLoaded", main);