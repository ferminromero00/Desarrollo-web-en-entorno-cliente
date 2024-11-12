import { Usuario } from "../clases/user.mjs";


/*FUNCION QUE SE INICIO ELLA SOLA*/

(function () {
    let objUser = new Usuario('755423X', 'Juan', 19)
    let objUser2 = new Usuario('755423X', 'Maria', 19)

    const array = [objUser, objUser2]
    console.log(array);
})();
