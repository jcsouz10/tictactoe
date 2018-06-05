import React, { Component } from 'react';
import Square from './Square.js';
import Score from './Score.js';
import WinnerOfMatch from './winnerOfMatch.js';
import axios from 'axios'
import './Square.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      position: Array(9).fill(null),
      currentPlayer: 'X',
    }
  }

  changeUser = () => {
    this.setState({
      currentPlayer: this.state.currentPlayer === 'X' ? "O" : "X",
    })
  }

  playerWinner = () => {
    const { position } = this.state;
    if (
      ((position[0] === 'X') && (position[1] === "X") && (position[2] === "X")) ||
      ((position[3] === 'X') && (position[4] === "X") && (position[5] === "X")) ||
      ((position[6] === 'X') && (position[7] === "X") && (position[8] === "X"))
    ) {
      this.setState({
        xWin: true
      })
    } else if (
      ((position[0] === 'O') && (position[1] === 'O') && (position[2] === 'O')) ||
      ((position[3] === 'O') && (position[4] === 'O') && (position[5] === 'O')) ||
      ((position[6] === 'O') && (position[7] === 'O') && (position[8] === 'O'))
    ) {
      this.setState({
        oWin: true,
      })
    } else if (
      (position[0] && position[1] && position[2] && position[3] && position[4] && position[5] && position[6] && position[7] && position[8] !== null)) {
      this.setState({
        stalemate: true
      })
    }
  }

  teste = () => {
    axios.post('/api/match', { firstName: 'Marlon', lastName: 'Bernardes' })
  .then(function(response){
    console.log('salvo com sucesso')
  });  
  }

  render() {
    return (
      <div id="game">
        <div id='head'>
          <button onClick={this.teste}> Oi </button>
          <h5> Tic Tac Toe Jcsouz Games </h5>
        </div>
        <div id="board">
          {this.state.position.map((v, i) => <Square playerWinner={this.playerWinner} position={this.state.position} value={i} key={i} changeUser={this.changeUser} currentPlayer={this.state.currentPlayer}>
            {props => (<span>{props}</span>)}
          </Square>
          )}
        </div>
        <div id='footer'>
          <WinnerOfMatch xWin={this.state.xWin} oWin={this.state.oWin} stalemate={this.state.stalemate} />
        </div>
        <div id="score">
          <h1> SCORE </h1>
          <Score historicOfMatch={this.state.historicOfMatch} />
        </div>
      </div>
    );
  }
}

export default App;
