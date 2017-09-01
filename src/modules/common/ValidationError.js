import React from 'react';
import PropTypes from 'prop-types';

function ValidationError({ children }) {
  return <p>{children}</p>;
}

ValidationError.propTypes = {
  children: PropTypes.node,
};

export default ValidationError;
