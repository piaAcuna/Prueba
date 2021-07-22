var nombre = prompt("Ingrese nombre del alumno");
var notaUno= parseInt(prompt("Ingresa tu primera nota"));
var notaDos= parseInt(prompt("Ingresa tu segunda nota"));
var notaTres= parseInt(prompt("Ingresa tu tercera nota"));
var promedio = ((notaUno+notaDos+notaTres)/3);

document.write(`<h3><strong>${nombre}</strong>, tu promedio de notas es: <strong>${promedio}</strong></h3>`)