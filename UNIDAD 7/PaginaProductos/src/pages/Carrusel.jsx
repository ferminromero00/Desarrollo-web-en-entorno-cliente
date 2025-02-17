import Ofertas from "../components/Ofertas"
import Navegacion from "../components/Navegacion"
export default function Carrusel({cant}) {

  return (
    <>
      <Navegacion cant={cant}></Navegacion>
      <Ofertas></Ofertas>
    </>
  )
}
