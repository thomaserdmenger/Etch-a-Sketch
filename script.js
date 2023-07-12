// creating the grid ------------------------------------
const container = document.querySelector('.container')

// defining the amount of horizontal and vertical boxes
const userInput = 5

// defining the box dimensions
const boxDimensions = 100

for (let i = 1; i <= userInput; i++) {
  for (let j = 1; j <= userInput; j++) {
    // Creating the boxes with the proper dimensions
    const box = document.createElement('div')
    box.classList.add('box')
    box.style.minWidth = `${boxDimensions}px`
    box.style.minHeight = `${boxDimensions}px`

    // appending the boxes as childs to the container and define container width
    container.appendChild(box)
    container.style.maxWidth = `${userInput * boxDimensions}px`
  }
}
