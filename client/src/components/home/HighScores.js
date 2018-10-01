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
            <div id="highScoresCont">
                <h1>High Score List</h1>
                {this.state.users.map(a=>{
                    <p>{a.username}: ${a.bank}</p>
                })}
            </div>
        );
    }
};

export default HighScores;