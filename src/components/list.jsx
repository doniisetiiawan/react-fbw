import PropTypes from 'prop-types';
import React from 'react';
import Item from './item';

const List = ({ collection, textKey, titleKey }) => (
  <ul>
    {collection.map((item) => (
      <Item
        key={item.id}
        text={item[textKey]}
        title={item[titleKey]}
      />
    ))}
  </ul>
);

export default List;

List.propTypes = {
  collection: PropTypes.arrayOf(PropTypes.object),
  textKey: PropTypes.string,
  titleKey: PropTypes.string,
};

List.defaultProps = {
  collection: [],
  textKey: '',
  titleKey: '',
};
