import React, { useState, useEffect } from 'react'
import { hot } from "react-hot-loader/root"

import MoviesIndex from './MoviesIndex'
import MovieForm from './MovieForm'

const App = (props) => {
  const [movies, setMovies] = useState([])

  const fetchMovies = async () => {
    try {
      const response = await fetch("/api/v1/movies")
      // debugger
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`)
      }
      const parsedResponse = await response.json()
      // debugger
      setMovies(parsedResponse.movies)
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  const addNewMovie = async (moviePayload) => {
    // debugger
    // POST fetch request
    const movieData = {
      movie: moviePayload
    }
    
    try {
      const response = await fetch("/api/v1/movies", {
        method: "POST",
        headers: new Headers({"Content-Type": "application/json"}),
        body: JSON.stringify(movieData)
      })
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`)
      }
      const parsedResponse = await response.json()
      // debugger
      setMovies([
        ...movies,
        parsedResponse.newMovie
      ])
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  return(
    <div className="app">
      <h1>My Favorite Disney Movies</h1>
      <MovieForm addNewMovie={addNewMovie} />
      <MoviesIndex movies={movies} />
    </div>
  )
}

export default hot(App)
