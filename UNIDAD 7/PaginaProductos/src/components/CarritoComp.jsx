import React from 'react';

export default function CarritoComp({ carrito, setCarrito }) {
  console.log(carrito);

  return (
    <>
      {carrito.map(e => (
        <div key={e.id}>
          <p>Titulo producto: {e.title}</p>
        </div>
      ))}
    </>
  );
}