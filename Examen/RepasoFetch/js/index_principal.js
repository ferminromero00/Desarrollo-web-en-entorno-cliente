import { EventDibujar } from "./components/dibujar.js";
import { EventFiltrar } from "./components/filtrar.js";
import { EventCategorias } from "./components/Generos.js";

const main = () => { EventDibujar(); EventFiltrar(); EventCategorias() }

document.addEventListener("DOMContentLoaded", main);