// Obtener el elemento del tablero del DOM
const tablero = document.getElementById('tablero');

// Crear un array de fichas del 1 al 15 y un espacio vacío (null)
let fichas = [...Array(15).keys()].map(x => x + 1).concat(null);

// Mezclar las fichas al inicio
mezclar(fichas);

// Crear el tablero inicial
crearTablero();

// Función para mezclar las fichas usando el algoritmo de Fisher-Yates
function mezclar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Función para crear el tablero y asignar las posiciones de las fichas
function crearTablero() {
    // Limpiar el contenido del tablero
    tablero.innerHTML = '';
    
    // Crear y agregar cada ficha al tablero
    fichas.forEach((ficha, indice) => {
        const elementoFicha = document.createElement('div');
        elementoFicha.classList.add('tile');
        
        if (ficha === null) {
            // Agregar clase 'empty' al espacio vac��o
            elementoFicha.classList.add('empty');
        } else {
            // Establecer la imagen de fondo y la posición de la ficha
            elementoFicha.style.backgroundImage = 'url("fto.jpg")';
            elementoFicha.style.backgroundPosition = `${(ficha - 1) % 4 * -100}px ${Math.floor((ficha - 1) / 4) * -100}px`;
            elementoFicha.onclick = () => moverFicha(indice);
        }
        
        // Agregar la ficha al tablero
        tablero.appendChild(elementoFicha);
    });
}

// Función para mover una ficha si está adyacente a la casilla vacía
function moverFicha(indice) {
    const indiceVacio = fichas.indexOf(null);
    const movimientosValidos = [indiceVacio - 1, indiceVacio + 1, indiceVacio - 4, indiceVacio + 4];
    
    // Verificar si el movimiento es válido
    if (movimientosValidos.includes(indice)) {
        // Intercambiar la ficha con el espacio vacío
        [fichas[indiceVacio], fichas[indice]] = [fichas[indice], fichas[indiceVacio]];
        
        // Volver a crear el tablero con la nueva disposición de fichas
        crearTablero();
        
        // Comprobar si el jugador ha ganado
        comprobarVictoria();
    }
}

// Función para comprobar si el jugador ha ganado
function comprobarVictoria() {
    const esVictoria = fichas.slice(0, 15).every((ficha, indice) => ficha === indice + 1);
    
    // Mostrar mensaje de victoria si todas las fichas están en orden
    if (esVictoria) {
        alert('¡Has ganado!');
    }
}