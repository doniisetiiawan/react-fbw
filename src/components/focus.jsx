import React from 'react';

class Focus extends React.Component {
  handleClick = () => {
    this.element.focus();
  };

  render() {
    return (
      <div>
        <input
          type="text"
          ref={(element) => (this.element = element)}
        />
        <button type="button" onClick={this.handleClick}>Focus</button>
      </div>
    );
  }
}

export default Focus;
