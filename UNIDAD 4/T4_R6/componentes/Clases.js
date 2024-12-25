class BookLists {
    constructor() {
        this.leidos = []
        this.noleidos = []
        this.libros = []
    }

    add(book) {
        this.libros.push(book)
        this.noleidos.push(book)

        const section_nodo = document.getElementById("lista")
        const div_nodo = document.createElement("div")
        div_nodo.className = "div"
        const p_nodo = document.createElement("p")

        book.Read = "No leido"

        p_nodo.innerHTML =
            "Titulo: " + book.Title + "<br>Autor: " + book.Author + "<br>Genero: " + book.Genre
            + "<br>" + book.Read;

        section_nodo.appendChild(div_nodo)
        div_nodo.appendChild(p_nodo)

        document.getElementById("contador_libros").innerHTML = booklist.leidos.length + " de " + booklist.noleidos.length + " libros leidos"

        div_nodo.addEventListener('click', () => {
            this.finishCurrentBook(div_nodo, book);
        });

    }

    finishCurrentBook(div, libro) {
        libro.Read = true;
        libro.Read_date = new Date().toLocaleDateString();
    
        const p_nodo = div.querySelector("p");
        p_nodo.innerHTML = 
            "Titulo: " + libro.Title + "<br>Autor: " + libro.Author + "<br>Genero: " + libro.Genre
            + "<br>Leído el: " + libro.Read_date;
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