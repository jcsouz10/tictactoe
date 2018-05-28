import React, { Component } from 'react';
import './App.css';
import Square from './Square.js';
import './Square.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      board: Array(9).fill(''),
      currentUser: 'X'
    }
  }

    changeUser = () =>{
      this.setState({
        currentUser: this.state.currentUser === 'X' ? "O" : "X",
      })

    }

  render() {
    return (
      <div id="game">
        <div id='head'>
          <h5 onClick={this.changeUser}> Tic Tac Toe Jcsouz Games </h5>
        </div>
        <div id="board">
          {this.state.board.map((v, i) => <Square key={i} changeUser={this.changeUser} currentUser={this.state.currentUser}>
            {props => (<span>{props}</span>)}
          </Square>
          )}
        </div>
      </div>
    );
  }
}

export default App;
