import './App.css'
import Producto from './components/Producto'
import ProductList from './components/ProductList'
import Filtro from './components/Filtro';
import Contador from './components/Contador';
import Tareas from './components/Tareas';




function App() {
  return (
    <>
      {/* <Producto producto={obj}></Producto> */}
      <Tareas></Tareas>
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