import PropTypes from 'prop-types';
import React from 'react';
import GatsbyImage from 'gatsby-image';

function PageHero({ heading, image }) {
  return (
    <div className="relative">
      <div className="relative h-0 aspect-ratio-16/9">
        <div className="absolute inset-0 flex">
          <GatsbyImage fluid={image} className="flex-1" />
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-widest text-center uppercase text-shadow md:text-6xl">
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
