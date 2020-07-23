import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image';

function Background() {
  const { file } = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "background-image.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className="w-full mx-auto max-w-7xl">
        <GatsbyImage
          fluid={file.childImageSharp.fluid}
          imgStyle={{ objectPosition: 'top' }}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}

export { Background };
