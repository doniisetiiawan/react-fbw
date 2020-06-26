import React from 'react';

class Button extends React.Component {
  handleEvent = (event) => {
    switch (event.type) {
      case 'click':
        console.log('clicked');
        break;
      case 'dblclick':
        console.log('double clicked');
        break;
      default:
        console.log('unhandled', event.type);
    }
  };

  render() {
    return (
      <button
        type="button"
        onClick={this.handleEvent}
        onDoubleClick={this.handleEvent}
      >
        Click me!
      </button>
    );
  }
}

export default Button;
