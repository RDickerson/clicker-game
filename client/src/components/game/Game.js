import React, { Component } from "react"
import UserInfoBar from "./UserInfoBar"
import Upgrades from "./Upgrades"

class Game extends Component {
    constructor(){
        super()
        this.state = {
            currentIncome: 0
        }
    }

    componentDidMount(){
        //get bank account info
    }

    //any functions that change income amount

    coffeeUpgrade = () => {
        //add $10 more ipc
        this.setState(prevState => {
            ipc: prevState.ipc + 10
        })
        //change opacity while active
        //time active for 1 min
        //cant activeate again for 5 min
    }

    laptopUpgrade = () => {
        //add $100 more ipc
    }

    render() {
        return (
            <div className="gameCont">
                <UserInfoBar />
                <Upgrades />
            </div>
        )
    }
}

export default Game