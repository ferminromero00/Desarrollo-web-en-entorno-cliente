import { Link } from "react-router-dom";

export default function GridCard({ pelicula, añadirCarrito }) {
  const handleCarrito = () => {
    añadirCarrito(pelicula)
  };

  return (
    <div className="justify-content-center align-items-center mb-5">
      <Link to={"detalles/" + pelicula.id}>
        <img src={pelicula.image} alt="" style={{ height: 200 }} />
      </Link>
      <h1 style={{ fontSize: 20 }}>{pelicula.title}</h1>
      <button onClick={handleCarrito}>Añadir al carrito</button>
    </div>
  );
}