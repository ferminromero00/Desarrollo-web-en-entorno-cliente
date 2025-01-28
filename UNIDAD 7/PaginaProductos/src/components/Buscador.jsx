import React, { useState, useEffect } from 'react';
import './Buscador.css';

export default function Buscador() {
    const [query, setQuery] = useState('');
    const [products, setProducts] = useState([]);
    const [results, setResults] = useState([]);

    useEffect(() => { fetch('https://fakestoreapi.com/products').then(response => response.json()).then(data => setProducts(data)) }, []);

    useEffect(() => {
        if (query.length > 0) {
            const filteredResults = products.filter(product => product.title.toLowerCase().includes(query.toLowerCase()));
            setResults(filteredResults);
        } else { setResults([]); }
    }, [query, products]);

    return (
        <div className="buscador-container">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar..."
                className="buscador-input"
            />
            {results.length > 0 && (
                <ul className="buscador-dropdown">
                    {results.map(result => (<li key={result.id} className="buscador-item"> {result.title} </li>))}
                </ul>
            )}
        </div>
    );
}