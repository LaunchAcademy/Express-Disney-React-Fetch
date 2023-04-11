import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader/root";

import MoviesIndex from "./MoviesIndex";
import MovieForm from "./MovieForm";

const App = (props) => {
  const [moviesArray, setMoviesArray] = useState([]);

  // console.log("component is rendering");

  const fetchAllMovies = async () => {
    try {
      // console.log("about to make API fetch for movies");
      const response = await fetch("/api/v1/movies");
      // debugger;
      // error handling!
      const responseBody = await response.json();
      // debugger;
      // console.log("about to set state");
      setMoviesArray(responseBody.allMovies);
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  const postNewMovie = async (formState) => {
    // debugger;
    // we need access to the information the user submitted via the form (form state)
    // POST fetch
    const formattedMovieForPost = {
      movie: formState,
    };
    try {
      const response = await fetch("/api/v1/movies", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(formattedMovieForPost),
      });
      if (!response.ok) {
        // 422, validations
        const error = new Error(`${response.status} (${response.statusText})`);
        throw error;
      }
      const responseBody = await response.json();
      // debugger;
      // const newMoviesArray = [...moviesArray, responseBody.newMovie];
      // setMoviesArray(newMoviesArray);
      setMoviesArray([...moviesArray, responseBody.newMovie]);
    } catch (err) {
      console.error(`Error in fetch : ${err.message}`);
    }
    // when the new movie comes back as a response, set that movie in state
  };

  // console.log(moviesArray);

  useEffect(() => {
    // console.log("in useeffect, about to fetch movies");
    fetchAllMovies();
  }, []);

  return (
    <div className="app">
      <h1>My Favorite Disney Movies</h1>
      <MovieForm postNewMovie={postNewMovie} />
      <MoviesIndex movies={moviesArray} />
    </div>
  );
};

export default hot(App);
