import React, { Component } from 'react'
import CountUp from './CountUp'
import CountDown from './CountDown'
import Input from './Input'

class App extends Component {
  state = {
    count: 0
  }

  addOne = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  takeAwayOne = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  userInput = (number) => {
    let value = parseInt(number);
    this.setState({
      count: this.state.count + value
    });
  }

  render() {
    return (
      <div className="container">
        <h1>{this.state.count}</h1>
        <CountUp addOne={this.addOne} />
        <CountDown takeAwayOne={this.takeAwayOne} />
        <Input userInput={this.userInput} />
      </div>
    )
  }
}


export default App;
