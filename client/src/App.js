import React from "react"
import { Switch, Route } from "react-router-dom"

const App = () => {
  return (
    <React.Fragment>
      <Nav />
      <Switch>
        <Route exact path="/" component={ LogIn } />
        <Route path="/game" component={ Game } />
      </Switch>
    </React.Fragment>
  )
}

export default App
