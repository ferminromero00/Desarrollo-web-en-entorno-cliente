export default function CarritoComp({carrito, setCarrito}) {
    console.log(carrito);
    
    return (
        <>
            <div> {carrito[0].title} </div>
        </>
    )
}
