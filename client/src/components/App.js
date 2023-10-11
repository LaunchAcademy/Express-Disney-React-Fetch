import React, { useState, useEffect } from 'react'
import { hot } from "react-hot-loader/root"

import MovieIndex from "./MoviesIndex"
import MovieForm from './MovieForm'

const App = (props) => {

  const [movieObjects, setMovieObjects] = useState([])
  
  useEffect(() => {
    getAllMovies()
  }, [])

  const getAllMovies = async () => {
    const response = await fetch("/api/v1/movies")
    const parsedMovieData = await response.json()
    const movies = parsedMovieData.movies
    setMovieObjects(movies)
  }

  const addNewMovie = async (movieObjectFromForm) => {

    const response = await fetch("/api/v1/movies", { 
      method: "POST",
      body: JSON.stringify({ movie: movieObjectFromForm} ),
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
     })

     const parsedNewMovieData = await response.json()

    const newArrayOfMovies = [...movieObjects, parsedNewMovieData.newMovie]
    setMovieObjects(newArrayOfMovies)
  }


  return(
    <div className="app">
      <h1>My Favorite Disney Movies</h1>
      <MovieForm 
        addNewMovie={addNewMovie}
      />

      <MovieIndex 
        movies={movieObjects}
      />

    </div>
  )
}

export default hot(App)
