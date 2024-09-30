function onlyUniques (...argumentos) {
    let array = [];
    array.push(argumentos)

    return resultado = document.write(unique(array))
}

function squareAndSum(...numbers) {
    // Mapear cada número a su cuadrado y luego sumar los cuadrados
    return numbers.map(num => num * num).reduce((sum, square) => sum + square, 0);
}


