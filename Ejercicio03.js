//3.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsListA = [32, 54, 21, 64, 75, 43]
const pointsListB = [...pointsListA]
console.log(pointsListB)

//3.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toyA = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }
const toyB = { ...toyA }
console.log(toyB)

//3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos.
const pointsList1 = [32, 54, 21, 64, 75, 43]
const pointsList2 = [54, 87, 99, 65, 32]

const pointsListCombined = [...pointsList1, ...pointsList2]
console.log(pointsListCombined)

//3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.
const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }
const toyUpdate = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] }

const toyTotal = { ...toy, ...toyUpdate }
console.log(toyTotal)

//3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']

// Hago una copia del array eliminando la posición 2 usando spread operator y metodo .slice
const colors2 = [...colors.slice(0, 2), ...colors.slice(3)]
console.log(colors2)
