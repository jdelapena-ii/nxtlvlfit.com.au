import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

import { Logo, LogoL } from './vectors';
import { Foreground } from './foreground';

function Hero({ isHome }) {
  const Heading = isHome ? 'h1' : 'div';
  return (
    <header className="px-4 mt-12">
      <div className="relative w-full max-w-3xl mx-auto">
        <Link to="/">
          <Heading>
            <span className="sr-only">nXtLvL Fitness</span>
            <Logo aria-hidden className="w-full pointer-events-none" />
          </Heading>
        </Link>
        {isHome && <Foreground />}
        <LogoL aria-hidden className="absolute top-0 pointer-events-none" />
        <p className="relative mt-4 text-2xl font-bold tracking-widest text-center uppercase">
          Functional movement centre
        </p>
      </div>
    </header>
  );
}

Hero.propTypes = {
  isHome: PropTypes.bool,
};

export { Hero };
