import React, {Component} from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import ProtectedRoute from './shared/ProtectedRoute'
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
        upgrades: [],
        _id: ""
      },
      authErr: {
        status: '',
        err: '',
      },
      isAuthenticated: false
    }
  }

  // componentDidMount(){
  //   axios.get("/api/scores")
  // }

  getData = () => {
    headerAxios.get(`/api/score/${this.state.user._id}`).then(res => {
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
      this.authErr(err.response.status, err.response.data.err)
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
      this.authErr(err.response.status, err.response.data.err)
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

  //Bud added authErr 02-10-2018 at lunch. This saves any err to state so it can be displayed on the login page. ie "Username incorrect"
  authErr = (status, err) => {
    this.setState(prevstate=>({
      ...prevstate,
      authErr: {
        status: status,
        err: err
      }
    }))
  }


  //Bud added logout functionality 02-10-2018 at lunch. Use where needed
  logout = () => {
    localStorage.remove('token')
    localStorage.remove('user')
    this.setState({
      user: {
        username: "",
      },
      isAuthenticated: false,
      userImage: "",
      bank: 0,
      incomePerClick: 0,
      upgrades: [],
      _id: ""
    })
  }

  verify = () => {
    headerAxios.get('/api/profile')
        .then(res => {
            const { user } = res.data
            this.authenticate(user)
        })
        .catch(err => {
            this.authError("verify", err.status)
        })
}

  render() {
    const { isAuthenticated, loading } = this.state
    console.log(this.state.user)
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" render={props => 
            <Home
              {...this.props}
              signUp={this.signUp}
              login={this.login} />}/>
            
          <ProtectedRoute 
              path="/game" 
              redirectTo="/game"
              isAuthenticated={ isAuthenticated } 
              render={() => 
                <Game 
                  {...this.props}
                  user={this.state.user} />}
              />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;