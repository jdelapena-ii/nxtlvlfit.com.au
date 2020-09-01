import React from 'react';

import {
  Layout,
  SEO,
  Map,
  PageHero,
  Instagram,
  MembershipForm,
} from '../components';
import { useGraphQL } from '../hooks';

function MembershipPage() {
  const { membership } = useGraphQL();

  return (
    <Layout>
      <SEO title="Membership" />
      <PageHero image={membership.childImageSharp.fluid} />
      <MembershipForm />
      <Instagram />
      <Map />
    </Layout>
  );
}

export default MembershipPage;
