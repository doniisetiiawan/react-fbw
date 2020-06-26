import PropTypes from 'prop-types';
import React from 'react';

export default function Display(props) {
  return <h1>{props.counter}</h1>;
}

Display.propTypes = {
  counter: PropTypes.number,
};

Display.defaultProps = {
  counter: 0,
};
