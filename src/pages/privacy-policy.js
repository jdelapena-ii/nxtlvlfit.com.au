import React from 'react';

import { Layout, SEO, PrivacyPolicy } from '../components';
import { useGraphQL } from '../hooks';

function PrivacyPolicyPage() {
  const {
    site: { siteMetadata },
  } = useGraphQL();
  return (
    <Layout heroHeading="div">
      <SEO title="Privacy Policy" />
      <article className="px-4 py-8 mx-auto mt-24 bg-black bg-opacity-50 border-4 border-white sm:px-6 md:px-8 sm:mt-40">
        <div className="prose">
          <h1 className="relative text-2xl font-bold tracking-widest text-center uppercase">
            {siteMetadata.title} <br />
            Privacy Policy
          </h1>
          <PrivacyPolicy />
        </div>
      </article>
    </Layout>
  );
}

export default PrivacyPolicyPage;
