function fetch1(url) {
    return fetch(url)
        .then(res => res.json())
        .then(json => {
            console.log(json);
            return json;
        })
}

const eventLogin = () => {
    let btn = document.getElementById("botonLogin");

    btn.addEventListener("click", async () => {
        let nombre = document.getElementById("nombre").value;
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
        location.href = "loginCorrecto.html"
    } else {
        alert("ERROR")
    }
};

const main = () => {
    eventLogin();
}

document.addEventListener("DOMContentLoaded", main);












