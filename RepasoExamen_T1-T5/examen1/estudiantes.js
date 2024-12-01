class Estudiante {
    constructor(nombre, edad, notas) {
        this.nombre = nombre;
        this.edad = edad;
        this.notas = notas;
    }

    añadirAlumnos(alumno) {
        arrayAlumnos.push(alumno);
        console.table(arrayAlumnos)
    }

    promedio() {
        let sumaNotas = 0;
        let totalNotas = 0;
        for (let i = 0; i < arrayAlumnos.length; i++) {
            for (let j = 0; j < arrayAlumnos[i].notas.length; j++) {
                sumaNotas += arrayAlumnos[i].notas[j];
                totalNotas++;
            }
        }
        let promedio = Math.floor(sumaNotas / totalNotas);
        return promedio;
    }
}

const arrayAlumnos = [];
const grupo = new Estudiante();

const añadirAlum = () => {
    let nombre = document.getElementById("nombre").value;
    let edad = parseInt(document.getElementById("edad").value);
    let notas = document.getElementById("notas").value.split(',').map(nota => parseInt(nota));

    let newAlum = new Estudiante(nombre, edad, notas);
    grupo.añadirAlumnos(newAlum);
}

const promedioNotas = () => {
    let promedioCalculado = grupo.promedio();
    document.getElementById("promedio").innerText = `Promedio: ${promedioCalculado}`;
}

const listaAlums = () => {
    let section = document.getElementById("lista");
    section.innerHTML = "";

    for (let i = 0; i < arrayAlumnos.length; i++) {
        let p_nodo = document.createElement("p");
        let content = "Nombre: " + arrayAlumnos[i].nombre + ", Edad: "
            + arrayAlumnos[i].edad + ", Notas: "
            + arrayAlumnos[i].notas.join(', '); p_nodo.textContent = content;
        section.appendChild(p_nodo);
    }
}




const buscarNombre = () => {
    let nombre = document.getElementById("nombre_lista").value;
    let section = document.getElementById("lista");
    section.innerHTML = ""; // Limpiar la sección antes de agregar nuevos elementos

    let encontrado = false;

    for (let i = 0; i < arrayAlumnos.length; i++) {
        if (nombre === arrayAlumnos[i].nombre) {
            let p_nodo = document.createElement("p");
            let content = "Nombre: " + arrayAlumnos[i].nombre + ", Edad: " + arrayAlumnos[i].edad + ", Notas: " + arrayAlumnos[i].notas.join(', ');
            p_nodo.textContent = content;
            section.appendChild(p_nodo);
            encontrado = true;
        }
    }

    if (!encontrado) {
        let p_nodo = document.createElement("p");
        let content = "No se encontraron alumnos con ese nombre";
        p_nodo.textContent = content;
        section.appendChild(p_nodo);
    }
}
