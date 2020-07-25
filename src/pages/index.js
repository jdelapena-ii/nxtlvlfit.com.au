import React from 'react';

import { Layout, SEO, ContactForm } from '../components';

export default function IndexPage() {
  return (
    <Layout heroHasH1>
      <SEO title="Coming soon" />
      <ContactForm />
    </Layout>
  );
}
