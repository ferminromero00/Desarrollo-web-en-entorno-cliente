import { fetchProductos } from "./fetch.js"
import { dibujar } from "./dibujar.js"

export const EventFiltrar = () => {
    let filtro = document.getElementById("filtrar")
    let valor = document.getElementById("valor")
    let btn = document.getElementById("buscarFiltro")

    btn.addEventListener("click", () => { Filtrar(filtro.value, valor.value) })
}

const Filtrar = async (filtro, valor) => {
    let arrFiltrados = [];
    let product = await fetchProductos()

    product.forEach(e => {
        if (filtro == "price" && e.price < valor) {
            arrFiltrados.push(e)
        } else if (filtro == "rate" && e.rating.rate < valor) {
            arrFiltrados.push(e)
        } else if (filtro == "count" && e.rating.count < valor) {
            arrFiltrados.push(e)
        }
    });
    return dibujar(arrFiltrados)
}