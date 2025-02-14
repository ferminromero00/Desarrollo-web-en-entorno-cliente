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

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/login" element={<Login />} />
          <Route path="/detalle/:idProducto" element={<Detalle />} />
          <Route path="/carrusel" element={<Carrusel />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
