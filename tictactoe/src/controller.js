import React from 'react';

class Controller extends React.Component {
    changePlayer = () => {
       alert('oi')
    }
    render(){
        return(
            <div>
                {this.props.position}
            </div>
        )
    }

}

export default Controller;