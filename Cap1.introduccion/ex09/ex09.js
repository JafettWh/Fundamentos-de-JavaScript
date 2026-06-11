let frutas = [
    "manzana",
    "pera",
    "uva"
]; // Declaración de un array de frutas

console.log(frutas); // Muestra el contenido del array "frutas" en la consola

// Acceso a elementos del array
console.log(frutas[0]); // Muestra el primer elemento del array: "manzana"
console.log(frutas[1]); // Muestra el segundo elemento del array: "pera"
console.log(frutas[2]); // Muestra el tercer elemento del array: "uva"

// Métodos para agregar o eliminar elementos del array

frutas.push("mango"); // Agrega "mango" al final del array
console.log(frutas); // Muestra el contenido actualizado del array: ["manzana", "pera", "uva", "mango"]

frutas.pop(); // Elimina el último elemento del array
console.log(frutas); // Muestra el contenido actualizado del array: ["manzana", "pera", "uva"]
