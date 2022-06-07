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


/* PROTOTYPES >> Nos permitira crear funciones que solo se utilizan en un objeto en especifico. Nos permite tener un codigo mas organizado.
function Personas(nombre, apellido, edad) {
    this.nombre = nombre,
    this.apellido = apellido,
    this.edad = edad
}

>>Sintaxis del PROTOTYPE:
Personas.prototype.formatearPersona = function () {
    return ´La persona ${this.nombre} ${this.apellido} tiene ${this.edad} años.´
}

const persona1 = new Personas ("Bruno", "Lisboa", 23)
const persona2 = new Personas ("Sol", "Podmo", 23)
const persona3 = new Personas ("Alma", "Lisboa", 23) 

console.log(persona1.formatearPersona()) >> Este format solo funcionara para el objeto Personas,*/


/*CLASSES >> Sintaxis mejorada de la clase function Class(parametro1, parametro2) {this.parametro1 = parametro1, this.parametro2 = parametro2}
class Personas {
    constructor (nombre, apellido, edad, altura) {
        this.nombre= nombre,
        this.apellido = apellido,
        this.edad = edad,
        this.altura = altura
    }
    formatearPersona() {
        return ´La persona ${this.nombre} ${this.apellido} tiene ${this.edad} años.´ >>> Mejora la sintaxis del Prototype    >>METODO
    }
    retornarAltura() {
        return ´${this.nombre} tiene ${this.altura} cms.´   >>METODO
    }
}
const persona1 = new Personas ("Bruno", "Lisboa", 23, 180)
const persona2 = new Personas ("Sol", "Podmo", 23, 160)
const persona3 = new Personas ("Alma", "Lisboa", 23, 80) */


/*POO - HERENCIA >> Programacion orientada a objetos, herencia. Sirve para heredar el constructor como las funciones de otra clase.
Sintaxis:
class Clientes extends Personas {
    constructor (nombre, apellido, edad, fiel) {
        super (nombre, apellido, edad), >> funcion que va al constructor padre, y buscara los valores que le pases a la funcion.
        this.fiel= fiel
    }
    formatearPersona() {
        return ´${super.formatearPersona) y es un cliente fiel : ${this.fiel}´
}
const cliente1 = new Clientes ("Juan", "Sancho", 32, true);
console.log(cliente1.formatearPersona()) >> Por mas que no tenga este metodo la clase Clientes, la hereda de Personas. */


/* TRY CATCH >> En JS cuando hay un error, el codigo deja de funcionar. Eso con el TRYCATCH se soluciona, el codigo seguira funcionando pero te dira DONDE esta el error.
Sintaxix:
const numero1 = 10
const numero3 = 20

try {                           >> Es la parte que intetara hacer algo, y si no puede caera en el catch.
    console.log(numero2)
} catch (error) {
    console.log(error)          >> Te informara que error existe
} */


/* PROMISES EN JS >> Una promesa refleja un valor que podra estar disponible ahora, en un futuro, o nunca.
Sintaxis:
const usuarioAutenticado = new Promise ( (resolve, reject) => {     >> Cuando se ejecuta un Promise se pasan dos valores automaticamente, uno es resolve y otro reject.
    const auth = true                                               >> Resolve se va a ejecutar cuando el promise se cumple, Reject el promise no se cumple 

    if(auth) {
        resolve("Usuario autenticado")   >> Resolve se va a ejecutar cuando el promise se cumple   
    } else {                                                                    >> Ambas son funciones. entonces le podemos pasa valores.
        reject("No se pudo autenticar")    >> Reject se ejecuta cuando el promise no se cumple
    }
})

usuarioAutenticado 
    .then (function (resultado) {    >>> De esta manera extraemos la informacion del promise resolve.
        console.log(resultado)     
    })                                                                                                        
    .catch (function (error){        >>> De esta manera extraeremos la inforaciom del rejected.
        console.log(error)
    })

>> En los primses existen 3 valores posibles:
    1- Pending, el promises no se ha cumplido, pero no se ha rechazado.
    2- Fulfilled, es cuando se cumplio el primse.
    3- Rejected, se ha rechazado o no se pudo cumplir.*/


/* NOTIFICACION API >> API nativa de JS. Muy importante por que es necesario solicitar permisos para acceder a ubicacion, microfono, camara, etc.
const buton = document.querySelector(#buton)
buton.addEventListener("click", () => {
    Notifications.requestPermission()   >>API nativa de JS
        then.(resultado => console.log(´El resultado es ${resultado}´))     >> Nos data garanted o rejected dependiendo.
})

if(Notification.permission == "garanted") {
    New Notification ("Bla bla bla de notificacion") {
        icon : "img/img.jpg"
        body : "Text de cuerpo de notif"
    }
} */


/* ASYNC / AWAIT  >> Ej. Dos personas entran a un bar, uno pide un vaso de agua, y otro un trago elaborado. No deberia esperar el del vaso a que se termine de hacer el trago, justamente de eso se trata Async / await. 
Permite ejecutar codigo mientras otro se carga o procesa. Ejemplo mostrar una web mientras se carga la base de datos.
Ej:

function descargarNwClientes() {
    return new Promise(resolve => {
        console.log("Cargando clientes...espere")

        setTimeout(function(){
            resolve("Mensaje..")
        }5000)       
    })
}

async function app () {                                     >>vemos la aplicacion de async
    try {
        const resultado = await descargarNwClientes()       >>vemos la aplicacion de await
        >>aca va todo codigo que se va a ejecutar dependiendo del await<<
        console.log(resultado)
    } catch (error) {
        console.log(error)
    }
}
app()
>>todo el codigo que se va a ejecutar sin trabarse<<

>> aca en primera instancia veremos que para que se ejecute app, deberemos esperar los 5 sec del setTimeout de la f descargarNwClientes

setInterval(() => {
    console.log("Mensaje..")
}3000)

COMO TRABAJAR CON DOS CONSULTAR ASYNC / AWAIT
Ej:

function descargarNwClientes() {
    return new Promise(resolve => {
        console.log("Cargando clientes...espere")

        setTimeout(function(){
            resolve("Mensaje..")
        }5000)       
    })
}

function descargarNwProducts() {
    return new Promise(resolve => {
        console.log("Cargando productos...espere")

        setTimeout(function(){
            resolve("Mensaje..")
        }3000)       
    })
}

async function app () {                                     >>vemos la aplicacion de async
    try {
        const clientes = await descargarNwClientes()       >>vemos la aplicacion de await
        const productos = await descargarNwProducts()
        >>aca va todo codigo que se va a ejecutar dependiendo del await<<
        console.log(clientes)
        console.log(productos)
        **********ESTO ESTA MAL, POR QUE SE EJECUTARA PRIMERO descargarNwClientes() LUEGO descargarNwProducts().

        const resultado = await.Promise.all([descargarNwClientes(), descargarNwProducts()])
        console.log([0])
        console.log([1])
        **********MANERA CORRECTA, GANAMOS EN PERFORMANCE.
    } catch (error) {
        console.log(error)
    }
} */


/* FERCH API remplazo a AJAX >> Te permite enviar info al servidor u obtener esta info en tiempo real, tambien puede obtener datos de un archivo local JSON. Utiliza promises o asyn/await.
JSON es JavaScript Object Notation >> Es un lenguaje de transporte de datos. Este puede ser creado en cualquier lenguaje y ser consumido en JS por medio de Fetch Api y mostrarlo en tu web.
Sintaxis con Promises:

function obtenerEmpleados(){

    const baseDeDatos = "bd.json"   >> Colocar al archivo como una variable.
    
    fetch(baseDeDatos)   >> Toma como valor una url, ej, API de goog "http://www.google.com/api" o un archivo, como el que creamos.
        .then(resultado => {
            return resultado.json() >> Aca el return es implicito si lo hacemos como arrowf but por razones de entendimiento dejamos el return.
        })
        .then(datos => {
            //console.log(datos)
            const {empleados} = datos >> Destruct
            //console.log(empleados)
            empleados.forEach(empleado => {
                console.log(empleado)
                console.log(empleado.id)
                console.log(empleado.nombre)
                console.log(empleado.puesto)


            })
        })
}

obtenerEmpleados()

>> Se puede usar con async y await, sintaxis:

async function obtenerEmpleados(){

    const baseDeDatos = "bd.json"   >> Colocar al archivo como una variable.
    
                                            fetch(baseDeDatos)   >> Toma como valor una url, ej, API de goog "http://www.google.com/api" o un archivo, como el que creamos.
                                                .then(resultado => {
                                                    return resultado.json() >> Aca el return es implicito si lo hacemos como arrowf but por razones de entendimiento dejamos el return.
                                                })
                                                .then(datos => {
                                                    //console.log(datos)
                                                    const {empleados} = datos >> Destruct
                                                    //console.log(empleados)
                                                    empleados.forEach(empleado => {
                                                        console.log(empleado)
                                                        console.log(empleado.id)
                                                        console.log(empleado.nombre)
                                                        console.log(empleado.puesto)
                                                    })
                                                })
    
    const resultad = await fetch(baseDeDatos)
    const datos = resultad.json()
    console.log(datos)
}

obtenerEmpleados()
*/

/*<<<<<<<<<<<<<<<< SEGUNDA PARTE   >>>>>>>>>>>>>>>>>>>
<<<<<<<<<<<<<<<<<< INTERACTIVIDAD  >>>>>>>>>>>>>>>>>>>
<<<<<<<<<<<<<<<<<<      DOM        >>>>>>>>>>>>>>>>>*/