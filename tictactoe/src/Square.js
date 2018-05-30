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
      teste:  position.splice(value, 0, currentUser)
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
        {this.props.children(this.state.position)}
        {this.state.teste}
      </div>
    )
  }
}

export default Square;