import React, { Component } from "react"

class Game extends Component {
    constructor(){
        super()
        this.state = {
            currentIncome: number
        }
    }

    componentDidMount(){
        //get bank account info
    }

    //any functions that change income amount

    render() {
        return (
            <div>
                <PlayerInfo />
                <Upgrades />
            </div>
        )
    }
}

export default Game