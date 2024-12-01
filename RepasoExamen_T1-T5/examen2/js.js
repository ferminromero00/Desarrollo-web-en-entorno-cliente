class Libro {
    constructor(titulo, autor, año, disponible, prestamos = []) {
        this.titulo = titulo;
        this.autor = autor;
        this.año = año;
        this.disponible = disponible;
        this.prestamos = prestamos;
    }

    registrarPrestamo(usuario) {
        this.prestamos.push({ fecha: new Date().toLocaleDateString(), usuario });
        this.disponible = false;
    }
}

function Usuario(nombre, id) {
    this.nombre = nombre;
    this.id = id;
    this.librosPrestados = [];
    this.historialPrestamos = [];
}

const ArrayLibros = [];
const ArrayUsers = [];

// Registrar un nuevo libro
const libro = () => {
    let tit = document.getElementById("titulo").value;
    let autor = document.getElementById("autor").value;
    let año = document.getElementById("año").value;
    let disponible = document.getElementById("disponible").checked;

    let libronuevo = new Libro(tit, autor, año, disponible);
    ArrayLibros.push(libronuevo);

    console.log("Libro registrado:", libronuevo);
};

// Registrar un nuevo usuario
const usuario = () => {
    let nombre = document.getElementById("nombre").value;
    let id = document.getElementById("id").value;

    let nuevoUsuario = new Usuario(nombre, id);
    ArrayUsers.push(nuevoUsuario);

    console.log("Usuario registrado:", nuevoUsuario);
};

// Mostrar lista de libros
const listaLibros = () => {
    let lista = document.getElementById("listaLibros");
    lista.innerHTML = "";

    ArrayLibros.forEach(libro => {
        let li = document.createElement("li");
        li.textContent = `Título: ${libro.titulo}, Autor: ${libro.autor}, Año: ${libro.año}, Disponible: ${libro.disponible ? "Sí" : "No"}`;
        lista.appendChild(li);
    });
};

// Buscar libros por título o autor
const buscarLibros = (query) => {
    return ArrayLibros.filter(libro =>
        libro.titulo.toLowerCase().includes(query.toLowerCase()) ||
        libro.autor.toLowerCase().includes(query.toLowerCase())
    );
};

const realizarBusqueda = () => {
    const query = document.getElementById('busqueda').value;
    const resultados = buscarLibros(query);

    const listaResultados = document.getElementById('resultadosBusqueda');
    listaResultados.innerHTML = "";

    resultados.forEach(libro => {
        let li = document.createElement("li");
        li.textContent = `Título: ${libro.titulo}, Autor: ${libro.autor}, Año: ${libro.año}`;
        listaResultados.appendChild(li);
    });
};

// Prestar un libro
const prestarLibro = (idUsuario, tituloLibro) => {
    const usuario = ArrayUsers.find(user => user.id == idUsuario);
    const libro = ArrayLibros.find(book => book.titulo === tituloLibro);

    if (!usuario) {
        console.log(`Usuario con ID ${idUsuario} no encontrado.`);
        return;
    }

    if (!libro || !libro.disponible) {
        console.log(`Libro "${tituloLibro}" no disponible para préstamo.`);
        return;
    }

    libro.registrarPrestamo(usuario.nombre);
    usuario.librosPrestados.push(libro.titulo);
    usuario.historialPrestamos.push({ libro: libro.titulo, fecha: new Date().toLocaleDateString() });

    console.log(`Préstamo exitoso: "${tituloLibro}" prestado a ${usuario.nombre}.`);
};

const prestar = () => {
    const idUsuario = document.getElementById('idUsuarioPrestamo').value;
    const tituloLibro = document.getElementById('tituloLibroPrestamo').value;

    prestarLibro(idUsuario, tituloLibro);
};

// Exportar reporte
const exportarReporte = () => {
    const reporte = {
        inventario: ArrayLibros,
        prestamosActivos: ArrayLibros.filter(libro => !libro.disponible),
        usuarios: ArrayUsers
    };

    const blob = new Blob([JSON.stringify(reporte, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const enlace = document.createElement("a");
    enlace.href = url;
    enlace.download = "reporte_biblioteca.json";
    enlace.click();

    URL.revokeObjectURL(url);
};

// Actualizar la lista de libros periódicamente
setInterval(listaLibros, 1000);
