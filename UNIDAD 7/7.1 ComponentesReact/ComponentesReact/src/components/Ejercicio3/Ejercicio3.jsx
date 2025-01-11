import styles from './Ejercicio3.module.css';

export default function Ejercicio3Body() {
    return (
        <div className={styles.carta}>
            <div className={styles.icono}></div>
            <div className={styles.title}>Title</div>
            <div className={styles.subtitle}>Subtitle</div>
            <div className={styles.feature}>Feature 1</div>
            <div className={styles.feature}>Feature 2</div>
            <div className={styles.feature}>Feature 3</div>
            <a className={styles.button} href="#">Start Now</a>
        </div>
    );
}
