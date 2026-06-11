function saludar() {
    console.log("Hola");
}

saludar(); // Llamada a la función "saludar" para ejecutar su código y mostrar "¡Hola!" en la consola

// Saludar con parametros

function saludo(nombre) {
    console.log(`Hola ${nombre}`);
}

saludo("Carlos"); // Llamada a la función "saludo" con el argumento "Carlos", lo que mostrará "Hola Carlos" en la consola

// Función con retorno de valor

function sumar(a, b) {
    return a + b; // La función devuelve la suma de a y b
}

let resultado = sumar(5, 8); // Llamada a la función "sumar" con los argumentos 5 y 8, y se almacena el resultado en la variable "resultado"
console.log(resultado); // Muestra el valor de "resultado" en la consola, que es 13