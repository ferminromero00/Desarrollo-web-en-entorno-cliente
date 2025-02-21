import React from 'react'
import { Link } from 'react-router-dom'

export default function Producto({ product, AñadirCarrito }) {

    const handleAñadirCarrito = () => {
        AñadirCarrito(product)
    }

    return (
        <>
            <div>
                <h3>{product.title}</h3>
                <Link to={"/productos:"+ product.id}>
                    <img src={product.image} alt={product.image} style={{ height: 150 }} className='pe-auto' />
                </Link>
                <p>Price: {product.price}</p>
                <button onClick={handleAñadirCarrito}>Añadir al carro</button>
            </div>
        </>
    )
}
