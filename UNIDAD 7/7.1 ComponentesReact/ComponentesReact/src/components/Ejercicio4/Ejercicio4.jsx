import styles from './Ejercicio4.module.css';

export default function Ejercicio4Body() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>Try the product out for free.</div>
            <input className={styles.input} type="email" placeholder="email" />
            <input className={styles.input} type="password" placeholder="password" />
            <button className={styles.button}>Start free trial</button>
        </div>
    );
}
