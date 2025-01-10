import Cabecera from "../components/Cabecera";
import Parrafo from "../components/Parrafo";

export default function MyApp() {
    return (
        <div>
            <Cabecera>Ejemplos react</Cabecera>

            <Parrafo codigo='1'>Articulo 1</Parrafo>
            <Parrafo codigo='2'>Articulo 2</Parrafo>
        </div>
    );
}