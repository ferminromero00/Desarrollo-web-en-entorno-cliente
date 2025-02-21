import { useState } from "react"
import Productos from "./components/Productos"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detalles from "./components/Detalles";
import Login from "./components/Login";

function App() {
  const [carrito, setCarrito] = useState([])
  const [buscar, setBuscar] = useState([])

  const AñadirCarrito = (producto) => { setCarrito([...carrito, producto]) }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/productos" element={<Productos AñadirCarrito={AñadirCarrito} carrito={carrito} setBuscar={setBuscar} buscar={buscar} />}></Route>
          <Route path="/productos/:idProducto" element={<Detalles />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
