import { useEffect, useState } from "react";
import { Fetch } from "../utils/Fetch";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";

export default function Categorias() {
  const [products, setProducts] = useState([]);
  const arrCategorias = [];
  const navigate = useNavigate();
  const query = useLocation();

  useEffect(() => {
    Fetch("http://localhost:3000/productos").then((data) => {
      setProducts(data);
    });
  }, []);

  for (let e = 0; e < products.length; e++) {
    if (!arrCategorias.includes(products[e].category)) {
      arrCategorias.push(products[e].category);
    }
  }

  const handleCategoryChange = (event) => {
    const categoriaSeleccionado = event.target.value;
    navigate("?category=" + categoriaSeleccionado);
  };

  return (
    <>
      <select name="categorias" id="categorias" onChange={handleCategoryChange}>
        <option value="">Selecciona una categoría</option>
        {arrCategorias.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  );
}
