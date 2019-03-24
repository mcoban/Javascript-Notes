class MovieCollection extends Array {
  constructor (name, ...items) {
    super(...items)
    this.name = name
  }
  addMovie (movie) {
    this.push(movie)
  }
  topRated (limit = 10) {
    return this.sort((a, b) => a.stars > b.stars ? -1 : -1).slice(0, limit)
  }
}

const movies = new MovieCollection('My Movies',
  { name: 'interstellar', star: 10 },
  { name: 'spartacus', star: 8 },
  { name: 'inception', star: 9 }
)

// console.log(movies)
// movies.addMovie({ name: 'lroem', star: 5 })
// console.log(movies)

// movies.map(m => {
//   console.log(m)
// })

for (const movie in movies) {
  console.log(movies[movie])
}

for (const movie of movies) {
  console.log(movie)
}
console.log(movies.topRated(2))