import { arrObjUsuarios } from "../js/BDexamen.js"

export const eventLogin = () => {
    let boton = document.getElementById("login")
    boton.addEventListener("click", () => {
        let user = document.getElementById("nombre").value
        let pass = document.getElementById("pass").value

        valida(user, pass)
    })
}

const valida = (user, pass) => {
    let msj = document.getElementById("result")

    for (let e = 0; e < arrObjUsuarios.length; e++) {
        if(arrObjUsuarios[e].username === user || arrObjUsuarios[e].password === pass) {
           msj.innerHTML = "Login correcto" 
           window.location = "DatosExamen.html"
        } else {
            msj.innerHTML = "Login incorrecto" 
        }
    }

}




