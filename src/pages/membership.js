import React from 'react';

import {
  Layout,
  SEO,
  Map,
  PageHero,
  ContactPageForm,
  Instagram,
} from '../components';
import { useGraphQL } from '../hooks';

function MembershipPage() {
  const { kateBlush } = useGraphQL();

  return (
    <Layout>
      <SEO title="Membership" />
      <PageHero image={kateBlush.childImageSharp.fluid} />
      <ContactPageForm />
      <Instagram />
      <Map />
    </Layout>
  );
}

export default MembershipPage;
