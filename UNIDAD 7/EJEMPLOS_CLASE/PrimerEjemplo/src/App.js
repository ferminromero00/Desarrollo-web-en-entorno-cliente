import Parrafo from '../componentes/Parrafo';
import Parrafo2 from '../componentes/Parrafo2';
import Parrafo3 from '../componentes/Parrafo3';
import MyButton from '../componentes/Boton';

export default function MyApp() {
    return (
        <div>
            <h1 className="titulo">Bienvenido a mi aplicación</h1>
            <MyButton />
            <Parrafo contenido="Texto de la etiqueta" />
            <Parrafo2 contenido="Texto de la etiqueta"> Texto del parrafo </Parrafo2>
            <Parrafo3 contenido="Texto de la etiqueta"></Parrafo3>
        </div>
    );
}