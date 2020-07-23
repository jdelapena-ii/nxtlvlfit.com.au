import React from 'react';

import { Layout, SEO, ContactForm } from '../components';

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <ContactForm />
    </Layout>
  );
}
