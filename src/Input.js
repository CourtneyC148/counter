import React, { Component } from 'react'

class Input extends Component {
    state = {
        count: ""
    }

    handleChange = (e) => {
        this.setState({
            count: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.userInput(this.state.count);
        this.setState({
           count: ""
       });
      }

    render() {
        return (
        <div className="form-container">
            <form onSubmit={this.handleSubmit}>
                <input className="input" onChange={this.handleChange} value={this.state.count} type="text" placeholder="Add a number here" />
                <button className="btn3">ADD</button>
            </form>
        </div>
        )
    }
}

export default Input

