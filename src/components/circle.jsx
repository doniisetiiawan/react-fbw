import PropTypes from 'prop-types';
import React from 'react';

const Circle = ({
  x, y, radius, fill,
}) => (
  <svg>
    <circle cx={x} cy={y} r={radius} fill={fill} />
  </svg>
);

export default Circle;

Circle.propTypes = {
  fill: PropTypes.string,
  radius: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number,
};

Circle.defaultProps = {
  fill: 'red',
  radius: 0,
  x: 0,
  y: 0,
};
