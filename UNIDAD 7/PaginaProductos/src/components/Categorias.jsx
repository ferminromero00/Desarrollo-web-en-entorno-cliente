import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import { Fetch } from "../utils/Fetch";

export default function Categorias() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate(); // Hook para navegar

  useEffect(() => {
    Fetch("https://fakestoreapi.com/products")
      .then((data) => {
        const uniqueCategories = [...new Set(data.map((product) => product.category))];
        setCategories(uniqueCategories);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  // Manejar el cambio de categoría y redirigir
  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    if (selectedCategory) {
      navigate(`/categoria/${selectedCategory}`); // Redirigir a la nueva URL
    }
  };

  return (
    <>
      <select name="categorias" id="categorias" onChange={handleCategoryChange}>
        <option value="">Selecciona una categoría</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  );
}
