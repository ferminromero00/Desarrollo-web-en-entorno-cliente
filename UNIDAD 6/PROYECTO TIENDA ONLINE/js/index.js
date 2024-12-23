// Importa las funciones de manejo de eventos desde el archivo 'login.js'.
// Estas funciones incluyen la lógica para iniciar sesión, registrar usuarios y borrar usuarios.
import { eventLogin, eventRegistrar, eventBorrar } from './login.js';

/**
 * Función principal que inicializa los eventos de la aplicación.
 * 
 * La función `main` se asegura de que los eventos correspondientes para login,
 * registro y borrado de usuarios estén correctamente configurados una vez que el
 * contenido del documento haya cargado por completo.
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