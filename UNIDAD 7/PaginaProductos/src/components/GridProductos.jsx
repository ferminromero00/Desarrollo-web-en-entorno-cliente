import React, { useEffect, useState } from "react";
import { Fetch } from "../utils/Fetch";
import { Link } from "react-router";
import { FaSpinner } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router";
import { useDebounce } from "./useDebounce";

export default function GridProductos({ setCarrito, carrito }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const query = useLocation();

  const delay = useDebounce(query, 500);

  useEffect(() => {
    const buscador = new URLSearchParams(query.search);
    const title = buscador.get("title") || "";
    const category = buscador.get("category") || "";

    Fetch("http://localhost:3000/productos").then((data) => {
      const ProductosFiltrados = data.filter((product) => {
        const titulo = product.title.toLowerCase().includes(title.toLowerCase());
        const categoria = category ? product.category === category : true;
        return titulo && categoria;
      });
      setProducts(ProductosFiltrados);
      setLoading(false);
      console.log(ProductosFiltrados);
    });
  }, [delay]);

  const añadirCarrito = (product) => {
    setCarrito([...carrito, product]);
  };

  return (
    <>
      <div className="container">
        {loading ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100vh" }}
          >
            <FaSpinner className="text-primary spinner" size={50} />
          </div>
        ) : (
          <div className="row">
            {products.map((e) => (
              <div className="col-md-6 mb-4 mt-3" key={e.id}>
                <Link
                  to={`/detalle/${e.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="card h-100 border border-5">
                    <div className="d-flex justify-content-center align-items-center">
                      <img
                        src={e.image}
                        className="card-img-top"
                        alt={e.title}
                        style={{
                          height: "300px",
                          width: "300px",
                          marginTop: "1rem",
                        }}
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{e.title}</h5>
                      <p className="card-text">{e.description}</p>
                      <p className="card-text">
                        <strong>Precio: {e.price}€</strong>
                      </p>
                    </div>
                  </div>
                </Link>
                <div className="text-center">
                  <button className="btn border border-2 me-4" onClick={() => añadirCarrito(e)}>Añadir</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Estilos para la animación */}
      <style>
        {`
          .spinner {
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </>
  );
}