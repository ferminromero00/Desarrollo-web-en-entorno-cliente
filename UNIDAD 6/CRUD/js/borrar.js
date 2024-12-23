// borrar.js

import { fetch1 } from './utils.js';  // Importando la función fetch1

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

    if (result) {
        let deleteurl = `http://localhost:3000/users/${id}`;
        axios.delete(deleteurl)
        document.getElementById("data").innerHTML = "Borrado con exito"
    } else {
        document.getElementById("data").innerHTML = "No se pudo borrar el usuario seleccionado"
    }
}
