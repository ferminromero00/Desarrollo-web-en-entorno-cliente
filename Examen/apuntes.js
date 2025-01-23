export const fetchUsuarios = () => { return fetch('https://fakestoreapi.com/users').then(res => res.json()) }
//----------------------------------------------------------------------------------------------------------------------------------------------------
export function fetchProductos() {
    return new Promise((resolve) => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://fakestoreapi.com/products", true);
        xhr.onload = function () { const productos = JSON.parse(xhr.responseText); resolve(productos); };
        xhr.send();
    });
}
//----------------------------------------------------------------------------------------------------------------------------------------------------
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