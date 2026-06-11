// While 

let contador = 1; // Inicialización del contador

while (contador <= 5) { // Condición del bucle
    console.log(contador); // Muestra el valor actual del contador en la consola
    contador++; // Incremento del contador
}

// For
for (let i = 1; i <= 10; i++) { // Inicialización, condición y incremento en un solo lugar
    console.log(i); // Muestra el valor actual de i en la consola
}

// For of

let frutas = [
    "manzana",
    "pera",
    "mango"
]; // Declaración de un array de frutas

for (let fruta of frutas) { // Itera sobre cada elemento del array "frutas" y asigna el valor a la variable "fruta"
    console.log(fruta); // Muestra el valor actual de "fruta" en la consola
}