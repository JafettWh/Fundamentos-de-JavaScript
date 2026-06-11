// Seleccionar el botón
let boton = document.querySelector("#btn"); // Selecciona el elemento con el id "btn" y lo almacena en la variable "boton"

// Evento del click

boton.addEventListener("click", function() { // Agrega un evento de click al botón, que ejecutará la función anónima cuando se haga clic en el botón
    alert("click detectado"); // Muestra una alerta con el mensaje "click detectado" cuando se haga clic en el botón
});

// Evento del mouseover

boton.addEventListener("mouseover", function() { // Agrega un evento de mouseover al botón, que ejecutará la función anónima cuando el mouse pase sobre el botón
    console.log("Mouse encima"); // Muestra un mensaje en la consola indicando que el mouse está sobre el botón
});

// Seleccionar el input
let input = document.querySelector("#nombre"); // Selecciona el elemento con el id "nombre" y lo almacena en la variable "input"

// Evento del input

input.addEventListener("input", function() { // Agrega un evento de input al campo de texto, que ejecutará la función anónima cada vez que el usuario escriba algo en el campo
    console.log(input.value); // Muestra el valor actual del campo de texto en la consola cada vez que el usuario escriba algo
});
