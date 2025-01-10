export default function Parrafo({ children, codigo }) {
    console.log(codigo);

    const tamaño = {
        fontSize: '2rem'
    }

    return (
        <p style={tamaño}> {codigo}: {children} </p>
    );
}