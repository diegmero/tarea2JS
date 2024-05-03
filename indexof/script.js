// ejercicio indexof

let lenguajesDev = ['js', 'php', 'ruby', 'js', 'html'];

let primerAparicion = lenguajesDev.indexOf('js'); // aqui estamos encontrando la primera aparicion de un elemento dentro del array es decir buscando su posicion en el array
let ultimoAparicion = lenguajesDev.lastIndexOf('js'); // aqui estoy buscando en que posicion se encuentra ese elemento dentro del array

console.log(primerAparicion); // imprimiendo en consola la primer aparicion el indice donde se encuentra
console.log(ultimoAparicion); // imprimiendo en consola la segunda aparicion el indice donde se encuentra
