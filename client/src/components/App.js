import React, { useEffect, useState } from "react"
import { hot } from "react-hot-loader/root"

import MovieForm from "./MovieForm"
import MoviesIndex from "./MoviesIndex"

const App = (props) => {
  const [movies, setMovies] = useState([])

  const fetchMovies = async () => {
    // debugger
    try {
      const response = await fetch("/api/v1/movies")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const body = await response.json()
      // debugger
      setMovies(body.movies)
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  const postMovie = async (formPayload) => {
    // debugger
    try {
      const response = await fetch("/api/v1/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ movie: formPayload})
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const body = await response.json()
      // debugger
      setMovies([
        ...movies,
        body.newMovie
      ])
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return(
    <div className="app">
      <h1>My Favorite Disney Movies</h1>
      <MovieForm postMovie={postMovie} />

      <MoviesIndex movies={movies} />
    </div>
  )
}

export default hot(App)
