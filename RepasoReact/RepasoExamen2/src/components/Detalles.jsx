import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Fetch from "../utils/Fetch"

export default function Detalles() {
    const idProd = useParams()
    const [detalle, setDetalle] = useState([])

    useEffect(() => { Fetch("http://localhost:3000/productos/" + idProd.id).then((data) => { setDetalle(data) }) }, [])

    return (
        <>
            <div className="justify-content-center align-items-center mb-5">
                <img src={detalle.image} alt="" style={{ height: 200 }} />
                <h1 style={{ fontSize: 20 }}>{detalle.title}</h1>
            </div>
        </>
    )
}
