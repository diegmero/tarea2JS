// Ejercicio de splice

let equipos = ['Atl Nacional', 'Real Madrid', 'Villarreal', 'Arsenal', 'Borussia Dortmund']; // creando el array de los 5 elementos

let semis = equipos.splice(2,2,'a','b'); // reemplazando desde la posicion 2 con a  y posicion 3 con b

console.log(equipos); // aqui el resultado por consola
console.log(semis); // en esta variable están los elementos del array que se reemplazaron quedaron almacenados aquí
