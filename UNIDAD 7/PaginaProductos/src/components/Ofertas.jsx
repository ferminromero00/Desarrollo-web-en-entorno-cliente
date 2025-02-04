import React, { useEffect, useState } from 'react';
import { Fetch } from '../utils/Fetch';

export default function Carrusel() {
  const [products, setProducts] = useState({});
  const [indice, setIndice] = useState(1);

  useEffect(() => {
    Fetch('https://fakestoreapi.com/products/' + indice).then(data => setProducts(data));
  }, [indice]);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 mb-4 mt-3" key={products.id}>
          <div className="card h-100 border border-5 shadow-sm">
            <div className="d-flex justify-content-center align-items-center">
              <img src={products.image} className="card-img-top" alt={products.title}
                style={{ height: '300px', width: '300px', marginTop: '1rem', objectFit: 'contain' }} />
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">{products.title}</h5>
              <p className="card-text">{products.description}</p>
              <p className="card-text"><strong>Precio: {products.price}€</strong></p>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-3">
        {indice > 1 && <button className="btn btn-primary" onClick={() => setIndice(indice - 1)}>{"< Anterior"}</button>}
        <p className="mb-0">Producto {indice} de 20</p>
        {indice < 20 && <button className="btn btn-primary" onClick={() => setIndice(indice + 1)}>{"Siguiente >"}</button>}
      </div>
    </div>
  );
}