//13.1 Usando la función anterior beneficiate de poder conocer el indice del array para crear una función llamada removeItem que pasandole un array y un texto como parametros (los mismos parametros que en el anterior ejercicio) llame a la función anteriormente creada findArrayIndex y obten el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array.

//array anterior
const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]

//función anterior
function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i
    }
  }
}

//Se define la función removeItem que toma dos parámetros: array y text
function removeItem(array, text) {
  //se llama a findArrayIndex para obtener el índice del texto en el array
  const index = findArrayIndex(array, text)
  //si el texto se encuentra en el array, se usa .splice() para eliminar el elemento del array en la posición correspondiente
  if (index !== -1) {
    array.splice(index, 1)
  }
}

// Ejemplos de uso
removeItem(mainCharacters, 'Leia')
console.log(mainCharacters)

removeItem(mainCharacters, 'Rey')
console.log(mainCharacters)
