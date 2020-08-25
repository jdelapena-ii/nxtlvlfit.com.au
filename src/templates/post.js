import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import BlockContent from '@sanity/block-content-to-react';
import Image from 'gatsby-image';

import { Layout, SEO } from '../components';

function PostTemplate({ data }) {
  return (
    <Layout>
      <SEO title={data.sanityPost.title} />
      <article className="w-full px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl mx-auto prose text-white">
          <h1 className="mb-12 overflow-hidden text-center">
            {data.sanityPost.title}
          </h1>
          <Image
            className="mb-12"
            fluid={data.sanityPost.mainImage.asset.fluid}
          />
          <BlockContent blocks={data.sanityPost._rawBody} />
        </div>
      </article>
    </Layout>
  );
}

PostTemplate.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query($slug: String!) {
    sanityPost(slug: { current: { eq: $slug } }) {
      _rawBody(resolveReferences: { maxDepth: 50 })
      slug {
        current
      }
      title
      id
      mainImage {
        asset {
          fluid(maxWidth: 1920) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;

export default PostTemplate;
