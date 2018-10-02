import React, { Component } from 'react';
import axios from 'axios'

class HighScores extends Component{
    constructor(){
        super()
        this.state = {
            users:[]
        }
    }

    componentDidMount=()=>{
        axios.get('/api/score/all', (err, users)=>{
            if(err)console.log(err)
            if(users.length<11){
                this.setState({
                    users: [...users]
                })
            } else {
                users = users.slice(0,10)
                this.setState({
                    users: [...users]
                })
            }
        })
    }

    render(){
        return (
            // sorted the high score list by bank account, not sure if using a twice will cause a problem
            <div id="highScoresCont">
                <h1>High Score List</h1>
                {this.state.users.sort((a,b) => b.bank - a.bank).map(a=>{
                    <p>{a.username}: ${a.bank}</p>
                })}
            </div>
        );
    }
};

export default HighScores;