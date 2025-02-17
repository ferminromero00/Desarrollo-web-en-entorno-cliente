import React from 'react';

export default function CarritoComp({ carrito, setCarrito }) {
    const añadirCarrito = (product) => {
        setCarrito([...carrito, product]);
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
                    <div className="col-md-6 mb-4 mt-3 p-3" key={e.id}>

                        <div className="card h-100 border border-5">
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
                            <div className="card-body">
                                <h5 className="card-title">{e.title}</h5>
                                <p className="card-text">{e.description}</p>
                                <p className="card-text">
                                    <strong>Precio: {e.price}€</strong>
                                </p>
                                <p className='card-text'>Cantidad: {e.unidades}</p>
                            </div>
                        </div>
                        <div className="text-center">
                            <button className="btn border border-2 me-4" onClick={() => añadirCarrito(e)}>Añadir</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}