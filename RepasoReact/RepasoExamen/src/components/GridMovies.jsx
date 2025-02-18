import { useEffect, useState } from "react";
import { Fetch } from "../utils/Fetch";
import CardMovie from "./CardMovie";
import NMovies from "./NMovies";

export default function GridMovies({ buscador }) {
  const [pelis, setPelis] = useState([]);

  useEffect(() => {
    Fetch("http://localhost:3000/peliculas").then((data) => {
      if (buscador.length > 0) {
        const filtrados = data.filter((peli) => {
          return peli.title.toLowerCase().includes(buscador.toLowerCase());
        });
        setPelis(filtrados);
      } else {
        setPelis(data);
      }
    });
  }, [buscador]);

  const arrPelis = pelis.map((e) => {
    return <CardMovie key={e.id} pelicula={e}></CardMovie>;
  });

  return (
    <>
      <NMovies numPelis={arrPelis.length}></NMovies>
      <section className="d-flex flex-wrap gap-5 justify-content-center mt-5">
        {arrPelis}
      </section>
    </>
  );
}