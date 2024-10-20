/*1. Nombre del archivo: T4_EJ1.html
Realiza un script que solicite 5 números al usuario, almacenaremos estos números en un array y posteriormente ofreceremos la siguiente información:
Valor mínimo  Valor máximo  Valor medio.*/
function ValoresArrays(...num) {
    // Asignar directamente el argumento num a arrayNumeros
    let arrayNumeros = []
    arrayNumeros.push(...num)
    let suma = 0;
    // recorremos el array y sumamos valores, para calcular el valor medio
    for (let i = 0; i < arrayNumeros.length; i++) {
        suma = suma + arrayNumeros[i]
    }

    // Usar el operador de propagación para pasar los elementos del array
    document.write("Valor mínimo: " + Math.min(...arrayNumeros) + "<br>");
    document.write("Valor máximo: " + Math.max(...arrayNumeros) + "<br>");
    document.write("Valor medio: " + Math.floor(suma / arrayNumeros.length) + "<br>");

    // Mostrar los números en el array
    document.write("Números: " + arrayNumeros.join(", ") + "<br>");
    document.write(suma);
}

/*2. Nombre del archivo: T4_EJ2.htmlDado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si un
color introducido por el usuario a través de un prompt se encuentra dentro del array o no*/
function CompararValoresArray(valor) {
    let ArrayColores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"]
    //Facil el bucle, simplemente si tu color coincide con alguno del array lo recoge y te da el resultado
    for (let i = 0; i <= ArrayColores.length - 1; i++) {
        if (valor == ArrayColores[i]) {
            alert("Tu color coincide con uno del array!")
            break;
        } else if (valor != ArrayColores[i]) {
            alert("No coincide con ningun color del array")
            break;
        }
    }
}

/*3. Nombre del archivo: T4_EJ3.html Crear un array vacío, luego generar 20 números al azar (utiliza random del objeto Math ) y
guardarlos en un array, N es introducido por el usuario*/
function arrayNumerosAzar(repeticiones) {
    let arrayNumeros = []
    //Se añaden tantos numeros como el usuario quiera
    for (let i = 0; i <= repeticiones - 1; i++) {
        numramdon = Math.floor(Math.random() * 100) + 1;
        arrayNumeros.push(numramdon)
    }
    document.write(arrayNumeros.join(", "))
}

/*4. Nombre del archivo: T4_EJ4.html
Existen dos arrays, cada uno con 5 palabras, generar los siguientes array:  Intersección  Unión  Diferencia*/
function operacionesDeConjuntos() {
    // Intersección: Es la parte común de los elementos del conjunto A y el conjunto B.
    let array1 = ["hola", "adios", "ejemplo", "pizza", "pc"]
    let array2 = ["bien", "hola", "mal", "ejemplo", "pizza"]
    let arrayComunes = [];
    let arrayNoComunes = [];

    document.write("Array1: " + array1 + "<br>")
    document.write("Array2: " + array2 + "<br><br>")

    for (let i = 0; i < array1.length; i++) {
        for (let e = 1; e <= array1.length; e++) {
            if (array1[i] == array2[e]) {
                arrayComunes.push(array1[i])
            }
        }
    }

    document.write("Las palabras comunes son: " + arrayComunes)
    //Unión: Es la suma de todos los elementos del conjunto A y el conjunto B.
    document.write("<h2>Unión: Es la suma de todos los elementos del conjunto A y el conjunto B.</h2>")

    let arrayConcatenados = array1.concat(array2)
    document.write(arrayConcatenados)

    //Diferencia: Son los elementos del conjunto A quitándole los comunes del conjunto B.
    document.write("<h2>Diferencia: Son los elementos del conjunto A quitándole los comunes del conjunto B.</h2>")
    for (let i = 0; i < array1.length; i++) {
        for (let e = 1; e <= array1.length; e++) {
            if (!array2.includes(array1[i]) && !arrayNoComunes.includes(array1[i])) {
                // Si no está en array2 y tampoco está ya en arrayNoComunes, lo añadimos
                arrayNoComunes.push(array1[i]);
            }
        }
    }
    //Hago otro bucle para capturar los valores del segundo array que tampoco son comunes en el array1
    for (let e = 0; e < array2.length; e++) {
        if (!array1.includes(array2[e]) && !arrayNoComunes.includes(array2[e])) {
            arrayNoComunes.push(array2[e]);
        }
    }
    document.write(arrayNoComunes)
}


/* 5. Nombre del archivo: T4_EJ5.html
Utilizando el método random del objeto Math carga con valores aleatorios un array de 20 elementos con valores enteros entre el 
0 y el 100. Ten en cuenta que random devuelve un número flotante entre 0 y 1. Una vez cargado muestra los datos del array por pantalla.*/
function ValoresArraysRandom() {
    //Este ejercicio es practicamente identico al primero, asi que es reutilizar codigo
    let arrayRandoms = []
    let suma = 0

    for (let i = 0; i <= 19; i++) {
        arrayRandoms.push(Math.floor(Math.random() * 100) + 1)
    }

    document.write("Contenido del array: " + arrayRandoms + "<br><br>")

    for (let i = 0; i < arrayRandoms.length; i++) {
        suma = suma + arrayRandoms[i]
    }

    document.write("Valor mínimo: " + Math.min(...arrayRandoms) + "<br>");
    document.write("Valor máximo: " + Math.max(...arrayRandoms) + "<br>");
    document.write("Valor medio: " + Math.floor(suma / arrayRandoms.length) + "<br>");
}


/*6. Nombre del archivo: T4_EJ6.html
Crea una página web que contenga varios párrafos con texto de ejemplo. La página contendrá
un botón que al pulsarlo solicitará al usuario una palabra o cadena de texto e indicará si existe o
no dicha palabra dentro del document*/
function buscarPalabras() {
    // Solicitar palabra al usuario
    let palabra = prompt("Introduce una palabra o cadena de texto a buscar:");

    // Obtener todo el texto del documento y convertirlo en un array de palabras
    let texto = document.body.innerText;
    let textoLower = texto.toLowerCase()
    let palabrasArray = textoLower.split(" "); // Dividir el texto por espacios en blanco

    if (palabrasArray.includes(palabra)) {
        document.getElementById("resultado").innerHTML = "La palabra -" + palabra + "- si esta en el documento"
    } else {
        document.getElementById("resultado").innerHTML = "La palabra -" + palabra + "- no esta en el documento"
    }
}

function buscarCadena() {
    // Solicitar cadena al usuario
    let cadena = prompt("Introduce una cadena de texto a buscar:");

    // Obtener todo el texto del documento
    let texto = document.body.innerText;

    // Comprobar si la cadena existe en el texto completo
    if (texto.indexOf(cadena) !== -1) {
        document.getElementById("resultado").innerHTML = "La cadena -" + cadena + "- si esta en el documento"
    } else {
        document.getElementById("resultado").innerHTML = "La cadena -" + cadena + "- no esta en el documento"
    }
}


/* 7. Nombre del archivo: T4_EJ7.html
Utilizando el método random del objeto Math carga con valores aleatorios un array de 20
elementos con valores enteros entre el 0 y el 100. Muestra los valores sin ordenar y ordenados
(eliminando duplicados), para ello deberás implementar alguno de los algoritmos de ordenación,
se recomienda el burbuja por su fácil implementación*/

function ordenarArrayDuplicados() {
    // Inicializar un array vacío para almacenar los números aleatorios

    let array = [];
    let array2 = []


    // Generar un array de 20 elementos aleatorios entre 1 y 100
    for (let i = 0; i < 20; i++) {
        // Generar un número aleatorio entre 1 y 100 y agregarlo al array
        array.push(Math.floor(Math.random() * 100) + 1);
    }

    for (let i = 0; i < array.length; i++) {
        // Comprobar si el elemento no está ya en arraySinDuplicados
        if (!array2.includes(array[i])) {
            array2.push(array[i]); // Agregar el elemento al array sin duplicados
        }
    }

    // Mostrar el array sin ordenar en la página
    document.write("Array sin ordenar: " + array2.join(", ") + "<br>");

    // Ordenar el array utilizando el algoritmo de burbuja
    for (let i = 0; i < array2.length - 1; i++) {
        // Realizar una pasada sobre el array
        for (let j = 0; j < array2.length - i - 1; j++) {
            // Comparar el elemento actual con el siguiente
            if (array2[j] > array2[j + 1]) {
                // Si están en el orden incorrecto, intercambiarlos
                let guardarElemento = array2[j]; // Guardar el elemento actual
                array2[j] = array2[j + 1]; // Colocar el siguiente elemento en la posición actual
                array2[j + 1] = guardarElemento; // Colocar el elemento guardado en la posición siguiente
            }
        }
    }

    // Mostrar el array ordenado en la página
    document.write("Array ordenado: " + array2.join(", ") + "<br><br>");

}

/*8. Nombre del archivo: T4_EJ8.html Solicita al usuario el nombre de varias personas y luego muestra los nombres ordenados. 
Los nombres serán introducidos en una sola cadena separado cada nombre por coma. Utiliza el método split
 */

function ordenarNombres() {
    let nombres = prompt("Introduce nombres separados por comas: ")
    let nombresArray = nombres.split(", ").sort()

    document.write("Nombres sin ordenar: " + nombres + "<br>")
    document.write("Nombres ordenados: " + nombresArray)

}

/*9. Nombre del archivo: T4_EJ9.html
Leer una cadena de texto introducida por el usuario y posteriormente, mostrar la siguiente información en una nueva ventana:
• Número de palabras. • Primera palabra. • Última palabra • Las palabras colocadas en orden inverso. 
• las palabras ordenadas de la a la z y las palabras ordenadas de la z a la a. Nota: Se regenerar un array con la función split()*/

function datosCadena() {
    let cadena = "Texto de ejemplo para ejercicio"
    let cadenaFormateada = cadena.toLowerCase()
    document.write("Tu cadena de texto es: " + cadena + "<br><br>")

    let numPalabras = cadenaFormateada.split(" ");
   


    document.write("En tu cadena hay " + numPalabras.length + " palabras <br>")
    document.write("La primera palabra de tu cadena es: " + numPalabras[0] + "<br>")
    document.write("La ultima palabra de tu cadena es: " + numPalabras[numPalabras.length - 1] + "<br>")

    document.write("La cadena de texto al reves: ")
    for (let i = numPalabras.length - 1; i >= 0; i--) {
        // Muestra cada palabra en orden inverso
        document.write(numPalabras[i] + " ");
    }
    document.write("<br>")

    document.write("Palabras ordenadas de A-Z: ")
    document.write(numPalabras.sort()+"<br>");

    document.write("Palabras ordenadas de Z-A: ")
    document.write(numPalabras.sort().reverse());
}






































