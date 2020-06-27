import React from 'react';

export default class Item extends React.PureComponent {
  static whyDidYouRender = true;

  render() {
    return <li>{this.props.item}</li>;
  }
}
