import React from 'react';
import PropTypes from 'prop-types';

function Label({ children }) {
  return <label>{children}</label>;
}

Label.propTypes = {
  children: PropTypes.node,
};

export default Label;
