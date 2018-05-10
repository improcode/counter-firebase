import React, { Component } from 'react';


class App extends Component {

    state= {
        counter: 0
    }

    componentDidMount(){
        fetch('https://jfddl4-sandbox.firebaseio.com/artur/counter/.json')
            .then(response => response.json())
            .then(acctualCounterValFromDb => this.setState({counter: acctualCounterValFromDb
        }))
    }

    plusOperation = () => this.setState({counter: this.state.counter + 1}, this.saveCounter)
    minusOperation = () => this.setState({counter: this.state.counter - 1}, this.saveCounter)
    resetOperation = () => this.setState({counter: 0}, this.saveCounter)

    saveCounter = () => {
        fetch(
            'https://jfddl4-sandbox.firebaseio.com/artur/counter/.json',
            {
                method: 'PUT',
                body: JSON.stringify(this.state.counter)
            }
        )
    }


  render() {
    return (
      <div >
        <h1>{this.state.counter}</h1>
          <button onClick={()=>{this.minusOperation()}}>-</button>
          <button onClick={()=>{this.plusOperation()}}>+</button>
          <button onClick={()=>{this.resetOperation()}}>ZERUJ</button>

      </div>
    );
  }
}

export default App;
