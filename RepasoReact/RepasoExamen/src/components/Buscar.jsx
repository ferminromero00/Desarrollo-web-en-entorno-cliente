import { useState } from "react";

export default function Buscar() {
  const [buscador, setBuscador] = useState([])
  
  const Buscador = (e) => {
    setBuscador(e.target.value)
  }

  console.log(buscador);
  
  return (
    <>
      <form action="">
        <input type="text" onChange={Buscador}
        />
      </form>
      <button>Buscar</button>
    </>
  );
}
