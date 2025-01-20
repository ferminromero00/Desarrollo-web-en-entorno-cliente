import style from './Producto.module.css';

export default function Producto({ producto }) {
    return (
        <>
            <div className={style.caja}>
                <h1> {producto.title} </h1>
                <p> {producto.description} </p>
                <p> {producto.price} </p>
                <div className={style.cajaImg}><img src={producto.image} /></div>
            </div>
        </>
    );
}