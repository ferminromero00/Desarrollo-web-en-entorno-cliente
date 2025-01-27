import React, { useState } from "react";

export default function RecogerDatos({ onAddLibro }) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const nuevoLibro = { title, author, genre };

        onAddLibro(nuevoLibro);

        setTitle("");
        setAuthor("");
        setGenre("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="author" className="form-label">Author</label>
                <input
                    type="text"
                    className="form-control"
                    id="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="genre" className="form-label">Genre</label>
                <input
                    type="text"
                    className="form-control"
                    id="genre"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary">Add Book</button>
        </form>
    );
}
