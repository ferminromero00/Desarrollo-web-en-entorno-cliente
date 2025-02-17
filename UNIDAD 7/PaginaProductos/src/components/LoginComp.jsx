import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function LoginComp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/usuarios/login', { username, password });
      navigate('/');
    } catch (err) {
      setError('Usuario o contraseña incorrectos');
    }
  };

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:3000/usuarios', { username, password });
      setMessage('Usuario registrado correctamente');
      setError('');
    } catch (err) {
      setError('Error al registrar usuario');
    }
  };

  const handleDeleteUser = async () => {
    try {
      await axios.delete(`http://localhost:3000/usuarios?username=${username}&&password=${password}`);
      setMessage('Usuario eliminado correctamente');
      setError('');
    } catch (err) {
      setError('Error al eliminar usuario');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <div className="card p-4 w-25">
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Usuario:</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña:</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary text-center w-100">Iniciar sesión</button>
        </form>
        <button className="btn btn-success mt-2" onClick={handleRegister}>Registrarse</button>
        <button className="btn btn-danger mt-2" onClick={handleDeleteUser}>Eliminar Usuario</button>
        {error && <p className="text-danger mt-3">{error}</p>}
        {message && <p className="text-success mt-3">{message}</p>}
      </div>
    </div>
  );
}