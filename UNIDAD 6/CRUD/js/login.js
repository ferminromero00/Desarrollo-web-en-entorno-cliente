// login.js

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

const valida = (nombre, pass, users) => {
    let result;

    users.find((e) => {
        if (e.name == nombre && e.pass == pass) {
            return result = true;
        }
    });

    if (result) {
        location.href = "vistas/paginaPrincipal.html"
    } else if (!result) {
        document.getElementById("data").innerHTML = "Usuario no encontrado"
    }
}
