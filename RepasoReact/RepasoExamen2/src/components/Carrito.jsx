
export default function Carrito({carrito}) {
  console.log(carrito);
  
  return (
    <>
    <h1>Carrito:</h1>
    {carrito.map((producto, index)=>{
      return <p style={{fontSize: 15}} key={index}>{producto.title}</p>
    })}
    </>
  )
}