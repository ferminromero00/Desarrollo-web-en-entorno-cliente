/* FETCH PARA CONSEGUIR INFORMACION DE LA API */

/**
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

// Lleva un registro de la página actual que se está mostrando en la interfaz.
let paginaActual = 0;

// Define cuántos juegos se mostrarán por página.
const juegosPorPagina = 8;

// Indica si se está realizando actualmente una solicitud para cargar más juegos. Evita realizar múltiples solicitudes simultáneas.
let cargando = false;

// Almacena la categoría actualmente seleccionada para filtrar los juegos, se actualiza cuando el usuario selecciona una categoría diferente
let categoriaSeleccionada = "";

// Indica el orden de clasificación de los juegos. Se alterna al hacer clic en el botón de ordenar.
let ordenlistado = "desc";


/**
* Inicia el proceso de dibujo de juegos en la interfaz.
* Llama a la función `dibujar` con los datos iniciales y configura el scroll infinito
*/
export const eventDibujar = async () => {
    cargarPaginas();
    ordenar()
}

/**
* Muestra una lista de juegos en la interfaz basándose en los datos proporcionados y la página actual.
* Ordena los datos según el precio más barato y los organiza por páginas.
* @param {Array<Object>} data - Lista de juegos obtenidos desde la API.
* @param {number} pagina - Número de página a mostrar.
*/
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
    if (pagina === 1) {
        lista.innerHTML = "";
    }

    objetos.forEach(e => {
        let div = document.createElement("div");
        let h1 = document.createElement("h1");
        let p = document.createElement("p");
        let img = document.createElement("img");
        let p2 = document.createElement("p");
        let br = document.createElement("br");

        h1.textContent = e.info.title;
        p.textContent = "Precio: " + e.cheapestPriceEver.price + "€";
        img.src = e.info.thumb;
        p2.textContent = "Categoria: " + e.info.category;

        lista.appendChild(div);
        div.appendChild(h1);
        div.appendChild(p);
        div.appendChild(p2);
        div.appendChild(img);
        lista.appendChild(br);
    });

    cargando = false;
    document.getElementById("cargando").style.display = "none";
}

/**
* Se encargar de dibujar los juegos de 8 en 8 mientras haces el scroll
*/
const cargarPaginas = async () => {
    if (cargando) return;
    cargando = true;
    document.getElementById("cargando").style.display = "block";

    let url = `http://localhost:3000/games?info.category=${categoriaSeleccionada}`;
    let data = await fetch1(url);
    paginaActual++;
    dibujar(data, paginaActual);
}

/* 
* Detecta cuando el usuario hace scroll hasta el final de la página y llama a `cargarPaginas` para cargar más juegos.
*/
window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        cargarPaginas("http://localhost:3000/games");
    }
});



/* LISTAR POR CATEGORIAS */

/**
* Obtiene todas las categorías disponibles desde la API y las muestra en un menú desplegable.
* Configura el evento para filtrar los juegos por categoría seleccionada.
*/
export const eventCategorias = async () => {
    let url = "http://localhost:3000/games"
    let categorias = listarCategorias(await fetch1(url));
    insertarCategorias(categorias);
    filtrar();
}

/**
* Extrae y devuelve una lista de categorías únicas de los juegos proporcionados.
* @param {Array<Object>} url - Lista de juegos obtenidos desde la API.
* @returns {Array<string>} - Lista de categorías únicas.
*/

const listarCategorias = (url) => {
    let categorias = []

    url.forEach(e => {

        if (!categorias.includes(e.info.category)) {
            categorias.push(e.info.category)
        }
    })
    return categorias;
}

/**
* Agrega las categorías proporcionadas al menú desplegable en la interfaz.
* @param {Array<string>} lista - Lista de categorías únicas.
*/
const insertarCategorias = (lista) => {
    let lista_html = document.getElementById("lista_categorias")
    lista.forEach(e => {
        let option = document.createElement("option")
        option.textContent = e
        option.id = "seleccion"
        lista_html.appendChild(option)
    })
}

/* 
* Configura el evento para filtrar juegos al seleccionar una categoría del menú desplegable. 
*/
const filtrar = () => {
    let lista_html = document.getElementById("lista_categorias");

    lista_html.addEventListener("change", async (event) => {
        categoriaSeleccionada = event.target.value;
        paginaActual = 1;

        document.getElementById("lista_juegos").innerHTML = "";
        let url = `http://localhost:3000/games?info.category=${categoriaSeleccionada}`;
        dibujar(await fetch1(url), paginaActual);
    });

}



/* CAMBIAR ASCENDENTE O DESCENDENTE */

/* 
* Configura el botón para alternar entre ordenar los juegos de manera ascendente o descendente por precio.
*/
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



/* CARRITO */

export const eventCarrito = () => {

}










