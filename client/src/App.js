import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from "./components/home/Home"
import Game from "./components/game/Game"

const headerAxios = axios.create()

headerAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Autherization = `Bearer ${token}`
    return config
})

class App extends Component {
  constructor(){
    super()
    this.state = {
      score: []
    }
  }

  getData = () => {
    headerAxios.get('/api/score').then(res => {
        this.setState({
            score: res.data
        })
    })
  }

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" route={props => <Home {...props}/>} />
          <Route path="/game" route={props => <Game {...props}/>} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
