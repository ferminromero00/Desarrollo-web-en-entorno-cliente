import { fetchProductos } from "./fetch.js";

export const EventCategorias = async () => {
    let products = await fetchProductos()
    categorias(products)
}

const categorias = (productos) => {
    let arrCategorias = [];
    productos.forEach(e => { if (!arrCategorias.includes(e.category)) { arrCategorias.push(e.category) } });
    return arrCategorias;
}


















