import React from 'react';
import PropTypes from 'prop-types';

function Contact({ contactInformation, name }) {
  return (
    <section>
      <p>
        Questions about this event? Get in touch with {name} at{' '}
        <a href={`mailto:${contactInformation}`}>{contactInformation}</a>.
      </p>
    </section>
  );
}

Contact.propTypes = {
  contactInformation: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Contact;
