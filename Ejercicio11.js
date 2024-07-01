//11.1 Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito. Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos. Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.Este ejercicio es un poco complicado con los conocimientos actuales pero...a la vez un buen reto y oportunidad para comprender que hay muchas formas de hacer las cosas en javascript.

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

//Se crea un objeto vacío para almacenar los conteos de cada sonido
const soundCount = {}

//bucle for...of para recorrer cada usuario en el array users
for (const user of users) {
  //bucle for...in para recorrer cada sonido favorito del usuario actual
  for (const sound in user.favoritesSounds) {
    //se verifica si ya existe en el objeto soundCount. Si existe, se incrementa su valor en 1. Si no existe, se añade al objeto con un valor inicial de 1
    if (soundCount[sound]) {
      soundCount[sound]++
    } else {
      soundCount[sound] = 1
    }
  }
}

console.log(soundCount)
//{ waves: 3, rain: 1, firecamp: 3, shower: 2, train: 2, wind: 1 }
