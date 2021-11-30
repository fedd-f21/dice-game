// This function returns a random Number between 1 (inclusive) and the argument passed to the function
// If no argument is passed, 6 is set, ie, returns a number between and including 1 to 6
// 		For example: 
//    getRandomDiceRoll() will return either 1, 2, 3, 4, 5, 6
const getRandomDiceRoll = function(sides=6) {
  return Math.floor( Math.random() * sides ) + 1
}



const rollTheDice = function() {

  /////////////// SELECTING ELEMENTS ///////////////
  // find the #message element
  const eleMessage = document.querySelector(`#message`)
  // find the #face element
  const eleFace = document.querySelector(`#face`)


  ///////////////// ROLL THE DICE /////////////////
  // Randomly assign a dice roll number
  const rollNum = getRandomDiceRoll()


  ///////////// APPLYING RESULT TO UI /////////////
  // update textContent with rollNum
  eleMessage.textContent = `You rolled: ${rollNum}`

  // update the src attribute
  // eleFace.src = `img/dice5.svg` // <<--- DONT DO IT THIS WAY
  eleFace.setAttribute(`src`, `img/dice${rollNum}.svg`)

  // update the alt attribute
  eleFace.setAttribute(`alt`, `Dice face ${rollNum}`)


  // THE END
  return rollNum
}

// Select the button
const eleRoll = document.querySelector(`#roll`)
// When the button is clicked, callback to rollTheDice
eleRoll.addEventListener(`click`, rollTheDice)
