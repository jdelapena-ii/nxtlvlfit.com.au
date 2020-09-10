import React from 'react';
import {
  Layout,
  SEO,
  PageHero,
  ContactPageForm,
  Map,
  MerchGridImages,
} from '../components';
import { useGraphQL } from '../hooks';

function ShopPage() {
  const { merchandise } = useGraphQL();
  return (
    <Layout>
      <SEO title="nXtLvL Merch" />
      <PageHero
        heading="Our Merchandise"
        image={merchandise.childImageSharp.fluid}
      />
      <MerchGridImages />
      <ContactPageForm id="contact-form" copy={<Copy />} />
      <Map />
    </Layout>
  );
}

function Copy() {
  return (
    <p>
      Fill in the form below to enquire about purchasing nXtLvL&nbsp;merch.{' '}
      <br />
      Online store coming soon.
    </p>
  );
}

export default ShopPage;
