import React from 'react';
import PropTypes from 'prop-types';

function Instructor({ bio, name }) {
  return (
    <section>
      <h3>Instructor</h3>
      <h4>{name}</h4>
      <div>{bio}</div>
    </section>
  );
}

Instructor.propTypes = {
  bio: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Instructor;
