import React, { useEffect, useState } from 'react'
import { hot } from "react-hot-loader/root"

const App = (props) => {
  const fetchMovies = async () => {
    const response = await fetch("/api/v1/movies")
    const responseBody = await response.json()
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return(
    <div className="app">
      <h1>My Favorite Disney Movies</h1>
    </div>
  )
}

export default hot(App)
