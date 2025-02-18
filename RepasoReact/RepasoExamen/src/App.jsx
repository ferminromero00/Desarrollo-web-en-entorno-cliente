import { BrowserRouter, Route, Routes } from "react-router";
import Principal from "./pages/Principal";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Principal />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
