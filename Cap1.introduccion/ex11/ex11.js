// DOM - Document Object Model
let titulo = document.getElementById("titulo"); // Selecciona el elemento con el id "titulo"
console.log(titulo); // Muestra el elemento seleccionado en la consola

// Modificación del contenido del elemento
titulo.textContent = "Nuevo titulo"; // Cambia el texto del elemento "titulo" a "Nuevo titulo"

// Modificación del contenido HTML del elemento
titulo.innerHTML = "<span>Titulo modificado</span>"; // Cambia el contenido HTML del elemento "titulo" a un span con el texto "Titulo modificado"