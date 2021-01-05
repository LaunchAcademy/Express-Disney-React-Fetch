import React, { useEffect, useState } from 'react'
import { hot } from "react-hot-loader/root"

import MoviesIndex from "./MoviesIndex"
import MovieForm from "./MovieForm"

const App = (props) => {
  const [moviesData, setMoviesData] = useState([])
  
  const fetchMovies = async () => {
    const response = await fetch("/api/v1/movies")
    const responseBody = await response.json()
    setMoviesData(responseBody.movies)
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  const addNewMovie = async (newMoviePayload) => {
    // debugger
    try {
      const response = await fetch("/api/v1/movies", {
        method: "POST",
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(newMoviePayload)
      })
      const responseBody = await response.json()
      // debugger
      const newMovie = responseBody.newMovie
      setMoviesData([
        ...moviesData,
        newMovie
      ])
    } catch(err) {
      console.error("something went wrong!")
    }
  }

  return(
    <div className="app">
      <h1>My Favorite Disney Movies</h1>
      <MovieForm 
        addNewMovie={addNewMovie}
      />
      
      <MoviesIndex 
        movies={moviesData}
      />
    </div>
  )
}

export default hot(App)
