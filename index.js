//document.querySelector('body').style.background = 'red'
const wins = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
]

let currentTurn = 'X'
let countturn = 0
let gameOver = false
let xwon = 0
let owon = 0
let tie = 0
const changeTurn = () => {
  currentTurn = currentTurn === 'X' ? 'O' : 'X'
  let turnDisplay = document.querySelector('.turn-display')
  turnDisplay.innerText = currentTurn
}

const checkWin = () => {
  let boxSymbol = document.getElementsByClassName('box-symbol')
  wins.forEach((combination) => {
    if (
      boxSymbol[combination[0]].innerText ===
        boxSymbol[combination[1]].innerText &&
      boxSymbol[combination[1]].innerText ===
        boxSymbol[combination[2]].innerText &&
      boxSymbol[combination[0]].innerText !== ''
    ) {
      gameOver = true
      if (boxSymbol[combination[0]].innerText === 'X') {
        countturn = 0
        xwon++
      } else if (boxSymbol[combination[0]].innerText === 'O') {
        countturn = 0
        owon++
      }

      let xScore = document.querySelector('.x-won')
      xScore.innerText = xwon
      let oScore = document.querySelector('.o-won')
      oScore.innerText = owon
    }
    if (countturn === 9 && gameOver == false) {
      gameOver = true
      countturn = 0
      tie++
      let tiescore = document.querySelector('.tie')
      tiescore.innerText = tie
    }
  })
}

var boxes = document.getElementsByClassName('box')
Array.from(boxes).forEach((element) => {
  let boxSymbol = element.querySelector('.box-symbol')
  element.addEventListener('click', () => {
    if (boxSymbol.innerText === '' && gameOver === false) {
      boxSymbol.innerText = currentTurn
      countturn++
      changeTurn()
      checkWin()
    }
  })
})

let reset = document.querySelector('.Reset')
reset.addEventListener('click', () => {
  boxes = document.getElementsByClassName('box')
  Array.from(boxes).forEach((element) => {
    boxSymbol = element.querySelector('.box-symbol')
    boxSymbol.innerText = ''
  })
  gameOver = false
  countturn = 0
  currentTurn = 'X'
  turnDisplay = document.querySelector('.turn-display')
  turnDisplay.innerText = currentTurn
})
// Array.from(boxes).forEach((ele) => {
//   ele.addEventListener('click', (e) => {
//     alert(e.target.getAttribute('id'))
//   })
// })

//const arrayOfStrings = ['Hello', 'World', 'JavaScript', 'Array', 'Example']

// // Adding a new element to the end of the array
// arrayOfStrings.push('New Element')

// console.log(arrayOfStrings) // Output: ["Hello", "World", "JavaScript", "Array", "Example", "New Element"]

// const arrayOfStrings = [
//   'Hello',
//   'World',
//   'JavaScript',
//   'Array',
//   'Example',
//   'New Element',
// ]

arrayOfStrings.forEach((str) => {
  console.log(str)
})
// console.log(arrayOfStrings[0])
// console.log(arrayOfStrings[1])
