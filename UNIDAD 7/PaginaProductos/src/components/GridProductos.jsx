import React from 'react'
import { Fetch } from '../utils/Fetch';
import { useEffect, useState } from 'react';


export default function GridProductos() {

  const [products, setProducts] = useState([]);
  useEffect(() => { Fetch('https://fakestoreapi.com/products').then(data => setProducts(data)) }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {products.map(e => (
            <div className="col-md-6 mb-4" key={e.id}>
              <div className="card h-100 border border-5">
                <div className="d-flex justify-content-center align-items-center">
                  <img src={e.image} className="card-img-top" alt={e.title} style={{ height: '300px', width: '300px' }} />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{e.title}</h5>
                  <p className="card-text">{e.description}</p>
                  <p className="card-text"><strong>Precio: {e.price}€</strong></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
