/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import PropTypes from 'prop-types';

import { Footer } from './footer';

export function Layout({ children }) {
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
    <div className="text-white bg-black">
      <div className="flex flex-col w-full max-w-3xl min-h-screen mx-auto lg:max-w-7xl">
        <div className="absolute inset-0">
          <GatsbyImage
            fluid={file.childImageSharp.fluid}
            className="w-full h-full"
          />
        </div>
        <main className="relative flex flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
