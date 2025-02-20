import { useEffect, useState } from "react"
import Fetch from "../utils/Fetch"
import { Navigate, useNavigate } from "react-router-dom"

export default function Categorias() {
    const [categorias, setCategorias] = useState([])
    const añadirCategorias = (categoria) => { setCategorias([...categorias, categoria]) }
    const navigate = useNavigate()

    useEffect(() => {
        Fetch("http://localhost:3000/productos").then((data) => {
            data.forEach(e => {
                if (!categorias.includes(e.category)) { añadirCategorias(e.category) }
            })
        })
    })

    const handleCategoria = (e) => {
        navigate("?category=" + e.target.value)
    }

    return (
        <>
            <select name="" id="" onChange={handleCategoria}>
                {categorias.map(e => {
                    return <option key={e} value={e}>{e}</option>
                })}
            </select>
        </>
    )
}
