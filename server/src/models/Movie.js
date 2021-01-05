import fs from "fs"

const moviesPath = "movies.json"

class Movie {
  constructor({title, releaseYear, runtime}) {
    this.title = title
    this.releaseYear = releaseYear
    this.runtime = runtime
  }

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
    const maxMovie = _.maxBy(this.findAll(), movie => movie.id)
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