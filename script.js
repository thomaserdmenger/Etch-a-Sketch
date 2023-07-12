// creating the grid
const container = document.querySelector('.container') // getting the container
const userInput = 20 // number of horizontal and vertical boxes
const gaps = userInput + 1 // box's borders: n boxes  = n borders + 1
const boxDimensions = 25 // box's width and height in px

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

// creating hover effect
const boxArr = document.querySelectorAll('.box')

boxArr.forEach(item => item.addEventListener('mouseover', handleClick))

function handleClick(e) {
  e.target.classList.add('color-lightBlue')
}
