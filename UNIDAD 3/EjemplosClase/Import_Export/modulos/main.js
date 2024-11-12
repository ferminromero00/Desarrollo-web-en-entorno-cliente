/*USUARIO*/

import { Usuario } from "../clases/user.mjs";

let objUser = new Usuario('755423X', 'Juan', 19)
let objUser1 = new Usuario('755423X', 'Juan', 19)

console.log(objUser.dni);
objUser.ShowMe();


/*EMPLEADO*/

import { Empleado } from "../clases/empleado.mjs";

let objEmpl = new Empleado(1, "Jose", 32312321)
let objEmpl1 = new Empleado(1, "Jose", 32312321)

objEmpl.mostrarEmpleado()


/*HACIENDOLO FUNCIONES*/
function CrearUser() {
    objUser1 = new Usuario('755423X', 'Juan', 19)
    console.log(objUser1.ShowMe());

}
console.log(CrearUser());

function CreaEmpleado() {
    objEmpl1 = new Empleado('755423X', 'Juan', 19)
    console.log(objEmpl1.mostrarEmpleado());

}
console.log(CreaEmpleado());










