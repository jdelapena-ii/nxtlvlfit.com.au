import React from 'react';
import GatsbyImage from 'gatsby-image';
import PropTypes from 'prop-types';

import { useGraphQL } from '../../hooks';

function TrueProtein() {
  const { marcosPaulo, trueProtein, brigitteTohm } = useGraphQL();
  return (
    <article>
      <div className="grid md:grid-cols-3">
        <Block
          image={marcosPaulo.childImageSharp.fluid}
          objectPosition="right"
        />
        <Block
          image={trueProtein.childImageSharp.fluid}
          altText="True Protein available instore now"
          objectFit="contain"
          objectPosition="center"
        />
        <Block
          image={brigitteTohm.childImageSharp.fluid}
          objectPosition="center"
        />
      </div>
    </article>
  );
}

function Block({
  image,
  altText = '',
  objectFit = 'cover',
  objectPosition = 'center',
  padding,
}) {
  return (
    <div className={`bg-black ${padding}`}>
      <div className="relative h-0 aspect-ratio-square">
        <div className="absolute inset-0 flex bg-black">
          <GatsbyImage
            fluid={image}
            alt={altText}
            imgStyle={{ objectPosition, objectFit }}
            className="flex-1"
          />
        </div>
      </div>
    </div>
  );
}

Block.propTypes = {
  altText: PropTypes.string,
  image: PropTypes.object.isRequired,
  objectFit: PropTypes.string,
  objectPosition: PropTypes.string,
  padding: PropTypes.string,
};

export { TrueProtein };
