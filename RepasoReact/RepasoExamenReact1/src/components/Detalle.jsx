import { Fetch } from "../utils/Fetch"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router"

export default function Detalle() {
    const [peli, setPeli] = useState([])
    const parametos = useParams();

    useEffect(() => {
        Fetch('http://localhost:3000/peliculas?id=' + parametos.id).then((data) => {
            setPeli(data)
        })
    }, [])


    return (
        <>
            <section className="d-flex justify-content-center align-content-center">
                <div>
                    <img src="../../data/imagenPar.JPG" alt="" />
                </div>
                <div>
                    {peli.length > 0 ? (
                        <>
                            <p><b>Titulo:</b> {peli[0].title}</p>
                            <p><b>Descripcion: </b> {peli[0].overview}</p>
                            <p><b>Generos: </b> {peli[0].genre_ids}</p>
                        </>
                    ) : (
                        <p>Cargando...</p>
                    )}
                </div>
            </section>
            <Link to={"/"}><button>Volver</button></Link>
        </>
    )
}
