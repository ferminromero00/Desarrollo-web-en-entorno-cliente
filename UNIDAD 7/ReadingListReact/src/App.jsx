import React, { useState } from "react";
import AñadirLibro from "./components/AñadirLibro";
import RecogerDatos from "./components/RecogerDatos";

function App() {
  const [libros, setLibros] = useState([]);

  const añadirLibro = (nuevoLibro) => { setLibros([...libros, nuevoLibro]); };

  return (
    <>
      <section className="container mt-5">
        <RecogerDatos onAddLibro={añadirLibro} />
      </section>

      <section className="container mt-5">
        <h1>My Reading List</h1>
        <div className="container bg-secondary" id="readingList" style={{ color: "white" }}>
          {libros.map((libro) => (<AñadirLibro title={libro.title} author={libro.author} genre={libro.genre} />))}
        </div>
      </section>
    </>
  );
}

export default App;
