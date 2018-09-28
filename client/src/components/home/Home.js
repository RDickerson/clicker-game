import React, { Component } from 'react';
import HighScores from "./HighScores"
import femaleUser from "../../images/femaleUser.png"
import maleUser from "../../images/maleUser.png"


class LogIn extends Component {
    constructor(){
        super()
        this.state = {
            selectedGender: "male"
        }
    }

    handleGenderChange = e => {
        this.setState({
            selectedGender: e.target.value
        })
    }

    componentDidMount() {
        //get data
    }
    

    mapData = () => {
        //map data from get
    }
    
    handleSignUp = () => {
        //make log in form show up <SignUpForm />
    }
    
    render() {
        return (
            <div id="logInCont">
                <h1>Clicker Game</h1>
                <form id="signUpForm">
                    <input type="text" name="username" value={this.state.username} placeholder="username"/>
                    <input type="text" name="password" value={this.state.password} placeholder="password"/>
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
                    <button id="signUpBttn" onClick={this.props.signUp}>Sign Up</button>
                </form>
                <HighScores />
                <form>
                    <input type="text" name="username" value={this.state.username} placeholder="username"/>
                    <input type="text" name="password" value={this.state.password} placeholder="password"/>
                    <button id="logInBttn" onClick={this.props.login}>Log In</button>
                </form>
            </div>
        )
    }
}


// <div className="auth-page">
// {this.state.formToggle ? <h3>Login</h3> : <h3>Sign Up</h3>}
// {!this.state.formToggle ? <span onClick={this.toggle}>-Already a Member?</span> : <span onClick={this.toggle}>-New Member?</span>}
// {!this.state.formToggle 
//     ? <Form 
//         inputs={{ username: '', password: '' }}
//         submit={inputs => this.props.signUp(inputs)}
//         render={props => <AuthForm {...props} btnText="Sign Up"/>}
//         reset/>
//     : <Form 
//         inputs={{ username: '', password: '' }}
//         submit={inputs => this.props.login(inputs)}
//         render={props => <AuthForm {...props} btnText="Login"/>}
//         reset/>
// }   
// </div>

export default LogIn;