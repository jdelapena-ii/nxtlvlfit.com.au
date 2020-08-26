import React from 'react';

import { Layout, SEO, PageHero, ContactPageForm } from '../components';
import { Map } from '../components/map';
import { Instagram } from '../components/home';
import { useGraphQL } from '../hooks';

function ContactPage() {
  const { kateBlush } = useGraphQL();

  return (
    <Layout>
      <SEO title="Coming soon" />
      <PageHero heading="Contact Us" image={kateBlush.childImageSharp.fluid} />
      <ContactPageForm />
      <Map />
      <Instagram />
    </Layout>
  );
}

export default ContactPage;
