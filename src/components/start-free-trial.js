import React from 'react';
import { Link } from 'gatsby';
import GatsbyImage from 'gatsby-image';

import { useGraphQL } from '../hooks';

function StartFreeTrial() {
  const { marcosPaulo } = useGraphQL();
  return (
    <article className="relative">
      <div className="relative h-0 aspect-ratio-21/9">
        <div className="absolute inset-0 flex">
          <GatsbyImage
            fluid={marcosPaulo.childImageSharp.fluid}
            className="flex-1"
          />
        </div>
      </div>
      <div className="absolute inset-0 flex flex-col justify-center px-4 space-y-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-widest uppercase text-shadow">
          Need more convincing?
        </h2>
        <Link
          to="/membership/"
          className="block w-full max-w-xs px-4 py-4 text-xl font-bold leading-none tracking-widest text-center text-black uppercase transition duration-300 ease-in-out bg-white border-2 border-white hover:bg-transparent hover:text-white focus:bg-transparent focus:text-white"
        >
          Start free trial
        </Link>
      </div>
    </article>
  );
}

export { StartFreeTrial };
