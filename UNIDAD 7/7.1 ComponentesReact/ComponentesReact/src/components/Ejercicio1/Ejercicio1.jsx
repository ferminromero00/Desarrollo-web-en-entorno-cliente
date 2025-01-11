import style from "./Ejercicio1.module.css";

export default function Ejercicio1() {
    return (
        <>
            <div className={style.ejercicio1Div}>
                <input type="text" placeholder="username" />
                <li>1 lowercase character</li>
                <li>1 uppercase character</li>
                <li>6 minimum characters</li>
            </div>
        </>
    );
}