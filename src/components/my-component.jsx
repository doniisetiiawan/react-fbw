import PropTypes from 'prop-types';
import React from 'react';
import withInnerWidth from './with-inner-width';

const MyComponent = ({ innerWidth }) => (
  <div>
    innerWidth:
    {innerWidth}
  </div>
);

export default withInnerWidth(MyComponent);

MyComponent.propTypes = {
  innerWidth: PropTypes.number,
};

MyComponent.defaultProps = {
  innerWidth: 0,
};
