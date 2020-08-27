import React from 'react';
import GatsbyImage from 'gatsby-image';
import PropTypes from 'prop-types';

function TeamMember({
  aspectRatio = 'aspect-ratio-square',
  children,
  eyebrowText,
  heading,
  image,
  objectFit = 'cover',
  objectPosition = 'center',
  reverse,
}) {
  function Image() {
    return (
      <div className="order-first md:order-none">
        <div className={`relative h-0 ${aspectRatio}`}>
          <div className="absolute inset-0 flex">
            <GatsbyImage
              fluid={image}
              imgStyle={{ objectPosition, objectFit }}
              className="flex-1"
            />
          </div>
        </div>
      </div>
    );
  }
  return (
    <article className="relative grid items-center gap-12 px-4 md:grid-cols-2 sm:px-6 lg:px-8">
      {reverse && <Image />}
      <div className="flex flex-col justify-center max-w-lg">
        {eyebrowText && (
          <div
            style={{ letterSpacing: '0.4rem' }}
            className="text-xl leading-none uppercase"
          >
            {eyebrowText}
          </div>
        )}
        <h3
          style={{ letterSpacing: '0.7rem' }}
          className="mt-4 text-4xl font-bold leading-none uppercase"
        >
          {heading}
        </h3>
        <div className="mt-4 prose text-white">{children}</div>
      </div>
      {!reverse && <Image />}
    </article>
  );
}

TeamMember.propTypes = {
  aspectRatio: PropTypes.string,
  children: PropTypes.node.isRequired,
  eyebrowText: PropTypes.string,
  heading: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  objectFit: PropTypes.string,
  objectPosition: PropTypes.string,
  reverse: PropTypes.bool,
};

export { TeamMember };
