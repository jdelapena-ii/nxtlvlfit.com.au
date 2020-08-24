import React from 'react';
import { Link } from 'gatsby'

import { Layout, SEO } from '../components';

function SuccessPage() {
  return (
    <Layout>
      <SEO title="Message received" />
      <article className="w-full max-w-md mx-auto mt-24 sm:mt-40">
        <div className="px-4 space-y-8 tracking-widest text-center uppercase">
          <h2 className="relative text-2xl font-bold leading-none tracking-widest text-center uppercase sm:text-4xl">SUCCESS</h2>
          <br />
          <p className="text-gray-200">Thank you, our team will get
          <br /> 
          back to you shortly</p>
          <p>
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
