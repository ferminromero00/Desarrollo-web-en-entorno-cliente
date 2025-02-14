import Navegacion from "../components/Navegacion"
import CarritoComp from "../components/CarritoComp"

export default function Carrito({ setCarrito, carrito, cant }) {
  
  return (
    <>
      <Navegacion cant={cant}></Navegacion>
      <CarritoComp setCarrito={setCarrito} carrito={carrito}  />
    </>
  )
}
