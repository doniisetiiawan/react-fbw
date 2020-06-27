/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';
import Item from './item';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: ['foo', 'bar'],
    };
  }

  shouldComponentUpdate = (nextProps, nextState) => this.state.items !== nextState.items;

  handleClick = () => {
    const items = this.state.items.slice();
    items.unshift('baz');
    this.setState({
      items,
    });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.items.map((item) => (
            <Item
              key={item}
              item={item}
              onClick={console.log}
            />
          ))}
        </ul>
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}

export default List;
