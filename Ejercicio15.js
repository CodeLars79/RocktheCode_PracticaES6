//15.1 Crea una función llamada swap que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante.

const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
]

//Función swap
function swap(array, index1, index2) {
  // Verificar que los índices sean válidos
  if (
    index1 >= 0 &&
    index1 < array.length &&
    index2 >= 0 &&
    index2 < array.length
  ) {
    // Intercambiar los elementos en los índices proporcionados
    let temp = array[index1]
    array[index1] = array[index2]
    array[index2] = temp
  }
  return array
}

console.log(swap(fantasticFour, 0, 2))