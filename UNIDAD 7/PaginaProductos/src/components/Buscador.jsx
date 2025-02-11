import React, { useState, useEffect } from "react";
import "./Buscador.css";
import { Link } from "react-router";
import { useNavigate } from "react-router-dom";

export default function Buscador() {
  const [buscador, setBuscador] = useState("");
  const [products, setProducts] = useState([]);
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  // Cargar productos desde la API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  // Filtrar productos según el valor del buscador
  useEffect(() => {
    if (buscador.length > 0) {
      const filteredResults = products.filter((product) =>
        product.title.toLowerCase().includes(buscador.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  }, [buscador, products]);

  return (
    <div className="buscador-container">
      <input
        type="text"
        value={buscador}
        onChange={(e) => {
          setBuscador(e.target.value);
          navigate("?title=" + e.target.value);
        }}
        placeholder="Buscar..."
        className="buscador-input"
      />
      {results.length > 0 && (
        <ul className="buscador-dropdown">
          {results.map((result) => (
            <Link
              key={result.id}
              to={`/detalle/${result.id}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <li className="buscador-item"> {result.title} </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}
