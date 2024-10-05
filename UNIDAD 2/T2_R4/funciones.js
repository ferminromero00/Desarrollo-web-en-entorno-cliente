// Función que invierte una cadena dada por el usuario.
function invierteCadena(cad_arg) {
    // Muestra la frase original proporcionada.
    document.write("Frase original: " + cad_arg + "<br><br>");

    // Muestra el encabezado para la cadena invertida.
    document.write("Cadena invertida: ");

    // Recorre la cadena de atrás hacia adelante e imprime cada carácter.
    for (let i = cad_arg.length; i >= 0; i--) {
        document.write(cad_arg.charAt(i));  // charAt() obtiene el carácter en la posición i.
    }
}

// Función que invierte las letras de cada palabra individualmente en una cadena.
function inviertePalabras(cad_arg) {
    // Divide la cadena en un array de palabras, usando los espacios como delimitador.
    let palabras = cad_arg.split(' ');
    let contenedor = [];

    // Recorre cada palabra en la cadena.
    for (let i = 0; i < palabras.length; i++) {
        // Invierte la palabra, la agrega a un array.
        contenedor.push(palabras[i].split('').reverse().join(''));
    }

    // Muestra las palabras invertidas unidas nuevamente en una cadena.
    document.write("Cada palabra invertida: " + contenedor.join(' '));
}

// Función que encuentra la longitud de la palabra más larga en la cadena.
function encuentraPalabraMasLarga(cad_arg) {
    // Divide la cadena en un array de palabras.
    let palabras = cad_arg.split(' ');
    let longitudMaxima = 0;

    // Recorre cada palabra para encontrar la más larga.
    for (let i = 0; i < palabras.length; i++) {
        // Si la longitud de la palabra actual es mayor que la longitud máxima actual, la actualiza.
        if (palabras[i].length > longitudMaxima) {
            longitudMaxima = palabras[i].length;
        }
    }

    // Muestra la longitud de la palabra más larga encontrada.
    document.write("Palabra mas larga encontrada: " + longitudMaxima + " caracteres");
}

// Función que filtra y devuelve las palabras más largas que una longitud dada (i).
function fltraPalabrasMasLargas(cad_arg, i) {
    // Divide la cadena en un array de palabras.
    let palabras = cad_arg.split(' ');
    let longitudMaxima = i;

    // Recorre cada palabra.
    for (let i = 0; i < palabras.length; i++) {
        // Si la longitud de la palabra es mayor o igual a la longitud dada, la actualiza.
        if (palabras[i].length >= longitudMaxima) {
            longitudMaxima = palabras[i];
        }
    }

    // Muestra la palabra más larga.
    document.write("La palabra mas larga es: " + longitudMaxima);
}

// Función que formatea una cadena, poniendo la primera letra en mayúscula y el resto en minúscula.
function cadenaBienFormada(cad_arg) {
    // Obtiene la primera letra en mayúscula.
    let primeraLetra = cad_arg.charAt(0).toUpperCase();

    // Obtiene el resto de la cadena en minúsculas.
    let restoFrase = cad_arg.substr(1).toLowerCase();

    // Muestra la cadena formateada.
    document.write("Primera mayuscula y resto minuscula: " + primeraLetra + restoFrase);
}


function InformacionCadena(cadena) {
    //Usamos toUpperCase y toLowerCase, para convertirlas a minusculas y mayusculas para compararlas
    if (cadena == cadena.toUpperCase()) {
        document.write("Tu cadena esta formada solo por mayusculas.")
    } else if (cadena == cadena.toLowerCase()) {
        document.write("Tu cadena esta formada solo por minusculas.")
    } else {
        document.write("Tu cadena tiene mayusculas y minusculas.")
    }

}
function subcadenasDentroDeCadena(cadena) {
    // Recorremos la cadena desde cada posición
    for (let i = 0; i < cadena.length; i++) {
        for (let j = i + 1; j <= cadena.length; j++) {
            // Obtenemos la subcadena
            let subcadena = cadena.substring(i, j);
            // Buscamos la subcadena en la cadena original
            let posicion = cadena.indexOf(subcadena);
            // Mostramos si se encuentra la subcadena
            if (posicion !== -1) {
                document.write("Subcadena: " + subcadena + " <br>Encontrada en la posicion: " + posicion + "<br><br>");
            }
        }
    }
    document.write(cadena.substring(1, 3))
}


function ConsonantesVocales(cadena) {
    let noEspacios = cadena.split(" ").join("");  // Elimina espacios
    let vocales = [];
    let consonantes = [];

    for (let i = 0; i < noEspacios.length; i++) {  // Bucle hasta el tamaño de la cadena
        let letra = noEspacios.charAt(i);
        //Recogemos vocales y las comparamos
        if (letra === "a" ||
            letra === "e" ||
            letra === "i" ||
            letra === "o" ||
            letra === "u") {
            vocales.push(letra);  // Añadimos la vocal al array de vocales
        } else {  // Verificamos si es una letra del alfabeto
            consonantes.push(letra);  // Añadimos la consonante al array de consonantes
        }
    }

    // Mostramos los resultados
    document.write("Primero consonantes y luego vocales: <br><br>")
    document.write("Tu frase: " + cadena + "<br><br>")
    document.write(consonantes.join("") + vocales.join(""))

}

function eliminaCaracteresRepetidos(cadena) {
    // Creamos una nueva cadena vacía que almacenará los caracteres únicos
    let cadenaSinRepetidos = "";

    // Recorremos la cadena original carácter por carácter
    for (let i = 0; i < cadena.length; i++) {
        // Tomamos el carácter actual de la cadena
        let caracter = cadena[i];

        // Verificamos si el carácter actual ya está en la nueva cadena
        // Si no está (indexOf devuelve -1), lo agregamos
        if (cadenaSinRepetidos.indexOf(caracter) === -1) {
            // Añadimos el carácter único a la nueva cadena
            cadenaSinRepetidos = cadenaSinRepetidos + caracter;
        }
    }
    document.write("Cadena original: " + cadena + "<br>");
    document.write("Cadena sin caracteres repetidos: " + cadenaSinRepetidos);

}

function subcadenasPosiciones(cadena, subcadena) {
    //Si el indexOf devuelve -1, esa cadena no existe, de lo contrario si, y te dice que posicion
    if (cadena.indexOf(subcadena) === -1) {
        document.write("No existe esta subcadena<br>")
    } else {
        document.write("La subcadena esta en la posicion: " + cadena.indexOf(subcadena) + "<br>")
    }
}

function palindromo(palabra) {
    let alreves = ""

    // Comenzamos desde palabra.length - 1 porque la longitud está fuera del índice del array
    for (let i = palabra.length; i >= 0; i--) {
        // Concatenamos cada carácter desde el final de la palabra en la variable alreves
        alreves += palabra.charAt(i)
    }

    // Mostramos la palabra original
    document.write("Palabra original: " + palabra + "<br>")

    // Mostramos la palabra al revés
    document.write("Palabra al reves: " + alreves + "<br><br>")

    // Verificamos si la palabra original es igual a la palabra al revés
    if (palabra === alreves) {
        // Si son iguales, significa que es un palíndromo
        document.write("La palabra es palindroma.")
    } else {
        // Si no son iguales, no es un palíndromo
        document.write("La palabra no es palindroma.")
    }
}


// Función para contar el número de palabras en una cadena
function numeroPalabras(cadena) {
    // Eliminamos espacios al principio y al final, y dividimos la cadena en palabras
    let palabras = cadena.trim().split(' ');
    // Mostramos el número de palabras en la consola
    document.write("Hay " + palabras.length + " palabras");
}

function validateCreditCard(numTarjeta) {
    let validacion = false;
    let numTarjetaString = String(numTarjeta);
    let numDistintos = [];
    let sumaTodosNumeros = 0;

    // Recorremos cada dígito de la tarjeta
    for (let i = 0; i < numTarjetaString.length; i++) {
        let numActual = numTarjetaString[i];
        // Agregamos dígitos únicos al array
        if (!numDistintos.includes(numActual)) {
            numDistintos.push(numActual);
        }
    }

    // Función que verifica si un número es par
    function esPar(numero) {
        return numero % 2 === 0;
    }

    // Sumar todos los dígitos de la tarjeta
    for (let i = 0; i < numTarjetaString.length; i++) {
        sumaTodosNumeros += parseInt(numTarjetaString.charAt(i));
    }

    // Comprobaciones de validación
    if (numTarjetaString.length !== 16) {
        // Comprobamos si la longitud es 16
        console.log("Tu tarjeta: " + numTarjeta + " no tiene 16 digitos, vuelve a intentarlo.");
    } else {
        if (numDistintos.length < 2) {
            // Verificamos si hay al menos dos dígitos diferentes
            console.log("Tu tarjeta: " + numTarjeta + " debe tener al menos dos dígitos diferentes.");
        } else {
            if (esPar(numTarjeta) !== true) {
                // Verificamos si el último dígito es par
                console.log("Tu tarjeta: " + numTarjeta + " tu ultimo número no es par. Vuelve a intentarlo.");
            } else {
                if (sumaTodosNumeros <= 16) {
                    // Verificamos si la suma de los dígitos es mayor a 16
                    console.log("Tu tarjeta: " + numTarjeta + " la suma de todos los digitos no es más de 16, vuelve a intentarlo.");
                } else {
                    validacion = true; // Marcamos la tarjeta como válida
                    console.log("Tu tarjeta " + numTarjeta + " es valida.");
                }
            }
        }
    }
}

function validateCreditCard2(numTarjeta) {
    let validacion = false;
    let numTarjetaString = String(numTarjeta);
    numTarjetaString = numTarjetaString.replace(/-/g, ''); // Eliminamos los guiones
    let numDistintos = [];
    let sumaTodosNumeros = 0;

    // Recorremos cada dígito de la tarjeta
    for (let i = 0; i < numTarjetaString.length; i++) {
        let numActual = numTarjetaString[i];
        // Agregamos dígitos únicos al array
        if (!numDistintos.includes(numActual)) {
            numDistintos.push(numActual);
        }
    }

    // Función que verifica si un número es par
    function esPar(numero) {
        return numero % 2 === 0;
    }

    // Sumar todos los dígitos de la tarjeta
    for (let i = 0; i < numTarjetaString.length; i++) {
        sumaTodosNumeros += parseInt(numTarjetaString.charAt(i));
    }

    // Comprobaciones de validación
    if (numTarjetaString.length !== 16) {
        // Comprobamos si la longitud es 16
        console.log("Tu tarjeta: " + numTarjeta + " no tiene 16 digitos, vuelve a intentarlo.");
    } else {
        if (numDistintos.length < 2) {
            // Verificamos si hay al menos dos dígitos diferentes
            console.log("Tu tarjeta: " + numTarjeta + " debe tener al menos dos digitos diferentes.");
        } else {
            if (esPar(numTarjeta) !== true) {
                // Verificamos si el último dígito es par
                console.log("Tu tarjeta: " + numTarjeta + " tu ultimo numero no es par. Vuelve a intentarlo.");
            } else {
                if (sumaTodosNumeros <= 16) {
                    // Verificamos si la suma de los dígitos es mayor a 16
                    console.log("Tu tarjeta: " + numTarjeta + " la suma de todos los dugitos no es más de 16, vuelve a intentarlo.");
                } else {
                    validacion = true; // Marcamos la tarjeta como válida
                    console.log("Tu tarjeta " + numTarjeta + " es valida.");
                }
            }
        }
    }
}






































