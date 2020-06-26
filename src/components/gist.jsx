import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-refetch';

function Gist(props) {
  console.log(props);
  return (
    <li>
      {props.description}
      <button type="button" onClick={props.star}>
        +1
      </button>
    </li>
  );
}

const token = 'access_token=123';

const connectWithStar = connect(({ id }) => ({
  star: () => ({
    starResponse: {
      url: `https://api.github.com/gists/${id}/star?${token}`,
      method: 'PUT',
    },
  }),
}));

export default connectWithStar(Gist);

Gist.propTypes = {
  description: PropTypes.string,
  star: PropTypes.func,
};

Gist.defaultProps = {
  description: '',
  star: () => {},
};
