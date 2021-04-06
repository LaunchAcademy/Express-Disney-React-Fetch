import React, { useEffect, useState } from 'react'
import { hot } from "react-hot-loader/root"

import MovieForm from './MovieForm'
import MoviesIndex from "./MoviesIndex"

const App = (props) => {
  const [disneyMovies, setDisneyMovies] = useState([])

  const fetchMovies = async () => {
    // debugger
    try {
      const response = await fetch("/api/v1/movies")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const responseBody = await response.json()
      // debugger
      setDisneyMovies(responseBody.movies)
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  const addNewMovie = async (formPayload) => {
    // post fetch
    // debugger
    try {
      const response = await fetch("/api/v1/movies", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify({movie: formPayload})
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const responseBody = await response.json()
      // debugger
      setDisneyMovies([
        ...disneyMovies,
        responseBody.newMovie
      ])
    } catch(error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    // debugger
    fetchMovies()
  }, [])

  // debugger

  return(
    <div className="app">
      <h1>My Favorite Disney Movies</h1>
      <MovieForm addNewMovie={addNewMovie} />
      <MoviesIndex movies={disneyMovies} />
    </div>
  )
}

export default hot(App)
