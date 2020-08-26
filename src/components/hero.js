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
    <div className="relative px-4 pt-12">
      <Gradient />
      <div className="relative w-full max-w-3xl mx-auto">
        <Link to="/">
          <span className="sr-only">{siteMetadata.title}</span>
          <Logo aria-hidden className="w-full pointer-events-none" />
        </Link>
        <Foreground />
        <LogoL aria-hidden className="absolute top-0 pointer-events-none" />
        <p
          aria-hidden
          className="relative mt-4 text-2xl font-bold tracking-widest text-center uppercase"
        >
          Functional Movement Centre
        </p>
      </div>
    </div>
  );
}

function Gradient() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none bg-gradient-to-b via-transparent from-black"
    />
  );
}

export { Hero };
