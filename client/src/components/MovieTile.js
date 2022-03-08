import React from "react"

const MovieTile = props => {
  let runtime = props.movie.runtime + " minutes"
  let textArray = [props.movie.title, props.movie.releaseYear, runtime]
  let text = textArray.join(" - ")

  return <li className="tile">{text}</li>
}

export default MovieTile
