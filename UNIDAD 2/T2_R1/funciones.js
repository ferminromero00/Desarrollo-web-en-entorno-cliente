function VacacionesNavidad() {
    //Cogemos la fecha actual
    let fechaActual = new Date()
    //Ponemos la fecha limite con la que vamos a trabajar
    let fechaNavidad = new Date("2024-12-19")
    //Restamos lo que falta con nuestra fecha, usamos (1000 * 60 * 60 * 24) para poner el dato en dias, y no milisegundos y lo redondeamos
    let dias = Math.round((fechaNavidad - fechaActual) / (1000 * 60 * 60 * 24))
    return document.write("Faltan " + dias + " dias para navidad")

}

function CumplesDomingo(cumple) {
    //Recogemos el dato del cumpleaños y calculamos los años que faltan para el año 2100
    let cumpleanos = new Date(cumple);
    let limite = new Date("2100-01-31");
    let AñosRestantes = limite.getFullYear() - cumpleanos.getFullYear();

    //Hacemos un FOR
    for (let i = 0; i <= AñosRestantes; i++) {
        // Crear un nuevo objeto `Date` para poder recoger el año y ir actualizando el año
        let nuevoCumple = new Date(cumpleanos.getTime());
        nuevoCumple.setFullYear(cumpleanos.getFullYear() + i);

        // Verificar si cae en domingo
        if (nuevoCumple.getDay() === 0) {
            console.log(nuevoCumple);  // Mostrar la fecha en la consola
        }
    }
}

function HoraFormateada() {
    let HoraActual = new Date()
    document.write("Version 1 --> "+HoraActual.getHours()+":" + HoraActual.getMinutes() + ":"+ HoraActual.getSeconds() + "<br>")
    document.write("Version 2 --> "+HoraActual.getHours()+"h y " + HoraActual.getMinutes()+"m")




}



































