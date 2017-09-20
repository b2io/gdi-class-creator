import React from 'react';
import PropTypes from 'prop-types';
import { isNil, get, map, omit } from 'lodash/fp';
import Contact from './Contact';
import Course from './Course';
import Policy from './Policy';

function Preview(props) {
  const {
    contact,
    course,
    instructor,
    isPaid,
    hasLaptop,
    hasRefreshments,
    hasScholarships,
    policies,
    sponsor,
  } = props;

  const refundPolicy = get('REFUNDS', policies);
  const hasRefundPolicy = !isNil(refundPolicy) && isPaid;
  const otherPolicies = omit(['REFUNDS'], policies);

  return (
    <main>
      {course && (
        <Course
          {...course}
          hasLaptop={hasLaptop}
          hasRefreshments={hasRefreshments}
          hasScholarships={hasScholarships}
          instructor={instructor}
          sponsor={sponsor}
        />
      )}

      {hasRefundPolicy && <Policy {...refundPolicy} />}
      {map(policy => <Policy key={policy.id} {...policy} />, otherPolicies)}

      {contact && <Contact {...contact} />}
    </main>
  );
}

Preview.propTypes = {
  contact: PropTypes.object,
  course: PropTypes.object,
  date: PropTypes.object,
  hasLaptop: PropTypes.bool,
  hasRefreshments: PropTypes.bool,
  hasScholarships: PropTypes.bool,
  instructor: PropTypes.object,
  isPaid: PropTypes.bool,
  policies: PropTypes.shape({
    REFUNDS: PropTypes.object,
  }),
  sponsor: PropTypes.object,
  time: PropTypes.number,
};

export default Preview;
