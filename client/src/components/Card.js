import React from "react";
import axios from "axios";

class Card extends React.Component{
    constructor(){
        super();
        this.state ={
            users: []
        }
    }
    componentDidMount(){
        axios.get("http://localhost:5000/api/players")
        .then(response=>{
            console.log(response.data)
            this.setState({
                users:response.data
            })
        })
    }
    render(){
        return(
            <div className="Card-content" data-testid="axiosCallReturn">
                {this.state.users.map(player=>{
                    <div className="card-div">
                        <h1>{</h1>
                    </div>
                })}

            </div>
        )
    }
}