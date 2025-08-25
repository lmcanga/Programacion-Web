// Ejercicio 1
// Declara tres variables: una para almacenar tu ciudad, otra para almacenar tu país, y otra para almacenar tu edad de nacimiento.
// Imprime los valores en la consola y después intenta cambiar los valores y observa los resultados con let y const.

let ciudad = 'Buenos Aires';
let pais = 'Argentina';
let edadNacimiento = 2006
console.log(ciudad);
console.log(pais);
console.log(edadNacimiento);

// Ejercicio 2
// Declara tres variables numéricas. Calcula el promedio de las tres y encuentra el residuo de la división de la suma total entre 2. 
// Imprime los resultados.


let num1 = 2;
let num2 = 3;
let num3 = 4;
let promedio = (num1 + num2 + num3) / 3
let suma = (num1 + num2 + num3)
let final = suma % 2
console.log(promedio)
console.log(final)

// Ejercicio 3
// Declara una variable para almacenar un objeto que represente un coche con propiedades como marca, modelo y año. 
// Imprime el tipo de cada propiedad con typeof.

let autos = {
    marca: 'Audi',
    modelo: 'A8',
    anio: 2025
}
console.log(typeof(autos.marca))

// Ejericio 4
// Crea un array con los nombres de 5 ciudades que te gustaría visitar. 
// Reemplaza el tercer elemento por otra ciudad y luego imprime el array actualizado.

let ciudades = ['Paris','Madrid','Barcelona','Londres','Roma']
ciudades[2] = 'Tokio'
console.log(ciudades)

// Ejercicio 5  
//Crea un array de 3 objetos que representen películas, cada una con título, director y año de lanzamiento. 
// Imprime el director de la última película.

let Galaxia = {
    Titulo: 'Star Wars',
    Director: 'Michael Jackson',
    Anio: 2000 
}

let Juguetes = {
    Titulo: 'Toy Story',
    Director: 'Sara Jackson',
    Anio: 1950
}

let Guerra = {
    Titulo: 'WW2',
    Director: 'Lucas Canga',
    Anio: 2015
}

const Peliculas = [Galaxia,Juguetes,Guerra]
console.log(Peliculas[2].Director)

// Ejercicio 6
// Declara tres variables booleanas y usa operadores lógicos para verificar si al menos dos son verdaderas.
// Imprime true o false en la consola dependiendo del resultado.

let validacion1 = true
let validacion2 = false
let validacion3 = true

console.log(validacion1 && validacion2)
console.log(validacion2||validacion3)

// Ejericio 7
// Declara tres variables numéricas. Compara si el primer número es mayor que el segundo y menor que el tercero.
// Luego, verifica si el segundo número es distinto al tercero. Imprime los resultados de las comparaciones.

let num8 = 10
let num9 = 20
let num7 = 30

console.log(num8>num9 && num8<num7)
console.log(num9!=num7)

// Ejercicio 8
// Declara dos variables que almacenen strings (por ejemplo, tu nombre y tu apellido). 
// Luego, crea una tercera variable que concatene las dos primeras y muestra el resultado en la consola.

let nombre = 'Lucas'
let apellido = 'Canga'
let junto = nombre + apellido

console.log(junto)

// Ejercicio 9
// Declara una variable numérica y utiliza los operadores de incremento (++) y decremento (--) para modificar su valor. 
// Imprime el valor de la variable después de cada operación.

let numero1 = 10
let modificado = numero1 + 10

console.log(modificado)

// Ejercicio 10
// Crea un objeto que represente un estudiante con propiedades como nombre, edad y carrera. 
// Accede e imprime cada propiedad del objeto.

let estudiante = { 
    nombre: 'Lucas',
    edad: 19,
    carrera: 'Negocios'
}

console.log(estudiante.nombre)
console.log(estudiante.edad)
console.log(estudiante.carrera)

// Ejercicio 11
// Crea un array que contenga dos arrays internos, cada uno con 3 números. 
// Accede al segundo elemento del primer array interno.

let listaadentro = [1,2,3]
let listaadentro2 = [4,5,6]
let lista1 = [listaadentro,listaadentro2]
console.log(lista1[0][1])

// Ejercicio 12
// Declara dos variables numéricas y utiliza los operadores >, <, >=, <=, ===, !== para comparar sus valores. 
// Imprime el resultado de cada comparación

let variablenum = 1
let variablenum2 = 2
console.log(variablenum>variablenum2)

// Ejercicio 13
// Declara una variable sin asignarle un valor y otra variable con valor null.
// Utiliza typeof para imprimir el tipo de cada variable.

let novalor = NaN
let valornull = null
console.log(typeof(novalor))
console.log(typeof(valornull))

// Ejercicio 14
// Declara una variable que almacene un número como string (por ejemplo, "123").
// Convierte este string a un número usando parseInt o Number y demuestra que ahora puedes realizar operaciones matemáticas con él.

let strnum = '123'
let cambiado = parseInt(strnum)
console.log(cambiado)