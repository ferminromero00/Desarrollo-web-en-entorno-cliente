/*1. Define una función máximo que dados 4 valores devuelva el máximo de ellos.
Llámala con un ejemplo pidiendo los 4 valores al usuario.*/

function MaxValores() {
    respuesta1 = parseInt(prompt("Valor 1:"))
    respuesta2 = parseInt(prompt("Valor 2:"))
    respuesta3 = parseInt(prompt("Valor 3:"))
    respuesta4 = parseInt(prompt("Valor 4:"))

    let ValorMaximo = Math.max(respuesta1, respuesta2, respuesta3, respuesta4)
    alert("El valor maximo introduceçido es: " + ValorMaximo)
}

/*2. Crea una web desde la que se simule el lanzamiento de un dado de 6 caras.Para ello
define una función “lanzamiento” que devuelva un nº aleatorio entre 1 y 6.*/

function lanzamiento() {
    let NumAleatorio = Math.floor(Math.random() * 7)
    alert("Ha salido el numero " + NumAleatorio)

}

/*3. Para demostrar que todos deben tener similar probabilidad, mejora la web anterior de
modo que se pueda generar una simulación de 6000 tiradas, mostrando al final el nº
de ocurrencias de cada uno de los valores.*/

function lanzamiento6000() {
    // Variables para contar las ocurrencias de cada número
    let cont1 = 0;
    let cont2 = 0;
    let cont3 = 0;
    let cont4 = 0;
    let cont5 = 0;
    let cont6 = 0;

    // Bucle que simula las 6000 tiradas
    for (let i = 0; i < 6000; i++) {
        let ocurrencias = Math.floor(Math.random() * 6) + 1;

        // Incrementar el contador correspondiente al número obtenido
        switch (ocurrencias) {
            case 1:
                cont1++;
                break;
            case 2:
                cont2++;
                break;
            case 3:
                cont3++;
                break;
            case 4:
                cont4++;
                break;
            case 5:
                cont5++;
                break;
            case 6:
                cont6++;
                break;
            default:
                break;
        }
    }

    // Mostrar los resultados en el elemento con id "resultado"
    document.getElementById("resultado").innerHTML =
        "Veces que salio el 1: " + cont1 + " veces<br>" +
        "Veces que salio el 2: " + cont2 + " veces<br>" +
        "Veces que salio el 3: " + cont3 + " veces<br>" +
        "Veces que salio el 4: " + cont4 + " veces<br>" +
        "Veces que salio el 5: " + cont5 + " veces<br>" +
        "Veces que salio el 6: " + cont6 + " veces<br>";
}

/**4. Crea una web para calcular el volumen de una esfera. Para ello diseña una función
que dado el radio de ésta devuelva el volumen. */
function calcularVolumen() {
    // Obtener el valor del radio introducido por el usuario
    let radio = parseFloat(document.getElementById("radio").value);

    // Verificar que el radio sea positivo
    if (radio > 0) {
        // Calcular el volumen de la esfera
        let volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);

        // Mostrar el resultado en la página
        document.getElementById("resultado").innerHTML =
            "El volumen de la esfera es: " + volumen.toFixed(2) + " unidades cúbicas.";
    } else {
        // Mensaje de error si el radio no es válido
        document.getElementById("resultado").innerHTML =
            "Por favor, introduce un valor positivo para el radio.";
    }
}

/**5. Mejora el ejercicio anterior permitiendo calcular también el área de un circulo.*/

function calcular() {
    // Obtener el valor del radio introducido por el usuario
    let radio = parseFloat(document.getElementById("radio").value);

    // Verificar que el radio sea positivo
    if (radio > 0) {
        // Calcular el volumen de la esfera
        let volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);

        // Calcular el área del círculo
        let area = Math.PI * Math.pow(radio, 2);

        // Mostrar los resultados en la página
        document.getElementById("resultado").innerHTML =
            "El volumen de la esfera es: " + volumen.toFixed(2) + " unidades cúbicas.<br>" +
            "El área del círculo es: " + area.toFixed(2) + " unidades cuadradas.";
    } else {
        // Mensaje de error si el radio no es válido
        document.getElementById("resultado").innerHTML =
            "Por favor, introduce un valor positivo para el radio.";
    }
}

/**6. Crea una función para calcular potencias de un modo recursivo.*/
function potencia(base, exponente) {
    // Caso base: cualquier número elevado a la potencia 0 es 1
    if (exponente === 0) {
        return 1;
    }
    // Caso recursivo: base * base^(exponente - 1)
    return base * potencia(base, exponente - 1);
    
}


