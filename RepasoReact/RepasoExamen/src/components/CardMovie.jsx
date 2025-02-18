import { Link } from "react-router";

export default function CardMovie({ pelicula }) {

  return (
    <>
      <div>
        <Link style={{ textDecoration: "none", color: "black" }} to={'/detalle/' + pelicula.id}>
          <img src="../../data/imagenPar.JPG" alt="" />
          <p>{pelicula.title}</p>
        </Link>
      </div>
    </>
  );
}
