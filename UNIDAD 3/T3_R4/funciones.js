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


















//