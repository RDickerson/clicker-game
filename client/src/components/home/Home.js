import React, { Component } from 'react';
import HighScores from "./HighScores"
import femaleUser from "../../images/femaleUser.png"
import maleUser from "../../images/maleUser.png"


class Home extends Component {
    constructor(){
        super()
        this.state = {
            username: "",
            password: "",
            selectedGender: "male",
            logUsername:"",
            logPassword:"",
        }
    }

    handleGenderChange = e => {
        this.setState({
            selectedGender: e.target.value
        })
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLoginChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSignUpSubmit = e => {
        e.preventDefault()
        const newUser = {
            username: this.state.username,
            password: this.state.password,
            userImage: this.state.selectedGender
        }
        this.props.signUp(newUser)
    }

    handleLoginSubmit = e => {
        e.preventDefault()
        const user = {
            username: this.state.logUsername,
            password: this.state.logPassword
        }
        this.props.login(user)
    }

    render() {
        return (
            <div id="logInCont">
                <h1>Clicker Game</h1>
                <form id="signUpForm" onSubmit={this.handleSignUpSubmit}>
                    <input onChange={this.handleChange} type="text" name="username" value={this.state.username} placeholder="username"/>
                    <input onChange={this.handleChange} type="password" name="password" value={this.state.password} placeholder="password"/>
                    <p>Choose your character:</p>
                    <label className="radio">
                        <input type="radio" value="male" 
                            checked={this.state.selectedGender === "male"}
                            onChange={this.handleGenderChange}/>
                        <img src={maleUser} alt="" height="100px"/>
                    </label>
                    <label className="radio">
                        <input type="radio" value="female" 
                            checked={this.state.selectedGender === "female"}
                            onChange={this.handleGenderChange}/>
                        <img src={femaleUser} alt="" height="100px"/>
                    </label>
                    <button id="signUpBttn">Sign Up</button>
                </form>
                <HighScores />
                <form onSubmit={this.handleLoginSubmit}>
                    <input onChange={this.handleLoginChange} type="text" name="logUsername" value={this.state.logUsername} placeholder="username"/>
                    <input onChange={this.handleLoginChange} type="password" name="logPassword" value={this.state.logPassword} placeholder="password"/>
                    <button id="logInBttn">Log In</button>
                </form>
            </div>
        )
    }
}

export default Home;