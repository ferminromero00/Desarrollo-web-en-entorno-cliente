function RealizaSolicitud() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://fakestoreapi.com/products", true);

    xhr.onload = function () {

        let products = JSON.parse(xhr.responseText)
        let div = document.getElementById("respuestaDelServidor")
        products.forEach(e => {
            let titulo = document.createElement("p")
            titulo.textContent = e.title
            div.appendChild(titulo)
        });
    };
    xhr.send();
}

function getFetchV3() {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
            let div = document.getElementById("respuestaDelServidor");
            json.forEach(producto => {
                let titulo = document.createElement("p");
                titulo.textContent = producto.title;
                div.appendChild(titulo);
                console.log(producto);
            });
        })
}