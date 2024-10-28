// funciones.js

// Importar funciones desde el archivo donde están definidas
import {
    filterNumbersGreaterThan,
    toHackerSpeak,
    getFileExtension,
    flatArray,
    removeDuplicates,
    countLetter,
    removeWords
} from './modAuxiliar.js'; // Cambia la ruta si es necesario

// Aquí puedes utilizar las funciones importadas
console.log(filterNumbersGreaterThan([3, 8, 12, 1, 7, 4], 7)); // Ejemplo de uso
console.log(toHackerSpeak("I'm a hacker now")); // Ejemplo de uso
console.log(getFileExtension("imagen.jpg")); // Ejemplo de uso
console.log(flatArray([[1, 5, 4], [3, 10], [2, 5]])); // Ejemplo de uso
console.log(removeDuplicates([4, 5, 10, 4, 10, 2])); // Ejemplo de uso
console.log(countLetter("a", "javascript")); // Ejemplo de uso
console.log(removeWords("This is a really bad test", ["really", "bad"])); // Ejemplo de uso
