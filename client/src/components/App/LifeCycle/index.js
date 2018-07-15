import React, { Component } from 'react';

class LifeCycle extends Component {
  state = {
    energy: 0,
    gas: 0
  }

  componentWillMount = () => {
    this.setState({energy: 1});
  }

  componentDidMount = () => {
    this.setState({gas: 1});
  }

  render() {
    return (
      <div>
        <div>Energy: {this.state.energy}</div>
        <div>Gas: {this.state.gas}</div>
      </div>
    )
  }
}

export default LifeCycle;