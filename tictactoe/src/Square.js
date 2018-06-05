import React from 'react';
import './Square.css';

class Square extends React.Component {
  constructor() {
    super();

    this.state = {
      player: '',
    }
  }

  changePlayer = () => {
    const { changeUser, value, position, currentPlayer, playerWinner } = this.props;

    if (this.state.player === '') {
      this.setState({
        player: position[value] = currentPlayer,
      })
      playerWinner();
      changeUser();
    }
  }

  render() {
    return (
      <div className="square" onClick={this.changePlayer}>
        {this.props.children(this.state.player)}
      </div>
    )
  }
}

export default Square;