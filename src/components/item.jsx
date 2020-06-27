import PropTypes from 'prop-types';
import React from 'react';

export default class Item extends React.PureComponent {
  static whyDidYouRender = true;

  handleClick = () => {
    this.props.onClick(this.props.item);
  };

  render() {
    return (
      <li onClick={this.handleClick}>{this.props.item}</li>
    );
  }
}

Item.propTypes = {
  item: PropTypes.string,
  onClick: PropTypes.func,
};

Item.defaultProps = {
  item: '',
  onClick: () => {},
};
