import React from 'react';
import { Link } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import PropTypes from 'prop-types';

function TextWithImage({
  aspectRatio = 'aspect-ratio-square',
  children,
  ctaLabel = 'Read more',
  ctaLink,
  eyebrowText,
  heading,
  image,
  objectFit = 'cover',
  objectPosition = 'center',
  reverse,
}) {
  function Image() {
    return (
      <div className="order-first lg:order-none">
        <div className="max-w-lg mx-auto">
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
      </div>
    );
  }
  return (
    <article className="relative grid items-center w-full max-w-xl gap-12 px-4 mx-auto lg:max-w-none lg:grid-cols-2 sm:px-6 lg:px-8">
      {reverse && <Image />}
      <div className="flex flex-col justify-center break-words lg:mx-auto">
        {eyebrowText && (
          <div className="tracking-widest uppercase sm:tracking-ultra-wide">
            {eyebrowText}
          </div>
        )}
        {heading && (
          <h3 className="mt-4 text-3xl font-bold leading-none tracking-widest uppercase sm:tracking-ultra-wide sm:text-4xl">
            {heading}
          </h3>
        )}
        <div className="mt-4 prose text-white">{children}</div>
        {ctaLink && (
          <p className="mt-8">
            <Link
              to={ctaLink}
              className="inline-block max-w-xs px-8 py-2 text-sm tracking-widest text-center text-black uppercase transition duration-300 ease-in-out bg-white border-2 border-white hover:text-white hover:bg-transparent"
            >
              {ctaLabel}
            </Link>
          </p>
        )}
      </div>
      {!reverse && <Image />}
    </article>
  );
}

TextWithImage.propTypes = {
  aspectRatio: PropTypes.string,
  children: PropTypes.node.isRequired,
  ctaLabel: PropTypes.string,
  ctaLink: PropTypes.string,
  eyebrowText: PropTypes.string,
  heading: PropTypes.string,
  image: PropTypes.object.isRequired,
  objectFit: PropTypes.string,
  objectPosition: PropTypes.string,
  reverse: PropTypes.bool,
};

export { TextWithImage };
