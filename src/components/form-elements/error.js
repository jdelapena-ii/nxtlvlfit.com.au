import PropTypes from 'prop-types';
import React from 'react';

function Error({ message }) {
  return (
    <p
      role="alert"
      className="absolute text-xs tracking-widest text-red-400 uppercase transform -translate-y-full"
    >
      {message}
    </p>
  );
}

Error.propTypes = {
  message: PropTypes.string,
};

export { Error };
