// define sample function to randomly return a item in an array
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

// define generatePassword function
function generatePassword(option) {
  // define things users might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  // create a collection to store things user picked up
  let collection = []

  if (option.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''))
  }

  if (option.uppercase === 'on') {
    collection = collection.concat(upperCaseLetters.split(''))
  }

  if (option.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }

  if (option.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }

  // console.log('collection', collection)

  // remove things user do not need
  if (option.excludeCharacters) {
    // console.log(option.excludeCharacters)
    collection = collection.filter(
      character => !option.excludeCharacters.includes(character)
      // if the character includes in 'excludeCharacters',
      // return false to remove the character in the collection
      // otherwise, return true to keep the character in the collection
    )
  }
  console.log('collection', collection)

  if (collection.length === 0) {
    return 'There is not any vaild character here.'
  }

  // start generating password
  let password = ''
  for (let i = 1; i <= option.length; i++) {
    password += sample(collection)
  }

  // return the generated password
  return password

  console.log('This function will generate password.')
}

// export generatePassword function for other files to use
module.exports = generatePassword