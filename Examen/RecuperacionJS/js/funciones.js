import { fetchProductos } from "./fetch.js";

class Movie {
    constructor() {
        this.arrMovies = []
    }

    devuelveMovies = async () => {
        let pelis = await fetchProductos()

        pelis.forEach(e => {
            let id = e.id
            this.titulo = e.title
            this.popularidad = e.popularity
            this.descripcion = e.overview
            this.yearestreno = e.release_date
            this.urlimagen = e.poster_path
            this.puntuacion = e.vote_average
            this.idioma = e.original_language

            this.arrMovies.push({ id: id, titulo: this.titulo, popularidad: this.popularidad, descripcion: this.descripcion, yearestreno: this.yearestreno, urlimagen: this.urlimagen, puntuacion: this.puntuacion, idioma: this.idioma })
        });

        this.show(this.arrMovies)
        return this.arrMovies;

    }

    show() {
        var urlPeliculas = "https://image.tmdb.org/t/p/w500"

        this.arrMovies.forEach(e => {
            let div = document.getElementById("cajaPelis")
            let imagen = document.createElement("img")
            let nombre = document.createElement("p")
            let puntuacion = document.createElement("p")

            nombre.textContent = e.titulo
            imagen.src = urlPeliculas + e.urlimagen
            puntuacion.textContent = e.puntuacion
            imagen.height = 200
            imagen.addEventListener("click", () => {
                localStorageFunc(nombre)
                contador()
            })

            div.appendChild(imagen)
            div.appendChild(nombre)
            div.appendChild(puntuacion)
        })

    }

}

export let peliculas = new Movie()

export const filtraMovies = async () => {
    let btn = document.getElementById("filtrar")
    let filtro = document.getElementById("filtroValor")
    let idioma = document.getElementById("idioma")
    let arrFiltrado = [];
    let arrNoFiltrado = peliculas.arrMovies

    btn.addEventListener("click", () => {
        arrNoFiltrado.forEach(e => { if (e.yearestreno > filtro.value && e.idioma === idioma.value) { arrFiltrado.push(e) } })
    })

    console.log(arrFiltrado);
    return arrFiltrado;
    
}


const localStorageFunc = (pelicula) => {
    let arrPelis = JSON.parse(localStorage.getItem("pelicula")) || [];
    let contador = (localStorage.getItem("contador"));


    if (!arrPelis.includes(pelicula.textContent)) {
        arrPelis.push(pelicula.textContent);
        contador++
    } else {
        if (contador == 0) {
            contador = 0
        } else {
            contador--
        }
    }

    localStorage.setItem("pelicula", JSON.stringify(arrPelis));
    localStorage.setItem("contador", contador)
}

export const contador = () => {
    let contador = (localStorage.getItem("contador"));
    let cont = document.getElementById("cont")
    if (contador === null) {
        cont.innerHTML = "Contador: 0"
    } else {
        cont.innerHTML = "Contador: " + contador
    }
}

