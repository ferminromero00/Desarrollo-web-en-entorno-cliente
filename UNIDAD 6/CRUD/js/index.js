// index.js

import { eventLogin } from './login.js'; 
import { eventRegistrar } from './registro.js'; 
import { eventBorrar } from './borrar.js';  

const main = () => {
    eventLogin();
    eventRegistrar();
    eventBorrar();
}

document.addEventListener("DOMContentLoaded", main);
