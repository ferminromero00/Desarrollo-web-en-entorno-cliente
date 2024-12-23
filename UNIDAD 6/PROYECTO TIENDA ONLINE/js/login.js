/* INICIO DE SESION, SEGURIDAD ANTI BOOT Y TOKEN*/

function fetch1(url) {
    return fetch(url)
        .then(res => res.json())
        .then(json => {
            console.log(json);
            return json;
        })
}

export const eventLogin = () => {
    let btn = document.getElementById("validacionUser");

    btn.addEventListener("click", async () => {
        let nombre = document.getElementById("user").value;
        let pass = document.getElementById("pass").value;
        let url = "http://localhost:3000/users";

        if (nombre == "" || pass == "") {
            document.getElementById("data").innerHTML = "No dejes campos vacios"
        } else {
            valida(nombre, pass, await fetch1(url));
        }

    });
}

localStorage.setItem("cont", 5)

const valida = (nombre, pass, users) => {
    let contador = parseInt(localStorage.getItem("cont"));
    let result;
    users.find((e) => {
        if (e.name == nombre && e.pass == pass) {
            return result = true;
        }
    });

    if (result) {
        if (contador == 0) {
            document.getElementById("data").innerHTML = "Demasiados intentos..."
        } else {
            location.href = "vistas/paginaPrincipal.html"
        }


    } else if (!result) {
        if (contador >= 1) {
            document.getElementById("data").innerHTML = "Usuario no encontrado"
            contador--
            localStorage.setItem("cont", contador);
        } else {
            document.getElementById("data").innerHTML = "Demasiados intentos..."
        }
    }
};

/* REGISTRAR USUARIO NUEVO */

export const eventRegistrar = () => {
    let btn = document.getElementById("registrarUsuario");

    btn.addEventListener("click", async () => {
        let nombre = document.getElementById("user").value;
        let pass = document.getElementById("pass").value;
        let url = "http://localhost:3000/users";

        if (nombre == "" || pass == "") {
            document.getElementById("data").innerHTML = "No dejes campos vacios"
        } else {
            registrar(nombre, pass, await fetch1(url));
        }
    });
}

const registrar = (nombre, pass, users) => {

    let result;

    users.find((e) => {
        if (e.name == nombre) {
            return result = true;
        }
    });

    if (contador == 0) {
        document.getElementById("data").innerHTML = "Demasiados intentos..."
    } else {
        if (!result) {
            axios.post('http://localhost:3000/users', {
                id: users.length + 1,
                name: nombre,
                pass: pass
            })
            document.getElementById("data").innerHTML = "Usuario creado con exito";
        } else {
            document.getElementById("data").innerHTML = "Ese nombre de usuario ya existe, intentalo otra vez";
        }
    }
};

/* BORRAR USUARIO */

export const eventBorrar = () => {
    let btn = document.getElementById("borrarUser");

    btn.addEventListener("click", async () => {
        let nombre = document.getElementById("user").value;
        let pass = document.getElementById("pass").value;
        let url = 'http://localhost:3000/users';

        if (nombre == "" || pass == "") {
            document.getElementById("data").innerHTML = "No dejes campos vacios"
        } else {
            borrarUser(nombre, pass, await fetch1(url));
        }
    });
}

const borrarUser = (nombre, pass, users) => {

    let result;
    let id = 0;

    users.find((e) => {
        if (e.name == nombre && e.pass == pass) {
            id = e.id;
            return result = true;
        }
    });

    if (contador == 0) {
        document.getElementById("data").innerHTML = "Demasiados intentos..."
    } else {
        if (result) {
            let deleteurl = `http://localhost:3000/users/${id}`;
            axios.delete(deleteurl)
            document.getElementById("data").innerHTML = "Borrado con exito"
        } else {
            document.getElementById("data").innerHTML = "No se pudo borrar el usuario seleccionado"
        }
    }
}
