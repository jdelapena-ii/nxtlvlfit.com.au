import PropTypes from 'prop-types';
import React from 'react';
import GatsbyImage from 'gatsby-image';

function PageHero({ heading, image }) {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 sm:h-0 sm:relative aspect-ratio-16/9">
        <div className="absolute inset-0 flex">
          <GatsbyImage fluid={image} className="flex-1" />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-transparent"
          />
        </div>
      </div>
      <div
        style={{ minHeight: '20rem' }}
        className="relative inset-0 flex items-center justify-center px-4 py-4 overflow-hidden sm:px-6 lg:px-8 sm:absolute"
      >
        <h1 className="max-w-2xl text-4xl font-bold leading-tight text-center uppercase tracking-insane text-shadow md:text-5xl">
          {heading}
        </h1>
      </div>
    </div>
  );
}

PageHero.propTypes = {
  image: PropTypes.object.isRequired,
  heading: PropTypes.string.isRequired,
};

export { PageHero };
