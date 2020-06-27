import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      value: target.value,
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button
          type="button"
          onClick={() => this.props.onSubmit(this.state.value)}
        >
          +
        </button>
      </div>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
