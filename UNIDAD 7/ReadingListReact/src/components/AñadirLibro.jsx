import React from "react";

export default function AñadirLibro({ title, author, genre }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Titulo: {title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Autor: {author}</h6>
        <p className="card-text">Genero: {genre}</p>
      </div>
    </div>
  );
}
