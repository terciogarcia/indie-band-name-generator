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

    name += ' ' + getRandom(firsts)

    if (!usePrefix && decide()) {
        name += getRandom(middle)
    }
    name += ' ' + getRandom(suffixes)
    return name.trim()
}

const generateName = () => {
    nameField.innerHTML = buildName()
}

let fbService = new FirebaseService()

const loadStuff = async () => {
  prefixes = await fbService.getPrefixes();
  firsts = await fbService.getFirsts();
  middle = await fbService.getMiddle();
  suffixes = await fbService.getSuffixes();
}

/*
setters 

firebase.database().ref('/firsts').set([
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
])

firebase.database().ref('/middle').set([
  ' &',
  ' and the',
  ' of the',
  ' the',
])

firebase.database().ref('/suffixes').set(
[
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
])

*/