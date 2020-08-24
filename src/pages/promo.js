import React from 'react';

import { Layout, SEO, ContactForm } from '../components';

export default function PromoPage() {
  return (
    <Layout isHome>
      <SEO title="Coming soon" />
      <ContactForm />
    </Layout>
  );
}
