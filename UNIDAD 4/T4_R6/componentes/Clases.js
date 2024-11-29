class BookLists {
    constructor(leidos, noleidos, libros) {
        this.leidos = []
        this.noleidos = []
        this.libros = []
    }

    add(book) {
        this.libros.push(book)
        this.noleidos.push(book)

        const section_nodo = document.getElementById("lista")
        const div_nodo = document.createElement("div")
        const p_nodo = document.createElement("p")

        section_nodo.appendChild(div_nodo)
        div_nodo.appendChild(p_nodo)


        const p_texto = document.createTextNode("Title: " + book)

    }



    finishCurrentBook() {

    }

}

const booklist = new BookLists([], [], []);

class Book {
    constructor(Title, Genre, Author, Read, Read_date) {
        this.Title = Title
        this.Genre = Genre
        this.Author = Author
        this.Read = Read
        this.Read_date = Read_date
    }
}


const recogerDatosLibro = () => {
    let titulo = document.getElementById("Title").value;
    let autor = document.getElementById("Author").value;
    let genero = document.getElementById("Genre").value;

    let newBook = new Book(titulo, genero, autor, false, null);
    booklist.add(newBook)

}

console.log(booklist);
booklist.verlista


















class Empleado {
    constructor(codigo, nombre, telefono) {
        this.codigo = codigo
        this.nombre = nombre
        this.telefono = telefono
    }
    mostrarEmpleado() {
        console.log("Empleado: " + this.nombre + "---Telefono: " + this.telefono
            + "---Codigo: " + this.codigo
        )
    }
}

