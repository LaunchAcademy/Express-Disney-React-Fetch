import React, { useEffect, useState } from 'react'
import { hot } from "react-hot-loader/root"

import MoviesIndex from './MoviesIndex';
import MovieForm from "./MovieForm"

const App = (props) => {
  console.log("rendering App");
  const [movies, setMovies] = useState([])
  // console.log(movies);
  // fetch all movies from the backend server
  // store those movies in state here
  // pass movies data to MoviesIndex to display on page
  
  const getAllMovies = async () => {
    // console.log("fetching movies");
    try {
      const response = await fetch("/api/v1/movies")
      if (!response.ok) {
        // const newError = `${response.status} (${response.statusText})`
        // const error = new Error(newError)
        // throw error
        throw(new Error(`${response.status} (${response.statusText})`))
      }
      const responseBody = await response.json()
      // debugger
      // console.log(responseBody);
      setMovies(responseBody.arrayOfMoviesFromServer)
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`);
    }
  }

  useEffect(() => {
    // console.log("in useEffect");
    getAllMovies()
  }, [])

  const postNewMovie = async (formData) => {
    // POST fetch request
    // request will return the newly persisted movie
    // we want to set that new movie in state
    // POST fetch in App where state is defined
    console.log(formData);
    try {
      const response = await fetch("/api/v1/movies", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify({ movie: formData })
      })
      if (!response.ok) {
        throw(new Error(`${response.status} (${response.statusText})`))
      }
      
      const responseBody = await response.json()
      // debugger
      setMovies([...movies, responseBody.newMovie])
      // setMovies([...movies, responseBody])
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`);
    }
  }

  return(
    <div className="app">
      <h1>My Favorite Disney Movies</h1>
      <MovieForm postNewMovie={postNewMovie} />
      <MoviesIndex movies={movies} />
    </div>
  )
}

export default hot(App)
