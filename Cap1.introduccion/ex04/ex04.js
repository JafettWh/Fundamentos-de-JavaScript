let nombre, edad, direccion, movil, email;

nombre = prompt("Ingrese su nombre: "); // Se piden los datos al usuario a través de la función prompt, que muestra un cuadro de diálogo para ingresar información. El valor ingresado se asigna a la variable correspondiente.
edad = prompt("Ingrese su edad: ");
direccion = prompt("Ingrese su dirección: ");
movil = prompt("Ingrese su número de móvil: ");
email = prompt("Ingrese su correo electrónico: ");

console.log("Nombre:", nombre); // Se muestra la información ingresada por el usuario en la consola del navegador utilizando console.log. Cada dato se etiqueta con su tipo para mayor claridad.
console.log("Edad:", edad);
console.log("Dirección:", direccion);
console.log("Móvil:", movil);
console.log("Email:", email);

document.writeln("Tu nombre es: ", nombre, "<br>"); // Se muestra la información ingresada por el usuario en la página web utilizando document.writeln. Cada dato se etiqueta con su tipo para mayor claridad.
document.writeln("Tu edad es: ", edad, "<br>");
document.writeln("Tu dirección es: ", direccion, "<br>");
document.writeln("Tu número de móvil es: ", movil, "<br>");
document.writeln("Tu correo electrónico es: ", email, "<br>");