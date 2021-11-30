// This function returns a random Number between 1 (inclusive) and the argument passed to the function
// If no argument is passed, 6 is set, ie, returns a number between and including 1 to 6
// 		For example: 
//    getRandomDiceRoll() will return either 1, 2, 3, 4, 5, 6
const getRandomDiceRoll = function(sides=6) {
  return Math.floor( Math.random() * sides ) + 1
}

// Store a prevRollNum as a global, set to 0 by default
let prevRollNum = 0

const rollTheDice = function() {

  /////////////// SELECTING ELEMENTS ///////////////
  // find the #message element
  const eleMessage = document.querySelector(`#message`)
  // find the #face element
  const eleFace = document.querySelector(`#face`)


  ///////////////// ROLL THE DICE /////////////////
  // Randomly assign a dice roll number
  const rollNum = getRandomDiceRoll()

  // Consider:
  // Can you write a condition, or series of conditions, that will result in using the word version of a number, rather than the digit? For example: "three" instead of "3"
  let rollStr = ``

  if (rollNum === 1) {
    rollStr = `one`
  } else if (rollNum === 2) {
    rollStr = `two`
  } else if (rollNum === 3) {
    rollStr = `three`
  } else if (rollNum === 4) {
    rollStr = `four`
  } else if (rollNum === 5) {
    rollStr = `five`
  } else if (rollNum === 6) {
    rollStr = `six`
  } else {
    rollStr = `I don't know actually...`
  }

  // Consider:
  // Can you compare the roll with the previous roll, and add the worth "another" before the number to show this this was rolled consecutively?
  let duplicateRoll = ``

  // if the rollNum === prevRollNum, then...
  if (rollNum === prevRollNum) {
    duplicateRoll = `another`
  }

  // update textContent with rollNum
  eleMessage.textContent = `You rolled: ${duplicateRoll} ${rollStr}`

  // Ternary operator (another way to write an if/else statement)
  // eleMessage.textContent = `You rolled: ${(rollNum === prevRollNum) ? `another` : ``} ${rollStr}`

  // Set the value for the next roll
  prevRollNum = rollNum


  ///////////// APPLYING RESULT TO UI /////////////

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





/*
Demonstrating logical operators (multiple conditions)

const myCurrentAge = 18
const citizenOfCan = true

if (myCurrentAge >= 18) {
  if (citizenOfCan === true) {
    console.log(`You can vote!`)
  }
}

if (myCurrentAge >= 18 && citizenOfCan === true) {
  console.log(`You can vote!`)
}
*/