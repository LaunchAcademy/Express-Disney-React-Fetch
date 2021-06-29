import React from 'react'
import { hot } from "react-hot-loader/root"
import { BrowserRouter, Route } from "react-router-dom"

import App from "./App"
import SecretScreeningOfWaterWorld from "./SecretScreeningOfWaterWorld"

const Routes = (props) => {
  return (
    <BrowserRouter>
      <Route path="/dragons" component={App} />
      <Route path="/secret-movie" component={SecretScreeningOfWaterWorld} />
    </BrowserRouter>
  )
}

export default hot(Routes)