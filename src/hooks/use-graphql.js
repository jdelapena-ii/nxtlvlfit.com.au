// Keep all static queries in this file
// Add new queries as necessary
// (you add aliases if you need to access the same node more than once)
// To use:
// import useGraphQL from './src/hooks/use-graphql.js'
// const { site } = useGraphQL();
// return <h1>{site.siteMetadata.title}</h1>;

import { graphql, useStaticQuery } from 'gatsby';

function useGraphQL() {
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
        awf: file(relativePath: { eq: "awf.png" }) {
          childImageSharp {
            fixed(width: 120) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        backgroundBlack: file(
          relativePath: { eq: "background-image-black.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1920) {
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
        classes: file(relativePath: { eq: "classes.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        covidSafeBadge: file(relativePath: { eq: "covid-safe-badge.png" }) {
          childImageSharp {
            fixed(width: 120) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        deadlift: file(relativePath: { eq: "deadlift.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        functionalFitness: file(relativePath: { eq: "sven-mieke.jpg" }) {
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
        membership: file(relativePath: { eq: "membership.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mobilityLounge: file(relativePath: { eq: "mobility-lounge.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        nxtlvlBurn: file(relativePath: { eq: "nxtlvl-burn.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        nxtlvlCali: file(relativePath: { eq: "nxtlvl-cali.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        nxtlvlEdge: file(relativePath: { eq: "nxtlvl-edge.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        nxtlvlFit: file(relativePath: { eq: "nxtlvl-fit.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        nxtlvlGrind: file(relativePath: { eq: "nxtlvl-grind.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        nxtlvlKids: file(relativePath: { eq: "nxtlvl-kids.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        nxtlvlTeens: file(relativePath: { eq: "nxtlvl-teens.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        nxtlvlLift: file(
          relativePath: { eq: "olympic-and-power-lifting.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        nxtlvlSkil: file(relativePath: { eq: "nxtlvl-skil.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        medicineBall: file(relativePath: { eq: "medicine-ball.jpg" }) {
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
        sportsMassage: file(relativePath: { eq: "sports-massage.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        merchandise: file(relativePath: { eq: "merchandise.jpg" }) {
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
        allMerchandiseJson {
          nodes {
            category
            id
            image {
              childImageSharp {
                fluid(maxWidth: 500, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            name
            price
          }
        }
      }
    `
  );
  return data;
}

export { useGraphQL };
