import React from 'react';
import PropTypes from 'prop-types';

function GradientContainer({ children }) {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black via-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-transparent"
      />
      {children}
    </div>
  );
}

GradientContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export { GradientContainer };
