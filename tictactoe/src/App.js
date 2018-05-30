import React, { Component } from 'react';
import './App.css';
import Square from './Square.js';
import './Square.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      board: Array(9).fill(''),
      currentUser: 'X',
      position: Array(9).fill(''),
      teste: this.props.teste
    }
  }

  changeUser = () => {
    this.setState({
      currentUser: this.state.currentUser === 'X' ? "O" : "X",
    })
  }

  playerWinner = () => {
    const {position} = this.state;

    if(position[1] && position[3] && position[6] === "X"){
        alert('X is the winner')
      }
     
    this.setState({
      teste: position
    })
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
      </div>
    );
  }
}

export default App;
