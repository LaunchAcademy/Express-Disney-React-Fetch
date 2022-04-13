import express from "express"
import _ from "lodash"

import Movie from "../../../models/Movie.js"

const moviesRouter = new express.Router()

moviesRouter.get("/", (req, res) => {
  res.status(200).json({ movies: Movie.findAll() })
})

moviesRouter.post("/", (req, res) => {
  console.log(req.body);

  // const newMovie = new Movie(req.body)
  const newMovie = new Movie(req.body.movie)
  console.log(newMovie);
  if (newMovie.save()) {
    console.log(newMovie);
    res.status(201).json({ newMovie })
  } else {
    res.status(422).json({ errors: newMovie.errors })
  }
})

export default moviesRouter