import React, { useState } from "react"

const MovieForm = (props) => {
  const [movieFormData, setMovieFormData] = useState({
    title: "",
    releaseYear: "",
    runtime: ""
  })

  const handleInputChange = (event) => {
    // debugger
    setMovieFormData({
      ...movieFormData,
     [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const clearForm = () => {
    setMovieFormData({
      title: "",
      releaseYear: "",
      runtime: ""
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.addNewMovie(movieFormData)
    clearForm()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        id="title"
        type="text"
        name="title"
        onChange={handleInputChange}
        value={movieFormData.title}
      />
      <br />

      <label htmlFor="releaseYear">Release Year:</label>
      <input
        id="releaseYear"
        type="text"
        name="releaseYear"
        onChange={handleInputChange}
        value={movieFormData.releaseYear}
      />
      <br />
      
      <label htmlFor="runtime">Runtime (minutes):</label>
      <input
        id="runtime"
        type="text"
        name="runtime"
        onChange={handleInputChange}
        value={movieFormData.runtime}
      />
      <br />

      <input type="submit" value="Add this Movie" />
      <button type="button" onClick={clearForm}>Clear Form</button>
    </form>
  )
}

export default MovieForm