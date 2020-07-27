import React from 'react';

import { Layout, SEO, ContactForm } from '../components';

export default function IndexPage() {
  return (
    <Layout isHome>
      <SEO title="Coming soon" />
      <ContactForm />
    </Layout>
  );
}
