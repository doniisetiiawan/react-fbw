/* eslint-disable react/no-access-state-in-setstate */
import PropTypes from 'prop-types';
import React from 'react';

export default function List(props) {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

List.propTypes = {
  items: PropTypes.instanceOf(Array),
};

List.defaultProps = {
  items: {},
};
