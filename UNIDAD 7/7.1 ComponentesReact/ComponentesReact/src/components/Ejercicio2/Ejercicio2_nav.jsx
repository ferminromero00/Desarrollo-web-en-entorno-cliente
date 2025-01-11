import style from "./Ejercicio2_nav.module.css";

export default function Ejercicio2_nav() {
    return (
        <>
            <nav className={style.lista}>
                <ul>
                    <li>404ERRORS</li>
                </ul>
                <ul>
                    <li>Home</li>
                </ul>
                <ul>
                    <li>Products</li>
                </ul>
                <ul>
                    <li>About Us</li>
                </ul>
                <ul>
                    <li>Pricing</li>
                </ul>
                <ul>
                    <li>Contact Us</li>
                </ul>
                <ul className={style.Sign}>
                    <li>Sign In</li>
                </ul>
                <ul className={style.SignUp}>
                    <li>Sign Up</li>
                </ul>
            </nav>
        </>
    )
}