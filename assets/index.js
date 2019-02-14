//indie band generator
const prefixes = [
  'The',
  'Los'
]

const first = [
  'Banana',
  'Broken',
  'Black',
  'Crystal',
  'Dirty',
  'Freezer',
  'Honey',
  'Hot',
  'Himalaia',
  'Jack',
  'Jamaica',
  'Jelly',
  'Last',
  'Lonely',
  'Michael Douglas',
  'Parrot',
  'Pizza',
  'Rocket',
  'White'
]

const middle = [
  ' &',
  ' and the',
  ' of the',
  ' the',
]

const suffixes = [
  'Blood',
  'Cats',
  'Crash',
  'Death Metal',
  'Diamond',
  'Diamonds',
  'Dragon',
  'Dragons',
  'Driver',
  'Glasses',
  'Killer',
  'Killers',
  'Machine',
  'Monkeys',
  'Sons',
  'Stone',
  'Suspect',
  'Suspects',
]

const getRandom = array => {
  return array[Math.floor(Math.random() * array.length)]
}

const decide = () => {
  return Math.round(Math.random()) === 1
}

const buildName = () => {
  let name = ''
  const usePrefix = decide()

  if (usePrefix) {
    name += getRandom(prefixes)
  }

  name += ' ' + getRandom(first)

  if (!usePrefix && decide()) {
    name += getRandom(middle)
  }
  name += ' ' + getRandom(suffixes)
  return name.trim()
}

document.addEventListener('DOMContentLoaded', function (event) {
  document.querySelector('#name').innerHTML = buildName()

  const refreshButton = document.querySelector('#refresh')
  refreshButton.addEventListener('click', () => {
    document.querySelector('#name').innerHTML = buildName()
  })
})
