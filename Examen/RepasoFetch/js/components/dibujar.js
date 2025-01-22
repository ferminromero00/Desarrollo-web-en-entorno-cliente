import { fetchProductos } from "./fetch.js";
import { EventCarrito } from "./Carrito.js";

export const EventDibujar = async () => {
    const products = await fetchProductos()
    dibujar(products)
}

export const dibujar = (productos) => {
    let caja = document.getElementById("caja_products")
    caja.innerHTML = ""
    productos.forEach(e => { nodoDOM(e) });
}

const nodoDOM = (item) => {
    let caja = document.getElementById("caja_products")
    let h1 = document.createElement("h1")
    let img = document.createElement("img")
    let price = document.createElement("p")
    let descrp = document.createElement("p")
    let rate = document.createElement("p")
    let count = document.createElement("p")
    let boton = document.createElement("button")

    h1.textContent = item.title
    img.src = item.image
    img.height = "100"
    price.textContent = "Precio: " + item.price
    descrp.textContent = item.description
    rate.textContent = "Rate: " + item.rating.rate
    count.textContent = "Count: " + item.rating.count
    boton.textContent = "Añadir al Carrito"
    boton.addEventListener("click", () => { EventCarrito.add(h1.textContent) })

    caja.appendChild(h1)
    caja.appendChild(img)
    caja.appendChild(descrp)
    caja.appendChild(price)
    caja.appendChild(rate)
    caja.appendChild(count)
    caja.appendChild(boton)

}