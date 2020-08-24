import React from 'react';
import { Link } from 'gatsby';

import { Layout, SEO } from '../components';

function NotFoundPage() {
  return (
    <Layout isHome>
      <SEO title="404: Not found" />
      <article className="w-full max-w-2xl mx-auto mt-24 sm:mt-40">
        <div className="px-32 py-16 space-y-8 tracking-widest text-center uppercase bg-black bg-opacity-75 border-4 border-white">
          <h2 className="relative text-2xl font-bold leading-none tracking-widest text-center uppercase sm:text-4xl">
            404: Page Not Found
          </h2>
          <p className="text-gray-200">Sorry, the page you were looking
           <br />
           for could not be found</p>
          <p className="px-0 py-4 border-4 border-white max-2-md">
            <Link to="/" className="hover:underline">
              &larr; Return Home
            </Link>
          </p>
        </div>
      </article>
    </Layout>
  );
}

export default NotFoundPage;
