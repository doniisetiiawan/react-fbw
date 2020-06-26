import React from 'react';

class Controlled extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: 'Dan',
      lastName: 'Abramov',
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `${this.state.firstName} ${this.state.lastName}`,
    );
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Controlled;
