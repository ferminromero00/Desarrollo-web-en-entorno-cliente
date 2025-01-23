

class Carrito {
    constructor() { this.carrito = [] }

    add(item){
        this.carrito.push(item)
        this.dibujarCarrito()
    }

    dibujarCarrito() {
        let carrito = document.getElementById("carrito")     
        carrito.innerHTML = ""   
        this.carrito.forEach(e=>{
            let p = document.createElement("p")
            p.innerHTML = e
            carrito.appendChild(p)
        })
    }

}

export const EventCarrito = new Carrito()

