import React from 'react';

import { Layout, SEO, PromoPageForm } from '../components';

function PromoPage() {
  return (
    <Layout isHome>
      <SEO title="Coming soon" />
      <PromoPageForm />
    </Layout>
  );
}

export default PromoPage;
