//4.1 Dado el siguiente array, devuelve un array con sus nombres utilizando .map().
const users1 = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
]

const returnNames = users1.map((user) => user.name)
console.log(returnNames)

//4.2 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.
const users2 = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
]
const modifiedNames = users2.map((user) => {
  // Verifico si el nombre comienza con 'A'
  if (user.name.startsWith('A')) {
    return { ...user, name: 'Anacleto' } // Modificar el nombre a 'Anacleto'
  } else {
    return { ...user } // Mantener el objeto sin modificar
  }
})

// El array con los valores de la propiedad .name
const namesList = modifiedNames.map((user) => user.name)
console.log(namesList)

//4.3 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y añade al valor de .name el string ' (Visitado)' cuando el valor de la propiedad isVisited = true.
const cities = [
  { isVisited: true, name: 'Tokyo' },
  { isVisited: false, name: 'Madagascar' },
  { isVisited: true, name: 'Amsterdam' },
  { isVisited: false, name: 'Seul' }
]

const visitedCities = cities.map((city) => {
  // Verifico si la ciudad ha sido visitada
  if (city.isVisited) {
    return { ...city, name: city.name + ' (Visitado)' } // Agrego '(Visitado)' al nombre
  } else {
    return { ...city } // Mantengo el objeto sin modificar
  }
})

const citiesList = visitedCities.map((city) => city.name)

console.log(citiesList)
