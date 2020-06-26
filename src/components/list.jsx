import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-refetch';
import Gist from './gist';

const List = ({ gists }) => gists.fulfilled && (
<ul>
  {gists.value.map((gist) => (
    <Gist key={gist.id} {...gist} />
  ))}
</ul>
);

const connectWithGists = connect(({ username }) => ({
  gists: `https://api.github.com/users/${username}/gists`,
}));

export default connectWithGists(List);

List.propTypes = {
  gists: PropTypes.objectOf(PropTypes.any),
};

List.defaultProps = {
  gists: {},
};
