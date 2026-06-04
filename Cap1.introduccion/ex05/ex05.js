let a, b;
let suma, resta, multiplicacion, division, residuo, potencia;
a =  parseInt(prompt("Ingrese el primer número: "));
b = parseFloat(prompt("Ingrese el segundo número: "));

// Resultados de las operaciones matemáticas básicas
suma = a + b; // Suma de a y b
resta = a - b; // Resta de a y b
multiplicacion = a * b; // Multiplicación de a y b
division = a / b;   // División de a entre b      
residuo = a % b;   // Residuo de a entre b
potencia = a ** b; // Potencia de a elevado a b

// Imprimir resultados; 

document.writeln("La suma es: ", suma, "<br>"); // Se muestra el resultado de cada operación en la página web utilizando document.writeln. Cada resultado se etiqueta con su tipo para mayor claridad.
document.writeln("La resta es: ", resta, "<br>");
document.writeln("La multiplicación es: ", multiplicacion, "<br>");
document.writeln("La división es: ", division, "<br>");
document.writeln("El residuo es: ", residuo, "<br>");
document.writeln("La potencia es: ", potencia, "<br>");

