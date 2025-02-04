import React, { useState, useEffect } from 'react';
import './Buscador.css';
import { Link } from 'react-router';


export default function Buscador() {
    const [buscador, setBuscar] = useState('');
    const [products, setProducts] = useState([]);
    const [results, setResults] = useState([]);

    useEffect(() => { fetch('https://fakestoreapi.com/products').then(response => response.json()).then(data => setProducts(data)) }, []);

    useEffect(() => {
        if (buscador.length > 0) {
            const filteredResults = products.filter(product => product.title.toLowerCase().includes(buscador.toLowerCase()));
            setResults(filteredResults);
        } else {
            setResults([]);
        }
    }, [buscador, products]);

    return (
        <div className="buscador-container">
            <input
                type="text"
                value={buscador}
                onChange={(e) => setBuscar(e.target.value)}
                placeholder="Buscar..."
                className="buscador-input"
            />
            {results.length > 0 && (
                <ul className="buscador-dropdown">
                    {results.map(result => (
                        <Link to={`/detalle/${result.id}`} style={{ textDecoration: 'none' }}>
                            <li key={result.id} className="buscador-item" onClick={() => console.log(result.id)}> {result.title} </li>
                        </Link>
                    ))}
                </ul>
            )}
        </div>
    );
} 