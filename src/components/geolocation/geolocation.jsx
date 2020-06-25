import PropTypes from 'prop-types';
import React from 'react';

const Geolocation = ({ latitude, longitude }) => (
  <div>
    <div>
      Latitude:
      {latitude}
    </div>
    <div>
      Longitude:
      {longitude}
    </div>
  </div>
);

export default Geolocation;

Geolocation.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
};

Geolocation.defaultProps = {
  latitude: 0,
  longitude: 0,
};
