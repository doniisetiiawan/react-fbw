import React from 'react';
import Input from './input';

class Reset extends React.Component {
  handleClick = (e) => {
    e.preventDefault();

    this.element.reset();
  };

  render() {
    return (
      <form>
        <Input
          ref={(element) => (this.element = element)}
        />
        <button type="button" onClick={this.handleClick}>
          Reset
        </button>
      </form>
    );
  }
}

export default Reset;
