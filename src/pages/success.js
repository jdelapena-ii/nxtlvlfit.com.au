import React from 'react';
import { Link } from 'gatsby';

import { Layout, SEO } from '../components';

function SuccessPage() {
  return (
    <Layout isHome>
      <SEO title="Message received" />
      <article className="relative flex items-center justify-center w-full px-4 my-24 sm:mt-40 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl px-4 py-12 mx-auto space-y-8 tracking-widest text-center uppercase border-2 border-white sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold leading-none tracking-widest text-center uppercase sm:text-4xl">
            SUCCESS
          </h2>
          <p className="text-gray-200">
            Thank you for contacting NXTLVL! <br />
            We’ll be in touch with you soon.
          </p>
          <p>
            <Link
              to="/"
              className="inline-block w-full max-w-xs px-4 py-4 mx-auto transition duration-300 ease-in-out border-2 border-white hover:bg-white hover:text-black"
            >
              Return Home
            </Link>
          </p>
        </div>
      </article>
    </Layout>
  );
}

export default SuccessPage;
