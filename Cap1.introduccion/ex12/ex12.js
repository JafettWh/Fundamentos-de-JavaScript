// Seleccionar elementos con querySelector
let titulo = document.querySelector("#titulo"); // Selecciona el primer elemento <h1> del documento y lo almacena en la variable "titulo"
console.log(titulo); // Muestra el elemento seleccionado "titulo" en la consola

let parrafos = document.querySelectorAll(".parrafo"); // Selecciona todos los elementos <p> del documento y los almacena en la variable "parrafos" como una NodeList
console.log(parrafos); // Muestra la NodeList de elementos <p> seleccionados en la consola

let subtitulo = document.querySelector(".subtitulo"); // Selecciona el primer elemento con el id "subtitulo" y lo almacena en la variable "subtitulo"
console.log(subtitulo); // Muestra el elemento seleccionado "subtitulo" en la consola   

let elementos = document.querySelectorAll("li"); // Selecciona todos los elementos <li> del documento y los almacena en la variable "elementos" como una NodeList
console.log(elementos); // Muestra la NodeList de elementos <li> seleccionados en la consola