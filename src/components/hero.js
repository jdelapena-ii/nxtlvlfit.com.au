import React from 'react';
import { Link } from 'gatsby';

import { useGraphQL } from '../hooks';
import { Logo, LogoL } from './vectors';
import { Foreground } from './foreground';

function Hero() {
  const {
    site: { siteMetadata },
  } = useGraphQL();

  return (
    <div className="px-4 pt-12">
      <div className="relative w-full max-w-3xl mx-auto">
        <Link to="/">
          <h1>
            <span className="sr-only">{siteMetadata.title}</span>
            <Logo aria-hidden className="w-full pointer-events-none" />
          </h1>
        </Link>
        <Foreground />
        <LogoL aria-hidden className="absolute top-0 pointer-events-none" />
        <p
          aria-hidden
          className="relative mt-4 text-2xl font-bold tracking-widest text-center uppercase"
        >
          Functional movement centre
        </p>
      </div>
    </div>
  );
}

export { Hero };
