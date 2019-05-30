var prefixes = []
var firsts = []
var middle = []
var suffixes = []

//elements
const nameField = document.querySelector('#name')
const refreshButton = document.querySelector('#refresh')

//events
refreshButton.addEventListener('click', () => {
  generateName()
})

//onload
loadStuff().then(() => {
  generateName()
  nameField.removeAttribute('class')
})