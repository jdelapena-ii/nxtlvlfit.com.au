import React from 'react';

import { Layout, SEO, ContactForm, TextWithImage } from '../components';
import { useGraphQL } from '../hooks';
import Map from '../components/map';

function ContactPage() {
  return (
    <Layout>
      <SEO title="Coming soon" />
      <FirstImage />
      <ContactForm />
      <Map />
    </Layout>
  );
}

function FirstImage() {
  const { marcosPaulo } = useGraphQL();
  return (
    <TextWithImage
      heading="Marcos Paulo"
      image={marcosPaulo.childImageSharp.fluid}
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

export default ContactPage;
