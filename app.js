/* "use strict" // Permite ejecutar el codigo de js de manera estricta, para seguir las buenas practicas */

/* Objetos */
const nuevaMoto = {
    marca : "CFMOTO",
    cilindrada: "699cc",
    tipo: "offRoad",
    precio: 2200000
}

const caracteristicas = {
    peso: 230,
    altura: 140,
    largo: 180
}

/* como ACCEDER A LAS PROPIEDADES DE UN OBJETO del objeto
console.log(nuevaMoto.precio)
o
console.log(nuevaMoto['marca'])*/ 


/* como AGREGAR O QUITAR PROPIEDADES DE UN OBJETO? 
agregar nuevas propiedades : 
nuevaMoto.nombre = "MT650" 
eliminar propiedad:
delete nuevaMoto.cilindrada*/


/* DESTRUCTURACION DE UN OBJETO - CREAR VARIABLES DESDE UN OBJETO 
// Forma anterior
const precioNuevaMoto = nuevaMoto.precio
console.log(precioNuevaMoto)
// Forma nueva - Destructuring
const {marca, cilindrada, tipo} = nuevaMoto
console.log(marca, cilindrada, tipo) // Como se ve, con la nueva forma podemos extraer varias propiedades en una sola linea de codigo.*/


/* OBJET METHODS
Como evitar que se agreguen o modifiquen las propiedades de mi objeto. 
Object.freeze(nuevaMoto) // Object.freeze(objeto) No te permite agregar, quitar ni modificar propiedades del objeto
Object.seal(nuevaMoto) // Object.seal(objeto) No te permite agregar o quitar propiedades pero SI modificar las existentes*/


/*COMO UNIR DOS OBJETOS
Spread operator
const nuevaMotoConCaracteristicas = {...nuevaMoto, ...caracteristicas}
console.log(nuevaMotoConCaracteristicas)
console.log(nuevaMoto)*/



/*ARRAYS Siven para agrupar elementos*/
const colores = ["azul", "blanco", "negro", "verde"]
//console.log(colores)
console.table(colores)//manera de ver el arreglo como si fuese una tabla en la consola
//Tambien se lo pueden crear con el contructor
const numeros = new Array (1, 2, 3, 4)
console.table(numeros)
//Como accedemos a la posicion del array, por medio de los indices
console.log(colores[1])//blanco
//Como sabemos la extension de un arreglo
console.log(numeros.length)
//Como ingresar a todos los elementos de un array, a travez de un iterador
numeros.forEach(function (numero) { //FOREACH se traduce algo asi como ...por cada elemento del array devolveme...
    console.log(numero)
})