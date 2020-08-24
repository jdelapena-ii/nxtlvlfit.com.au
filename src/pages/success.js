import React from 'react';
import { Link } from 'gatsby'

import { Layout, SEO } from '../components';

function SuccessPage() {
  return (
    <Layout isHome>
      <SEO title="Message received" />
      <article className="w-full max-w-2xl mx-auto mt-24 sm:mt-40">
        <div className="px-32 py-16 space-y-8 tracking-widest text-center uppercase bg-black bg-opacity-75 border-4 border-white">
          <h2 className="relative text-2xl font-bold leading-none tracking-widest text-center uppercase sm:text-4xl">SUCCESS</h2>
          <br />
          <p className="text-gray-200">Thank you, our team will get
          <br /> 
          back to you shortly</p>
          <p className="max-w-md px-0 py-4 border-4 border-white">
            <Link to="/" className="hover:underline">
              &larr; Return Home
            </Link>
          </p>
        </div>
      </article>
    </Layout>
  );
}

export default SuccessPage;
