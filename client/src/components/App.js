import React, { useEffect, useState } from 'react'
import { hot } from "react-hot-loader/root"

import MoviesIndex from "./MoviesIndex"
import MovieForm from "./MovieForm"

const App = (props) => {
  const [moviesData, setMoviesData] = useState([])

  const fetchAllMovies = async () => {
    const promiseResponse = await fetch("/api/v1/movies")
    console.log(promiseResponse)
    const parsedResponse = await promiseResponse.json()
    console.log(parsedResponse)
    setMoviesData(parsedResponse.movies)
  }

  useEffect(() => {
    fetchAllMovies()
  }, [])

  const postNewMovie = async (newMovieData) => {
    // debugger
    // POST fetch
    try {
      const postPromiseResponse = await fetch("/api/v1/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ movie: newMovieData })
      })
      const postParsedResponse = await postPromiseResponse.json()
      // debugger
      setMoviesData([
        ...moviesData,
        postParsedResponse.newMovie
      ])
    } catch (err) {
      console.error(`Error in fetch: ${err}`)
    }
  }

  return(
    <div className="app">
      <h1>My Favorite Disney Movies</h1>
      <MovieForm postNewMovie={postNewMovie} />
      <MoviesIndex movies={moviesData} />
    </div>
  )
}

export default hot(App)
