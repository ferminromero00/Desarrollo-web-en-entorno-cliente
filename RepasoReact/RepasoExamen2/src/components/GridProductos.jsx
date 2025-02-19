import { useEffect, useState } from "react"
import Fetch from "../utils/Fetch"
import GridCard from "./GridCard"

export default function GridProductos() {
    const [productos, setProductos] = useState([])
    const arrCards = []
    useEffect(async () => {
        const peticion = await Fetch("http://localhost:3000/productos")
        setProductos(peticion)
    }, [])

    productos.map(e => { arrCards.push(<GridCard key={e.id} pelicula={e}></GridCard>) })



    return (
        <>
            <section className="d-flex flex-wrap flex-column text-center">
                {arrCards}
            </section>
        </>
    )
}
