import React, { useState } from "react"

const MovieForm = (props) => {
  const [values, setValues] = useState({
    title: "",
    releaseYear: "",
    runtime: "",
  })

  const handleChange = (event) => {
    event.preventDefault()
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const handleClear = () => {
    setValues({
      title: "",
      releaseYear: "",
      runtime: "",
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.addMovie(values)
    handleClear(event)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        id="title"
        type="text"
        name="title"
        value={values.title}
        onChange={handleChange}
      />
      <br />

      <label htmlFor="releaseYear">Release Year:</label>
      <input
        id="releaseYear"
        type="text"
        name="releaseYear"
        value={values.releaseYear}
        onChange={handleChange}
      />
      <br />

      <label htmlFor="runtime">Runtime (minutes):</label>
      <input
        id="runtime"
        type="text"
        name="runtime"
        value={values.runtime}
        onChange={handleChange}
      />
      <br />

      <input type="submit" value="Add this Movie" />
      <button type="button" onClick={handleClear}>
        Clear Form
      </button>
    </form>
  )
}

export default MovieForm
