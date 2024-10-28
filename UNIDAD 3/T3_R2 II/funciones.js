function infoClase() {
    const clase = ["Angel Garcia, 20, 6, 7, 10", "Maria Lopez, 19, 8, 7, 9",
        "Carlos Perez, 21, 5, 6, 7", "Ana Martinez, 20, 9, 8, 10"];

    clase.forEach((estudiante, index) => {
        // Escribimos en el documento HTML con el formato índice = valor
        document.write("<p>clase[" + index + "]: " + estudiante + "</p>");
    });
}

function estudianteNotas() {
    const edades = [
        { nombre: "Angel Garcia", trim1: 6, trim2: 7, trim3: 10 },
        { nombre: "Maria Lopez", trim1: 8, trim2: 7, trim3: 9 },
        { nombre: "Carlos Perez", trim1: 5, trim2: 6, trim3: 7 },
        { nombre: "Ana Martinez", trim1: 9, trim2: 8, trim3: 10 }];

    let numEstudiante = parseInt(document.getElementById("numEstudiante").value);
    let trimestre = parseInt(document.getElementById("trimestre").value);
    let resultado = "";

    // Verificamos si el número de estudiante es válido
    if (numEstudiante >= 1 && numEstudiante <= edades.length) {
        // Obtenemos el estudiante seleccionado
        const estudiante = edades[numEstudiante - 1];

        // Verificamos el trimestre ingresado y mostramos la nota correspondiente
        if (trimestre === 1) {
            resultado = "El alumno " + estudiante.nombre + " tiene una nota de " + estudiante.trim1 + " en el primer trimestre.";
        } else if (trimestre === 2) {
            resultado = "El alumno " + estudiante.nombre + " tiene una nota de " + estudiante.trim2 + " en el segundo trimestre.";
        } else if (trimestre === 3) {
            resultado = "El alumno " + estudiante.nombre + " tiene una nota de " + estudiante.trim3 + " en el tercer trimestre.";
        } else {
            resultado = "La nota media de " + estudiante.nombre + " es: " + Math.floor((estudiante.trim1 + estudiante.trim2 + estudiante.trim3) / 3);
        }
    } else {
        resultado = "Por favor, ingrese un número de estudiante válido.";
    }
    document.getElementById("resultado").innerHTML = resultado;
}

function edadMedia() {
    const alumnos = [
        { nombre: "Angel Garcia", edad: 20 },
        { nombre: "Maria Lopez", edad: 18 },
        { nombre: "Carlos Perez", edad: 25 },
        { nombre: "Ana Martinez", edad: 19 }
    ];

    let media = 0

    for (let i = 0; i < alumnos.length; i++) {
        media += alumnos[i].edad
    }

    document.write("La media de edad de los alumnos es: " + media / alumnos.length)
}

function estudianteAleatorio() {
    const alumnos = [{ nombre: "Angel Garcia" }, { nombre: "Maria Lopez" },
    { nombre: "Carlos Perez" }, { nombre: "Ana Martinez" }];
    let numRandom = Math.floor(Math.random() * 4)
    document.write("El estudiante aleatorio es: " + alumnos[numRandom].nombre)
}

//Array de 100 numeros aleatorios del 1 al 1000, primero los pares y luego impares
function paresImpares() {

    const arrayNumerosPares = []
    const arrayNumerosImpares = []

    for (let i = 0; i <= 100; i++) {
        numRandom = Math.floor(Math.random() * 1000) + 1
        if (numRandom % 2 === 0) {
            arrayNumerosPares.push(numRandom)
        } else {
            arrayNumerosImpares.push(numRandom)
        }
    }

    document.write("Primero van los Pares y Luego Impares: " + arrayNumerosPares.concat(arrayNumerosImpares))
}

const arrayVendedores = []
function calcularSueldoFinal() {
    let nombreVendedor = document.getElementById("nombre").value
    let ventasTotal = parseInt(document.getElementById("ventas").value)

    arrayVendedores.push({ nombre: nombreVendedor, ventas: ventasTotal })

    let ultimoVendedor = arrayVendedores.length - 1
    let sueldoFinal = (arrayVendedores[ultimoVendedor].ventas * 0.09) + (arrayVendedores[ultimoVendedor].ventas) + 200

    document.getElementById("resultado").innerHTML = arrayVendedores[ultimoVendedor].nombre +
        " el total de tu sueldo es " + sueldoFinal + "€ <br>";

    let vendedores = "";

    for (let i = 0; i < arrayVendedores.length; i++) {
        vendedores += arrayVendedores[i].nombre + ", ";
    }

    document.getElementById("altas").innerHTML = "Usuarios dados de alta: " + vendedores;
}

// Crear un array con números del 1 al 10
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Función para mostrar el array en el HTML
function mostrarArray() {
    document.getElementById("array").innerHTML = "Elementos del array: " + array.join(", ");
}

// Función para establecer todos los elementos a cero
function establecerCero() {
    for (let i = 0; i < array.length; i++) {
        array[i] = 0; // Establecer cada elemento a cero
    }
    mostrarArray(); // Mostrar el array actualizado
}

function añadir1() {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] + 1; // Establecer cada elemento a cero
    }
    mostrarArray(); // Mostrar el array actualizado
}

function espaciosArray() {
    document.getElementById("array").innerHTML = "Elementos del array: " + array.join(" ");
}


/*Haciendo uso de un array unidimensional, escribir un script para simular el lanzamiento de
dos dados. El script debe simular el lanzamiento (aleatorio) de ambos dados. La suma de los
dos valores debe calcularse a continuación (la suma variará pues de 2 a 12, siendo éstos los
valores menos frecuentes así como 7 el más frecuente). Haz una simulación con 36.000
lanzamientos y muestra el número de veces que aparece cada una de las combinaciones. */
function lanzamientoDados() {
    const combinaciones = [];
    for (let i = 0; i < 13; i++) { combinaciones[i] = 0; }

    for (let i = 0; i <= 36000; i++) {
        const dado1 = Math.floor(Math.random() * 6) + 1
        const dado2 = Math.floor(Math.random() * 6) + 1

        const suma = dado1 + dado2
        combinaciones[suma]++
    }

    for (let e = 2; e <= 12; e++) {
        document.write("Resultado: " + e + ". Coincidio una cantidad de veces de: " + combinaciones[e] + "<br>")
    }
}

function dadosBidimensional() {
    const combinaciones = [];
    for (let i = 0; i < 13; i++) { combinaciones[i] = 0; }
    const tablaCombinaciones = []
    for (let i = 0; i <= 6; i++) {
        tablaCombinaciones[i] = []; // Crea una nueva fila
        for (let j = 0; j <= 6; j++) {
            tablaCombinaciones[i][j] = 0; // Asigna 0 a cada celda
        }
    }

    for (let i = 0; i < 36000; i++) {
        const dado1 = Math.floor(Math.random() * 6) + 1; // Dado 1
        const dado2 = Math.floor(Math.random() * 6) + 1; // Dado 2

        const suma = dado1 + dado2;

        combinaciones[suma]++; // Contar la suma
        tablaCombinaciones[dado1][dado2]++; // Contar la combinación específica
    }

    for (let e = 2; e <= 12; e++) {
        document.write("Resultado: " + e + ". Coincidio una cantidad de veces de: " + combinaciones[e] + "<br>")
    }
    document.write("<br>")
    for (let i = 1; i <= 6; i++) {
        for (let j = 1; j <= 6; j++) {
            document.write("Dados: " + i + " " + j + " --Combinaciones: " + tablaCombinaciones[i][j] + "<br>")
        }
    }

}




































