import style from './Producto.module.css';

export default function Producto({ producto }) {
    return (
        <>
            <div className={style.caja}>
                <h1> {producto.title} </h1>
                <p> {producto.description} </p>
                <p> {producto.price} </p>
                <img src={producto.image} />
            </div>
        </>
    );
}