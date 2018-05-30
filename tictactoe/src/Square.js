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
    const { changeUser, value, position, currentUser, playerWinner } = this.props;

    this.setState({
      position:  position[value] = currentUser
    })
    
    changeUser();
    playerWinner();
    if (this.state.player === '') {
      this.setState({
        player: this.props.currentUser,
      })
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