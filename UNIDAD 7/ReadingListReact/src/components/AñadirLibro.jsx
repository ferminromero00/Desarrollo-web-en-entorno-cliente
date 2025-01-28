import React from "react";

export default function AñadirLibro({ title, author, genre }) {

  const LeerLibro = (event) => {
    let fecha = new Date();
    const leerElement = event.currentTarget.querySelector("#leer");
    leerElement.innerHTML = "Leido " + fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear();
  }

  return (
    <div className="card mb-3">
      <div onClick={LeerLibro} className="card-body">
        <h5 className="card-title">Titulo: {title}</h5><br />
        <h6 className="card-text">Autor: {author}</h6>
        <p className="card-text">Genero: {genre}</p><br />
        <p id="leer">No leido</p>
      </div>
    </div>
  );
}