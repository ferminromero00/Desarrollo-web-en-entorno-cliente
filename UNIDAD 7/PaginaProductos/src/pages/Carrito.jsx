import Navegacion from "../components/Navegacion"
import CarritoComp from "../components/CarritoComp"

export default function Carrito({ setCarrito, carrito }) {
  
  return (
    <>
      <Navegacion></Navegacion>
      <CarritoComp setCarrito={setCarrito} carrito={carrito}  />
    </>
  )
}
