import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function LoginComp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const Login = async (e) => {
    e.preventDefault();

    if (username !== "" && password !== "") {
      const response = await axios.get(`http://localhost:3000/usuarios?username=${username}&&password=${password}`);
      if (response.data.length > 0) {
        navigate('/');
      } else {
        setError('Usuario o contraseña incorrectos');
      }
    } else {
      setError("No dejes los campos vacios")
    }
  };

  const Registro = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/usuarios?username=${username}`);
      if (response.data.length > 0) {
        setError('El usuario ya existe');
      } else {
        await axios.post('http://localhost:3000/usuarios', { username, password });
        setError('');
      }
    } catch (err) {
      setError('Error al registrar usuario');
    }
  };

  const handleDeleteUser = async () => {
    try {
      const authResponse = await axios.get(`http://localhost:3000/usuarios?username=${username}&&password=${password}`);
      if (authResponse.data.length > 0) {
        await axios.delete(`http://localhost:3000/usuarios/${username}`);
        setError('');
      } else {
        setError('Usuario o contraseña incorrectos');
      }
    } catch (err) {
      setError('Error al eliminar usuario. Verifique sus credenciales.');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <div className="card p-4 w-25">
        <form onSubmit={Login}>
          <div className="mb-3">
            <label className="form-label">Usuario:</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña:</label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary text-center w-100">Iniciar sesión</button>
        </form>
        <button className="btn btn-success mt-2" onClick={Registro}>Registrarse</button>
        <button className="btn btn-danger mt-2" onClick={handleDeleteUser}>Eliminar Usuario</button>
        {error && <p className="text-danger mt-3 text-center">{error}</p>}
      </div>
    </div>
  );
}