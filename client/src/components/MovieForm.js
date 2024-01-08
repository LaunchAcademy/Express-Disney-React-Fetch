import React, { useState } from "react"

const MovieForm = (props) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    releaseYear: "",
    runtime: "",
  })

  // console.log("correct", newMovie)

  const handleChange = (event) => {
    // console.log(event.currentTarget)
    setNewMovie({
      ...newMovie,
      [event.currentTarget.name]: event.currentTarget.value
    })
    // console.log("BAD", newMovie)
  }


  const handleSubmit = (event) => {
    console.log("submitting form, preventing default")
    event.preventDefault()
    props.postNewMovie(newMovie)
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