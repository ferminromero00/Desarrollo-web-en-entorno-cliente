import { useEffect, useState } from "react";
import Fetch from "../utils/Fetch";
import GridCard from "./GridCard";
import { useLocation } from "react-router-dom";

export default function GridProductos({ buscar, carrito, añadirCarrito }) {
  const [productos, setProductos] = useState([]);
  const query = useLocation()

  useEffect(() => {
    const params = new URLSearchParams(query.search);
    const category = params.get("category");

    Fetch("http://localhost:3000/productos").then((data) => {
      if (!buscar.length == 0) {
        const filtrados = data.filter((product) => { return product.title.toLowerCase().includes(buscar.toLowerCase()); });
        const filtrados2 = filtrados.filter((product) => product.category === category);
        setProductos(filtrados2);
      } else {
        setProductos(data);
      }
    });
  }, [buscar]);

  useEffect(() => {
    const params = new URLSearchParams(query.search);
    const category = params.get("category");

    Fetch("http://localhost:3000/productos").then((data) => {
      if (category) {
        const filtrados = data.filter((product) => product.category === category);
        setProductos(filtrados);
      } else {
        setProductos(data)
      }
    });

  }, [query]);

  const arrCards = productos.map((e) => {
    return (
      <GridCard
        key={e.id}
        pelicula={e}
        carrito={carrito}
        añadirCarrito={añadirCarrito}
      />
    );
  });

  return (
    <>
      <section className="d-flex flex-wrap flex-column text-center" style={{ position: "absolute" }}>
        {arrCards}
      </section>
    </>
  );
}