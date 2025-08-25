/* hola  */

let nombre = 'Lucas'; // String
let edad = 19; // Number

console.log(nombre,edad) // Esto es un print 
console.log('Lucas' + 1); // No te tira error xq el + concatena strings
console.log('11' + 1); // 111 // Aquí también concatena strings
console.log('Lucas'-1); // NaN (Not a Number) porque no se puede restar un string y un número
console.log(0.6+0.1); // 0.7 // Aquí sí suma números
console.log(0.7+0.1); // 0.7999999999999999 // Aquí no suma bien por el tema de precisión de los números en JS

let = true; // booleano
let = false; // booleano

const EDAD = 31; // Constante, no se puede cambiar su valor
EDAD + 1; // Esto no es válido, no se puede reasignar una constante

let array1 = [1, 2, 3, 4, 5]; // Array de números
console.log(array1[0]); // Imprime el primer elemento del array
console.log(array1); // Imprime todo el array
const array2 = ['Lucas',1,true]; // Array con diferentes tipos de datos
array2.push('nuevo elemento'); // Agrega un nuevo elemento al final del array (append)
// Solo se puede poner push cuando empieza con const, no con let 

let perro_Lucas = { 
    nombre: 'Bono',
    edad: 5,
    vivo: true
};

console.log(perro_Lucas.nombre); // Imprime el nombre del perro

let perro_Bauti = {                  // Este es un objeto/variable
    nombre: 'Junior',               // Y estas son las propiedades del objeto
    edad: 3,
    vivo: true
};

let perro_Jose = {
    nombre: 'Isi',
    edad: 2,
    vivo: true
};

const PERROS = [
    perro_Lucas,perro_Bauti,perro_Jose
]

console.log(PERROS[0].nombre); // Imprime el nombre del primer perro en el array PERROS

console.log('Lucas' && "perro"); // Imprime "perro" porque el operador && devuelve el segundo valor si el primero es truthy
console.log('Lucas' || "perro"); // Imprime "Lucas" porque el operador || devuelve el primer valor truthy
// Falsy y Truthy
// && --> AND
// || --> OR
// Truthy es cualquier valor que no sea false, 0, "", null, undefined o NaN
// Falsy es cualquier valor que sea false, 0, "", null, undefined o NaN

console.log(1+2)
console.log(2-1)
console.log(2*3)
console.log(6/0)
console.log(6**4)
console.log(5%2)

console.log(5>2) // Mayor que
console.log(5<2) // Menor que
console.log(5>=2) // Mayor o igual que
console.log(5<=2) // Menor o igual que
console.log(5==2) // Igualdad debil, compara solo el valor 
console.log(5!=2) // Diferencia debil, compara solo el valor
console.log(5==='5') // Igualdad estricta, compara valor y tipo de dato
console.log(5!=='5') // Diferencia estricta, compara valor y tipo de dato

let edad3 = '12'; 
let edad_numerica = parseInt(edad3); // Convierte un string a un número entero
conseole.log(typeof(edad_numerica)); 
parseFloat
