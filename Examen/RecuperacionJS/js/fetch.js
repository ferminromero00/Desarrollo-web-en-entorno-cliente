export function fetchProductos() {
    return new Promise((resolve) => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:3000/results", true);
        xhr.onload = function () { const productos = JSON.parse(xhr.responseText); resolve(productos); };
        xhr.send();
    });
}