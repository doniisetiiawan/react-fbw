import React from 'react';
import * as PropTypes from 'prop-types';

export default function Buttons(props) {
  return (
    <>
      <button type="button" onClick={props.onIncrement}>
        -
      </button>
      <button type="button" onClick={props.onDecrement}>
        +
      </button>
    </>
  );
}

Buttons.propTypes = {
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
};

Buttons.defaultProps = {
  onIncrement: () => {},
  onDecrement: () => {},
};
