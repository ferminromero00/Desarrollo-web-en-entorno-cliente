import { fetchUsuarios } from "./fetch.js";

export const EventValidar = async () => {
    const usuarios = await fetchUsuarios();
    let btn = document.getElementById("loginButton")

    btn.addEventListener("click", () => {
        let name = document.getElementById("nombre").value
        let pass = document.getElementById("pass").value
        valida(usuarios, name, pass)
    })
};

const valida = (users, name, contrasena) => {
    let mensaje = document.getElementById("msj")

    for (let e = 0; e < users.length; e++) {
        if (users[e].username === name && users[e].password === contrasena) {
            window.location = "html/PaginaPrincipal.html";
            usuarioEncontrado = true;
            break;
        }
    }

    if (!usuarioEncontrado) { mensaje.innerHTML = "Usuario incorrecto"; }

}
