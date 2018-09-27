import React, { Component } from 'react';
import SignUpForm from "./SignUpForm"
import HighScores from "./HighScores"

class LogIn extends Component {
    constructor(){
        super()
        this.state = {
            //data from get
        }
    }

    componentDidMount() {
        //get data from server
        //user name
        //bank roll
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
                <button id="logInBttn" onClick={this.handleSignUp}>sign up</button>
                <button id="signUpBttn">log in</button>
                <SignUpForm />
                <HighScores />
            </div>
        );
    }
}

export default LogIn;