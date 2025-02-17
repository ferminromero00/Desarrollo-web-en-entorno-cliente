import React from 'react'
import DetalleProducto from '../components/DetalleProducto'

export default function Detalle({cant}) {
  return (
    <>
        <DetalleProducto cant={cant}></DetalleProducto>
    </>
  )
}
