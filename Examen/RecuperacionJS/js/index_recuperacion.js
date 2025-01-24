import { peliculas, filtraMovies, contador } from "./funciones.js";

localStorage.clear()

const main = () => {
    peliculas.devuelveMovies()  
    filtraMovies()
    contador()
}

document.addEventListener("DOMContentLoaded", main)