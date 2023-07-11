import express from "express"
import _ from "lodash"

import Movie from "../../../models/Movie.js"

const moviesRouter = new express.Router()
// "/api/v1/movies"
moviesRouter.get("/", (req, res) => {
  res.status(200).json({ arrayOfMoviesFromServer: Movie.findAll() })
})

moviesRouter.post("/", (req, res) => {
  console.log(req.body);
  const newMovie = new Movie(req.body.movie)
console.log(newMovie);
  if (newMovie.save()) {
    res.status(201).json({ newMovie })
  } else {
    res.status(422).json({ errors: newMovie.errors })
  }
})

export default moviesRouter