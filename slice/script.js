// Ejercicio de slice

let frutas = ['mango', 'guanabana', 'fresa', 'lulo', 'maracuya'];  // array con 5 elementos

let comprarFruta = frutas.slice(1,3); // slice desde el indice 1 al 3, slice no cuenta el indice 3 sino que cuenta el anterior
let llevarFruta = frutas.slice(1,4); // slice desde el indice 1 al 4 pero imprime hasta el 3

console.log(comprarFruta); // impresion por consola
console.log(llevarFruta); // impresion por consola otro ejemplo