import React, {Component} from "react"
import { Switch, Route } from "react-router-dom"
import axios from "axios"
import Home from "./components/home/Home"
import Game from "./components/game/Game"

const headerAxios = axios.create()

headerAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

class App extends Component {
  constructor(){
    super()
    this.state = {
      user: {
        username: "",
        userImage: "",
        bank: 0,
        incomePerClick: 0,
        upgrades: []
      },
      isAuthenticated: false
    }
  }

  // componentDidMount(){
  //   axios.get("/api/scores")
  // }

  getData = () => {
    headerAxios.get('/api/score').then(res => {
        this.setState({
          user: res.data,
        })
    })
  }

  signUp = userInfo => {
    axios.post("/auth/signup", userInfo).then(res => {
      const {user, token} = res.data
      localStorage.setItem("token", token)
      localStorage.setItem("user", JSON.stringify(user))
      this.authenticate(user)
    }).catch(err => {
      console.log(err)
    })
  }

  login = userInfo => {
    axios.post("/auth/login", userInfo).then(res => {
      console.log(res.data)
        const {user, token} = res.data
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        this.authenticate(user)
    }).catch(err => {
        console.log(err)
    })
  }

  authenticate = user => {
    this.setState(prevState => ({
        user: {
            ...user
        },
        isAuthenticated: true
    }), () => {
        this.getData()
    })
  }

  render() {
    console.log(this.state.user)
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" render={props => 
            <Home
              {...props}
              signUp={this.signUp}
              login={this.login} />}/>
          <Route path="/game" render={props => 
            <Game 
              {...props}
              user={this.state.user} />} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
