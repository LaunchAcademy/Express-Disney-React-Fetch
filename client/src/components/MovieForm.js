import React, { useState } from "react"

const MovieForm = (props) => {

  const [movieFormObject, setMovieFormObject] = useState({
    title: "", 
    releaseYear: "",
    runtime: ""
  })

  const storeWhatTheyTyped = (event) => {
    setMovieFormObject({ 
      ...movieFormObject,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    props.addNewMovie(movieFormObject)
  }

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        id="title"
        name="title"
        type="text"
        value={movieFormObject.title}
        onChange={storeWhatTheyTyped}
      />
      <br />

      <label htmlFor="releaseYear">Release Year:</label>
      <input
        id="releaseYear"
        name="releaseYear"
        value={movieFormObject.releaseYear}
        type="text"
        onChange={storeWhatTheyTyped}
      />
      <br />
      
      <label htmlFor="runtime">Runtime (minutes):</label>
      <input
        id="runtime"
        value={movieFormObject.runtime}
        name="runtime"
        type="text"
        onChange={storeWhatTheyTyped}
      />
      <br />

      <input type="submit" value="Add this Movie" />
    </form>
  )
}

export default MovieForm