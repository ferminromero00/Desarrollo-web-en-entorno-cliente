import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Fetch } from '../utils/Fetch'

export default function Detalles() {
    const params = useParams()
    const [productos, setProductos] = useState([])


    useEffect(() => {
        Fetch("http://localhost:3000/productos/" + params.idProducto).then((data) => {
            setProductos(data)
        })
    }, [])

    return (
        <>
            <h3>{productos.title}</h3>
            <img src={productos.image} alt="" style={{height:150}}/>
            <p>id: {productos.id}</p>
            <p> Descripcion: {productos.description}</p>
            <p>Categoria: {productos.category}</p>

            <Link to={"/"}><button>Volver</button></Link>
        </>
    )
}
