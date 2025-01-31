import './App.css'
import Principal from './pages/Principal'
import Detalle from './pages/Detalle'
import Carrusel from "./pages/Carrusel"
import { BrowserRouter } from 'react-router';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/detalle" element={<Detalle />} />
          <Route path="/carrusel" element={<Carrusel />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
