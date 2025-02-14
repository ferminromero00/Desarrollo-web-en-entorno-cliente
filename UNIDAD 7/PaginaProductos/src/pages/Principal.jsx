import React from 'react';
import Navegacion from '../components/Navegacion';
import GridProductos from '../components/GridProductos';

export default function Principal({ setCarrito, carrito, cant }) {
  
  return (
    <>
      <Navegacion cant={cant} />
      <GridProductos setCarrito={setCarrito} carrito={carrito} />
    </>
  );
}