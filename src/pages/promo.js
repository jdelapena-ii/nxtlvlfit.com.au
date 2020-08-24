import React from 'react';

import { Layout, SEO, ContactForm } from '../components';

function PromoPage() {
  return (
    <Layout isHome>
      <SEO title="Coming soon" />
      <ContactForm />
    </Layout>
  );
}

export default PromoPage;
