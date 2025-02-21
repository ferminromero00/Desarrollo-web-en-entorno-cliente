import { useState } from "react"

export default function Buscar({ setBuscar }) {
    const [texto, setTexto] = useState([])
    const handleBuscador = (e) => { setTexto(e.target.value) }
    const buscar = () => { setBuscar(texto) }

    return (
        <>
            <label htmlFor="">Buscar</label>
            <input type="text" onChange={handleBuscador} />
            <button onClick={buscar}>Buscar</button>
        </>
    )
}
