import { useEffect, useState } from "react";
import { Fetch } from "../utils/Fetch";
import CardMovie from "./CardMovie";
import { Card } from "react-bootstrap";

export default function GridMovies() {
  const [pelis, setPelis] = useState([]);

  useEffect(() => {
    Fetch("http://localhost:3000/peliculas").then((data) => {
      setPelis(data);
    });
  }, []);

  const arrPelis = pelis.map((e) => {
    return <CardMovie key={e.id} pelicula={e}></CardMovie>;
  });

  return (
    <>
      <section className="d-flex flex-wrap gap-5 justify-content-center mt-5">
        {arrPelis}
      </section>
    </>
  );
}
