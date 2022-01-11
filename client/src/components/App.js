import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";

import MoviesIndex from "./MoviesIndex";
import MovieForm from "./MovieForm";

const App = (props) => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const response = await fetch("/api/v1/movies");
      if (!response.ok) {
        throw new Error(`${response.statusText} ${response.status}`);
      }
      const responseBody = await response.json();
      // debugger
      console.log("about to set state");
      setMovies(responseBody.movies);
    } catch (error) {
      console.log(error);
    }
  };

  // // version 2: GET movies, simplified
  // const fetchMovies = async () => {
  //   const response = await fetch("/api/v1/movies")
  //   const responseBody = await response.json()

  //   setMovies(responseBody.movies)
  // }


  const addNewMovie = async (formPayload) => {
    // debugger
    // POST fetch
    try {
      const response = await fetch("api/v1/movies", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        // body: JSON.stringify(formPayload)
        body: JSON.stringify({ movie: formPayload }),
      });
      if (!response.ok) {
        throw new Error(`${response.statusText} ${response.status}`);
      }
      const responseBody = await response.json();
      // debugger
      setMovies([...movies, responseBody.newMovie]);
      // add new movie to state
    } catch (error) {
      console.log(error);
    }
  };
  // // version 2: POST movies, simplified
  // const addNewMovie = async (formPayload) => {
  //   const response = await fetch("api/v1/movies", {
  //     method: "POST",
  //     headers: new Headers({
  //       "Content-Type": "application/json",
  //     }),
  //     body: JSON.stringify({ movie: formPayload }),
  //   });

  //   const responseBody = await response.json();

  //   setMovies([...movies, responseBody.newMovie]);
  // };

  useEffect(() => {
    console.log("about to fetch");
    fetchMovies();
  }, []);

  return (
    <div className="app">
      <h1>My Favorite Disney Movies</h1>
      <MovieForm addNewMovie={addNewMovie} />
      <MoviesIndex movies={movies} />
    </div>
  );
};

export default hot(App);
