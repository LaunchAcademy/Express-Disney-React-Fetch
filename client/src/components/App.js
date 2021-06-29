import React, { useEffect, useState } from 'react'
import { hot } from "react-hot-loader/root"

import MoviesIndex from "./MoviesIndex"
import MovieForm from "./MovieForm"

const App = (props) => {
  const [moviesData, setMoviesData] = useState([])
  
  const fetchMovies = async () => {
    const myMovieResponse = await fetch("/api/v1/movies")
    const backendMoviesArray = await myMovieResponse.json()

    setMoviesData(backendMoviesArray.movies)
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  const addNewMovie = async (newMoviePayload) => {
    const movieResponse = await fetch("/api/v1/movies", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(newMoviePayload)
    })

    const newMovieWithId = await movieResponse.json()

    setMoviesData([...moviesData, newMovieWithId])
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
