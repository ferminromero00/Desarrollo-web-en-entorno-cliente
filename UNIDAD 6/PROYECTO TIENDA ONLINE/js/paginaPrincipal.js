/* FETCH PARA CONSEGUIR INFORMACION DE LA API */

/**
 * Función `fetch1`:
 * Realiza una solicitud HTTP GET a la URL proporcionada y retorna la respuesta en formato JSON.
 * También registra la respuesta en la consola para fines de depuración.
 * @param {string} url - URL del recurso a obtener.
 * @returns {Promise<Object>} - Promesa que resuelve con el objeto JSON obtenido.
 */
function fetch1(url) {
    return fetch(url)
        .then(res => res.json())
        .then(json => {
            console.log(json);
            return json;
        });
}

/* DIBUJAR JUEGOS Y SCROLL INFINITO*/

export const eventDibujar = async () => {
    let url = "http://localhost:3000/games"
    dibujar(await fetch1(url));
    cargarMas();
}

let paginaActual = 1;
const juegosPorPagina = 8;
let cargando = false;

const dibujar = (url, pagina) => {

    let principio = (pagina - 1) * juegosPorPagina;
    let final = pagina * juegosPorPagina;
    let objetos = url.slice(principio, final);


    let lista = document.getElementById("lista_juegos")
    
    objetos.forEach(e => {
        let div = document.createElement("div")
        let h1 = document.createElement("h1")
        let p = document.createElement("p")
        let img = document.createElement("img")
        let p2 = document.createElement("p")

        h1.textContent = e.info.title
        p.textContent = "Precio: " + e.cheapestPriceEver.price
        img.src = e.info.thumb
        p2.textContent = "Categoria: " + e.info.category

        lista.appendChild(div)
        div.appendChild(h1)
        div.appendChild(p)
        div.appendChild(p2)
        div.appendChild(img)
    });

    cargando = false;
    document.getElementById("cargando").style.display = "none";
}

const cargarMas = async () => {
    if (cargando) return;
    cargando = true;
    document.getElementById("cargando").style.display = "block";

    let url = "http://localhost:3000/games";
    let data = await fetch1(url);
    dibujar(data, paginaActual);
    paginaActual++;
}

window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        cargarMas();
    }
});


















