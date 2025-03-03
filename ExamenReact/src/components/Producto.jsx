import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Producto({ product, AñadirCarrito, carrito }) {

    const onHangeCarrito = () => {
        AñadirCarrito(product)
    }

    return (
        <>
            <div>
                <h3>{product.title}</h3>
                <Link to={`/productos/` + product.id}>
                    <div>
                        <img src={product.image} alt={product.image} style={{ height: 150 }} className='pe-auto' />
                    </div>
                </Link>
                <p>Price: {product.price}</p>
                <button onClick={() => onHangeCarrito()}>Añadir al carro</button>
            </div>
        </>
    )
}