import express from "express"
import _ from "lodash"

import Movie from "../../../models/Movie.js"

const moviesRouter = new express.Router()

moviesRouter.get("/", (req, res) => {
  res.status(200).json({ movies: Movie.findAll() })
})

moviesRouter.post("/", (req, res) => {
  let newMovieId = Movie.getNextMovieId()
  const newMovie = new Movie({ ...req.body.movie, newMovieId})

  if (newMovie.save()) {
    res.status(201).json({ newMovie })
  } else {
    res.status(422).json({ errors: newMovie.errors })
  }
})

export default moviesRouter