/* INICIO DE SESION, VALIDACION Y REDIRECCION*/

function fetch1(url) {
    return fetch(url)
        .then(res => res.json())
        .then(json => {
            console.log(json);
            return json;
        })
}

const eventLogin = () => {
    let btn = document.getElementById("validacionUser");

    btn.addEventListener("click", async () => {
        let nombre = document.getElementById("user").value;
        let pass = document.getElementById("pass").value;
        let url = "http://localhost:3000/users";

        valida(nombre, pass, await fetch1(url));
    });
}

const valida = (nombre, pass, users) => {
    let result

    users.find((e) => {
        if (e.name == nombre && e.pass == pass) {
            return result = true
        }
    });

    if (result) {
        location.href = "vistas/paginaPrincipal.html"
    } else {
        alert("El usuario o la contraseña no son valido")
    }
};

/* REGISTRAR USUARIO NUEVO */

const eventRegistrar = () => {
    let btn = document.getElementById("registrarUsuario");

    btn.addEventListener("click", async () => {
        let nombre = document.getElementById("user").value;
        let pass = document.getElementById("pass").value;
        let url = "http://localhost:3000/users";

        registrar(nombre, pass, await fetch1(url));
    });
}

const registrar = (nombre, pass, users) => {

};


const main = () => {
    eventLogin();
    eventRegistrar();
}
document.addEventListener("DOMContentLoaded", main);












