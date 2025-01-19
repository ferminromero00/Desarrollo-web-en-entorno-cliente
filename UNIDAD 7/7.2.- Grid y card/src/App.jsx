import './App.css'
import Producto from './components/Producto'
import ProductList from './components/ProductList'

function App() {
  let obj = { title: "Manzana", price: "32€", description: "comida" }

  return (
    <>
      {/* <Producto producto={obj}></Producto> */}
      <div className='todo'>
        <ProductList></ProductList>
      </div>

    </>
  )
}

export default App