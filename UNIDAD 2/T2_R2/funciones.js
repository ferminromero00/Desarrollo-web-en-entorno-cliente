function Contador60Segundos() {
    //empiezo el contador en 60
    let cont = 60;
    /*Con setInterval hacemos un funcion dentro de el, como si fuera un bucle FOR, que recorre hasta que sea 0, y con clearInterval se termina, y por ultimo
    el 1000 son milisegundos, osea, lo pinta cada segundo*/
    let cuentaAtras = setInterval(function () {
        cont--
        document.write(cont + "<br>")
        if (cont == 0) {
            document.write("Contador terminado")
            clearInterval(cuentaAtras)
        }
    }, 1000)

}

function muestraReloj() {
    var fechaHora = new Date();
    var horas = fechaHora.getHours();
    var minutos = fechaHora.getMinutes();
    var segundos = fechaHora.getSeconds();

    if (horas < 10) { horas = '0' + horas; }
    if (minutos < 10) { minutos = '0' + minutos; }
    if (segundos < 10) { segundos = '0' + segundos; }

    document.getElementById("reloj").innerHTML = horas + ':' + minutos + ':' + segundos;
}
window.onload = function () {
    setInterval(muestraReloj, 1000);
}

function contTerminarGoogle() {
    //empiezo el contador en 60
    let cont = 60;
    /*Con setInterval hacemos un funcion dentro de el, como si fuera un bucle FOR, que recorre hasta que sea 0, y con clearInterval se termina, y por ultimo
    el 1000 son milisegundos, osea, lo pinta cada segundo*/
    let cuentaAtras = setInterval(function () {
        cont--
        document.write(cont + "<br>")
        if (cont == 0) {
            clearInterval(cuentaAtras)
            //Ahora en vez de poner un mensaje de terminar, lo redirigimos
            location.assign("https://www.google.com/?hl=es")
        }
    }, 1000)

}








