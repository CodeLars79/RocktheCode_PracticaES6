//14.1 Crea una función llamada rollDice() que reciba como parametro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función. Como hemos dicho, que la función use el parametro para simular una tirada de dado y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te preocupes! Busca información sobre la función de javascript Math.random()

//función rollDice con un parámetro "sides", que representa el número de caras del dado
function rollDice(sides) {
  //se usa Math.random() para generar un número aleatorio entre 0 y 1. Este número aleatorio se multiplica por el número de caras del dado "sides" y se redondea hacia abajo usando Math.floor() para obtener un número entero entre 0 y sides - 1.
  return Math.floor(Math.random() * sides) + 1
}

// Ejemplos
console.log(rollDice(6))
console.log(rollDice(20))
