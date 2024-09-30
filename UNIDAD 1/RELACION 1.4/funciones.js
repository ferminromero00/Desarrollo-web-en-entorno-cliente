function sum(...nums) {
    let suma = 0
    for (i = 0; i < nums.length; i++) {
        suma += nums[i]
    }
    return suma
}

function addOnlyNums(...nums) {
    // variable 'sum' en 0, que almacenará la suma de los números
    var sum = 0;

    // 'arguments' es un objeto especial que contiene todos los argumentos pasados a la función
    for (let i = 0; i < nums.length; i++) {
        // 'typeof' se utiliza para verificar si el tipo del argumento actual es 'number' (número)
        if (typeof nums[i] === 'number') {
            // Si el argumento es un número, lo añadimos a la variable 'sum'
            sum += nums[i];
        }
    }

    // Utilizamos 'document.write()' para mostrar la suma de los números en la página
    document.write(sum);
}

function countTheArgs(...nums) {
    var cont = 0;
    // otra vez hacemos un for, que recorre los datos de la funcion, con arguments, y lo contabilizamos con una variable y enseño la suma de sus valores
    for (let i = 0; i <= nums.length - 1; i++) {
        cont++;
    }
    document.write(cont);
}

// Definimos la función que combina dos arreglos utilizando el operador de propagación
function combineTwoArrays() {
    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6];

    // Concatenamos los dos arrays usando concat
    let arrConcatenado = arr1.concat(arr2);

    // Devolvemos el arrays concatenado
    return arrConcatenado;
}

function sumEveryOther(... nums) {
    let sum = 0;

    // Recorremos los argumentos saltando uno cada vez (i += 2)
    for (let i = 1; i < nums.length; i += 2) {
        // Verificamos si el argumento actual es un número antes de sumarlo
        if (typeof nums[i] === 'number') {
            sum += nums[i];
        }
    }

    return sum;
}

function divisible(num) {
    // Pedimos numero para dividir entre 3
    let resto = num % 3
    // Hacemos un if, si el resto es 0, es multiplo de 3
    if (resto == 0) {
       return document.write("Correcto, es divisible entre 3")
    } else {
        return document.write("Incorrecto, no es divisible entre 3")
    }

}

// Lo mismo que el ejercicio anterior, pero ahora tambien pedimos el divisor, bastante sencillo
function divisibleEntre(num1, num2) {

    let resto = num2 % num1;

    if (resto == 0) {
        return document.write("Correcto, es divisible entre " + num2)
    } else {
        return document.write("Incorrecto, no es divisible entre " + num2)
    }
}

function rango(valor, rangoInf, rangoSup) {

    // Comprobar si el valor está entre rangoInf y rangoSup
    if (valor >= rangoInf && valor <= rangoSup) {
        // Si está dentro del rango, mostrar que es correcto
        return document.write("Rango de valores correcto");
    } else {
        // Si no está dentro del rango, mostrar que es incorrecto
        return document.write("Rango de valores incorrecto");
    }
}

function tieneTresDigitos(num) {
    // comprobamos si tiene 3 digitos
    let digitos = num >= 100 && num <= 999;
    //Si digitos es correcto, tiene 3 digitos y lo enseño con un if
    if (digitos == true) {
        return document.write("Correcto")
    } else {
        return document.write("Incorrecto")
    }
}

function areaRectangulo(base, altura) {

    // Calculamos el área
    let area = base * altura;

    // Mostramos el resultado en la página
    return document.write("El area del rectangulo es: " + area);
}

function imc(peso, altura) {
    // Calcular el IMC
    let indiceMasaCorporal = peso / (altura * altura);

    // Mostrar el resultado en la página
    return document.write("Tu IMC es: " + indiceMasaCorporal.toFixed(2)); // Mostramos el resultado con dos decimales
}

function precioFinal(precio, descuento) {
    //Hacemos los calculos
    let PrecioFinal = precio * (descuento / 100);
    let resultado = precio - PrecioFinal;

    // Mostramos los resultados
    document.write("Precio inicial: " + precio + "€<br>");
    document.write("Precio con descuento: " + resultado + "€");
}

function factorial(num) {

    // Inicializar el resultado
    let resultado = 1;

    // Calcular el factorial
    for (let i = 1; i <= num; i++) {
        resultado *= i; // Multiplicar el resultado por cada número desde 1 hasta num
    }

    // Mostrar el resultado en la página
    document.write("El factorial de " + num + " es: " + resultado);
}

 // Lo mismo que el ejercicio anterior, pero ahora tambien pedimos el divisor, bastante sencillo
 function divisibleEntre(num1, num2) {
    let resto = num2 % num1;
    // Hice copia y pega del ejercicio 7, es el mismo
    if (resto == 0) {
        return document.write("Correcto, es divisible entre " + num2)
    } else {
        return document.write("Incorrecto, no es divisible entre " + num2)
    }
}























