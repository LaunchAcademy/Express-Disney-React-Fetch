import React, { useEffect, useState } from "react"
import { hot } from "react-hot-loader/root"

import MoviesIndex from "./MoviesIndex"
import MovieForm from "./MovieForm"

import "../assets/scss/main.scss"

const App = (props) => {
  const [movies, setMovies] = useState([])

  const fetchMovies = async () => {
    try {
      const response = await fetch("/api/v1/movies")

      if (!response.ok) {
        const message = `${response.status} (${response.statusText})`
        throw new Error(message)
      }

      const moviesData = await response.json()
      setMovies(moviesData.movies)
    } catch (error) {
      console.error(error)
    }
  }

  const addMovie = async (newMovie) => {
    try {
      const response = await fetch("/api/v1/movies", {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify({ movie: newMovie }),
      })

      if (!response.ok) {
        const message = `${response.status} (${response.statusText})`
        throw new Error(message)
      }

      const movieData = await response.json()

      setMovies([...movies, movieData.newMovie])
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <div className="app">
      <h1>My Favorite Disney Movies</h1>
      <MovieForm addMovie={addMovie} />
      <MoviesIndex movies={movies} />
    </div>
  )
}

export default hot(App)
