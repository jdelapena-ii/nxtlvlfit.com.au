import React from 'react';
import GatsbyImage from 'gatsby-image';
import PropTypes from 'prop-types';

function TeamMember({ children, jobTitle, fullName, image, reverse }) {
  return (
    <article className="mt-12 relative grid gap-12 px-4 md:grid-cols-2 sm:px-6 lg:px-8">
      {reverse && (
        <div className="order-last md:order-none">
          <div className="relative order-1 w-full md:order-none">
            <GatsbyImage
              style={{ height: '40rem' }}
              fluid={image}
              className="w-full h-full"
            />
          </div>
        </div>
      )}
      <div className="flex flex-col justify-center max-w-lg">
        <h2
          style={{ letterSpacing: '0.4rem' }}
          className="text-xl leading-none uppercase"
        >
          {jobTitle}
        </h2>
        <h3
          style={{ letterSpacing: '0.7rem' }}
          className="mt-4 text-4xl font-bold leading-none uppercase"
        >
          {fullName}
        </h3>
        <div className="mt-4 prose">{children}</div>
      </div>
      {!reverse && (
        <div className="order-last md:order-none">
          <div className="relative order-1 w-full md:order-none">
            <GatsbyImage
              style={{ height: '40rem' }}
              fluid={image}
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </article>
  );
}

TeamMember.propTypes = {
  children: PropTypes.node.isRequired,
  jobTitle: PropTypes.string,
  fullName: PropTypes.string,
  image: PropTypes.object.isRequired,
  reverse: PropTypes.bool,
};

export { TeamMember };
