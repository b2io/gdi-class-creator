import React from 'react';
import PropTypes from 'prop-types';

function Location({ address, hasRefreshments, name, notes }) {
  return (
    <section>
      <h3>Location</h3>
      <div>
        <p>
          This course is being hosted by {name} located at {address}.
        </p>
        {notes}
      </div>
      {hasRefreshments && <p>Food will be provided.</p>}
    </section>
  );
}

Location.propTypes = {
  address: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,

  hasRefreshments: PropTypes.bool,
  notes: PropTypes.string,
};

Location.defaultProps = {
  hasRefreshments: false,
};

export default Location;
