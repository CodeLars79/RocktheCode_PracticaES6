//10.1 Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.

const users = [
  {
    name: 'Alberto',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 50 },
      rain: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Antonio',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 30 },
      shower: { format: 'ogg', volume: 55 },
      train: { format: 'mp3', volume: 60 }
    }
  },
  {
    name: 'Pedro',
    favoritesSounds: {
      shower: { format: 'mp3', volume: 50 },
      train: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Cristina',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 67 },
      wind: { format: 'ogg', volume: 35 },
      firecamp: { format: 'mp3', volume: 60 }
    }
  }
]

//Se crean dos variables: totalVolume para almacenar la suma total de los volúmenes y count para contar el número de sonidos
let totalVolume = 0
let count = 0

//Se usa un bucle for...of para recorrer cada usuario en el array users
for (const user of users) {
  //se usa un bucle for...in para recorrer cada sonido favorito del usuario actual
  for (const sound in user.favoritesSounds) {
    // la suma del volumen del sonido actual
    totalVolume += user.favoritesSounds[sound].volume
    //y se incrementa count en 1
    count++
  }
}
//Después de recorrer todos los usuarios y sus sonidos favoritos, se calcula la media dividiendo
const averageVolume = totalVolume / count

console.log(averageVolume)
