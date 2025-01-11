import styles from './Ejercicio5.module.css';

export default function Ejercicio5Body() {
    return (
        <div className={styles.navbar}>
            <div className={styles.brand}>TRADE</div>
            <div className={styles.links}>
                <a className={styles.link} href="#">Link 1</a>
                <a className={styles.link} href="#">Link 2</a>
                <a className={styles.link} href="#">Link 3</a>
                <a className={styles.link} href="#">Link 4</a>
            </div>
            <button className={styles.button}>Sign Up</button>
        </div>
    );
}
