// Keep all static queries in this file
// Add new queries as necessary
// (you add aliases if you need to access the same node more than once)
// To use:
// import useGraphQL from './src/hooks/use-graphql.js'
// const { site } = useGraphQL();
// return <h1>{site.siteMetadata.title}</h1>;

import { graphql, useStaticQuery } from 'gatsby';

export function useGraphQL() {
  const data = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            title
            address {
              street
              suburb
              state
              postcode
            }
            email
            phone {
              rich
              kez
            }
            social {
              instagram {
                handle
                url
              }
            }
          }
        }
        allefVinicius: file(relativePath: { eq: "allef-vinicius-do.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
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
        backgroundImage: file(relativePath: { eq: "background-image.png" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        brigitteTohm: file(relativePath: { eq: "brigitte-tohm.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        hayleyKim: file(relativePath: { eq: "hayley-kim.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        infraredSauna: file(relativePath: { eq: "infrared-sauna.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        kateBlush: file(relativePath: { eq: "kate-blush.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        marcosPaulo: file(relativePath: { eq: "marcos-paulo-prado.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        massageImage: file(relativePath: { eq: "massage.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        meghanHolmes: file(relativePath: { eq: "meghan-holmes.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        scottWebb: file(relativePath: { eq: "scott-webb.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        svenMieke: file(relativePath: { eq: "sven-mieke.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        trueProtein: file(
          relativePath: { eq: "true-protein-logo-with-text.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );
  return data;
}
