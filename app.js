/* "use strict" // Permite ejecutar el codigo de js de manera estricta, para seguir las buenas practicas */

/* OBJETOS */
/* const nuevaMoto = {
    marca : "CFMOTO",
    cilindrada: "699cc",
    tipo: "offRoad",
    precio: 2200000
}

const caracteristicas = {
    peso: 230,
    altura: 140,
    largo: 180
} */

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



/* ARRAYS Siven para agrupar elementos */
/* const colores = ["azul", "blanco", "negro", "verde"]
const numeros = new Array (1, 2, 3, 4) */

//console.log(colores)
//console.table(colores)//manera de ver el arreglo como si fuese una tabla en la consola
//Tambien se lo pueden crear con el contructor
//console.table(numeros)
//Como accedemos a la posicion del array, por medio de los indices
//console.log(colores[1])//blanco
//Como sabemos la extension de un arreglo
//console.log(numeros.length)
//Como ingresar a todos los elementos de un array, a travez de un iterador
//numeros.forEach(function (numero) { //FOREACH se traduce algo asi como ...por cada elemento del array devolveme...
//    console.log(numero)
//}) 

/* COMO AGREGAR O QUITAR ELEMENTOS DE UN ARRAY 
colores[4] = "naranja" // Forma NO comun ni recomendada
colores.push("crimson") // Forma a travez de un metodo PUSH que agrega elementos al final de arreglo
colores.unshift("beige", "negro") // Forma mediante metodo UNSHIFT para agregar al principio del arreglo nuevos elementos
colores.pop() // ELIMINA el ultimo elemento del ARREGLO
colores.shift() // Elimina el primera elemento del arreglo
colores.shift(2, 1) // Nos permite eliminar elementos de un arreglo de manera controlada por nosotros, toma dos valores el PRIMERO es el indice de que elemento eliminar, y el SEGUNDO es cuantos elementos eliminar a partir de ese indice.
//Este enfoque esta dejando de usarse, ya que modifica nuestro array original, y esta cobrando fuerza un enfoque que se inclina por crear un nuevo array, 
//utilizando el rest operator, o el spreed operator
const nuevosColores = [...colores, "gris"] // Es igual al push, pero no modifica el array original
const nuevosColores2 = ["violeta", ...colores]// Es similar al unshift, pero sin modificar el array original.
console.table(nuevosColores)
console.table(nuevosColores2)
console.table(colores)*/

/* const vocales = ["a", "e", "i", "o", "u"]//array UNIDIMENSIONAL.
const alumnos = [ //array de OBJETOS, se podria decir que se logra un MULTIDIMENSIONAL
    {nombre: "Fran", edad: 25},
    {nombre: "Alma", edad: 22},
    {nombre: "Sol", edad: 29},
    {nombre: "Sabri", edad: 27}
]
console.table(vocales)
console.table(alumnos) */

//Como recorrer un array UNIDIMENSIONAL y ver si existe un elemento dentro?
/* vocales.forEach(function(vocal) {
    if(vocal == "e") {
        console.log("La letra E es una vocal")
    }
}) */

/*Array METHODS
//Includes es el equivalente al foreach utilizado arriba para buscar un elemento en el arreglo. Nos devuelve un true o un false
const vocal2  = vocales.includes("i")
//console.log(vocal2)
//Pero para buscar dentro de un arreglo de OBJETOS, se utiliza el SOME
const alumnos2 = alumnos.some(alumnos => alumnos.nombre == "Alma")
//Reduce nos sirve para sumar la propiedad del algun elemento, ejemplo, queremos sumas las edades de neustros alumnos.
const promedioEdad = alumnos.reduce(function(total, alumnos){ // se le pasa dos parametros, el total que hara de contador, y el array
    return total + alumnos.edad
}, 0)
//FILTER
const alumnosConMenosDe26 = alumnos.filter(function(alumnos){
    return alumnos.edad < 26
})
console.log(alumnosConMenosDe26) */


/* FUNCIONES
// DECLARACION de funciones
function suma() {
    console.log(10 + 10)
}
suma() // Aqui llamamos la funcion

//EXPRESION de una funcion
const dividir = function dividir() {
    console.log(24 / 2)
}
dividir() // llamamos la otra funcion

//!!HOISTING en JS, resumidas cuentas, es la principal dif entre ambas formas de funciones, la DECL se ejecutara aunque la llamemos antes, la segunda si la llamamos antes no lo hara por que es necesario definirla primero.

//IIFE funciones que se llaman a ellas mismas, no es necesario llamarlas.
/* ( function() {
    console.log('Esto es una funcion');
})(); */

/* DIFERENCIA ENTRE METODO Y FUNCION
Creo dos variables: 
const numero1 = 20
const numero2 = "20"
console.log(parseInt(numero2)) // Como veran el parseInt es una funcion, que nos transforma una string a un numero cuando sea valido.
console.log(numero1.toString()) // toString es un metodo que nos pasa un numero a una string, es un metodo y se diferencia facilmente por que va el nombre de la variable y un punto y seguidamente el metodo, la funcion en cambio va el nombre y entre parentesis un valor.*/

/*PARAMETROS y ARGUMENTOS
function sumar (numero1, numero2) { // Estos son parametros
    console.log(numero1 + numero2)
}
sumar(10,37) // Estos son argumentos, los valores reales.
const sumar2 = function(n1, n2){
    console.log(n1 + n2)
}
sumar2(30,23)
Parametros por default
function restar (n1 = 0, n2 = 0) {
    console.log(n1 - n2)
} 
restar(20, 1)
restar(19, 27)
restar(2)
restar()*/

/*FUNCIONES QUE RETORNAN VALOR
let total = 0

function agregarCarrito (precio) {
    return total += precio
}

function calcularIVA (total) {
    return total * 1.21
}

agregarCarrito(20)
agregarCarrito(20)
agregarCarrito(20)

const totalMasIVA = calcularIVA(total)

console.log(totalMasIVA)*/


/* METODOS DE PROPIEDAD
const reproductor = {
    reproducir : function (id) {
        console.log(`Repoduciendo cancion con el id: ${id}`)
    },
    stop : function() {
        console.log(`Pausando la cancion`)
    }
}
reproductor.borrarcancion = function(id) {
    console.log(`Eliminando cancion con el ID: ${id}`) //OTRA FORMA DE AGREGAR 
} 
//SE ACCEDE COMO A LOS OBJETOS
reproductor.reproducir(108)
reproductor.stop()
reproductor.borrarcancion(305) */


/* ARROW FUNCTIONS 
La sintaxsis es la siguiente:
const nombreArrowFunction = () => {
    console.log()
}
Ahora, si es solo un parametro se puede eleiminar los parentesis, y si es sola una linea las llaves, y el return es implicito.
const nombreArrowFunciotn = parametro1 => console.log(`Aprendiendo nuevos ${parametro1}`)
*/


/* ESTRUCTURAS DE CONTROL 
if (condicion) {
    codigo en caso de true
} else if {
    codigo en caso de que se de otro true
} else {
    en caso de false
}

== === !== !=== < > => <= || && 

SWITCH - MULTIPLIES CONDICIONES P REVISAR
const metodopago = 'tarjeta'
switch(metodopago) {
    case 'tarjeta':
        console.log('pagaste con tarjeta);
        break;
    default:
        console.log('aun no has pagado');
        break;
}
Mejor utilizar switch cuando hay multiples condiciones.
*/

/*ITERADORES 
EJECUTAN UN CODIGO MIENTRAS UNA CONDICIONES SEA VERDADERA.-

>>>>>>>>>  FOR > Se ejecuta un codigo mientras la condiciones sean verdaderas.

for (-inicializacion- let i = 0; -condicion que se debe cumplir- i < 10; -incremento- i++) {
    console.log(i) >>> imprimira del 1 al 10.
}

>>>>>>>>>  WHILE >> SE EJECUTA MIENTRAS UNA CONDICION SEA VERDADERA

let i = 0;  >>INDICE O VALOR INICIAL

do(i < 10) {  >>CONDICION
    console.log(i)
    i++         >>INCREMENTO
}

>>>>>>>>>  DOWHILE
let i = 0;

do {
    console.log(i) >> LA DIFERENCIA CON EL WHILE ES QUE ME ASEGURO QUE MI CODIGO SE EJECUTE AL MENOS UNA VEZ

    i++ >> INCREMENTO
} while (i < 10) >> ACA VA LA CONDICION
*/

/*  FOR EACH Y MAP  
// FOREACH >> solo puede ser utilizado en arreglos. Sintaxis:

nombreDelArray.forEach(function(parametro){
    console.log(parametro.nombre)
}) >> Usar para imprimir cosas en consola o en HTML.

//MAP >> tambien solo puede ser utilizado en arreglo. Sintaxis:

const mapDelArray = nombreDelArray.map(function(parametro) {
    console.log(paramentro.nombre)
}) >> Misma sintaxis que forEach, pero map te crea un nuevo arreglo, por lo que hay que asignarle una nueva variable que se ira llenando con el nuevo array.
*/


/* THIS palabra reservada, hace referencia al objeto sobre el cual se esta llamando la funcion. Ejemplo:
const reserva = {
    nombre: "Bruno",
    apellido: "Lisboa",
    total: 300,
    pagado: false,
    info: function(){
        console.log(´El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}´)
    }
}

reserva.info(); >> En este caso me imprimira "El cliente Bruno reservo y su cantidad a pagar es de 300". Tenemos una funcion reutilizable entre varios objetos gracias a la palabra reservada
this que hace referencia al objeto, caso contrario deberiamos colocar reserva.nombre, lo que en caso de tener otro objeto ejempli reserva1, anularia la reutizibilidad de nuestra function.
Solo funcion con la funcion sintaxix amplia, no con una arrow function por que esta ultima hace referencia a la ventana global. */


/* OBJECT CONSTRUCTOR Y OBJECT LITERAL - PROGRAMACION ORIENTADA A OBJETOS 
>>Object Literal:    --No es muy dinamico
const persona = {
    nombre: "Bruno",
    apellido: "Lisboa",
    edad: 23,
}

>>Object Contructor:    --Es mas dinamico
function Personas(nombre, apellido, edad) {
    this.nombre = nombre,
    this.apellido = apellido,
    this.edad = edad
}
const persona1 = new Personas ("Bruno", "Lisboa", 23)
const persona2 = new Personas ("Sol", "Podmo", 23)
const persona3 = new Personas ("Alma", "Lisboa", 23) 
>>Como se vera se pueden crear objetos a travez del constructor de una manera mas dinamica. */