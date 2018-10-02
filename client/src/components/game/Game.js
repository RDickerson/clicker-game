import React, { Component } from "react"
import axios from "axios"
import UserInfoBar from "./UserInfoBar"
import Upgrades from "./Upgrades"

class Game extends Component {
    constructor(props){
        super(props)
        const {username, userImage, bank, incomePerClick, upgrades, _id} = props.user
        this.state = {
            user: {
                username,
                userImage,
                bank,
                incomePerClick,
                upgrades,
                _id
              }
        }
    }

    //add click to make money functionality
    

    //any functions that change income amount

    coffeeUpgrade = () => {
        //add $10 more ipc
        if(this.state.bank >= 100 && !this.state.upgrades.includes("coffee")) {
            //styling
            this.setState(prevState => {
                return {
                    reincomePerClick: prevState.incomePerClick + 10,
                    bank: prevState.bank - 100,
                    upgrades: [...prevState, "coffee"]
                }
            })
            const coffeeUpgrade = {
                upgrades: this.state.upgrades
            }
            axios.put(`/api/score/${this.state.user._id}`, coffeeUpgrade).then(res => {
                console.log(res)
            })
        }
    }
        
    

    laptopUpgrade = () => {
        //add $100 more ipc
        if(this.state.bank >= 1000 && !this.state.upgrades.includes("laptop")) {
            //styling
            this.setState(prevState => {
                return {
                    reincomePerClick: prevState.incomePerClick + 100,
                    bank: prevState.bank - 1000,
                    upgrades: [...prevState, "laptop"]
                }
            })
            const laptopUpgrade = {
                upgrades: this.state.upgrades
            }
            axios.put(`/api/score/${this.state.user._id}`, laptopUpgrade).then(res => {
                console.log(res)
            })
        }
    }

    jobUpgrade = () => {
        //add $1000 more ipc
        if(this.state.bank >= 10000 && !this.state.upgrades.includes("job")) {
            //styling
            this.setState(prevState => {
                return {
                    reincomePerClick: prevState.incomePerClick + 1000,
                    bank: prevState.bank - 10000,
                    upgrades: [...prevState, "job"]
                }
            })
            const jobUpgrade = {
                upgrades: this.state.upgrades
            }
            axios.put(`/api/score/${this.state.user._id}`, jobUpgrade).then(res => {
                console.log(res)
            })
        }
    }

    render() {
        return (
            <div className="gameCont">
                <UserInfoBar user={this.state.user}/>
                <Upgrades 
                    coffee={this.coffeeUpgrade}
                    laptop={this.laptopUpgrade}
                    />
            </div>
        )
    }
}

export default Game