//12.1 Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.

//Sugerencia de función:
//function findArrayIndex(array, text) {}

const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]

//Se define la función findArrayIndex con dos parámetros: array y text
function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i
    }
  }
}

// Ejemplos de uso
console.log(findArrayIndex(mainCharacters, 'Leia'))
console.log(findArrayIndex(mainCharacters, 'Rey'))
