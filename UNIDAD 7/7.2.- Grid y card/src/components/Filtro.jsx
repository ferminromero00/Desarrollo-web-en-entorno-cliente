import productos from '../../data/productos.json'


export default function Filtro() {
    let precioe = "";
    function handleFiltrar(precio) {
        const filtroproductos = productos.filter((p) => p.price > precio)
        console.log(filtroproductos)
    }

    return (
        <>
            <input id="inputPrecio" type="text" name="Filtrar" placeholder="Filtrado de precio" onChange={(e) => precioe = e.target.value} />
            <button onClick={() => handleFiltrar(precioe)}>Filtrar</button>
        </>
    )
}
