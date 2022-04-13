import React, { useEffect, useState } from 'react'
import { hot } from "react-hot-loader/root"

import MoviesIndex from './MoviesIndex'
import MovieForm from './MovieForm'

const App = (props) => {
  const [moviesData, setMoviesData] = useState([])

  const fetchMovies = async () => {
    try {
      const response = await fetch("/api/v1/movies")
      const responseBody = await response.json()
      // debugger
      setMoviesData(responseBody.movies)
    } catch(error) {
      console.log(`Error in Fetch: ${error.message}`);
    }
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  const postMovie = async (formData) => {
    // debugger
    try {
      const response = await fetch("/api/v1/movies", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify({ movie: formData })
      })
      // body: JSON.stringify( formData )
      // ^ make POST fetch with the data to the backend

      if (!response.ok) {
        // throw error
        console.log("oh no");
      }
      // handle any errs if the backend sends bad data

      const responseBody = await response.json()
      // ^ parsing data from JSON to a JS object
      // debugger
      setMoviesData([
        ...moviesData,
        responseBody.newMovie
      ])
      // ^ updating state with the new movie object (like concating)
    } catch(error) {
      console.log(`Error in Fetch: ${error.message}`);
    }
  }

  return(
    <div className="app">
      <h1>My Favorite Disney Movies</h1>
      <MovieForm postMovie={postMovie} />
      <MoviesIndex movies={moviesData} />
    </div>
  )
}

export default hot(App)
