/*EJERCICIO 1*/

/*• Crear un objeto literal persona con nombre y edad y una método que determine si es
mayor de edad o no.*/

const persona = {
    nombre: "Juan",
    edad: 2,

    // Método para determinar si es mayor de edad
    esMayorDeEdad() {
        if (this.edad >= 18) {
            return document.write(this.nombre + " es mayor de edad.<br>");
        } else {
            return document.write(this.nombre + " no es mayor de edad.<br>");
        }
    }
}

/*Crear una función constructora que permita crear objetos del tipo personas pasándole solo
un nombre y edad, agregar el método. */


function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.Ver = () => { return document.write("Persona: " + nombre + " , con edad de " + edad + "<br>") }
}

/**• Crear un array que contenga varios objetos persona*/
const personaObjeto = {
    nombre: "Juan", edad: 20,
    Ver() { return document.write("Persona: " + this.nombre + " , con edad de " + this.edad); }
};

/**• Crear una función que reciba el array y devuelva la edad promedio del grupo de personas.*/
function edadMedia(personas) {
    let edades = 0;
    personas.forEach(persona => { edades += persona.edad; });
    const mediaEdad = edades / personas.length;
    return document.write("La edad media es: " + mediaEdad);
}

/*EJERCICIO 2: Crear una función constructora que devuelva objetos del tipo teléfono, como argumento debe 
recibir un número de teléfono, el objeto creado tiene el número de llamadas quedebe ser inicializado en 
cero y un método llamar que debe aumentar el número dellamados en uno.*/
function Telefono(numero) {
    this.numero = numero;
    this.numeroLlamadas = 0;


    this.llamar = function () {
        this.numeroLlamadas++;
        document.write("Llamada realizada al número " + this.numero + ". Número de llamadas: " + this.numeroLlamadas + "<br>");
    };
}

/**• Crear la función constructura punto que recibe un par de coordenadas (x,y) y devuelve un
objeto punto en esa posición.

• Crear la función constructora recta que recibe como argumento 2 puntos */

function Punto(x, y) { this.x = x; this.y = y; }

function Recta(punto1, punto2) {
    this.punto1 = punto1;
    this.punto2 = punto2;

    this.distancia = function () {
        return Math.floor(Math.sqrt(Math.pow
            (this.punto2.x - this.punto1.x, 2) +
            Math.pow(this.punto2.y - this.punto1.y, 2)));
    };
}

/**Queremos hacer una aplicación en JavaScript para gestionar las viviendas (casas) de
una serie de clientes de una empresa dedicada a la seguridad y protección de las mismas.
Para ello queremos almacenar la siguiente información de cada vivienda:
• calle.
• número.
• código postal. */


function Casa(calle, numero, codigoPostal) {
    this.calle = calle;
    this.numero = numero;
    this.codigoPostal = codigoPostal;

    this.setNumero = function (numero) {
        this.numero = numero;
    };

    this.setCalle = function (calle) {
        this.calle = calle;
    };

    this.setCodigoPostal = function (codigoPostal) {
        this.codigoPostal = codigoPostal;
    };

    this.imprimeCalle = function () {
        document.write("Calle: " + this.calle + "<br>");
    };

    this.imprimeNumero = function () {
        document.write("Número: " + this.numero + "<br>");
    };

    this.imprimeCodigoPostal = function () {
        document.write("Código Postal: " + this.codigoPostal + "<br>");
    };

    document.write("Nueva casa en calle: " + this.calle + ", nº: " + this.numero + ", CP: " +
        this.codigoPostal + ".<br>");
}

/**5.- CentroEducativo.html
Queremos gestionar los colegios/centros educativos de una determinada compañía de enseñanzas
concertadas. */

function Alumno(id, nombre, notaMedia = 5.00) {
    this.id = id;
    this.nombre = nombre;
    this.notaMedia = notaMedia;
}

function Colegio(nombre, numAulas, numAlumnos) {
    this.nombre = nombre;
    this.numAulas = numAulas;
    this.numAlumnos = numAlumnos;
    this.alumnos = [];

    for (let i = 0; i < numAlumnos; i++) {
        let alumno = new Alumno(i, "alumno" + (i + 1));
        this.alumnos.push(alumno);
    }

    this.consultarNotaMedia = function (id) {
        let alumno = this.alumnos.find(a => a.id === id);
        if (alumno) {
            document.write("La nota media de " + alumno.nombre + " es: " + alumno.notaMedia + "<br>");
        } else {
            document.write("Alumno no encontrado.<br>");
        }
    };

    this.modificarNotaMedia = function (id, nuevaNota) {
        let alumno = this.alumnos.find(a => a.id === id);
        if (alumno) {
            alumno.notaMedia = nuevaNota;
            document.write("La nota media de " + alumno.nombre + " ha sido modificada a: " + alumno.notaMedia + "<br>");
        } else {
            document.write("Alumno no encontrado.<br>");
        }
    };
}














//