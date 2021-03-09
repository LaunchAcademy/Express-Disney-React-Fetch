import React from "react"

const MovieForm = (props) => {

  return (
    <form>
      <label htmlFor="title">Title:</label>
      <input
        id="title"
        type="text"
      />
      <br />

      <label htmlFor="releaseYear">Release Year:</label>
      <input
        id="releaseYear"
        type="text"
      />
      <br />
      
      <label htmlFor="runtime">Runtime (minutes):</label>
      <input
        id="runtime"
        type="text"
      />
      <br />

      <input type="submit" value="Add this Movie" />
    </form>
  )
}

export default MovieForm