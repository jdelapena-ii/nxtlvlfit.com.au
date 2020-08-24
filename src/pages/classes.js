import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Layout, SEO, TextWithImage } from '../components';

function ClassesPage() {
  return (
    <Layout>
      <SEO title="Services" />
      <FunctionalFitness />
    </Layout>
  );
}

function FunctionalFitness() {
  // Query GraphQL for image so we can use it in `gatsby-image`
  const { file } = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "background-image.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
    <TextWithImage
      heading="How It Works"
      image={file.childImageSharp.fluid}
      reverse
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
        architecto modi, ratione blanditiis quis facere nulla repudiandae, quia
        perspiciatis quae aspernatur iusto laudantium itaque nesciunt molestias,
        in vel doloribus earum!
      </p>
    </TextWithImage>
  );
}

export { ClassesPage };
