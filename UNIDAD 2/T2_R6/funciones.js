//Inicio las variables de ventanas antes de todo
var ventanaNueva;
var nombreVentana;
var modificarVent;

function informacionNavegador() {
    //Uso navigator para recolectar toda esta informacion
    document.write("¿Cookies activadas?: " + navigator.cookieEnabled + "<br>")
    document.write("¿Numero procesadores?: " + navigator.hardwareConcurrency + "<br>")
    document.write("Idiomas: " + navigator.languages + "<br>")
    document.write("Idioma seleccionado: " + navigator.language + "<br>")
    document.write("¿Estas en modo online?: " + navigator.onLine + "<br>")
    document.write("¿Visualizador de pdf activado?: " + navigator.pdfViewerEnabled + "<br>")
}

function informacionPantalla() {
    //Uso screen para recoger caracteristicas de la pantalla
    document.write("Altura de la pantalla: " + screen.height + "<br>")
    document.write("Anchura de la pantalla: " + screen.width + "<br>")
    document.write("Profundidad de color: " + screen.colorDepth + "<br>")
    document.write("Profundidad de los pixeles: " + screen.pixelDepth + "<br>")
}

function confirmacion() {
    //Boton confirm que devuelve true o false, any si nunca se inicio
    let opcion = confirm("Pulsa una opcion")
    if (opcion == true) {
        alert("Has seleccionado confirmar")
    } else {
        alert("Has seleccionado cancelar")
    }
}

function analizarCierreVentana() {
    ventanaNueva = window.open("", "_blank", "width=500,height=400,top=0,left=1000")
}
function estadoVentana() {
    //If para comprobar estado de una ventana
    if (!ventanaNueva) {
        alert("No hay ninguna ventana abierta");
    } else if (ventanaNueva.closed) {
        alert("La ventana esta cerrada");
        ventanaNueva = null; // Limpiar la referencia
    } else {
        alert("La ventana esta abierta");
    }
}

function nuevaVentana() {
    nombreVentana = window.open("", "_blank", "width=500,height=400,top=0,left=1000")
}
function cambiarNombre() {
    let nombrePagina = ""
    nombrePagina = prompt("Introduce el nuevo nombre de la pagina")
    //cambiar titulo de la pagina
    nombreVentana.document.title = nombrePagina;
}

/*He estado buscando informacion y los navegadores por seguridad solo te dejan cerrar ventanas que han
sido abiertas con window.open*/
function cerrarVentanaActual() {
    window.close()
}
function cerrarVentana() {
    nombreVentana.close()
}

function nuevaVentana1() {
    modificarVent = window.open("", "", "width=300, height=100")
}
function cambiarTamaño() {
    modi1 = prompt("Introduce la nueva anchura")
    modi2 = prompt("Introduce la nueva altura")
    //Modifica tamaño sin tener en cuenta cual tenia antes
    modificarVent.resizeTo(modi1, modi2)
}

function nuevaVentana2() {
    modificarVent = window.open("", "", "width=300, height=100")
}
function cambiarTamaño2() {
    modi1 = prompt("Introduce la nueva anchura")
    modi2 = prompt("Introduce la nueva altura")
    modificarVent.resizeTo(modi1, modi2)
    document.getElementById("texto").innerText = "Pagina modificada a " + modi1 + " de anchura y " + modi2 + " de altura."
}

function nuevaVentana3() {
    modificarVent = window.open("", "", "width=300, height=300")
}
function moverVentana() {
    //Mover ventana por la pantalla cada vez que pulsas el boton
    modificarVent.moveBy(50, 50)
}

function nuevaVentana4() {
    modificarVent = window.open("", "", "width=350, height=350, left=1000")
}
function cambiarPosicion() {
    //Uso datos muy exagerados para moverlo a la esquina
    modificarVent.moveBy(-5000, -5000)
}

function nuevaVentana5() {
    modificarVent = window.open("", "", "width=350, height=350, left=500")
}
function moverAbajo() {
    //Mover poco a poco
    modificarVent.moveBy(0, 10)
}
function nuevaVentana6() {
    modificarVent = window.open("", "", "width=350, height=350, left=500")
}
function cambiarPosicion2() {
    //Mover poco a poco
    window.moveBy(0, 10)
}

function desplazarMarcador() {
    //nos movemos al id
    location.href = "#ejemplo"
    document.getElementById("ejemplo").innerText = "El nombre del marcador es ejemplo"
}

function nombreHost() {
    //Enseñamos el nombre de host
    document.getElementById("host").innerText = location.hostname
}

function url() {
    //Enseñamos url
    document.getElementById("url").innerText = location.href
}

function nuevaPagina() {
    //Nos vamos a una nueva pagina
    var enlace = prompt("Introduce tu enlace para la nueva pagina")
    window.location.href = enlace
}

function protocoloPagina() {
    //Vemos el protocolo del navegador
    document.getElementById("protocolo").innerText = location.protocol

}

function recargarPagina() {
    history.go(0)
    // otra manera: location.reload()
}

function fecha() {
    document.getElementById("fecha").innerText = document.lastModified
}

function urlActual() {
    document.getElementById("url").innerText = document.referrer
}

function titulo() {
    document.getElementById("titulo").innerText = document.title
}

function urlCompleta() {
    document.getElementById("url2").innerText = document.URL
}

// No entiende este, es un ejemplo de internet pero no se cual es la funcionalidad
function cargarDoc() {

    // Ejemplo 1: Escribir en el documento antes de que termine de cargar
    document.write("<h2>Contenido escrito antes de que termine de cargar</h2>");
    document.write("<p>Este contenido se agrega antes de que el documento esté completamente cargado.</p>");

    // Evento que se activa cuando el contenido del DOM ha sido completamente cargado
    document.addEventListener("DOMContentLoaded", function () {
        // Ejemplo 2: Añadir contenido al documento después de que ha terminado de cargar
        const nuevoContenido = "<h2>Contenido escrito después de que el DOM ha terminado de cargar</h2>" +
            "<p>Este contenido se agrega sin sobrescribir el anterior.</p>";
        document.body.innerHTML += nuevoContenido; // Se agrega nuevo contenido al final del body
    });

}

function devolverTags() {
    numtags = document.getElementsByTagName("a").length;
    document.getElementById("num").innerText = numtags
}

function textoTag() {
    document.getElementById("tag").innerText = document.getElementsByTagName("a")[0].innerHTML;
}

function contImagenes() {
    document.getElementById("img").innerText = document.getElementsByTagName("img").length;
}

function numEnlaces() {
    numtags = document.getElementsByTagName("a").length;
    document.getElementById("enlaces").innerText = numtags
}

function cambiarNombre() {
    var nombrenuevo = prompt("Introduce el nombre para el documento:")
    document.title = nombrenuevo
}













