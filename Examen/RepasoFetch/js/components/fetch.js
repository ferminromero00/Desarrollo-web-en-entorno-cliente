export const fetchUsuarios = () => {
    return fetch('https://fakestoreapi.com/users').then(res => res.json())
}

export function fetchProductos() {
    return new Promise((resolve) => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://fakestoreapi.com/products", true);
        xhr.onload = function () {const productos = JSON.parse(xhr.responseText); resolve(productos);};
        xhr.send();
    });
}
