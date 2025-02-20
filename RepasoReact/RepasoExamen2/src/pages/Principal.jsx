import { useState } from "react"
import Buscador from "../components/Buscador"
import Carrito from "../components/Carrito"
import GridProductos from "../components/GridProductos"
import Categorias from "../components/Categorias"


export default function Principal() {
  const [buscar, setBuscar] = useState([])
  const [carrito, setCarrito] = useState([])
  
  const añadirCarrito = (producto) =>{
    setCarrito([...carrito, producto])
  }

  return (
    <>
      <Buscador setBuscar={setBuscar}></Buscador>
      <Categorias></Categorias>
      <Carrito carrito={carrito}></Carrito>
      <GridProductos buscar={buscar} añadirCarrito={añadirCarrito} ></GridProductos>
    </>
  )
}
