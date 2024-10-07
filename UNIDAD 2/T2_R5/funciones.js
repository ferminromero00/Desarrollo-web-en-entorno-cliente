var nuevaVentana;
var nuevaVentanaBoton;
var ventanaEmergente;
var ventanaContador;
var ventanaSecundaria;

function crearPagina() {
    var titulo = prompt("Introduce el título de la nueva página:");

    // Abre una nueva ventana de 400x500 píxeles , abierto arriba a la derecha
    nuevaVentana = window.open("", "_blank", "width=500,height=400,top=0, left=10000")
    // Escribe el contenido de la nueva ventana con el título ingresado
    nuevaVentana.document.write("<h1> Titulo: " + titulo + "</h1>");

}
function cerrarVentana() {
    nuevaVentana.close(); // Cierra la ventana secundaria
}

function crearPaginaBotones() {

    // Abre una nueva ventana de 500x400 píxeles, ubicada arriba a la derecha
    nuevaVentanaBoton = window.open("", "_blank", "width=500,height=400,top=0,left=1000");

    // Escribe contenido en la nueva ventana, incluyendo un script para cerrar la ventana
    nuevaVentanaBoton.document.write(`
        <html>
            <head>
                <title>Ventana Secundaria</title>
                <script>
                    function cerrarBotones() {
                        window.close();
                    }
                </script>
            </head>
            <body>
                <h1>Ventana Secundaria</h1>
                <button onclick="cerrarBotones()">Cerrar Ventana Secundaria</button>
            </body>
        </html>
    `);

}
function cerrarBoton() {
    nuevaVentanaBoton.close()
}

function ventanasEmergentes() {

    for (i = 1; i <= 5; i++) {
        ventanaEmergente = window.open("", "_blank", "width=500,height=400,top=0,left=1000");
        ventanaEmergente.document.write(`
            <html>
                <head>
                    <title>Ventana Secundaria</title>
                    <script>
                        function cerrarEmergente() {
                            window.close();
                        }
                    </script>
                </head>
                <body>
                    <h1>Ventana numero ${i}</h1>
                    <button onclick="cerrarEmergente()">Cerrar Ventana Secundaria</button>
                </body>
            </html>
        `);
    }
}
function cerrarEmergente() {
    ventanaEmergente.close();
}

function cuentaAtras() {
    window.onload = function () {
        let tiempoRestante = 5; // Tiempo inicial (en segundos)

        // Función que se ejecuta cada segundo
        function muestraReloj() {
            if (tiempoRestante >= 0) {
                document.getElementById("contador").textContent = "Hemos  cambiado  de  ubicación  esta página.  En  breves  momentos  será  redireccionado... " + tiempoRestante;
                tiempoRestante--;
            } else {
                clearInterval(intervalo); // Detenemos el intervalo cuando llega a cero
                ventanaContador = window.open("http://www.pccomponentes.com", "width=500,height=400,top=0,left=1000")
            }
        }

        // Inicia el intervalo para que se ejecute cada segundo
        let intervalo = setInterval(muestraReloj, 1000);
    }


}


// Función para abrir la ventana secundaria
function abrirVentanaSecundaria() {
    ventanaSecundaria = window.open("ventanaSecundario.html", "_blank", "width=500,height=400,top=0,left=1000");
}

// Función para enviar un mensaje a la ventana secundaria
function enviarMensaje() {
    ventanaSecundaria.recibeMensaje("Hola desde la ventana principal!");

}

// Función para cerrar la ventana secundaria
function cerrarTodo() {
    if (ventanaSecundaria) {
        ventanaSecundaria.close();
    }
}


