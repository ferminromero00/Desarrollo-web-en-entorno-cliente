import React, { useEffect, useState } from "react";
import { Fetch } from "../utils/Fetch";
import { Link, } from "react-router";
import { FaSpinner } from "react-icons/fa";

export default function GridProductos() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carga


  useEffect(() => {
    Fetch("http://localhost:3000/productos").then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

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
