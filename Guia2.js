// Ejercicio 1
// Escribe una función que tome tres números como argumentos y retorne el mayor de ellos. 
// Llama a la función con diferentes valores e imprime el resultado.

let num1 = 3
let num2 = 4
let num3 = 5
let num_mayor = function (num1,num2,num3) {
    if (num1 > num2 && num1 > num2)
        return num1
    else if (num2 > num1 && num2 > num3)
        return num2
    else
        return num3
}
console.log(num_mayor(num1,num2,num3))

// Ejercicio 2
// Crea una función expresada que reciba un array de strings y retorne un string 
// Que concatena todos los elementos del array separados por espacios.

let array1 = ['hola','mi','nombre','es','Bauti']
let vacio = ''
let expresada1 = function (array1) {
    for (let i = 0; i < array1.length; i++) {  
        vacio += array1[i] + ' '
    }
    return vacio
}
console.log(expresada1(array1))

// Ejercicio 3 
// Convierte la función del ejercicio anterior a una función de flecha. 
// Además, agrega una validación para que, si el array está vacío, retorna un mensaje de advertencia.


let flecha = array1 =>  {
    if (array1.length === 0) {
        return "El array está vacío"
    }
    return array1.join(' ')
}
console.log(flecha(array1))
console.log(flecha([]))

// Ejercicio 4
// Escribe una función que tome una temperatura en grados Celsius como argumento y devuelva un mensaje que
// indique si hace frío (menor a 15 grados), templado (entre 15 y 25 grados) o calor (mayor a 25 grados).

let temperatura = function(grados) {
    if (grados<15)
        return 'Hace frio'
    else if (15 <= grados <= 25)
        return 'Esta templado'
    else
        return 'Hace calor'
}
console.log(temperatura(29))

// Ejercicio 5
// Reescribe una función que tome una hora (formato 24 horas) y devuelva "Buenos días" si es antes de las 12
// "Buenas tardes" si es entre las 12 y 18, o "Buenas noches" si es después de las 18, utilizando operadores ternarios.

let horario = function(hora) {
    if (hora<12)
        return 'Buenos dias'
    else if (12<= hora <= 18)
        return 'Buenas tardes'
    else 
        return 'Buenas noches'
}

// Ejercicio 6
// Escribe una función que reciba cuatro argumentos booleanos y retorne true si al menos uno de los 
// dos primeros es verdadero y al menos uno de los dos últimos es falso.

let argumentos = function(arg1,arg2,arg3,arg4) {
    if ((arg1 || arg2) && (arg3 || arg4))
        return true
}
