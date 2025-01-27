import React, { useEffect, useState } from 'react'
import Producto from "./Producto"

export default function Carrusel() {
    const [indice, setIndice] = useState(1)
    const [producto, setProducto] = useState({})

    useEffect(() => {
        async function fetchData() {
            document.title = indice;
            localStorage.setItem("indice", indice)
            console.log("Ejecutando useEffect");

            let respuesta = await fetch(`https://fakestoreapi.com/products/${indice}`);
            let data = await respuesta.json();
            setProducto(data)
        }
        fetchData()
    }, [indice])


    return (
        <>
            {console.log(producto)}
            {console.log("Ejecutando componente")}
            <Producto producto={producto}></Producto>
            <p> {indice} </p><br />
            <button onClick={() => { setIndice(indice + 1); }}>{">"}</button>
            {indice >= 2 && <button onClick={() => { setIndice(indice - 1); }}>{"<"}</button>}
        </>
    )
}
