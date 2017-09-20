import React from 'react';
import PropTypes from 'prop-types';
import Instructor from './Instructor';
import Location from './Location';
import Prerequisites from './Prerequisites';
import Scholarships from './Scholarships';

function Course({
  description,
  hasLaptop,
  hasRefreshments,
  hasScholarships,
  instructor,
  name,
  prerequisites,
  sponsor,
}) {
  return (
    <div>
      <section>
        <h2>{name}</h2>
        <div>{description}</div>
      </section>
      <Instructor {...instructor} />
      {prerequisites && (
        <Prerequisites hasLaptop={hasLaptop} prerequisites={prerequisites} />
      )}
      <Location hasRefreshments={hasRefreshments} {...sponsor} />
      {hasScholarships && <Scholarships />}
    </div>
  );
}

Course.propTypes = {
  description: PropTypes.string.isRequired,
  instructor: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  sponsor: PropTypes.object.isRequired,

  hasLaptop: PropTypes.bool,
  hasRefreshments: PropTypes.bool,
  hasScholarships: PropTypes.bool,
  prerequisites: PropTypes.string,
};

export default Course;
