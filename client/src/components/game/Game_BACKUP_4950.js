import React, { Component } from "react"
import axios from "axios"
import UserInfoBar from "./UserInfoBar"
import Upgrades from "./Upgrades"
import femaleUser from "../../images/femaleUser.png"
import maleUser from "../../images/maleUser.png"


class Game extends Component {
    constructor(props) {
        super(props)
<<<<<<< HEAD
        const { username, userImage, bank, incomePerClick, upgrades, _id } = props.user
=======
        const {username, userImage, bank, incomePerClick, upgrades, _id} = props.user
        console.log("props:", this.props.user.userImage)
>>>>>>> master
        this.state = {
            user: {
                username,
                userImage,
                bank,
                incomePerClick,
                upgrades,
                _id
<<<<<<< HEAD
            }
=======
              },
              isAuthenticated: props.isAuthenticated,
>>>>>>> master
        }
    }

    logout = () => {
        this.props.update(this.state.user, this.state.user._id)
        localStorage.remove('token')
        localStorage.remove('user')
        this.setState({
          user: {
            username: "",
            userImage: "",
            bank: 0,
            incomePerClick: 0,
            upgrades: [],
            _id: ""
          },
          isAuthenticated: false,
        })
      }
    
    //add click to make money functionality

    handleIPC = () => {
        console.log("user:",this.state.user)
        
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                bank: prevState.user.bank + prevState.user.incomePerClick
            }
        }))
        this.props.update(this.state.user, this.state.user._id)
    }


    //any functions that change income amount

    coffeeUpgrade = () => {
        //add $10 more ipc
<<<<<<< HEAD
        if (this.state.bank >= 100 && !this.state.upgrades.includes("coffee")) {
=======
        if(this.state.user.bank >= 100 && !this.state.user.upgrades.includes("coffee")) {
>>>>>>> master
            //styling
            this.setState(prevState => {
                return {
                    user:{
                        ...prevState.user,
                        incomePerClick: prevState.user.incomePerClick + 10,
                        bank: prevState.user.bank - 100,
                        upgrades: [...prevState.user.upgrades, "coffee"]
                    }
                }
            })
            this.props.update(this.state.user, this.state.user._id)
        }
    }



    laptopUpgrade = () => {
        //add $100 more ipc
<<<<<<< HEAD
        if (this.state.bank >= 1000 && !this.state.upgrades.includes("laptop")) {
=======
        if(this.state.user.bank >= 1000 && !this.state.user.upgrades.includes("laptop")) {
>>>>>>> master
            //styling
            this.setState(prevState => {
                return {
                    user:{
                        ...prevState.user,
                        incomePerClick: prevState.user.incomePerClick + 100,
                        bank: prevState.user.bank - 1000,
                        upgrades: [...prevState.user.upgrades, "laptop"]
                    }
                }
            })
            this.props.update(this.state.user, this.state.user._id)
        }
    }

    deskUpgrade = () => {
        //add $100 more ipc
<<<<<<< HEAD
        if (this.state.bank >= 5000 && !this.state.upgrades.includes("desk")) {
=======
        if(this.state.user.bank >= 5000 && !this.state.user.upgrades.includes("desk")) {
>>>>>>> master
            //styling
            this.setState(prevState => {
                return {
                    user:{
                        ...prevState.user,
                        incomePerClick: prevState.user.incomePerClick + 500,
                        bank: prevState.user.bank - 5000,
                        upgrades: [...prevState.user.upgrades, "desk"]
                    }
                }
            })
            this.props.update(this.state.user, this.state.user._id)
        }
    }

    smallOfficeJobUpgrade = () => {
        //add $1000 more ipc
<<<<<<< HEAD
        if (this.state.bank >= 10000 && !this.state.upgrades.includes("smallJob")) {
=======
        if(this.state.user.bank >= 10000 && !this.state.user.upgrades.includes("smallJob")) {
>>>>>>> master
            //styling
            this.setState(prevState => {
                return {
                    user:{
                        ...prevState.user,
                        incomePerClick: prevState.user.incomePerClick + 1000,
                        bank: prevState.user.bank - 10000,
                        upgrades: [...prevState.user.upgrades, "smallJob"]
                    }
                }
            })
            this.props.update(this.state.user, this.state.user._id)
        }
    }

    medOfficeJobUpgrade = () => {
        //add $1000 more ipc
<<<<<<< HEAD
        if (this.state.bank >= 100000 && !this.state.upgrades.includes("medJob")) {
=======
        if(this.state.user.bank >= 100000 && !this.state.user.upgrades.includes("medJob")) {
>>>>>>> master
            //styling
            this.setState(prevState => {
                return {
                    user:{
                        ...prevState.user,
                        incomePerClick: prevState.user.incomePerClick + 10000,
                        bank: prevState.user.bank - 100000,
                        upgrades: [...prevState.user.upgrades, "medJob"]
                    }
                }
            })
            this.props.update(this.state.user, this.state.user._id)
        }
    }

    bigOfficeJobUpgrade = () => {
        //add $1000 more ipc
<<<<<<< HEAD
        if (this.state.bank >= 1000000 && !this.state.upgrades.includes("bigJob")) {
=======
        if(this.state.user.bank >= 1000000 && !this.state.user.upgrades.includes("bigJob")) {
>>>>>>> master
            //styling
            this.setState(prevState => {
                return {
                    user:{
                        ...prevState.user,
                        incomePerClick: prevState.user.incomePerClick + 100000,
                        bank: prevState.user.bank - 1000000,
                        upgrades: [...prevState.user.upgrades, "bigJob"]
                    }
                }
            })
            this.props.update(this.state.user, this.state.user._id)
        }
    }

    render() {
        // console.log("state:", this.state.user)

        return (
            <div className="gameCont">
<<<<<<< HEAD
                <UserInfoBar user={this.state.user} />
                <img id="userImage" onClick={this.handleIPC} src={this.state.userImage} alt="" />
                <Upgrades
=======
                <UserInfoBar user={this.state.user}
                            logout={this.logout}/>
                <img id="userImage" onClick={this.handleIPC} src={this.state.user.userImage === "male" ? maleUser : femaleUser} alt="" />
                <Upgrades 
>>>>>>> master
                    coffee={this.coffeeUpgrade}
                    laptop={this.laptopUpgrade}
                    desk={this.deskUpgrade}
                    smallJob={this.smallOfficeJobUpgrade}
                    medJob={this.medOfficeJobUpgrade}
                    bigJob={this.bigOfficeJobUpgrade}
                />
            </div>
        )
    }
}

export default Game