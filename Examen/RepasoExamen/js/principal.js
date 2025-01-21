import { arrObjBDProductos } from "./BDexamen.js";


export const EventCards = () => {
    CreaCards(arrObjBDProductos)
}
const CreaCards = (arrayProductos) => {
    arrayProductos.forEach(e => { CreaCard(e) });
}
const CreaCard = (objeto) => {
    let card = document.createElement("div");
    let principal = document.getElementById("principal")

    let title = document.createElement("h1");
    let img = document.createElement("img");
    let description = document.createElement("p");
    let price = document.createElement("p");
    let rating = document.createElement("p");
    let button = document.createElement("button")

    title.innerHTML = objeto.title;
    img.src = objeto.image;
    description.innerHTML = objeto.description;
    price.innerHTML = objeto.price;
    rating.innerHTML = "Rating: Rate " + objeto.rating.rate + " Count " + objeto.rating.count;
    button.innerHTML = "Añadir a carrito"

    img.height = "200";

    button.addEventListener("click", (e) => { newItem.add(title.textContent) })
    img.addEventListener("click", (e) => { newItem.add(title.textContent) })
    
    principal.appendChild(card)
    card.appendChild(title);
    card.appendChild(img);
    card.appendChild(description);
    card.appendChild(price);
    card.appendChild(rating);
    card.appendChild(button)

    return card;
}
//---------------------------------------------------------------------
export const EventFiltro = () => {
    let filtro = document.getElementById("Filtro")
    let btn = document.getElementById("botonFiltrar")
    let valor = document.getElementById("valor")

    btn.addEventListener("click", () => {
        let objFiltro = [filtro.value, valor.value]
        Filtra(objFiltro)
    })
}
const Filtra = (objFiltro) => {
    let productsFiltrados = []

    let filtro = objFiltro[0]
    let valor = objFiltro[1]

    arrObjBDProductos.forEach(e => {
        if (filtro === "price" && e.price < valor) {
            productsFiltrados.push(e);
        } else if (filtro === "rate" && e.rating.rate < valor) {
            productsFiltrados.push(e);
        } else if (filtro === "count" && e.rating.count < valor) {
            productsFiltrados.push(e);
        }
    })

    let body = document.getElementById("principal")
    body.innerHTML = ""
    productsFiltrados.forEach(e => { CreaCard(e) })


    console.log(productsFiltrados);
    return productsFiltrados;
}
//---------------------------------------------------------------------

export const EventCategorias = () => {
    DevuelveGeneros(arrObjBDProductos)
}
const DevuelveGeneros = (arrObjBDProductos) => {
    let categorias = []

    arrObjBDProductos.forEach(e => {
        if (!categorias.includes(e.category)) {
            categorias.push(e.category)
        }
    })
    return categorias;
}
//---------------------------------------------------------------------
class Carrito {
    constructor() { this.carrito = [] }

    add(elemento) {
        this.carrito.push(elemento)
        this.dibujaCarrito()
    }

    dibujaCarrito() {
        let msj = document.getElementById("msj")
        msj.innerHTML = ""
        this.carrito.forEach(e => {
            let fragment = document.createElement("p")
            fragment.textContent = e
            msj.appendChild(fragment)
        })
    }
}

let newItem = new Carrito


