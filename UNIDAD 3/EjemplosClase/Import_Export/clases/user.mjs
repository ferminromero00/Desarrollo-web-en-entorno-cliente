function Usuario(dni, nombre, edad) {
    this.dni = dni
    this.nombre = nombre
    this.edad = edad
    this.ShowMe = function () {
        console.log("Nombre: " + this.nombre + ", edad: " +
            this.edad + " dni: " + this.dni
        )
    }
}

export {Usuario} 