import React, { useEffect, useState } from 'react'
import { Fetch } from "../utils/Fetch"
import Producto from './Producto'
import Carrito from './Carrito'
import Buscar from './Buscar'

export default function Productos({ AñadirCarrito, carrito }) {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        Fetch("http://localhost:3000/productos").then((data) => {
            setProductos(data)
        })
    }, [carrito])

    const arrProductos = productos.map((product) => {
        return <Producto key={product.id} product={product} AñadirCarrito={AñadirCarrito}></Producto>
    })


    return (
        <>
            <Buscar></Buscar>
            <Carrito carrito={carrito}></Carrito>
            <section className='d-flex flex-column text-center gap-5'>
                {arrProductos}
            </section>
        </>
    )
}
