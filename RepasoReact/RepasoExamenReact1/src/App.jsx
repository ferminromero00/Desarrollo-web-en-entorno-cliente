import { BrowserRouter, Route, Routes } from "react-router";
import Principal from "./pages/Principal";
import Detalle from "./components/Detalle";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Principal />}></Route>
          <Route path="/detalle/:id" element={<Detalle />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
