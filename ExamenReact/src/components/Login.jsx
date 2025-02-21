import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login() {
    const [user, setUser] = useState([])
    const [pass, SetPass] = useState([])
    const [error, setError] = useState([])
    const navigate = useNavigate()

    const handleUsuario = (user) => { setUser(user.target.value) }
    const handlePass = (pass) => { SetPass(pass.target.value); }

    const Login = async (e) => {
        e.preventDefault();
        if (user.length == 0 || pass.length == 0) {
            setError("No dejes los campos vacios")
        } else {
            const peticion = await axios.get("http://localhost:3000/usuarios?username=" + user + "&&password=" + pass)
            if (peticion.data.length > 0) {
                navigate("/productos")
            } else {
                setError("Credenciales incorrectas")
            }
        }
    }


    return (
        <>
            <section>
                <form action="" onSubmit={Login}>
                    <label htmlFor="">Usuario</label>
                    <input type="text" onChange={handleUsuario} />
                    <br />
                    <label htmlFor="">Contraseña</label>
                    <input type="password" onChange={handlePass} />
                    <br />
                    <button>Acceder</button>
                </form>
                <p>{error}</p>
            </section>
        </>
    )
}
