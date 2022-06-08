//>>>>>>>>>>>>> SELECCIONAR CONTENIDO DEL DOM - Mediante estas funciones:<<<<<<<<<<<<<<<<<

// >> querySelector() >> selectores muy similares a los que tendiras en css
const heading = document.querySelector(".header__texto h2") // Retorna 0, o un elemento.
heading.textContent = "Brunos Cafe" // Para inspeccionar y ver mas elementos recominedo firefox dev.

// >> querySelectorAll() >> selectores muy similares a los que tendiras en css
const enlaces = document.querySelectorAll(".navegacion a") //Retorna de 0, a todos los que concuerden con el selector. Diferencia con querySelector().
// console.log(enlaces[0]) // Podemos posicionarnos con uno de los selectore como si fuera un array.
enlaces[0].textContent = "Nuevo texto de enlace"
//enlaces[0].href = "http://www.google.com" >> Incluso se pueden modificar los enlaces.
//enlaces[0].classList.add("nueva-clase")           >> Podemos agregar
//enlaces[0].classList.remove("navegacion__enlace") >> o quitar clases.

// >> getElementById()
//document.getElementbyId(nombreID) Uso similar a los querySelector, pero mas antiguo.


//>>>>>>>>>>>>> CREAR HTML DESDE JS <<<<<<<<<<<<<<<<<
const nuevoEnlace = document.createElement("A") // JS recomienda que sea en mayus.
// Agregar el HREF
nuevoEnlace.href = "http://www.google.com"
// Agregar el texto
nuevoEnlace.textContent = "Un nuevo enlace"
// Agregar la clase
nuevoEnlace.classList.add("navegacion__enlace")
// Agregarlo al documento
const navegacion = document.querySelector(".navegacion")
navegacion.appendChild(nuevoEnlace) // Funcion que nos permite agregar un elemento e insertarlo en otro lugar, en este caso esta agregando nuevoenlace a navegacion.
console.log(nuevoEnlace)


//>>>>>>>>>>>>  EVENTOS EN JS <<<<<<<<<<<<<<
console.log(1)
window.addEventListener("load", function () {   // Tanto load como onload aguardan que se ejecute todo el documento, + IMG y CSS.
    console.log(3)
})
window.onload = function(){ // Estas funciones luego del addEventListener se llaman callbacks, pueden ser funciones aparte.
    console.log(4)
}
console.log(2)
document.addEventListener("DOMContentLoaded", function () { // DOMContentLoaded solo espera que se cargue el HTML, pero no espera CSS o IMAGENES
    console.log(6)
})
window.onscroll = function () {
    console.log("scolling...")
}
//>> Hay muchos eventos.


// >>>>>>>>>>> REACCIONAR A CLICKS EN JS <<<<<<<<<<<<
// Seleccionar elementos y asociarles un evento.
/* const btnEnviar = document.querySelector(".boton--primario")
btnEnviar.addEventListener("click", (e) => {
    console.log(e)
    e.preventDefault()
    //Estos pasos arriba son necesarios para vaidar un form antes de enviarlos a un servidor.
    console.log("enviando form..")
}) */

// >>>>>>>>>> EVENTOS DEL TECLADO - INPUTS Y TEXT AREA <<<<<<<<<<<
// Nos sirve para validar o leer lo que el usuario va ingresando en texto.
const datos = { //validamos form
    nombre : "",
    email: "",
    mensaje: ""
}

const nombre = document.querySelector("#nombre")
const email = document.querySelector("#email")
const mensaje = document.querySelector("#mensaje")

nombre.addEventListener("input", leerTexto /* (e) => { 
    console.log(e.target.value)
    //console.log("escribiendo..")
} */)
email.addEventListener("input", leerTexto /* (e) => { 
    console.log(e.target.value)
    //console.log("escribiendo..")
} */)
mensaje.addEventListener("input", leerTexto /* (e) => { 
    console.log(e.target.value)
    //console.log("escribiendo..")
} */)

function leerTexto (e) {
    //console.log(e.target.value) //optimizando 
    //console.log(e.target)
    datos[e.target.id] = e.target.value
    console.log(datos)
}

// >>>>>>>> EVENTOS EN FORMULARIOS <<<<<<<<<
// EVENTO SUBMIT y EVENTO CLICK
// El evento de SUBMIT
const formulario = document.querySelector(".formulario")
formulario.addEventListener("submit", (e)=>{
    e.preventDefault()

    //>> Validar FORMULARIO
    const {nombre, email, mensaje} = datos // >> DISTRUCTION > Agarrar un objeto global, y separarlo en variables
    /* console.log(nombre)
    console.log(email)
    console.log(mensaje) */

    if(nombre == "" || email == "" || mensaje == "") {
        mostrarError("Todos los campos son obligatorios")
        return // Corta la ejec del codigo
    }
    //>> Enviar FORMULARIO - Crear la alerta de se envio correctamente
    mostrarMensaje("El mensaje se envio correctamente")

    //console.log("enviando formulario..")
})
// Usualmente en un formulario, vas a asociarlo a un submit. El evento click se usa en imagenes..textos..etc, pero para form el evento que se usa es submit.
// Organizacion recomendad de un proyecto. Variables 1ro, luego los eventListeners 2dos, funciones 3ros.
function mostrarError(mensaje) {
    const error = document.createElement("P")
    error.textContent = mensaje
    error.classList.add("error")

    formulario.appendChild(error)
    //Que desaparezca despues de unos seg.
    setTimeout(()=>{
        error.remove()
    }, 3000)
    //console.log(error)
}

function mostrarMensaje(mensaje){
    const mensajeEnviado = document.createElement("P")
    mensajeEnviado.textContent = mensaje
    mensajeEnviado.classList.add("correcto")

    formulario.appendChild(mensajeEnviado)
    setTimeout(()=>{
        mensajeEnviado.remove()
    }, 3000)
}