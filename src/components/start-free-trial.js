import React, { useState } from 'react';
import GatsbyImage from 'gatsby-image';
import PropTypes from 'prop-types';

import { FreeTrailForm } from './free-trial-form';

function StartFreeTrial({ image }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <article className="relative overflow-hidden">
      <div className="absolute inset-0 sm:h-0 sm:relative aspect-ratio-21/9">
        <div className="absolute inset-0 flex">
          <GatsbyImage fluid={image} className="flex-1" />
          <div
            aria-hidden
            className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black via-transparent"
          />
        </div>
      </div>
      <div
        style={{ minHeight: '20rem' }}
        className="relative inset-0 flex flex-col justify-center px-4 py-4 space-y-4 overflow-hidden sm:absolute sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl font-bold tracking-widest uppercase text-shadow">
          Need more convincing?
        </h2>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="block w-full max-w-xs px-4 py-4 text-xl font-bold leading-none tracking-widest text-center text-black uppercase transition duration-300 ease-in-out bg-white border-2 border-white hover:bg-transparent hover:text-white focus:bg-transparent focus:text-white"
        >
          Start free trial
        </button>
      </div>
      <FreeTrailForm isOpen={isOpen} setOpen={setOpen} />
    </article>
  );
}

StartFreeTrial.propTypes = {
  image: PropTypes.object.isRequired,
};

export { StartFreeTrial };
