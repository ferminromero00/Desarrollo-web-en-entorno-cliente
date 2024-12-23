// index.js

import { eventLogin } from './login.js';  // Importa eventLogin desde login.js
import { eventRegistrar } from './registro.js';  // Importa eventRegistrar desde registro.js
import { eventBorrar } from './borrar.js';  // Importa eventBorrar desde borrar.js

const main = () => {
    eventLogin();
    eventRegistrar();
    eventBorrar();
}

document.addEventListener("DOMContentLoaded", main);
