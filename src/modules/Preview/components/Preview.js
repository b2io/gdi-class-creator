import React from 'react';
import PropTypes from 'prop-types';

function Preview({ instructor }) {
  return (
    <section>
      <h2>Preview</h2>
      <div>{instructor}</div>
    </section>
  );
}

Preview.propTypes = {
  instructor: PropTypes.string,
};

export default Preview;
