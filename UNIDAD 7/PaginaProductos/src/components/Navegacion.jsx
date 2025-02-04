import React from 'react'
import Buscador from './Buscador'
import { Link } from 'react-router'


export default function Navegacion() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item"><Link to="/" className="nav-link active">Inicio</Link></li>
                            <li className="nav-item"><Link to="/carrusel" className="nav-link active">Ofertas</Link></li>
                        </ul>
                    </div>
                </div>
                <Buscador />
            </nav>
        </>
    )
}
