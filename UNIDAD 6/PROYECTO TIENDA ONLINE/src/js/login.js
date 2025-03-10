/* INICIO DE SESION, SEGURIDAD ANTI BOOT Y TOKEN*/

/**
 * Función `fetch1`:
 * Realiza una solicitud HTTP GET a la URL proporcionada y retorna la respuesta en formato JSON.
 * También registra la respuesta en la consola para fines de depuración.
 * @param {string} url - URL del recurso a obtener.
 * @returns {Promise<Object>} - Promesa que resuelve con el objeto JSON obtenido.
 */
function fetch1(url) {
    return fetch(url)
        .then(res => res.json())
        .then(json => {
            console.log(json);
            return json;
        });
}

/**
 * Evento `eventLogin`:
 * Configura un evento en el botón de validación del usuario para manejar el inicio de sesión.
 * Realiza una solicitud para obtener los datos de los usuarios desde el servidor y valida las credenciales ingresadas.
 */
export const eventLogin = () => {
    let btn = document.getElementById("validacionUser");

    btn.addEventListener("click", async () => {
        let nombre = document.getElementById("user").value;
        let pass = document.getElementById("pass").value;
        let url = "http://localhost:3000/users";

        if (nombre === "" || pass === "") {
            document.getElementById("data").innerHTML = "No dejes campos vacios";
        } else {
            valida(nombre, pass, await fetch1(url));
        }
    });
};

// Configuración inicial del contador de intentos fallidos.
localStorage.setItem("cont", 5);
let contador = parseInt(localStorage.getItem("cont"));


/**
 * Función `valida`:
 * Verifica si las credenciales proporcionadas coinciden con algún usuario registrado.
 * Gestiona el contador de intentos fallidos usando `localStorage` y bloquea el acceso tras demasiados intentos.
 * @param {string} nombre - Nombre de usuario ingresado.
 * @param {string} pass - Contraseña ingresada.
 * @param {Array<Object>} users - Lista de usuarios obtenida del servidor.
 */
const valida = (nombre, pass, users) => {
    let result;

    // Busca si el usuario y contraseña coinciden con algún registro.
    users.find((e) => {
        if (e.name === nombre && e.pass === pass) {
            return result = true;
        }
    });

    if (result) {
        if (contador === 0) {
            document.getElementById("data").innerHTML = "Demasiados intentos...";
        } else {
            localStorage.clear();
            localStorage.setItem("contadorCarrito", 0)
            location.href = "src/views/paginaPrincipal.html";
            const simulatedToken = generarToken(128);
            document.cookie = `TOKEN=${simulatedToken}`;
        }
    } else {
        if (contador >= 1) {
            document.getElementById("data").innerHTML = "Usuario no encontrado";
            contador--;
            localStorage.setItem("cont", contador);
        } else {
            document.getElementById("data").innerHTML = "Demasiados intentos...";
        }
    }
};

/* REGISTRAR USUARIO NUEVO */

/**
 * Evento `eventRegistrar`:
 * Configura un evento en el botón de registro de usuario.
 * Permite al usuario registrar una nueva cuenta verificando previamente si el nombre ya existe.
 */
export const eventRegistrar = () => {
    let btn = document.getElementById("registrarUsuario");

    btn.addEventListener("click", async () => {
        let nombre = document.getElementById("user").value;
        let pass = document.getElementById("pass").value;
        let url = "http://localhost:3000/users";

        if (nombre === "" || pass === "") {
            document.getElementById("data").innerHTML = "No dejes campos vacios";
        } else {
            registrar(nombre, pass, await fetch1(url));
        }
    });
};

/**
 * Función `registrar`:
 * Verifica si el nombre de usuario ya existe y registra uno nuevo si no hay coincidencias.
 * @param {string} nombre - Nombre de usuario a registrar.
 * @param {string} pass - Contraseña para el nuevo usuario.
 * @param {Array<Object>} users - Lista de usuarios obtenida del servidor.
 */
const registrar = (nombre, pass, users) => {
    let result;

    users.find((e) => {
        if (e.name === nombre) {
            return result = true;
        }
    });

    if (contador === 0) {
        document.getElementById("data").innerHTML = "Demasiados intentos...";
    } else {
        if (!result) {
            let lengt_id = users.length
            axios.post('http://localhost:3000/users', {
                id: `${lengt_id + 1}`,
                name: nombre,
                pass: pass
            });
            document.getElementById("data").innerHTML = "Usuario creado con éxito.";
        } else {
            document.getElementById("data").innerHTML = "Ese nombre de usuario ya existe, intentalo otra vez.";
        }
    }
};

/* BORRAR USUARIO */

/**
 * Evento `eventBorrar`:
 * Configura un evento en el botón para borrar usuarios.
 * Verifica las credenciales proporcionadas y elimina el usuario del servidor si coincide.
 */
export const eventBorrar = () => {
    let btn = document.getElementById("borrarUser");

    btn.addEventListener("click", async () => {
        let nombre = document.getElementById("user").value;
        let pass = document.getElementById("pass").value;
        let url = 'http://localhost:3000/users';

        if (nombre === "" || pass === "") {
            document.getElementById("data").innerHTML = "No dejes campos vacios";
        } else {
            borrarUser(nombre, pass, await fetch1(url));
        }
    });
};

/**
 * Función `borrarUser`:
 * Verifica si el usuario y contraseña proporcionados coinciden con un registro existente.
 * Si coinciden, elimina al usuario del servidor.
 * @param {string} nombre - Nombre de usuario.
 * @param {string} pass - Contraseña.
 * @param {Array<Object>} users - Lista de usuarios obtenida del servidor.
 */
const borrarUser = (nombre, pass, users) => {
    let result;
    let id = 0;

    users.find((e) => {
        if (e.name === nombre && e.pass === pass) {
            id = e.id;
            return result = true;
        }
    });

    if (contador === 0) {
        document.getElementById("data").innerHTML = "Demasiados intentos...";
    } else {
        if (result) {
            let deleteurl = `http://localhost:3000/users/${id}`;
            axios.delete(deleteurl);
            document.getElementById("data").innerHTML = "Borrado con éxito.";
        } else {
            document.getElementById("data").innerHTML = "No se pudo borrar el usuario seleccionado.";
        }
    }
};

/* SIMULACION DEL TOKEN */

/**
 * Función `generarToken`:
 * Genera un token aleatorio de 128 caracteres utilizando un conjunto de letras, números y símbolos permitidos.
 * Este token puede ser utilizado para simular un identificador único de sesión o autenticación.
 * @returns {string} - Token generado aleatoriamente.
 */

function generarToken() {
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789._-';
    let token = '';
    for (let i = 0; i < 128; i++) {
        token += letras.charAt(Math.floor(Math.random() * letras.length));
    }
    return token;
}