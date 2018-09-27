import React, { Component } from "react"
import femaleUser from "../../images/femaleUser.png"
import maleUser from "../../images/maleUser.png"

class LogInForm extends Component {
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

    render() {
        return (
            <form id="signUpForm">
                User Name:<input type="text" name="userName"/>
                Password:<input type="text" name="password"/>
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
            </form>
        )
    }
}

export default LogInForm