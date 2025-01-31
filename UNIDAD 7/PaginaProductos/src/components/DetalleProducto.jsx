import { useParams } from "react-router"
import { Fetch } from "../utils/Fetch";
import { useEffect, useState } from "react";
import Navegacion from "./Navegacion";

export default function DetalleProducto() {
  let { idProducto } = useParams();
  const [producto, setProducts] = useState([]);

  useEffect(() => { Fetch('https://fakestoreapi.com/products/' + idProducto).then(data => setProducts(data)) }, []);

  if(!producto) {
    return null
  }

  return (
    <>
    <Navegacion></Navegacion>
      <div className="container mt-5">
        <div className="card">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={producto.image} className="img-fluid" alt={producto.title} />
            </div>
            <div className="col-md-8">
              <div className="card-body align-items-center">
                <h5 className="card-title">{producto.title}</h5>
                <p className="card-text">Descripcion: {producto.description}</p>
                <p className="card-text">Categoria: {producto.category}</p>
                <p className="card-text"><strong>Precio: {producto.price}€</strong></p>
                <p className="card-text">
                  Rating: {producto?.rating?.rate} ⭐ <br />({producto?.rating?.count} valoraciones)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
