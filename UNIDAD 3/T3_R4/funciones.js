//1) Write examples with Arrays to solve the next problems using only Array methods (like iterators, etc…):

// find largest number, usare math.max
const numLargo = (numeros) => { return "El numero mas largo es: " + Math.max(...numeros) };
// find longest string
const cadenaMasLarga = (cadena) => { return cadena.sort((a, b) => b.length - a.length)[0] };
// find even numbers, usare map, valor % 2 === 0
const Pares = (nums) => {
    const pares = [];
    nums.map(valor => { if (valor % 2 === 0) { pares.push(valor) } }); return pares.join("-")
}
//find odd numbers, usare map, valor % 2 === 1
const Impares = (nums) => {
    const pares = [];
    nums.map(valor => { if (valor % 2 === 1) { pares.push(valor) } }); return pares.join("-")
}
// find words that contain ‘is’, usare forEach
const contiene = (cadenas) => {
    const contienePalabra = [];
    cadenas.forEach(cadena => {
        const cadenaMinus = cadena.toLowerCase();
        if (cadenaMinus.includes('is')) { contienePalabra.push(cadenaMinus + " "); }
    }); return contienePalabra;
};
// assert all numbers are divisible by three, map, valor % 3 === 0
const dividibles3 = (nums) => {
    const pares = [];
    nums.map(valor => { if (valor % 3 === 0) { pares.push(valor) } }); return pares.join("-")
}
//zip two arrays together, concat
const concatenar = (array1, array2) => { return array1.concat(array2) }
//sort joined array from smallest to largest, sort
const menor_mayor = (numeros) => { return numeros.sort() }
//remove the first word in the array, shift (borrar primer elemento) pop (borrar ultimo)
const BorrarPrimerElemento = (array) => { array.shift(); return array }
// place a new word at the start of the array
const añadirPalabra = (array) => { array.unshift("Principio Array: "); return array }
// replace some elements, /e/g, buscar las letras 'e' globalmente, en toda la cadena
const reemplanzar = (cadena) => { const modificado = cadena.replace(/e/g, "o"); return modificado; };

/* 2) Over an array with names, find all entries whose firstname starts with ‘J’, create projectioncombined of only the initials
of the name and then sort alphabetically*/
const inicial_J = (nombres) => {
    const listaNombres = []
    nombres.map(valor => { if (valor.substring(0, 1) === "J") { listaNombres.push(valor) } })
    return listaNombres
}

//3) Treasure hunt

const busquedaTesoro = () => {
    const mapa = [
        [34, 21, 32, 41, 25],
        [14, 42, 43, 14, 31],
        [54, 45, 52, 42, 23],
        [33, 15, 51, 31, 35],
        [21, 52, 33, 13, 23]
    ];

    // Comenzamos en la posición inicial (0, 0)
    let fila = 0;
    let columna = 0;

    const busquedas = [];

    while (true) {
        const posicionTesoro = mapa[fila][columna];

        const posicionString = posicionTesoro.toString();
        let pos1 = parseInt(posicionString[0]);  // Decenas: fila
        let pos2 = parseInt(posicionString[1]);  // Unidades: columna

        // Ajustamos los índices, ya que el mapa está basado en 0, pero las pistas empiezan en 1.
        fila = pos1 - 1;
        columna = pos2 - 1;

        // Crear el número esperado a partir de fila y columna
        const posicionEsperada = parseInt((fila + 1).toString() + (columna + 1).toString());

        // Comparar el valor en la celda con la posición calculada
        if (mapa[fila][columna] === posicionEsperada) {
            busquedas.push("¡Tesoro encontrado en la posición (" + (fila + 1) + ", " + (columna + 1) + ")!");
            break;  // Terminamos la búsqueda si encontramos el tesoro
        } else {
            busquedas.push("Se buscó sin éxito en la posición (" + (fila + 1) + ", " + (columna + 1) + ")");
        }
    }

    return document.write(busquedas.join("<br>"));
};

/*4) Develop a function wich be able to create a random treasure hunt like the previous one. As
arguments it will recibe the dimensions of the array (at least 5x5) and must return a valid
treasure hunt array */

const busquedaTesoroAleatorio = () => {
    const mapa = [];
    const valoresUsados = [];

    for (let i = 0; i < 5; i++) {
        const fila = [];
        for (let e = 0; e < 5; e++) {
            let valor;
            do {
                const filaPista = Math.floor(Math.random() * 5) + 1;
                const columnaPista = Math.floor(Math.random() * 5) + 1;
                valor = parseInt(filaPista.toString() + columnaPista.toString());
            } while (valoresUsados.includes(valor));

            valoresUsados.push(valor);
            fila.push(valor);
        }
        mapa.push(fila);
    }

    let fila = 0;
    let columna = 0;

    const busquedas = [];
    // Para rastrear posiciones visitadas
    const posicionesVisitadas = [];

    while (true) {
        const posicionTesoro = mapa[fila][columna];

        const posicionString = posicionTesoro.toString();
        let pos1 = parseInt(posicionString[0]);
        let pos2 = parseInt(posicionString[1]);

        fila = pos1 - 1;
        columna = pos2 - 1;

        // Crear el número esperado a partir de fila y columna
        const posicionEsperada = parseInt((fila + 1).toString() + (columna + 1).toString());

        // Comparar el valor en la celda con la posición calculada
        if (mapa[fila][columna] === posicionEsperada) {
            busquedas.push("¡Tesoro encontrado en la posición (" + (fila + 1) + ", " + (columna + 1) + ")!");
            break;
        } else {
            busquedas.push("Se buscó sin éxito en la posición (" + (fila + 1) + ", " + (columna + 1) + ")");
        }

        // Verificar si ya hemos visitado esta posición
        const posicion = fila + ',' + columna;
        if (posicionesVisitadas.includes(posicion)) {
            busquedas.push("¡Se ha vuelto a visitar la posición (" + (fila + 1) + ", " + (columna + 1) + "), terminando la búsqueda!");
            // Terminamos la búsqueda si visitamos una posición ya visitada
            break;
        }
        // Marcar la posición como visitada
        posicionesVisitadas.push(posicion);
    }

    // Mostrar el mapa
    let resultados = "Mapa del Tesoro:<br>";
    mapa.forEach(fila => { resultados += fila.join(' ') + '<br>'; });
    resultados += "<br>Resultados de la búsqueda:<br>";
    resultados += busquedas.join("<br>") + "<br>";

    return document.write(resultados);
}

const saddlePoints = () => {
    const mapa = [];
    const valoresUsados = [];

    // Crear la matriz 5x5 con valores únicos aleatorios
    for (let i = 0; i < 5; i++) {
        const fila = [];
        for (let e = 0; e < 5; e++) {
            let valor;
            do {
                valor = Math.floor(Math.random() * 50) + 1; // Generar números entre 1 y 50
            } while (valoresUsados.includes(valor));

            valoresUsados.push(valor);
            fila.push(valor);
        }
        mapa.push(fila);
    }

    let hayPuntoSilla = false;

    // Buscar puntos de silla
    mapa.forEach((fila, i) => {
        // Encuentra el valor máximo en la fila actual
        const maxFila = Math.max(...fila);

        fila.forEach((valor, j) => {
            // Verifica si el valor es el máximo de su fila
            if (valor !== maxFila) return;

            // Encuentra el valor mínimo en la columna correspondiente
            const minColumna = mapa.reduce((min, fila) => Math.min(min, fila[j]), mapa[0][j]);

            // Verificar si el valor es igual al mínimo de la columna
            if (valor === minColumna) {
                document.write(`'Saddle point' encontrado en la posición (${i + 1}, ${j + 1}) 
                    con valor ${valor}<br>`);
                hayPuntoSilla = true;
            }
        });
    });

    // Si no se encontraron puntos de silla, mostrar mensaje
    if (!hayPuntoSilla) {
        document.write("No hay puntos de silla<br>");
    }

    // Mostrar el array bidimensional
    let resultados = "<br><br><br>Array Bidimensional Mensaje:<br>";
    mapa.forEach(fila => {
        resultados += fila.join(' ') + '<br>'; // Unir los caracteres con espacio y agregar salto de línea
    });

    // Mostrar el array completo
    document.write(resultados);
};











const codificarMensaje = (mensaje) => {
    const filas = 7;
    const columnas = 8;

    const msjsinEspacios = mensaje.replace(/\s+/g, '');

    const mensajeCodificado = [];

    let caracter = 0;
    for (let i = 0; i < filas; i++) {
        let fila = [];
        for (let e = 0; e < columnas; e++) {
            fila.push(msjsinEspacios.charAt(caracter));
            caracter++;

        }
        mensajeCodificado.push(fila);
    }

    // Mostrar el mapa
    let resultados = "Array Bidimensional Mensaje:<br>";
    mensajeCodificado.forEach(fila => {
        resultados += fila.join(' ') + '<br>'; // Unir los caracteres con espacio y agregar salto de línea
    });

    document.write(resultados);
}



















