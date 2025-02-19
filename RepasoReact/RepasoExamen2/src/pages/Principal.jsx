import { useState } from "react"
import Buscador from "../components/Buscador"
import Carrito from "../components/Carrito"
import GridProductos from "../components/GridProductos"


export default function Principal() {
  const [buscar, setBuscar] = useState([])
  
  return (
    <>
      <Buscador setBuscar={setBuscar}></Buscador>
      <Carrito></Carrito>
      <GridProductos buscar={buscar}></GridProductos>
    </>
  )
}
