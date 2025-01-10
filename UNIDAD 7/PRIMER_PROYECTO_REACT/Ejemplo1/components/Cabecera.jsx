import styles from "./Cabecera.module.css";

export default function Cabecera({ children }) {
    return (
        <h1 className={styles}> {children} </h1>
    );
}