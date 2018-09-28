import React from "react"
import { Switch, Route } from "react-router-dom"
import LogIn from "./components/home/Home"
import Game from "./components/game/Game"

const App = () => {

  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={ LogIn } />
        <Route path="/game" component={ Game } />
      </Switch>
    </React.Fragment>
  )
}

export default App
