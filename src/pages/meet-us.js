import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useGraphQL } from '../hooks'

import { Layout, SEO, TextWithImage } from '../components';

export default function MeetUsPage() {
  return (
    <Layout isHome>
      <SEO title="Coming soon" />
      <FirstImage />
      <SecondImage />
    </Layout>
  );
}


function FirstImage() {
  const { kateBlush } = useGraphQL();
  return (
    <TextWithImage  
      heading="Kate Blush"
      image={kateBlush.childImageSharp.fluid}
      reverse
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
        architecto modi, ratione blanditiis quis facere nulla repudiandae, quia
        perspiciatis quae aspernatur iusto laudantium itaque nesciunt molestias,
        in vel doloribus earum!
      </p>
    </TextWithImage>
  )
}

function SecondImage() {
  const { kateBlush } = useGraphQL();
  return (
    <TextWithImage  
      heading="Kate Blush"
      image={kateBlush.childImageSharp.fluid}
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
        architecto modi, ratione blanditiis quis facere nulla repudiandae, quia
        perspiciatis quae aspernatur iusto laudantium itaque nesciunt molestias,
        in vel doloribus earum!
      </p>
    </TextWithImage>
  )
}