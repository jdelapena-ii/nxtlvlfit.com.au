import React from 'react';

import GatsbyImage from 'gatsby-image';
import { Layout, SEO, ContactPageForm } from '../components';
import { Map } from '../components/map';
import { Instagram } from '../components/home';
import { useGraphQL } from '../hooks';

function ContactPage() {
  const { kateBlush } = useGraphQL();

  return (
    <Layout>
      <SEO title="Coming soon" />
      <div className="relative">
        <GatsbyImage
          style={{ maxHeight: '40rem' }}
          fluid={kateBlush.childImageSharp.fluid}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-4xl font-bold leading-none tracking-widest text-center uppercase text-shadow md:text-6xl">
            Contact Us
          </h2>
        </div>
      </div>
      <ContactPageForm />
      <Map />
      <Instagram />
    </Layout>
  );
}

export default ContactPage;
