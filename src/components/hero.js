import PropTypes from 'prop-types';
import React from 'react';

import { Logo, LogoL } from './vectors';
import { Foreground } from './foreground';

function Hero({ hasH1 }) {
  const Heading = hasH1 ? 'h1' : 'div';
  return (
    <header className="px-4 mt-12">
      <div className="relative w-full max-w-3xl mx-auto">
        <Heading>
          <span className="sr-only">NXT LVL Fitness</span>
          <Logo className="w-full" />
        </Heading>
        <Foreground />
        <LogoL className="absolute top-0" />
        <p className="relative mt-4 text-2xl tracking-widest text-center uppercase">
          Functional movement centre
        </p>
      </div>
    </header>
  );
}

Hero.propTypes = {
  hasH1: PropTypes.bool,
};

export { Hero };
