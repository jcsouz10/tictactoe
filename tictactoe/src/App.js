import React, { Component } from 'react';
import './App.css';
import Square from './Square.js';
import './Square.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      board: Array(9).fill(''),
      currentUser: 'X',
      position: Array(9).fill(''),
      xWin: false,
      oWin: false
    }
  }

  changeUser = () => {
    this.setState({
      currentUser: this.state.currentUser === 'X' ? "O" : "X",
    })
  }

  playerWinner = () => {
    const { position } = this.state;

    if (
      (position[0] === 'X') && (position[1] === "X") && (position[2] === "X") ||
      (position[3] === 'X') && (position[4] === "X") && (position[5] === "X") ||
      (position[6] === 'X') && (position[7] === "X") && (position[8] === "X")
    ) {
      this.setState({
        xWin: true
      })
    } else if (
      (position[0] === "O") && (position[1] === "O") && (position[2] === "O") ||
      (position[3] === 'O') && (position[4] === "O") && (position[5] === "O") ||
      (position[6] === 'O') && (position[7] === "O") && (position[8] === "O")
    ) {
      this.setState({
        oWin: true
      })
    }
  }

  render() {
    return (
      <div id="game">
        <div id='head'>
          <h5> Tic Tac Toe Jcsouz Games </h5>

        </div>
        <div id="board">
          {this.state.board.map((v, i) => <Square playerWinner={this.playerWinner} position={this.state.position} value={i} key={i} changeUser={this.changeUser} currentUser={this.state.currentUser}>
            {props => (<span>{props}</span>)}
          </Square>
          )}
        </div>
        <div id='header'>
          {this.state.xWin && <h4> PLAYER X WINNER </h4>}
          {this.state.oWin && <h4> PLAYER O WINNER </h4>}
        </div>
      </div>
    );
  }
}

export default App;
