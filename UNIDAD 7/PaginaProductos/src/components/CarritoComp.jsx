import React from 'react';
import { Link } from "react-router";

export default function CarritoComp({ carrito, setCarrito }) {
    const añadirCarrito = (product) => { setCarrito([...carrito, product]); };
    const BorrarCarrito = (product) => {
        setCarrito((prevCarrito) => {
            const index = prevCarrito.findIndex(item => item.id === product.id);            
            if (index !== -1) {
                const newCarrito = [...prevCarrito];
                newCarrito.splice(index, 1);
                return newCarrito;
            }         
        });
    };

    const carr = [];

    carrito.forEach(e => {
        const index = carr.findIndex(prod => prod.id === e.id);
        if (index === -1) {
            carr.push({ ...e, unidades: 1 });
        } else {
            carr[index] = { ...carr[index], unidades: carr[index].unidades + 1 };
        }
    });


    return (
        <>
            <div className="row">
                {carr.map((e) => (
                    <div className="col-md-6 mb-4 p-5" key={e.id}>
                        <div className="card h-100 border border-5">
                            <Link to={`/detalle/${e.id}`} style={{ textDecoration: "none" }}>
                                <div className="d-flex justify-content-center align-items-center">
                                    <img
                                        src={e.image}
                                        className="card-img-top"
                                        alt={e.title}
                                        style={{
                                            height: "300px",
                                            width: "300px",
                                            marginTop: "1rem",
                                        }}
                                    />
                                </div>
                            </Link>
                            <div className="card-body">
                                <h5 className="card-title">{e.title}</h5>
                                <p className="card-text">{e.description}</p>
                                <p className="card-text">
                                    <strong>Precio: {Math.round(e.price * e.unidades)}€</strong>
                                </p>
                                <p className='card-text'>Cantidad: {e.unidades}</p>
                            </div>
                        </div>
                        <div className="text-center mt-2">
                            <button className="btn border border-2 me-4" onClick={() => añadirCarrito(e)}>Añadir</button>
                            <button className="btn border border-2 me-4" onClick={() => BorrarCarrito(e)}>Borrar</button>
                        </div>
                    </div>
                ))}
            </div>

        </>
    );
}