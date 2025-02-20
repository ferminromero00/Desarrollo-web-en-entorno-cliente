import { useEffect, useState } from "react";
import Fetch from "../utils/Fetch";
import GridCard from "./GridCard";

export default function GridProductos({ buscar, carrito, añadirCarrito }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    Fetch("http://localhost:3000/productos").then((data) => {
      if (!buscar.length == 0) {
        const filtrados = data.filter((product) => {
          return product.title.toLowerCase().includes(buscar.toLowerCase());
        });
        setProductos(filtrados);
      } else {
        setProductos(data);
      }
    });
  }, [buscar]);

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