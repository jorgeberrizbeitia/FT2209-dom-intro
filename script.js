console.log("probar")


// aqui nosotros vamos a hacer acciones sobre el DOM

// document es todo el DOM
console.log(document)

// nosotros tendremos multiples metodos y propiedades especiales para trabajar

// busquedas en el DOM

console.log( document.querySelector("h1") ) // apunta a la referencia actual
//                                   |
//                         notación de selectores CSS

// manipular el DOM por medio de JS
let h1DOM = document.querySelector("h1") 
// querySelector busca solo el primer elemento que concuerde con la busqueda
// guardamos la referencia del elemento de DOM

// innerText
console.log(h1DOM.innerText)
h1DOM.innerText = "Cambiando el titulo en manipulacion de DOM";


// acciones automaticas como setTimeout o setInterval
setTimeout(() => {
  h1DOM.innerText = "Cambiando a los 2 segundos"
}, 2000)

let h2DOM = document.querySelector("h2")
console.log(h2DOM.innerText)

// let timer = 0;
// let id = setInterval(() => {
//   timer++
//   h2DOM.innerText = Number(h2DOM.innerText) + 1
//   if (timer === 5) {
//     clearInterval(id)
//   }
// }, 1000)

// eventos manuales del usuario

let buttonDOM = document.querySelector("button")
buttonDOM.addEventListener("click", () => {
  h1DOM.innerText = "Cambiando con click de boton"
})
// dos argumentos
// 1. el tipo de evento
// 2. la funcion a ejecutar si ese evento ocurre


// multiples propiedades y metodos de DOM

let titleDOM = document.querySelector("#title")
titleDOM.innerText = "hola"

let oneParagDOM = document.querySelector(".some-text")
oneParagDOM.innerText = "cambiando el primer p"

// querySelectorAll
let allParagDOM = document.querySelectorAll(".some-text")
// allParagDOM es un elemento que se llama NodeList
// NodeList se comporta como un array
// ... PERO NO ES UN ARRAY

allParagDOM[1].innerText = "cambiando el 2do con querySelectorAll"

allParagDOM.forEach((eachDOMElem) => {
  eachDOMElem.innerText = "cambiando todos con un forEach"
})

// metodos menos usados
// let titleDOMoldMethod = document.getElementById("title")
// let allParagDOMoldMethod = document.getElementsByClassName("some-text")
// let allPDOMoldMethod = document.getElementsByTagName("p")



// seleccion/busqueda anidada


let cardsDOM = document.querySelectorAll(".card")

cardsDOM.forEach((eachCardDOM) => {
  // eachCardDOM.innerText = "prueba"
  // como yo accedo a los h3 y los p de cada cartita
  // let h3DOM = document.querySelector("h3")
  let h3DOM = eachCardDOM.querySelector("h3")
  h3DOM.innerText = "patata"
  let pDOM = eachCardDOM.querySelector("p")
  pDOM.innerText = "banana"
})


// innerHTML vs innerText

let footerDOM = document.querySelector("#footer")

console.log( footerDOM.innerText ) // solo el texto dentro de el elemento de DOM
console.log( footerDOM.innerHTML ) // un str que representa la estructura de DOM interna (todas las etiquetas)
console.log( footerDOM.textContent ) // tal como está el contenido texto en el HTML

let emptyDOM = document.querySelector("#empty-container")
// emptyDOM.innerHTML = `<h2>contenido nuevo <span>!!!</span> </h2>`



// crear y remover elemento de DOM
let h4DOM = document.createElement("h4")
// estamos creando el elemento de DOM
// pero aun no existe en el DOM
// por ahora solo existe como referencia desde JS.

// agregar elementos de DOM al document
emptyDOM.append(h4DOM)


h4DOM.innerText = "nuevo elemento creado" // puede estar antes o despues de agregarlo

// remove
setTimeout(() => {
  // podemos borrar cualquier metodo del cual tengamos la referencia
  h4DOM.remove() // solo lo remueve del DOM, el elemento sigue existiendo
}, 2000)

setTimeout(() => {
  // podemos borrar cualquier metodo del cual tengamos la referencia
  emptyDOM.append(h4DOM)
}, 4000)


// cambiar clases e ids

let finalDOM = document.querySelector("#final-thoughts")

// id
console.log(finalDOM.id)
finalDOM.id = "nuevo-id"

// classes
console.log(finalDOM.className)
// finalDOM.className = "nueva-clase" // reemplaza las clases

// classList
console.log(finalDOM.classList)

finalDOM.classList.add("nueva-clase") // añade una clase sin alterar las anteriores
finalDOM.classList.remove("best-practice") // remueve una clase sin alterar las anteriores
console.log( finalDOM.classList.contains("after-footer") ) // true o false si lo incluye



// EVENTS

let eventTitleDOM = document.querySelector("#event-title")

// eventTitleDOM.addEventListener("click", () => {
//   console.log("haciendo click sobre el h1")
// })

// sección de elemento de DOM
let buttonPlusDOM = document.querySelector("#increment")
let buttonMinusDOM = document.querySelector("#decrement")
let counterDOM = document.querySelector("#counter span")
let inputDOM = document.querySelector("#name")
let addButtonDOM = document.querySelector("#add-btn")
let listDOM = document.querySelector("#output-list")
let allButtons = document.querySelectorAll(".last-btn")

// sección de funciones
function changeTitle() {
  console.log("pasando el ratón sobre el h1")
  eventTitleDOM.innerText = "Sobre el titulo"
  eventTitleDOM.style.color = "red"
  finalDOM.style.color = "green"
}

function revertTitle() {
  console.log("saliendo del h1")
  eventTitleDOM.innerText = "Saliendo del titulo"
  eventTitleDOM.style.color = "black"
  finalDOM.style.color = "black"
}

function addToCounter() {
  counterDOM.innerText++
}

function substractFromCounter() {
  if (counterDOM.innerText > 0) {
    counterDOM.innerText--
  }
}

function addToList() {

  // 1. extraer lo que vamos a agregar
  // let textToAdd = inputDOM.innerText
  let textToAdd = inputDOM.value
  console.log(textToAdd)

  // 2. crear elemento de DOM
  let newElement = document.createElement("li")
  newElement.innerText = textToAdd
  console.log(newElement)

  // 3. agregar el nuevo elemento a la lista
  listDOM.append(newElement)

}

function deleteButton(event) {
  console.log("intentando borrar botón")
  console.log(event.target)
  // event es todas las caracteristicas de la acción
  // event.target es el elemento de DOM sobre el cual se ejecuta la acción.
  // para borrar un elemento de DOM. element.remove()
  // allButtons[0].remove()
  // event.target.remove()

  // si quisiera borrar el elemento padre.
  let parentElement = event.target.parentNode
  parentElement.remove()
}

// para segurarnos de que el addeventlistener solo se asignará cuando todo en la pagina web esté correctamente subido.

window.addEventListener("load", () => {
    // sección de addEventListeners
  eventTitleDOM.addEventListener("mouseenter", changeTitle)
  eventTitleDOM.addEventListener("mouseleave", revertTitle)
  buttonPlusDOM.addEventListener("click", addToCounter)
  buttonMinusDOM.addEventListener("click", substractFromCounter)
  addButtonDOM.addEventListener("click", addToList)
  allButtons.forEach((eachButtonDOM) => {
    eachButtonDOM.addEventListener("click", deleteButton)
  })

  // document.addEventListener("keydown", (event) => {
  //   console.log(event.code)
  //   if (event.code === "Enter") {
  //     addToList()
  //   }
  // })
})




