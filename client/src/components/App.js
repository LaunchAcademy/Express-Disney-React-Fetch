import React from "react"
import { hot } from "react-hot-loader/root"

import "../assets/scss/main.scss"

const App = props => {
  return (
    <div className="app">
      <h1>My Favorite Disney Movies</h1>
    </div>
  )
}

export default hot(App)
