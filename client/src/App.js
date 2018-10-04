import React, {Component} from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import ProtectedRoute from './shared/ProtectedRoute'
import axios from "axios"
import Home from "./components/home/Home"
import Game from "./components/game/Game"
import myaudio from './shared/sounds.js'
import swal from 'sweetalert';


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
        incomePerClick: 1,
        upgrades: [],
        _id: ""
      },
      authErr: {
        status: '',
        err: '',
      },
      isAuthenticated: false,
      mute: false,
    }
    myaudio.play()
    myaudio.loop = true
  }

  
  getData = () => {
    headerAxios.get(`/api/score/${this.state.user._id}`).then(res => {
        this.setState({
          user: res.data,
        })
    })
  }

  postScore = (updates, id) => {
    headerAxios.put(`/api/score/${id}`, updates).then(res =>{
        console.log("user has been updated", res)
    })
  }

  logout = (updates, id) => {
    headerAxios.put(`/api/score/${id}`, updates).then(res =>{
      console.log("user has been logged out", res)
      localStorage.removeItem("token")
      localStorage.removeItem('user')
      this.setState({
        user: {
          username: "",
          userImage: "",
          bank: 0,
          incomePerClick: 1,
          upgrades: [],
          _id: ""
        },
        isAuthenticated: false,
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
      swal(this.state.authErr.err)
    })
  }

  login = userInfo => {
    axios.post("/auth/login", userInfo).then(res => {
      const {user, token} = res.data
      localStorage.setItem("token", token)
      localStorage.setItem("user", JSON.stringify(user))
      this.authenticate(user)
    }).catch(err => {
      this.authErr(err.response.status, err.response.data.err)
      swal(this.state.authErr.err)
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

  togplay = () => {
    if(!myaudio.paused){
        myaudio.pause();
      }
    else{
        myaudio.play()
      }
      this.setState(prevstate=>({mute: !prevstate.mute}))
  }

  render() {
    const { isAuthenticated, loading } = this.state
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" render={props => !isAuthenticated
            ? 
                  <Home
                    {...this.props}
                    signUp={this.signUp}
                    login={this.login} 
                    togplay={this.togplay}
                    mute={this.state.mute}/>
            :
                  <Game 
                  {...this.props}
                  logout={this.logout}
                  user={this.state.user}
                  update={this.postScore}
                  togplay={this.togplay}
                  mute={this.state.mute} />
          }/>

          <ProtectedRoute 
              path="/game" 
              redirectTo="/"
              isAuthenticated={ isAuthenticated } 
              render={() => 
                <Game 
                  {...this.props}
                  user={this.state.user}
                  update={this.postScore}
                  togplay={this.togplay}
                  mute={this.state.mute} />}
              />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;