// creating the grid
const container = document.querySelector('.container') // getting the container
let userInput = 20 // number of horizontal and vertical boxes
let gaps = userInput + 1 // box's borders: n boxes  = n borders + 1
const boxDimensions = 25 // box's width and height in px

function createGrid(userInput) {
  for (let i = 1; i <= userInput; i++) {
    for (let j = 1; j <= userInput; j++) {
      // Creating the boxes with the proper dimensions
      const box = document.createElement('div')
      box.classList.add('box')
      box.style.minWidth = `${boxDimensions}px`
      box.style.minHeight = `${boxDimensions}px`

      // appending the boxes as childs to the container and define container width
      container.appendChild(box)
      container.style.maxWidth = `${userInput * boxDimensions + gaps}px`
    }
  }

  // creating hover effect with color lightblue
  const boxArr = document.querySelectorAll('.box')

  boxArr.forEach(item => item.addEventListener('mouseover', handleHover))
  console.log(boxArr)

  function handleHover(e) {
    e.target.classList.add('color-lightBlue')
  }
}

createGrid(userInput)

// creating button for user input to select the number of boxes
const inputContainer = document.createElement('div')
const form = document.createElement('form')

const label = document.createElement('label')
label.textContent = 'Create your own grid. Choose a number between 1 and 60'
label.setAttribute('for', 'input')

const input = document.createElement('input')
input.setAttribute('type', 'number')
input.setAttribute('id', 'input')
input.setAttribute('name', 'input')
input.setAttribute('min', '1')
input.setAttribute('max', '60')

const inputButton = document.createElement('button')
inputButton.textContent = 'Create new grid'

container.insertAdjacentElement('beforebegin', inputContainer)
inputContainer.classList.add('input-container')
inputContainer.appendChild(form)
inputContainer.appendChild(label)
inputContainer.appendChild(input)
inputContainer.appendChild(inputButton)

inputButton.addEventListener('click', handleClick)

function handleClick() {
  const children = document.querySelectorAll('.box')
  const container = document.querySelector('.container')

  children.forEach(item => {
    container.removeChild(item)
    item.classList.remove('box')
  })

  createGrid(input.value)

  container.style.maxWidth = `${+input.value * boxDimensions + +input.value + 1}px`
}
