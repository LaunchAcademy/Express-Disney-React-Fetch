import React, { useState } from "react"

const MovieForm = (props) => {
  const [movieRecord, setMovieRecord] = useState({
    title: "",
    releaseYear: "",
    runtime: ""
  })


  const handleChange = (event) => {
    setMovieRecord({ 
      ...movieRecord,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const newPrettyMovie = {
      movie: movieRecord
    }
    
    props.addNewMovie(newPrettyMovie)
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

      <input type="submit" className="button" value="Add This Movie!" />
    </form>
  )
}

export default MovieForm