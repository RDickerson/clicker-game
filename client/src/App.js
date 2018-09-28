import React, {Component} from "react"
import { Switch, Route } from "react-router-dom"
import axios from "axios"
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
      user: []
      
    }
  }

  getData = () => {
    headerAxios.get('/api/user').then(res => {
        this.setState({
            user: res.data,
            isAuthenticated: false,
        })
    })
  }

  signUp = userInfo => {
    axios.post("/auth/signup", userInfo).then(res => {
        // const user = res.data.user
        // const token = res.data.token
        const {user, token} = res.data
        //Save the user info in local storage
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        this.authenticate(user)
    }).catch(err => {
        console.log(err)
    })
  }

  login = userInfo => {
    axios.post("/auth/login", userInfo).then(res => {
        // const user = res.data.user
        // const token = res.data.token
        const {user, token} = res.data
        //Save the user info in local storage
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
    return (
      <React.Fragment>
        <Switch>

          {/* props is what routes give you history location match */}
          <Route exact path="/" render={props => 
          <Home 
            {...props}
            signUp={this.signUp}
            login={this.login} />}/>
          <Route path="/game" render={props => <Game {...props}/>} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
