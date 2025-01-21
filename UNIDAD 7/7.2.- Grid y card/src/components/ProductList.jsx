import productos from '../../data/productos.json'
import Producto from './Producto';

export default function ProductList() {
    const listaProductos = [];

    // Funciona pero no recomendable
    productos.forEach(e => { listaProductos.push(<Producto producto={e}></Producto>) })

    //Recomendado para React  
    const arrayProductos = productos.map(e => { return <Producto key={e.id} producto={e} /> });
    
    return (<>{arrayProductos}</>)
}


