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