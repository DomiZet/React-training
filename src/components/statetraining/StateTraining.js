
import React from 'react';
import './Styles.scss';

class StateTraining extends React.Component {

  state = {changeText: "State super text"}

  superText = () => {
    if (this.state.changeText == 'State super text') {
      this.setState({changeText: 'Hello Nobody!'})
    }
  
    else {
      this.setState({changeText: 'State super text'})
    }
  }
  
  render() {

    return (

      <div className="StateTraining">
        
        <p>{this.state.changeText}</p>
        
        <button 
        onClick={this.superText}>
        Click me
        </button>

      </div>

    )

  }

}

export default StateTraining;





  
  
