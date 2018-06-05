import React from 'react';
import axios from 'axios';

class Score extends React.Component {
    constructor() {
        super();
        this.state = {
            historicOfMatch: [],
        }
    }
    
    componentDidMount() {
        axios
        .get("api/match")
        .then(response => this.setState({
            historicOfMatch: response.data,
        }));
    }
    
    render (){
        return(
            <div>
            {this.state.historicOfMatch.map((i)=><div className='player'><h5> PARTIDA: {i.partida}</h5> <p> GANHADOR: PLAYER {i.ganhador} </p> <p> DATA: {i.data} </p></div>)}
            </div>
        )
    }
}

export default Score;