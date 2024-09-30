function VacacionesNavidad() {
    //Cogemos la fecha actual
    let fechaActual = new Date()
    //Ponemos la fecha limite con la que vamos a trabajar
    let fechaNavidad = new Date("2024-12-19")
    //Restamos lo que falta con nuestra fecha, usamos (1000 * 60 * 60 * 24) para poner el dato en dias, y no milisegundos y lo redondeamos
    let dias = Math.round((fechaNavidad - fechaActual) / (1000 * 60 * 60 * 24))
    return document.write("Faltan " + dias + " dias para navidad")

}

function CumplesDomingo(cumple) {
    //Recogemos el dato del cumpleaños y calculamos los años que faltan para el año 2100
    let cumpleanos = new Date(cumple);
    let limite = new Date("2100-01-31");
    let AñosRestantes = limite.getFullYear() - cumpleanos.getFullYear();

    //Hacemos un FOR
    for (let i = 0; i <= AñosRestantes; i++) {
        // Crear un nuevo objeto `Date` para poder recoger el año y ir actualizando el año
        let nuevoCumple = new Date(cumpleanos.getTime());
        nuevoCumple.setFullYear(cumpleanos.getFullYear() + i);

        // Verificar si cae en domingo
        if (nuevoCumple.getDay() === 0) {
            console.log(nuevoCumple);  // Mostrar la fecha en la consola
        }
    }
}

function HoraFormateada() {
    let HoraActual = new Date()
    document.write("Version 1 --> " + HoraActual.getHours() + ":" + HoraActual.getMinutes() + ":" + HoraActual.getSeconds() + "<br>")
    document.write("Version 2 --> " + HoraActual.getHours() + "h y " + HoraActual.getMinutes() + "m")
}

function TiempoTardado() {
    // Guardamos el tiempo inicial cuando comenzamos a pedir los datos
    let ContadorTiempo = new Date().getTime(); // Tiempo en milisegundos

    // Usamos prompt para solicitar el nombre y apellidos
    let nombre = prompt("Por favor, introduce tu nombre:");
    let apellido1 = prompt("Por favor, introduce tu primer apellido:");
    let apellido2 = prompt("Por favor, introduce tu segundo apellido:");

    // Guardamos el tiempo final cuando se han introducido todos los datos
    let TerminarCont = new Date().getTime(); // Tiempo en milisegundos

    // Calculamos la diferencia entre el tiempo inicial y el final en segundos
    let tiempo = Math.round((TerminarCont - ContadorTiempo) / 1000);

    // Mostramos el resultado en una alerta
    alert("Hola " + nombre + " " + apellido1 + " " + apellido2 + " , has tardado en poner tu nombre " + tiempo + " segundos");

}

function calcular() {
    let opcion = document.getElementById("opcion").value;

    switch (parseInt(opcion)) {
        case 1:
            let base = prompt("Introduce la base:");
            let exponente = prompt("Introduce el exponente:");
            let resultado = Math.pow(base, exponente); // Calculamos la potencia
            alert("La potencia de " + base + " elevado a " + exponente + " es: " + resultado)
            break;
        case 2:
            let numero = prompt("Introduce un número (no negativo):");
            numero = parseFloat(numero); // Convertimos el número a un número

            if (numero < 0) {
                alert("Por favor, introduce un número no negativo."); // Validamos si es negativo
            } else {
                let resultadoRaiz = Math.sqrt(numero); // Calculamos la raíz cuadrada
                alert("La raíz de " + numero + " es: " + resultadoRaiz); // Mostramos el resultado
            }
            break;
        case 3:
            let numeroDecimal = prompt("Introduce un número decimal:");
            numeroDecimal = parseFloat(numeroDecimal); // Convertimos el número a un número

            let redondeoProximo = Math.round(numeroDecimal); // Redondeo al entero más próximo
            let redondeoArriba = Math.ceil(numeroDecimal); // Redondeo al alza
            let redondeoBaja = Math.floor(numeroDecimal); // Redondeo a la baja

            alert("El número " + numeroDecimal + " redondeado es: " + redondeoProximo +
                "\nRedondeado arriba: " + redondeoArriba +
                "\nRedondeado a la baja: " + redondeoBaja); // Mostramos los resultados
            break;
        case 4:
            let angulo = prompt("Introduce un ángulo (entre 0º y 360º):");
            angulo = parseFloat(angulo); // Convertimos el ángulo a un número

            // Validamos que el ángulo esté dentro del rango
            if (angulo < 0 || angulo > 360) {
                alert("Por favor, introduce un ángulo entre 0º y 360º."); // Mensaje de error
            } else {
                // Convertimos grados a radianes para las funciones trigonométricas
                let radianes = angulo * (Math.PI / 180);
                let seno = Math.sin(radianes); // Calculamos el seno
                let coseno = Math.cos(radianes); // Calculamos el coseno
                let tangente = Math.tan(radianes); // Calculamos la tangente

                alert("Valores trigonométricos para " + angulo + "°:\n" +
                    "Seno: " + seno + "\n" +
                    "Coseno: " + coseno + "\n" +
                    "Tangente: " + tangente); // Mostramos los resultados
            }
            break;

        // Agregar más casos para las otras opciones aquí...
        default:
            alert("Opción no válida. Por favor, elige un número entre 1 y 4.");
    }

}

function StringsNombreApellido (nombre, apellido1, apellido2) {
    //let nombre = prompt("Introduce tu nombre.")
    //let apellido1 = prompt("Introduce tu apellido.")
    //let apellido2 = prompt("Introduce tu segundo apellido.")
    

    let tamañoNombre = (nombre.length) + (apellido1.length) + (apellido2.length)

    console.log("El tamaño de tu nombre es: " + tamañoNombre)





}


































