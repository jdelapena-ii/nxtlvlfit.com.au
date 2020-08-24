import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image';

function Foreground() {
  const { file } = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "foreground-image.png" }) {
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
      <div className="w-full h-full mx-auto max-w-7xl">
        <GatsbyImage
          fluid={file.childImageSharp.fluid}
          imgStyle={{ objectPosition: 'top' }}
          className="w-full"
        />
      </div>
    </div>
  );
}

export { Foreground };
