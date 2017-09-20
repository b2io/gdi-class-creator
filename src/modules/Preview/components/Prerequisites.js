import React from 'react';
import PropTypes from 'prop-types';

function Prerequisites({ hasLaptop, prerequisites }) {
  return (
    <section>
      <h3>Preparation and Prerequisites</h3>
      <div>{prerequisites}</div>
      {hasLaptop && (
        <p>
          If you do not have access to a laptop please contact us before the
          class.
        </p>
      )}
    </section>
  );
}

Prerequisites.propTypes = {
  prerequisites: PropTypes.string.isRequired,

  hasLaptop: PropTypes.bool,
};

Prerequisites.defaultTypes = {
  hasLaptop: false,
};

export default Prerequisites;
