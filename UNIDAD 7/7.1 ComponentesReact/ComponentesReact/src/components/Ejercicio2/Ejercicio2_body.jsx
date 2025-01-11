import style from "./Ejercicio2_body.module.css";

export default function Ejercicio3_body() {
    return (
        <div className={style.container}>
            <div className={style.textSection}>
                <h1 className={style.title}>404</h1>
                <h2 className={style.subtitle}>OOOps! Page Not Found</h2>
                <p className={style.description}>
                    Sorry about that! Please visit our homepage to get where you need to go.
                </p>
                <button className={style.button}>Back to homepage</button>
            </div>
            <div className={style.imageSection}>
                <img
                    src="/path-to-your-image.png"
                    alt="Astronauts"
                    className={style.image}
                />
            </div>
        </div>
    );
}
