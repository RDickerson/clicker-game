import React, { Component } from 'react';
import axios from 'axios'
import HighScoresList from './HighScoresLists'

class HighScores extends Component{
    constructor(){
        super()
        this.state = {
            users:[]
        }
    }

    componentDidMount=()=>{
        axios.get('/all').then(res => {
            const data = res.data.sort((a,b) => { 
                return b.bank - a.bank})
            if(data.length<11){
                this.setState({
                    users: [...data.users]
                })
            } else {
                const listOfTen = data.slice(0,10)
                this.setState({
                    users: [...listOfTen]
                })
            }
        })
    }

    render(){
        // console.log(this.state.users)
       const scores = this.state.users.map(user=> <HighScoresList {...user}/> )
       console.log(scores)
        return (
            // sorted the high score list by bank account, not sure if using a twice will cause a problem
            <div id="highScoresCont">
                <h1>High Score List</h1>
                {scores}

            </div>
        );
    }
};

export default HighScores;