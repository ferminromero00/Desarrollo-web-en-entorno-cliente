import React, { useEffect, useState } from 'react'
import datos from '../../data/productos.json';
import Producto from "./Producto"

export default function Carrusel() {
    const [indice, setIndice] = useState(0)
    document.title = indice;
    localStorage.setItem("indice", indice)

    useEffect(() => {
        document.title = indice;
        localStorage.setItem("indice", indice)
        console.log("Ejecutando useEffect");

        fetch(`https://fakestoreapi.com/products/${indice}`)
            .then(res => res.json())
            .then(json => console.log(json))
    }, [indice])

    return (
        <>
            {console.log("Ejecutando componente")}
            <Producto producto={datos[indice]}></Producto>
            <p> {indice} </p><br />
            <button onClick={() => { setIndice(indice + 1); }}>{">"}</button>
            {indice >= 1 && <button onClick={() => { setIndice(indice - 1); }}>{"<"}</button>}
        </>
    )
}
