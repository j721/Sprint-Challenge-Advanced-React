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
            this.setState(
                {users:response.data})
            }) 
            .catch(err => console.error(err));
    }
    render(){
        return(
            <div className="card-container" data-testid="axiosReturn">
                {this.state.users.map(player=>(
                    <div className ="card-info">
                        <h1>{player.name}</h1>
                        <h2>{player.country}</h2>
                        <p>Number of Searches:{player.searches}</p>
                    </div>
                ))}
            </div>
        )

    }
}

export default Card; 