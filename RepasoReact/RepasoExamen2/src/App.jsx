import { BrowserRouter, Route, Routes } from "react-router-dom";
import Principal from "../../RepasoExamen2/src/pages/Principal";
import Detalles from "./components/Detalles";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/detalles/:id" element={<Detalles />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App