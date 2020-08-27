import React from 'react';
import PropTypes from 'prop-types';

function Intro({ eyebrowText, heading, children }) {
  return (
    <div className="relative px-4 py-12 mt-12 sm:px-6 lg:px-8">
      <h2
        style={{ letterSpacing: '0.7rem' }}
        className="text-2xl font-bold leading-none text-center uppercase"
      >
        <span>{eyebrowText}</span>
        <br />
        <span
          style={{ letterSpacing: '0.7rem' }}
          className="mt-4 text-6xl font-bold leading-none text-center uppercase"
        >
          {heading}
        </span>
      </h2>
      <div className="mx-auto mt-6 tracking-widest prose text-center text-white text-shadow">
        {children}
      </div>
    </div>
  );
}

Intro.propTypes = {
  children: PropTypes.node.isRequired,
  eyebrowText: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
};

export { Intro };
