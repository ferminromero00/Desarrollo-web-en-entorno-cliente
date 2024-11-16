const tablero = document.getElementById('board');
let fichas = [...Array(15).keys()].map(x => x + 1).concat(null);
mezclar(fichas);
crearTablero();

function mezclar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function crearTablero() {
    tablero.innerHTML = '';
    fichas.forEach((ficha, indice) => {
        const elementoFicha = document.createElement('div');
        elementoFicha.classList.add('tile');
        if (ficha === null) {
            elementoFicha.classList.add('empty');
        } else {
            elementoFicha.textContent = ficha;
            elementoFicha.onclick = () => moverFicha(indice);
        }
        tablero.appendChild(elementoFicha);
    });
}

function moverFicha(indice) {
    const indiceVacio = fichas.indexOf(null);
    const movimientosValidos = [indiceVacio - 1, indiceVacio + 1, indiceVacio - 4, indiceVacio + 4];
    if (movimientosValidos.includes(indice)) {
        [fichas[indiceVacio], fichas[indice]] = [fichas[indice], fichas[indiceVacio]];
        crearTablero();
        comprobarVictoria();
    }
}

function comprobarVictoria() {
    const esVictoria = fichas.slice(0, 15).every((ficha, indice) => ficha === indice + 1);
    if (esVictoria) {
        alert('¡Has ganado!');
    }
}