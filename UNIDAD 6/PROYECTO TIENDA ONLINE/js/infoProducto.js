export const dibujarProductoSeleccionado = () => {
    let infoProduct = JSON.parse(localStorage.getItem("productoseleccionado"));

    let lista = document.getElementById("lista")
    console.log(infoProduct);

    let div = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
    let img = document.createElement("img");
    let p2 = document.createElement("p");
    let button = document.createElement("button")

    h1.textContent = infoProduct.info.title;
    p.textContent = "Precio: " + infoProduct.cheapestPriceEver.price + "€";
    img.src = infoProduct.info.thumb;
    p2.textContent = "Categoria: " + infoProduct.info.category;
    button.textContent = "Añadir"
    button.addEventListener("click", () => { eventCarrito(infoProduct); });

    lista.appendChild(div);
    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(p2);
    div.appendChild(img);
    lista.appendChild(button)
}