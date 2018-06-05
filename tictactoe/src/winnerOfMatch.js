import React from 'react';

class winnerOfMatch extends React.Component {
    render (){
        return (
            <div>
                {this.props.xWin && <h4> PLAYER X WINNER </h4>}
                {this.props.oWin && <h4> PLAYER O WINNER </h4>}
                {this.props.stalemate && <h4> STALEMATE </h4>}
            </div>
        )
    }
}
export default winnerOfMatch;
