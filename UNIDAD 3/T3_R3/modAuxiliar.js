/**
* @name filterNumbersGreaterThan
* @description Filtra los números de un array que sean mayor a cierto número
* dejando solo los que sean menores a este
*
* @param {number[]} numbers - Array de números a filtrar
* @param {number} filter - Número a partir del cuál filtrar los demás números
* @returns {Number[]} - Array de números filtrados menores a {filter}
*
* @example
* filterNumbersGreaterThan([3, 8, 12, 1, 7, 4], 7) // returns [3, 1, 4]
*/
export function filterNumbersGreaterThan(numbers, filter) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < filter) {
            result.push(numbers[i]);
        }
    }
    return result;
}

/**
* @name toHackerSpeak
* @description Convierte un string a "Hacker Speak". Para hacerlo, tiene que
* transformar las "a" en 4, las "e" en 3, las "i"
* en 1, las "o" en 0 y las "s" en 5
*
* @param {string} text
* @returns {String} - El texto convertido a "Hacker Speak"
*
* @example
* toHackerSpeak("I'm a hacker now") // returns "1'm 4 h4ack3r n0w"
*/
export function toHackerSpeak(text) {
    return text.replace("a", "4").replace("e", "3").replace("p", "1").replace("e", "0").replace("k", "5");
}

/**
* @name getFileExtension
* @description Obtiene la extensión de un archivo
*
* @param {string} file - El nombre del archivo a obtener la extensión
* @returns {String} - La extensión del archivo
*
* @example
* getFileExtension("imagen.jpg") // returns "jpg"
*/
export function getFileExtension(file) {
    return "La extension es: " + file.substring(file.lastIndexOf("."));
}

/**
* @name flatArray
* @description Dado un array 2D, devuelve un array 1D que contiene todos los
ítems
*
* @param {[][]} arr - Array 2D a "aplanar"
* @returns {[]} - El array "aplanado"
*
* @example
* flatArray([[1, 5, 4], [3, 10], [2, 5]]) // returns [1, 5, 6, 3, 10, 2, 5]
*/
export function flatArray(arr) {
    return "Array en 1D: " + arr.join(",");
}

/**
* @name removeDuplicates
* @description Remueve duplicados de un array
*
* @param {[]} arr - Array con duplicados a remover
* @returns {[]} - El array resultante sin duplicados
*
* @example
* removeDuplicates([4, 5, 10, 4, 10, 2]) // returns [4, 5, 10, 2]
*/
export function removeDuplicates(arr) {
    const sinDuplicados = [];
    for (let i = 0; i < arr.length; i++) {
        if (!sinDuplicados.includes(arr[i])) {
            sinDuplicados.push(arr[i]);
        }
    }
    return sinDuplicados;
}

/**
* @name countLetter
* @description Devuelve la cantidad de veces que una letra aparece en un str
ing
*
* @param {string} letter - Letra a contar
* @param {string} text - Texto sobre el que realizar la cuenta de {letter}
* @returns {Number} - Número de veces que aparece {letter} en {text}
*
* @example
* countLetter("a", "javascript") // returns 2
*/
export function countLetter(letter, text) {
    let cont = 0;
    for (let i = 1; i <= text.length; i++) {
        if (text.charAt(i) === letter) {
            cont++;
        }
    }
    return "La letra '" + letter + "' en el texto '" + text + "' ha coincidido el numero de " + cont + " veces";
}

/**
* @name removeWords
* @description Dado un string y un array de palabras a remover, devuelve el
string sin las palabras removidas
*
* @param {string} str - Texto a recortar
* @param {string[]} words - Palabras a remover
* @returns {string} - Texto resultante con las palabras removidas
*
* @example
* removeWords("This is a really bad test", ["really", "bad"]) // returns
"This is a test"
*/
export function removeWords(str, words) {
    const carrPalabras = str.split(" ");
    let resultado = "";

    for (let i = 0; i < carrPalabras.length; i++) {
        if (!words.includes(carrPalabras[i])) {
            resultado += carrPalabras[i] + " ";
        }
    }
    return "Cadena modificada: " + resultado;
}
