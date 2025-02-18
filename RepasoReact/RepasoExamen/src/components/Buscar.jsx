import { useState } from "react";

export default function Buscar({ setBuscador }) {
  const [buscar, setBuscar] = useState([])
  const [pelis, setPelis] = useState([])

  const Buscador = (e) => { setBuscar(e.target.value) }

  setBuscador(buscar);

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
