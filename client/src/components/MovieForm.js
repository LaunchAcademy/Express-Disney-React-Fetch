import React, { useState } from "react"

const MovieForm = (props) => {
  const [movieRecord, setMovieRecord] = useState({
    title: "",
    releaseYear: "",
    runtime: ""
  })

  const handleChange = (event) => {
    // debugger
    setMovieRecord({
      ...movieRecord,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const clearForm = (event) => {
    event.preventDefault()

    setMovieRecord({
      title: "",
      releaseYear: "",
      runtime: ""
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    
    const formPayload = {
      movie: {
        title: movieRecord.title,
        releaseYear: movieRecord.releaseYear,
        runtime: movieRecord.runtime
      }
    }
    props.addNewMovie(formPayload)
    setMovieRecord({
      title: "",
      releaseYear: "",
      runtime: ""
    })    
  }

  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor="movieTitle">Title
        <input 
          id="movieTitle" 
          name="title" 
          type="text" 
          value={movieRecord.title}
          onChange={handleChange} 
        />
      </label>

      <label htmlFor="movieReleaseYear">Release Year
        <input 
          id="movieReleaseYear" 
          name="releaseYear" 
          type="text" 
          value={movieRecord.releaseYear}
          onChange={handleChange} 
        />
      </label>

      <label htmlFor="movieRuntime">Runtime
        <input 
          id="movieRuntime" 
          name="runtime" 
          type="text" 
          value={movieRecord.runtime}
          onChange={handleChange} 
        />
      </label>

      <input type="submit" className="button" value="Add this Movie!" />
      <button className="button" onClick={clearForm}>Clear</button>
    </form>
  )
}

export default MovieForm