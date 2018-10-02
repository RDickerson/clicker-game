import React, { Component } from "react"
import axios from "axios"
import UserInfoBar from "./UserInfoBar"
import Upgrades from "./Upgrades"

class Game extends Component {
    constructor(props) {
        super(props)
        const { username, userImage, bank, incomePerClick, upgrades, _id } = props.user
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
        console.log(this.state.userImage)
    }

    //add click to make money functionality

    handleIPC = () => {
        this.setState(prevState => ({
            bank: prevState.bank + prevState.incomePerClick
        }))
    }


    //any functions that change income amount

    coffeeUpgrade = () => {
        //add $10 more ipc
        if (this.state.bank >= 100 && !this.state.upgrades.includes("coffee")) {
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
        if (this.state.bank >= 1000 && !this.state.upgrades.includes("laptop")) {
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

    deskUpgrade = () => {
        //add $100 more ipc
        if (this.state.bank >= 5000 && !this.state.upgrades.includes("desk")) {
            //styling
            this.setState(prevState => {
                return {
                    reincomePerClick: prevState.incomePerClick + 500,
                    bank: prevState.bank - 5000,
                    upgrades: [...prevState, "desk"]
                }
            })
            const deskUpgrade = {
                upgrades: this.state.upgrades
            }
            axios.put(`/api/score/${this.state.user._id}`, deskUpgrade).then(res => {
                console.log(res)
            })
        }
    }

    smallOfficeJobUpgrade = () => {
        //add $1000 more ipc
        if (this.state.bank >= 10000 && !this.state.upgrades.includes("smallJob")) {
            //styling
            this.setState(prevState => {
                return {
                    reincomePerClick: prevState.incomePerClick + 1000,
                    bank: prevState.bank - 10000,
                    upgrades: [...prevState, "smallJob"]
                }
            })
            const smallOfficeJobUpgrade = {
                upgrades: this.state.upgrades
            }
            axios.put(`/api/score/${this.state.user._id}`, smallOfficeJobUpgrade).then(res => {
                console.log(res)
            })
        }
    }

    medOfficeJobUpgrade = () => {
        //add $1000 more ipc
        if (this.state.bank >= 100000 && !this.state.upgrades.includes("medJob")) {
            //styling
            this.setState(prevState => {
                return {
                    reincomePerClick: prevState.incomePerClick + 10000,
                    bank: prevState.bank - 100000,
                    upgrades: [...prevState, "medJob"]
                }
            })
            const medOfficeJobUpgrade = {
                upgrades: this.state.upgrades
            }
            axios.put(`/api/score/${this.state.user._id}`, medOfficeJobUpgrade).then(res => {
                console.log(res)
            })
        }
    }

    bigOfficeJobUpgrade = () => {
        //add $1000 more ipc
        if (this.state.bank >= 1000000 && !this.state.upgrades.includes("bigJob")) {
            //styling
            this.setState(prevState => {
                return {
                    reincomePerClick: prevState.incomePerClick + 10000,
                    bank: prevState.bank - 1000000,
                    upgrades: [...prevState, "bigJob"]
                }
            })
            const bigOfficeJobUpgrade = {
                upgrades: this.state.upgrades
            }
            axios.put(`/api/score/${this.state.user._id}`, bigOfficeJobUpgrade).then(res => {
                console.log(res)
            })
        }
    }

    render() {
        return (
            <div className="gameCont">
                <UserInfoBar user={this.state.user} />
                <img id="userImage" onClick={this.handleIPC} src={this.state.userImage} alt="" />
                <Upgrades
                    coffee={this.coffeeUpgrade}
                    laptop={this.laptopUpgrade}
                    desk={this.deskUpgrade}
                    smallJob={this.officeJobUpgrade}
                    medJob={this.medOfficeJobUpgrade}
                    bigJob={this.bigOfficeJobUpgrade}
                />
            </div>
        )
    }
}

export default Game