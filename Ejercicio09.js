// 9.1 Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse.Para filtrar las categorías puedes ayudarte de la función .includes().

const movies = [
  {
    title: 'Bracula: Condemor II',
    duration: 192,
    categories: ['comedia', 'aventura']
  },
  {
    title: 'Spider-Man: No Way Home',
    duration: 122,
    categories: ['aventura', 'acción']
  },
  {
    title: 'The Voices',
    duration: 223,
    categories: ['comedia', 'thriller']
  },
  {
    title: 'Shrek',
    duration: 111,
    categories: ['comedia', 'aventura', 'animación']
  }
]

// se crea un array vacío para almacenar las categorías únicas
const uniqueCategories = []
//Se usa un bucle for...of para recorrer cada película en el array movies
for (const movie of movies) {
  //se usa otro bucle for...of para recorrer cada categoría de la película actual
  for (const category of movie.categories) {
    //Se utiliza includes() para verificar si la categoría actual ya está en el array uniqueCategories
    if (!uniqueCategories.includes(category)) {
      //Si la categoría no está en el array, se agrega usando .push()
      uniqueCategories.push(category)
    }
  }
}

console.log(uniqueCategories)
