import React, { useEffect, useState } from 'react'
import { Fetch } from "../utils/Fetch"
import Producto from './Producto'
import Carrito from './Carrito'
import Buscar from './Buscar'
import { useNavigate } from 'react-router-dom'

export default function Productos({ AñadirCarrito, carrito, setBuscar, buscar }) {

    const [productos, setProductos] = useState([])
    const navigate = useNavigate()

    const handlelogin = () => {
        navigate("/")
    }

    useEffect(() => {
        Fetch("http://localhost:3000/productos").then((data) => {
            if (buscar <= 0) {
                setProductos(data)
            } else {
                const filtrados = data.filter((product) => { return product.title.toLowerCase().includes(buscar.toLowerCase()); });
                setProductos(filtrados)
            }
        })
    }, [buscar])

    const arrProductos = productos.map((product) => {
        return <Producto key={product.id} product={product} AñadirCarrito={AñadirCarrito}></Producto>
    })


    return (
        <>
            <button onClick={handlelogin}>Cerrar Sesion</button> <br />
            <Buscar setBuscar={setBuscar}></Buscar>
            <Carrito carrito={carrito}></Carrito>
            <section className='d-flex flex-column text-center gap-5'>
                {arrProductos}
            </section>
        </>
    )
}
