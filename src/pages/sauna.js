import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Layout, SEO, TextWithImage } from '../components';

export default function SaunaPage() {
  return (
    <Layout isHome>
      <SEO title="Sauna" />
      <HowItWorks />
    </Layout>
  );
}

function HowItWorks() {
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
    <TextWithImage heading="How It Works" image={file.childImageSharp.fluid}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
        architecto modi, ratione blanditiis quis facere nulla repudiandae, quia
        perspiciatis quae aspernatur iusto laudantium itaque nesciunt molestias,
        in vel doloribus earum!
      </p>
    </TextWithImage>
  );
}
