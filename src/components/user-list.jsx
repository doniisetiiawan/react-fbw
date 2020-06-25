import PropTypes from 'prop-types';
import React from 'react';
import List from './list';

const UserList = ({ users }) => (
  <List
    collection={users}
    textKey="bio"
    titleKey="username"
  />
);

export default UserList;

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
};

UserList.defaultProps = {
  users: [],
};
