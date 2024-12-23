// registro.js

import { fetch1 } from './utils.js';  // Importando la función fetch1

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
