import React, { useState } from "react"

const MovieForm = (props) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    releaseYear: "",
    runtime: ""
  })
  
  // console.log(newMovie);

  const handleChange = (event) => {
    // console.log(event.currentTarget.name);
    // console.log(event.currentTarget.value);
    setNewMovie({
      ...newMovie,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.postMovie(newMovie)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        id="title"
        type="text"
        name="title"
        onChange={handleChange}
      />
      <br />

      <label htmlFor="releaseYear">Release Year:</label>
      <input
        id="releaseYear"
        type="text"
        name="releaseYear"
        onChange={handleChange}
      />
      <br />
      
      <label htmlFor="runtime">Runtime (minutes):</label>
      <input
        id="runtime"
        type="text"
        name="runtime"
        onChange={handleChange}
      />
      <br />

      <input type="submit" value="Add this Movie" />
    </form>
  )
}

export default MovieForm