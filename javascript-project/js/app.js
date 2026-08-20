
//alert("Esto es una alerta");
console.log("Hola desde Javascript");

let a=10,b=10,c=10;
let nombre='Juan';
var head= "Hola";

//var b=10; es la manera antigua de declarar variables, no es una buena
//practica usar ese tipo de declaracion


let calificacion=100;
//const c=5;


console.log('a',a);
console.warn('b',b);
console.error('a',a);
console.log(head);
console.log('********************');
console.log({a});
console.log('********************');
console.log("%c Mis variables","color:red ");
console.log({a});
console.log({b});
console.log('**********TABLA**********');
console.table(
    {
        a,b,c,nombre
    }
);


/// No usar palabras reservadas de JavaScript

let outerHeight=1000;
var outerWidth=6000;

console.log(c);

console.log(nombre);

nombre='Pedro';
console.log(nombre);

alert('Hola bienvenido');
//prompt("Cual es tu nombre?", "Sin nombre");
let apellido =prompt('Cual es tu nombre?');

console.log(apellido);