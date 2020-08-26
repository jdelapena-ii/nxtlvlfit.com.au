import PropTypes from 'prop-types';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image';

function Background({ isHome }) {
  const { background, backgroundBlack } = useStaticQuery(graphql`
    {
      background: file(relativePath: { eq: "background-image.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      backgroundBlack: file(
        relativePath: { eq: "background-image-black.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className="w-full h-full mx-auto max-w-7xl">
        <GatsbyImage
          fluid={
            isHome
              ? background.childImageSharp.fluid
              : backgroundBlack.childImageSharp.fluid
          }
          imgStyle={{ objectPosition: 'top' }}
          className={isHome ? 'w-full' : 'w-full h-full'}
        />
      </div>
    </div>
  );
}

Background.propTypes = {
  isHome: PropTypes.bool,
};

export { Background };
