import React from 'react';
import { Link } from 'gatsby';

import { Layout, SEO } from '../components';

function SuccessPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <article className="w-full max-w-md mx-auto mt-24 sm:mt-40">
        <div className="tracking-widest text-center uppercase">
          <h2 className="relative text-2xl font-semibold tracking-widest text-center uppercase">
            Success
          </h2>
          <p>We've received your message, brand will get back to you shortly</p>
          <p className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold tracking-widest uppercase bg-black bg-opacity-50 border border-white rounded-none focus:outline-none focus:shadow-outline"
            >
              &larr; Home
            </Link>
          </p>
        </div>
      </article>
    </Layout>
  );
}

export default SuccessPage;
