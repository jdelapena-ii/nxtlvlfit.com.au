import React from 'react';
import { Link } from 'gatsby';

import { Layout, SEO } from '../components';

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <article className="w-full max-w-2xl mx-auto mt-24 sm:mt-40">
        <div className="space-y-6 tracking-widest text-center uppercase">
          <h1 className="font-semibold">404: Page Not Found</h1>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold tracking-widest uppercase bg-black bg-opacity-50 border border-white rounded-none focus:outline-none focus:shadow-outline"
          >
            &larr; Home
          </Link>
        </div>
      </article>
    </Layout>
  );
}

export default NotFoundPage;
