import React, { useState } from "react"

const MovieForm = (props) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    releaseYear: "",
    runtime: ""
  })

  const handleChange = (event) => {
    // console.log(event);
    // console.log(event.currentTarget);
    // console.log(event.currentTarget.name);
    // console.log(event.currentTarget.value);
    
    
    setNewMovie({
      ...newMovie,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // debugger
    props.addNewMovie(newMovie)
    // props.addNewMovie({ movie: newMovie })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        id="title"
        type="text"
        name="title"
        value={newMovie.title}
        onChange={handleChange}
      />
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
  )
}

export default MovieForm