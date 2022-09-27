// ITERATION 1: Get the node element with the main title and console.log it

// ... your code here
let h1DOM = document.querySelector("h1")
console.log(h1DOM)

// => <h1>Fruits and veggies</h1>
// ----------------------------------------------

// ITERATION 2: Console.log the main title text

// ... your code here
console.log(h1DOM.innerText)

// => Fruits and veggies
// ----------------------------------------------

// ITERATION 3: Get all the nodes with the fruit items into a NodeList. Console.log the NodeList

// ... your code here
let allNodes = document.querySelectorAll(".fruit-item")
console.log(allNodes)

// => NodeList(5) [li.fruit-item, li.fruit-item, li.fruit-item, li.fruit-item, li.fruit-item]
// ----------------------------------------------

// ITERATION 4: Get all the veggie items. Console log the text of each one
// think about loops, innerText vs innerHTML

// ... your code here
let allVeggies = document.querySelectorAll(".veggie-item")

allVeggies.forEach((eachVeggie) => {
  console.log(eachVeggie.innerText)
})

// Broccoli 
// Potato 
// Avocado 
// Spinach
// Tomato
// ----------------------------------------------

// ITERATION 5: Add a class 'best-fruit' to all the fruits with an Odd index. 1 & 3
// think about loops, ways to add classes to an element

// ... your code here
allNodes.forEach((eachFruitDOM, index) => {
  if (index % 2 !== 0) {
    eachFruitDOM.classList.add("best-fruit")
  }
})


// => <li class="fruit-item best-fruit">Grapes</li>
// => <li class="fruit-item best-fruit">Plum</li>
// ----------------------------------------------

// ITERATION 6: Remove class 'veggie-item' from all veggies that start with the letter "A" or "T".

// ... your code here


// => ... <li>Avocado</li>
// => ... <li>Tomato</li>