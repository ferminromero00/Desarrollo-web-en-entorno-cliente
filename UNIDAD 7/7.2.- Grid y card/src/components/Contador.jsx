import { useState } from "react"

export default function Contador() {
    const [count, setCount] = useState(0)
    function HandleContador() {setCount(count + 1)}
    return (<button onClick={HandleContador}>Contador {count}</button>)
}
