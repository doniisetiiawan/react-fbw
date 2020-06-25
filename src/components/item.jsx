import PropTypes from 'prop-types';
import React from 'react';

const Item = ({ text, title }) => (
  <li>
    <h1>{title}</h1>
    {text && <p>{text}</p>}
  </li>
);

export default Item;

Item.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
};

Item.defaultProps = {
  text: '',
  title: '',
};
