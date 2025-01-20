import productos from '../../data/productos.json'

export default function Boton({ }) {
    function handleClick() {
        let cont = document.getElementById("input").value
        productos.forEach(e => { if (e.price > cont) { console.log("Precio:" + e.price);}});
    }
    return (<><button onClick={handleClick}>Pulsame</button></>);
}