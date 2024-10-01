function NumsAleatorios(valor1, valor2) {
    // Número aleatorio entre 0 y 1
    let numAleatorio = Math.random(); 
    document.write("Numero entre 0 y 1: " + Math.round (numAleatorio) + "<br>"); // uso toFixed para mostrar solo dos decimales

    // Número aleatorio entre 100 y 200
    let numAleatorio2 = Math.random() * 101 + 100; // calculamos el número aleatorio correctamente
    document.write("Numero entre 100 y 200: " + Math.round (numAleatorio2) + "<br>");

    // Número aleatorio entre valor1 y valor2
    let numAleatorio3 = Math.random() * (valor2 - valor1) + valor1; 
    document.write("Numero entre " + valor1 + " y " + valor2 + ": " + Math.round (numAleatorio3) + "<br>");
}

function calcularTrigonometria() {
    // Pide al usuario que ingrese el angulo
    let angulo = parseFloat(prompt("Introduce el angulo en grados:"));

    // Calcular seno, coseno y tangente
    let seno = Math.sin(angulo).toFixed(2);
    let coseno = Math.cos(angulo).toFixed(2);
    let tangente = Math.tan(angulo).toFixed(2);

    // Muestra los resultados en la pagina usando document.write
    document.write("Resultados del angulo " + angulo + ": <br><br>")
    document.write("Resultado del seno: " + seno + "<br>")
    document.write("Resultado del coseno: " + coseno + "<br>")
    document.write("Resultado del tangente: " + tangente + "<br>")
}

function calcularHipotenusa() {
    // Pide al usuario que ingrese los dos catetos
    let cateto1 = parseFloat(prompt("Introduce el tamano del primer cateto:"));
    let cateto2 = parseFloat(prompt("Introduce el tamano del segundo cateto:"));

    let hipotenusa = Math.sqrt(cateto1 + cateto2).toFixed(3);
    // Muestra el resultado en la página
    document.write("Calculo de hipotenusa: <br><br>")
    document.write("Cateto 1: " + cateto1 + "<br>")
    document.write("Cateto 2: " + cateto2 + "<br>")
    document.write("Hipotenusa: " + hipotenusa)

}

function calcularHipotenusaContinuar() {
    let continuar = true;
    let cont = 1
    while (continuar) {
        // Pide al usuario que ingrese los dos catetos
        let cateto1 = parseFloat(prompt("Introduce el tamano del primer cateto:"));
        let cateto2 = parseFloat(prompt("Introduce el tamano del segundo cateto:"));


        // Calcula la hipotenusa usando el teorema de Pitágoras
        let hipotenusa = Math.sqrt((cateto1 * cateto1) + (cateto2 * cateto2)).toFixed(3);

        // Muestra el resultado en la página
        document.write("Calculo de la hipotenusa numero " + cont + ": <br><br>");
        document.write("Cateto 1: " + cateto1 + "<br>");
        document.write("Cateto 2: " + cateto2 + "<br>");
        document.write("Hipotenusa: " + hipotenusa + "<br><br>");

        // Pregunta al usuario si quiere continuar
        continuar = confirm("¿Quieres realizar otro cálculo?");
        cont++
    }
    // Mensaje final cuando el usuario decide salir
    document.write("<h2>Programa terminado.</h2>");
}

function resolverEcuacionSegundoGrado() {
    // Pide los coeficientes a, b y c
    let a = parseFloat(prompt("Introduce el coeficiente a:"));
    let b = parseFloat(prompt("Introduce el coeficiente b:"));
    let c = parseFloat(prompt("Introduce el coeficiente c:"));

    // Calcula el discriminante
    let discriminante = (b * b) - (4 * a * c);

    // Muestra las soluciones según el valor del discriminante
    document.write("Resolviendo la ecuacion: " + a + "x^2 + " + b + "x + " + c + " = 0<br><br>");

    if (discriminante > 0) {
        let raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        let raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        document.write("Las soluciones son reales y distintas:<br>");
        document.write("Raiz 1: " + raiz1.toFixed(3) + "<br>");
        document.write("Raiz 2: " + raiz2.toFixed(3) + "<br>");
    } else if (discriminante === 0) {
        let raiz = -b / (2 * a);
        document.write("La solucion es real y doble:<br>");
        document.write("Raiz: " + raiz.toFixed(3) + "<br>");
    } else {
        document.write("Las soluciones son complejas.<br>");
    }
}

function calcularPotencia() {
    // Pide la base y el exponente al usuario
    let base = parseFloat(prompt("Introduce la base:"));
    let exponente = parseFloat(prompt("Introduce el exponente:"));

    // Calcula la potencia
    let resultado = Math.pow(base, exponente);

    // Muestra el resultado en la página
    document.write("Calculo de Potencia:<br>");
    document.write("Base: " + base + "<br>");
    document.write("Exponente: " + exponente + "<br>");
    document.write("Resultado: " + resultado + "<br>");
}

function generarTablaSeno() {
    // Muestra el encabezado de la tabla
    document.write("<h1>Tabla de Seno</h1>");
    document.write("<table border='1'><tr><th>Numero</th><th>Seno</th></tr>");

    // Genera la tabla con números del 0 al 10 y su seno
    for (let i = 0; i <= 10; i++) {
        let seno = Math.sin(i).toFixed(5); // Calcula el seno y lo redondea a 4 decimales
        document.write("<tr><td>" + i + "</td><td>" + seno + "</td></tr>");
    }
    document.write("</table>");
}


function mostrarImagenAleatoria() {
    // Array con las rutas de las imágenes
    let imagenes = [
        "img1.jpg", 
        "img2.jpg", 
        "img3.jpg"  
    ];

    // Genera un índice aleatorio
    let imgAleatorio = Math.random() * imagenes.length;

    // Muestra la imagen aleatoria en la página
    document.write("<h1>Imagen Aleatoria</h1>");
    document.write("<img src='" + imagenes[Math.round(imgAleatorio)] + "' style='max-width: 30%; height: auto;'>");
}

















