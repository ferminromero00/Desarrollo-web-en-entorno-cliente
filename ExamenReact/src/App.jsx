import { useState } from "react"
import Productos from "./components/Productos"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detalles from "./components/Detalles";

function App() {
  const [carrito, setCarrito] = useState([])

  const AñadirCarrito = (producto) => { setCarrito([...carrito, producto]) }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Productos AñadirCarrito={AñadirCarrito} carrito={carrito} />}></Route>
          <Route path="/productos:idProducto " element={<Detalles />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
