import './App.css'
import Producto from './components/Producto'
import ProductList from './components/ProductList'
import Filtro from './components/Filtro';
import Contador from './components/Contador';



function App() {
  let obj = { title: "Manzana", price: "32€", description: "comida" }

  return (
    <>
      {/* <Producto producto={obj}></Producto> */}
      <Filtro></Filtro>
      <br /><br />
      <Contador></Contador>


      <div className='todo'>
        <ProductList></ProductList>
      </div>

    </>
  )
}

export default App