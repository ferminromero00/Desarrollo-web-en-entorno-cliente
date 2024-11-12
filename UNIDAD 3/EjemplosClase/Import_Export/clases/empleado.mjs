class Empleado {
    constructor(codigo, nombre, telefono) {
        this.codigo = codigo
        this.nombre = nombre
        this.telefono = telefono
    }
    mostrarEmpleado() {
        console.log("Empleado: " + this.nombre + "---Telefono: " + this.telefono
            + "---Codigo: " + this.codigo
        )
    }
}

export { Empleado } 