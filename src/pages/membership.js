import React from 'react';

import { Layout, SEO, Map, PageHero, Instagram } from '../components';
import { useGraphQL } from '../hooks';

function MembershipPage() {
  const { membership } = useGraphQL();

  return (
    <Layout>
      <SEO title="Membership" />
      <PageHero image={membership.childImageSharp.fluid} />
      <Instagram />
      <Map />
    </Layout>
  );
}

export default MembershipPage;
