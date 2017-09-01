import React from 'react';
import PropTypes from 'prop-types';

function Textarea({ children }) {
  return <textarea>{children}</textarea>;
}

Textarea.propTypes = {
  children: PropTypes.node,
};

export default Textarea;
