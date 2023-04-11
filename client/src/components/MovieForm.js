import React, { useState } from "react";

const MovieForm = (props) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    releaseYear: "",
    runtime: "",
  });
  // console.log(newMovie);
  // console.log("form is rendering");

  const handleChange = (event) => {
    // debugger;
    const newStateObject = { ...newMovie, [event.currentTarget.name]: event.currentTarget.value };
    // const newStateObject = { ...newMovie, title: event.currentTarget.value };

    // console.log("about to set state");
    setNewMovie(newStateObject);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // debugger;
    // pass the state of newMovie up to the App parent
    props.postNewMovie(newMovie);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input id="title" type="text" name="title" value={newMovie.title} onChange={handleChange} />
      <br />

      <label htmlFor="releaseYear">Release Year:</label>
      <input
        id="releaseYear"
        type="text"
        name="releaseYear"
        value={newMovie.releaseYear}
        onChange={handleChange}
      />
      <br />

      <label htmlFor="runtime">Runtime (minutes):</label>
      <input
        id="runtime"
        type="text"
        name="runtime"
        value={newMovie.runtime}
        onChange={handleChange}
      />
      <br />

      <input type="submit" value="Add this Movie" />
    </form>
  );
};

export default MovieForm;
