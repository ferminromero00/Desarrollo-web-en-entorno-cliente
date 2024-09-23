// ----------------------------------------------------------------------------------------------------------------------------------------
function ageCalculator () {
    //Almacenamos la fecha actual del pc, para luego coger nada mas su año
    let Fecha = new Date();
    //Pedimos el dato al usuario
    let añonac = parseInt( prompt("Introduce el año de tu fecha de nacimiento: "));
    // Cogemos el año actual y le restamos nuestra fecha de nacimiento para obtener nuestra edad
    let edad = Fecha.getFullYear() - añonac;
    // Para la segunda edad simplemente le restamos uno para tener en cuenta las dos posibles edades que se pueden tener en ese año
    let edad2 = edad - 1;
    document.getElementById("resultado").value = "They are either " + edad + " or " + edad2;
}
// ----------------------------------------------------------------------------------------------------------------------------------------
function supplyCalculator () {
    // Pedimos todos los datos
    let edad = parseInt(prompt("Introduce tu edad actual: "))
    let edadmax = parseInt(prompt("Introduce cuando crees que te vas a morir: "))
    let cantComida = parseInt(prompt("Cuantas bolsas de pipas te comes al dia?"))
// Calculamos los años que nos quedan de vida, para luego calcularlo, multiplicandolo por cada año, multiplicado por las bolas que nos comamos cada dia
    let vidarest = edadmax - edad;
    let result = (vidarest) * (365) * cantComida;

    document.getElementById("resultado").value = "You will need " + result + " to last you until the ripe old age of " + edadmax ;
}
// ----------------------------------------------------------------------------------------------------------------------------------------
// Función para calcular la circunferencia
function circumference() {
    let radio = parseInt(prompt("Introduce el radio para hacer los cálculos"));
    let circunferencia = 2 * Math.PI * radio;
    document.getElementById("resultado").value = "La circunferencia es " + circunferencia;
}
// Función para calcular el área
function area() {
    let radio = parseInt(prompt("Introduce el radio para hacer los cálculos"));
    let area = Math.PI * Math.pow(radio, 2);
    document.getElementById("resultado").value = "El área es " + area;
}
// ----------------------------------------------------------------------------------------------------------------------------------------
function  convertTemperature () {
    // Convertir de Celsius a Fahrenheit
    let celsius = parseInt(prompt("Introduce la temperatura en Celsius:"));
    let fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("resultado").value = celsius + "°C es " + fahrenheit.toFixed(2) + "°F";
    // Convertir el valor de Fahrenheit a Celsius
    let fahrenheitAlmacenado = fahrenheit;
    let celsiusConvertido = (fahrenheitAlmacenado - 32) * 5/9;
    document.getElementById("resultado2").value = fahrenheitAlmacenado + "°F es " + celsiusConvertido.toFixed(2) + "°C";
}
// ----------------------------------------------------------------------------------------------------------------------------------------



