const tablero = document.getElementById('tablero');
let fichas = [...Array(15).keys()].map(x => x + 1).concat(null);
mezclar(fichas);
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
    tablero.innerHTML = '';
    fichas.forEach((ficha, indice) => {
        const elementoFicha = document.createElement('div');
        elementoFicha.classList.add('tile');
        if (ficha === null) {
            elementoFicha.classList.add('empty');
        } else {
            elementoFicha.style.backgroundImage = 'url("fto.jpg")';
            elementoFicha.style.backgroundPosition = `${(ficha - 1) % 4 * -100}px ${Math.floor((ficha - 1) / 4) * -100}px`;
            elementoFicha.onclick = () => moverFicha(indice);
        }
        tablero.appendChild(elementoFicha);
    });
}

// Función para mover una ficha si está adyacente a la casilla vacía
function moverFicha(indice) {
    const indiceVacio = fichas.indexOf(null);
    const movimientosValidos = [indiceVacio - 1, indiceVacio + 1, indiceVacio - 4, indiceVacio + 4];
    if (movimientosValidos.includes(indice)) {
        [fichas[indiceVacio], fichas[indice]] = [fichas[indice], fichas[indiceVacio]];
        crearTablero();
        comprobarVictoria();
    }
}

// Función para comprobar si el jugador ha ganado
function comprobarVictoria() {
    const esVictoria = fichas.slice(0, 15).every((ficha, indice) => ficha === indice + 1);
    if (esVictoria) {
        alert('¡Has ganado!');
    }
}