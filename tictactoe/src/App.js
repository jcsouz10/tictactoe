import React, { Component } from 'react';
import './App.css';
import Square from './Square.js';
import './Square.css';
import axios from 'axios';
import findWinner from './findWinner.js'
class App extends Component {
  constructor() {
    super();

    this.state = {
      board: Array(9).fill(''),
      currentPlayer: 'X',
      position: Array(9).fill(null),
      xWin: false,
      oWin: false,
      loserAll: false,
      playerCurrentX: [],
      playerCurrentO: {}
    }
  }

  componentDidMount() {
    axios
      .get("api/match")
      .then(response => this.setState({
        playerCurrentX: response.data,
      }));
  }

  changeUser = () => {
    this.setState({
      currentPlayer: this.state.currentPlayer === 'X' ? "O" : "X",
    })
  }

  playerWinner = () => {
    console.log(this.state.playerCurrentX)
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
        loserAll: true
      })
    }
  }

  teste = () => {
    console.log('login clicked')
    let data = JSON.stringify({
        password: this.state.password,
        username: this.state.email
    })

    axios.post('api/match', data, {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    )
}

  render() {
    return (
      <div id="game">
        <div id='head'>
          <h5> Tic Tac Toe Jcsouz Games </h5>
          <button onClick={this.teste}> teste </button>
        </div>
        <div id="board">
          {this.state.board.map((v, i) => <Square playerWinner={this.playerWinner} position={this.state.position} value={i} key={i} changeUser={this.changeUser} currentPlayer={this.state.currentPlayer}>
            {props => (<span>{props}</span>)}
          </Square>
          )}
        </div>
        <div id='head'>
          {this.state.xWin && <h4> PLAYER X WINNER </h4>}
          {this.state.oWin && <h4> PLAYER O WINNER </h4>}
          {this.state.loserAll && <h4> ALL LOSER </h4>}

          <h1 className='player'> SCORE </h1>
          {this.state.playerCurrentX.map((i) => <div className='player'><h5> PARTIDA: {i.partida}</h5> <p> GANHADOR: PLAYER {i.ganhador} </p> <p> DATA: {i.data} </p></div>)}
        </div>
      </div>
    );
  }
}

export default App;
