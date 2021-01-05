import fs from "fs"
import _ from "lodash"

const moviesPath = "movies.json"

class Movie {
  constructor({id, title, releaseYear, runtime}) {  
    this.id = id
    this.title = title
    this.releaseYear = releaseYear
    this.runtime = runtime
  }
  // Added the `id` here to the constructor!
  
  // When we added a new movie and saw errors relating to the `id`, 
    // it was because `getNextMovieId()` was looking through all the movies to find the greatest `id` value,
    // but the `Movie` objects were created without an `id` because it was not in the constructor!
  
  // `Movie` objects without an `id` is also the reason for the `key` warning in the console
    // The `Movie` objects did not have an `id` value that was trying to be used for the `key`

  static findAll() {
    const movieData = JSON.parse(fs.readFileSync(moviesPath)).movies
    
    let movies = []
    movieData.forEach(movie => {
      const newMovie = new Movie(movie)
      movies.push(newMovie)
    })
    return movies
  }

  isValid() {
    this.errors = {}
    const requiredFields = ["title"]
    let isValid = true

    for(const requiredField of requiredFields) {
      this.errors[requiredField] = []
      if(!this[requiredField]) {
        isValid = false
        this.errors[requiredField].push("can't be blank")
      }
    }
    return isValid
  }

  static getNextMovieId() {
    const maxMovie = _.maxBy(this.findAll(), (movie) => movie.id)
    return maxMovie.id + 1
  }

  save() {
    if(this.isValid()) {
      delete this.errors
      this.id = this.constructor.getNextMovieId()
      const movies = this.constructor.findAll()
      movies.push(this)
      const data = { movies: movies }
      fs.writeFileSync(moviesPath, JSON.stringify(data))
      return true
    } else {
      return false
    }
  }
}

export default Movie