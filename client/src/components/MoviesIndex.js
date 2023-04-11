import React from "react";
import MovieTile from "./MovieTile";

const MoviesIndex = (props) => {
  // console.log("index", props);
  const movies = props.movies.map((movie) => {
    return <MovieTile key={movie.id} movie={movie} />;
  });
  return <ul className="list">{movies}</ul>;
};

export default MoviesIndex;
