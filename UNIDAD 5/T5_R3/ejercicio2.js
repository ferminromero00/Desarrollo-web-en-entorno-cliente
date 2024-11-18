// Obtener el elemento del tablero del DOM
const tablero = document.getElementById('board');

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

// Función para crear el tablero en el DOM
function crearTablero() {
    // Limpiar el contenido del tablero
    tablero.innerHTML = '';
    
    // Crear y agregar cada ficha al tablero
    fichas.forEach((ficha, indice) => {
        const elementoFicha = document.createElement('div');
        elementoFicha.classList.add('tile');
        
        if (ficha === null) {
            // Agregar clase 'empty' al espacio vacío
            elementoFicha.classList.add('empty');
        } else {
            // Establecer el número de la ficha y agregar evento de clic
            elementoFicha.textContent = ficha;
            elementoFicha.onclick = () => moverFicha(indice);
        }
        
        // Agregar la ficha al tablero
        tablero.appendChild(elementoFicha);
    });
}

// Función para mover una ficha
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