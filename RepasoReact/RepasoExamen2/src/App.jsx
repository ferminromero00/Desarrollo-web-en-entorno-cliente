import { BrowserRouter, Route, Routes } from "react-router-dom";
import Principal from "../../RepasoExamen2/src/pages/Principal";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App