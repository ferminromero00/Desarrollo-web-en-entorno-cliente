import { useState } from "react"
import Buscar from "../components/Buscar"
import GridMovies from "../components/GridMovies"

export default function Principal() {
    const [buscador, setBuscador] = useState([])
    
    return (
        <>
            <Buscar setBuscador={setBuscador}></Buscar>
            <GridMovies buscador={buscador}></GridMovies>
        </>
    )
}
