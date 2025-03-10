import "./App.css";
import Principal from "./pages/Principal";
import Detalle from "./pages/Detalle";
import Carrusel from "./pages/Carrusel";
import { BrowserRouter } from "react-router";
import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import Carrito from "./pages/Carrito";
import { useState } from "react";


function App() {
  const [carrito, setCarrito] = useState([]);
  const cant = parseInt(carrito.length)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Principal setCarrito={setCarrito} carrito={carrito} cant={cant} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/detalle/:idProducto" element={<Detalle cant={cant} />} />
          <Route path="/carrusel" element={<Carrusel cant={cant} />} />
          <Route path="/carrito" element={<Carrito setCarrito={setCarrito} carrito={carrito} cant={cant} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
