import React from 'react';
import PropTypes from 'prop-types';
import { isNil } from 'lodash';

function Preview(props) {
  const {
    contact,
    course,
    date,
    instructor,
    hasLaptop,
    policies,
    sponsor,
    time,
  } = props;
  return (
    <main>
      {course && (
        <section>
          <h2>{course.name}</h2>
          <p>Time: {time}</p>
          <p>Date: {date}</p>
          <p>Location: {sponsor.name}</p>
          <div>{course.description}</div>
        </section>
      )}

      {instructor && (
        <section>
          <h3>Instructor:</h3>
          <h4>{instructor.name}</h4>
          <div>{instructor.bio}</div>
        </section>
      )}

      {policies && (
        <div>
          <section>
            <h3>{!isNil(policies.REFUNDS) && policies.REFUNDS.header}</h3>
            <p>{!isNil(policies.REFUNDS) && policies.REFUNDS.text}</p>
          </section>
          <section>
            <h3>{!isNil(policies.WAITLIST) && policies.WAITLIST.header}</h3>
            <p>{!isNil(policies.WAITLIST) && policies.WAITLIST.text}</p>
          </section>
          <section>
            <h3>
              {!isNil(policies.AGE_RESTRICTION) &&
                policies.AGE_RESTRICTION.header}
            </h3>
            <p>
              {!isNil(policies.AGE_RESTRICTION) &&
                policies.AGE_RESTRICTION.text}
            </p>
          </section>
          <section>
            <h3>
              {!isNil(policies.CODE_OF_CONDUCT) &&
                policies.CODE_OF_CONDUCT.header}
            </h3>
            <p>
              {!isNil(policies.CODE_OF_CONDUCT) &&
                policies.CODE_OF_CONDUCT.text}
            </p>
          </section>
          <section>
            <h3>
              {!isNil(policies.LOANER_LAPTOPS) &&
                policies.LOANER_LAPTOPS.header}
            </h3>
            <p>
              {hasLaptop &&
                !isNil(policies.LOANER_LAPTOPS) &&
                policies.LOANER_LAPTOPS.text}
            </p>
          </section>
        </div>
      )}
      {contact && (
        <section>
          <p>{contact.contactInformation}</p>
        </section>
      )}
    </main>
  );
}

Preview.propTypes = {
  contact: PropTypes.shape({
    contactInformation: PropTypes.string,
  }),
  course: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    techRequirements: PropTypes.string,
  }),
  date: PropTypes.object,
  instructor: PropTypes.shape({
    bio: PropTypes.string,
    name: PropTypes.string,
  }),
  policies: PropTypes.shape({
    AGE_RESTRICTION: PropTypes.object,
    CODE_OF_CONDUCT: PropTypes.object,
    LOANER_LAPTOPS: PropTypes.object,
    REFUNDS: PropTypes.object,
    WAITLIST: PropTypes.object,
  }),
  sponsor: PropTypes.shape({
    name: PropTypes.string,
  }),
  time: PropTypes.number,
};

export default Preview;
