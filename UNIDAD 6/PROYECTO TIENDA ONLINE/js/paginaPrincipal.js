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
            return json;
        });
}

/* DIBUJAR JUEGOS Y SCROLL INFINITO*/

export const eventDibujar = async () => {
    let url = "http://localhost:3000/games";
    dibujar(await fetch1(url), 1);
    cargarMas();
    ordenar()
}

let paginaActual = 1;
const juegosPorPagina = 8;
let cargando = false;
let categoriaSeleccionada = "";
let ordenlistado = "desc"

const dibujar = (data, pagina) => {
    data.sort((a, b) => {
        if (ordenlistado === "asc") {
            return a.cheapestPriceEver.price - b.cheapestPriceEver.price;
        } else {
            return b.cheapestPriceEver.price - a.cheapestPriceEver.price;
        }
    });

    let principio = (pagina - 1) * juegosPorPagina;
    let final = pagina * juegosPorPagina;
    let objetos = data.slice(principio, final);

    let lista = document.getElementById("lista_juegos");

    objetos.forEach(e => {
        let div = document.createElement("div");
        let h1 = document.createElement("h1");
        let p = document.createElement("p");
        let img = document.createElement("img");
        let p2 = document.createElement("p");
        let br = document.createElement("br")

        h1.textContent = e.info.title;
        p.textContent = "Precio: " + e.cheapestPriceEver.price + "€";
        img.src = e.info.thumb;
        p2.textContent = "Categoria: " + e.info.category;

        lista.appendChild(div);
        div.appendChild(h1);
        div.appendChild(p);
        div.appendChild(p2);
        div.appendChild(img);
        lista.appendChild(br)
    });

    cargando = false;
    document.getElementById("cargando").style.display = "none";
}

const cargarMas = async () => {
    if (cargando) return;
    cargando = true;
    document.getElementById("cargando").style.display = "block";

    let url = `http://localhost:3000/games?info.category=${categoriaSeleccionada}`;
    let data = await fetch1(url);
    paginaActual++;
    dibujar(data, paginaActual);
}

window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        cargarMas("http://localhost:3000/games");
    }
});


/* LISTAR POR CATEGORIAS */

export const eventCategorias = async () => {
    let url = "http://localhost:3000/games"
    let categorias = listarCategorias(await fetch1(url));
    insertarCategorias(categorias);
    filtrar();
}

const listarCategorias = (url) => {
    let categorias = []

    url.forEach(e => {

        if (!categorias.includes(e.info.category)) {
            categorias.push(e.info.category)
        }
    })
    return categorias;
}

const insertarCategorias = (lista) => {
    let lista_html = document.getElementById("lista_categorias")
    lista.forEach(e => {
        let option = document.createElement("option")
        option.textContent = e
        option.id = "seleccion"
        lista_html.appendChild(option)
    })
}

const filtrar = () => {
    let lista_html = document.getElementById("lista_categorias");

    lista_html.addEventListener("change", async (event) => {
        categoriaSeleccionada = event.target.value;
        paginaActual = 1;

        document.getElementById("lista_juegos").innerHTML = "";
        let url = `http://localhost:3000/games?info.category=${categoriaSeleccionada}`;
        dibujar(await fetch1(url), paginaActual);

        console.log(url);

    });

}

/* CAMBIAR ASCENDENTE O DESCENDENTE */

const ordenar = () => {
    let ordenar_btn = document.getElementById("ordenar_btn");

    ordenar_btn.addEventListener("click", async () => {
        ordenlistado = ordenlistado === "asc" ? "desc" : "asc";
        ordenar_btn.textContent = `Ordenar: ${ordenlistado === "asc" ? "Ascendente" : "Descendente"}`;
        paginaActual = 1;

        document.getElementById("lista_juegos").innerHTML = "";
        let url = `http://localhost:3000/games?info.category=${categoriaSeleccionada}&_sort=cheapestPriceEver.price&_order=${ordenlistado}`;
        let data = await fetch1(url);
        dibujar(data, paginaActual);
    });
}



