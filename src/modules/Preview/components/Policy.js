import React from 'react';
import PropTypes from 'prop-types';

function Policy({ header, text }) {
  return (
    <section>
      <h3>{header}</h3>
      <div>{text}</div>
    </section>
  );
}

Policy.propTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Policy;
