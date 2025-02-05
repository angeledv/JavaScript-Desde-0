'use strict';
// Este es un comentario de 1 sola línea en JavaScript

// Console.log() es una función que se utiliza para imprimir en consola
console.log('Hola Mundo');

// Declaración de variables 
let nombre = "Ana"; // String
let edad = 23; // Number
let sueldo = 1.234 // Number
let casada = false // Boolean
let vacunas = true; // Boolean
let hijos = null; // Object
let dato; // Undefined

// Typeof se utiliza para saber el tipo de dato de una variable
console.log(`${nombre}: ${typeof(nombre)}`);
console.log(`${edad}: ${typeof(edad)}`);
console.log(`${sueldo}: ${typeof(sueldo)}`);
console.log(`${casada}: ${typeof(casada)}`);
console.log(`${vacunas}: ${typeof(vacunas)}`);
console.log(`${hijos}: ${typeof(hijos)}`);
console.log(`${dato}: ${typeof(dato)}`);

// La semántica es importante, significado de las palabras
let nombre2 = "Francia";
let pais = 20;

// NaN (Not a Number) es un valor especial que indica que una operación matemática no es un número
console.log(10 * "Ana");

/* Su ponemos typeof de null, dirá que es un objeto, pero en realidad es ausencia intencional de valor. Esto es debido a un error en JavaScript que no se ha corregido por compatibilidad con versiones anteriores  */

// ------ EJERCICIOS DE CAMPUS ------
console.warn("EJERCICIOS DE CAMPUS");
console.log(typeof(42));
console.log(typeof('Veinticinco'));
console.log(typeof(-666));
console.log(typeof(true));
console.log(typeof(0));
console.log(typeof(''));
console.log(typeof(null));
console.log(typeof(undefined));
console.log(typeof(FALSE));

// ------ EJERCICIOS EXTRA ------
console.warn("EJERCICIOS EXTRA");
console.log(typeof('21'));
console.log(typeof(-8.21));
console.log(typeof(+90121));
console.log(typeof(`c`));
console.log(typeof(TRUE));
