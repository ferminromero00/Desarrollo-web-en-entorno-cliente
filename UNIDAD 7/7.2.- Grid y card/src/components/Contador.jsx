import { useState } from "react"

export default function Contador() {
    const [count, setSumar] = useState(0)
    const [estado, setEstado] = useState('En proceso..')


    function HandleContador() {
        setSumar(count => count + 1);
        setSumar(count => count + 1);
        setSumar(count => count + 1);
    }

    function HandleEstado() { setEstado('Pedido finalizado') }


    return (
        <>
            <button>{estado}</button>
            <button onClick={HandleContador}>Contador {count} </button><br /><br />
            <button onClick={HandleEstado}>Finaliza pedido</button>
        </>
    )
}
