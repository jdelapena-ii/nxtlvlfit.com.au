import React from 'react';
import PropTypes from 'prop-types';

function Intro({ eyebrowText, heading, children }) {
  return (
    <div className="relative px-4 py-12 mt-12 sm:text-center sm:px-6 lg:px-8">
      <h2 className="font-bold tracking-widest uppercase sm:text-2xl sm:leading-none sm:tracking-insane">
        <span>{eyebrowText}</span>
        <br />
        <span className="mt-4 text-4xl font-bold leading-none text-center uppercase sm:text-6xl sm:tracking-insane">
          {heading}
        </span>
      </h2>
      <div className="mx-auto mt-6 tracking-widest prose text-white text-shadow">
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
