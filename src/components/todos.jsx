/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';
import List from './list';
import Form from './form';

class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: ['foo', 'bar'],
    };
  }

  handleSubmit = (value) => {
    const items = this.state.items.slice();
    items.unshift(value);
    this.setState({
      items,
    });
  };

  render() {
    return (
      <div>
        <List items={this.state.items} />
        <Form onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default Todos;
