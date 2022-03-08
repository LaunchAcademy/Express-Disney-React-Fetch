import express from "express"
import clientRouter from "./clientRouter.js"
import moviesRouter from "./api/v1/moviesRouter.js"

const rootRouter = new express.Router()

rootRouter.use("/api/v1/movies", moviesRouter)

rootRouter.use("/", clientRouter)

export default rootRouter
