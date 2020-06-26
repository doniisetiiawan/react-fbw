/* eslint-disable react/no-access-state-in-setstate */
import React from 'react';
import Buttons from './buttons';
import Display from './display';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  handleIncrement = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  handleDecrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  render() {
    return (
      <div>
        <Display counter={this.state.counter} />
        <Buttons
          onIncrement={this.handleDecrement}
          onDecrement={this.handleIncrement}
        />
      </div>
    );
  }
}

export default Counter;
