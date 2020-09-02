import React from 'react';
import GatsbyImage from 'gatsby-image';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import SanityBlockContent from '@sanity/block-content-to-react';

import {
  Layout,
  SEO,
  PageHero,
  GradientContainer,
  Intro,
  TextWithImage,
  Instagram,
  ContactPageForm,
  Map,
} from '../components';
import { useGraphQL } from '../hooks';

function ServiceTemplate({ data: { sanityService } }) {
  const { marcosPaulo } = useGraphQL();
  return (
    <Layout>
      <SEO title={sanityService.title} />
      <PageHero
        heading={sanityService.heroHeading}
        image={sanityService.heroImage.asset.fluid}
      />
      <GradientContainer>
        <div className="grid pb-24 gap-y-24">
          <Intro
            eyebrowText={sanityService.serviceHeadingLineOne}
            heading={sanityService.serviceHeadingLineTwo}
          >
            <SanityBlockContent
              blocks={sanityService._rawServiceText}
              className=""
            />
          </Intro>
          <TextWithImage
            image={sanityService.serviceImage.asset.fluid}
            aspectRatio="aspect-ratio-3/4"
            reverse
          >
            <h2>How it works</h2>
            <SanityBlockContent
              blocks={sanityService._rawHowItWorks}
              className=""
            />
            <h2>Benefits</h2>
            <SanityBlockContent
              blocks={sanityService._rawBenefits}
              className=""
            />
          </TextWithImage>
          <article className="grid grid-cols-2 px-4 lg:grid-cols-4 sm:px-6 lg:px-8">
            {sanityService.smallImages.map((img, i) => (
              <div key={i} className="relative h-0 aspect-ratio-square">
                <div className="absolute inset-0 flex">
                  <GatsbyImage fluid={img.asset.fluid} className="flex-1" />
                </div>
              </div>
            ))}
          </article>
        </div>
        <article className="relative">
          <div className="relative h-0 aspect-ratio-21/9">
            <div className="absolute inset-0 flex">
              <GatsbyImage
                fluid={marcosPaulo.childImageSharp.fluid}
                className="flex-1"
              />
            </div>
          </div>
          <div className="absolute inset-0 flex items-center">
            <div
              aria-hidden
              className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"
            />
            <div className="relative px-4 space-y-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-white uppercase text-shadow">
                Need more convincing?
              </h2>
              <Link
                to="/membership/"
                className="inline-block w-full max-w-xs px-8 py-4 font-bold tracking-widest text-center text-black uppercase bg-white"
              >
                Start free trial
              </Link>
            </div>
          </div>
        </article>
        <Instagram />
        <ContactPageForm />
        <Map />
      </GradientContainer>
    </Layout>
  );
}

ServiceTemplate.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query($slug: String!) {
    sanityService(slug: { current: { eq: $slug } }) {
      id
      title
      slug {
        current
      }
      description
      serviceHeadingLineOne
      serviceHeadingLineTwo
      heroHeading
      _rawBenefits
      _rawHowItWorks
      _rawServiceText
      heroImage {
        asset {
          fluid(maxWidth: 1920) {
            ...GatsbySanityImageFluid
          }
        }
      }
      serviceImage {
        asset {
          fluid(maxWidth: 1920) {
            ...GatsbySanityImageFluid
          }
        }
      }
      smallImages {
        asset {
          fluid(maxWidth: 1920) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;

export default ServiceTemplate;
