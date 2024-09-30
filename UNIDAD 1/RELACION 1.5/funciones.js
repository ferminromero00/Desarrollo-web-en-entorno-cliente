function onlyUniques(...argumentos) {
    //hacemos un array
    let array = [];
    //Recorremos todos los datos introducidos
    for (let i = 0; i < argumentos.length; i++) {
        //Si el dato es nuevo y no esta en el array, añadimos al array el dato
        if (!array.includes(argumentos[i])) {
            array.push(argumentos[i]);
        }
    }
    return document.write(array) ;
}

function squareAndSum(...numeros) {
    let sum = 0;

    // Usamos un bucle for...of para recorrer cada número
    for (let num of numeros) {
        // En cada iteración, multiplicamos el número por sí mismo (num * num) para obtener su cuadrado
        // Luego, sumamos el cuadrado al valor actual de 'sum'
        sum += num * num;
    }
    // Devolvemos la suma total de los cuadrados de todos los números
    return sum;
}

