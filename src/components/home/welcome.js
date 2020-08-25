import React from 'react';
import GatsbyImage from 'gatsby-image';

import { useGraphQL } from '../../hooks';

function Welcome() {
  const { allefVinicius } = useGraphQL();
  return (
    <article className="relative flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0">
        <GatsbyImage fluid={allefVinicius.childImageSharp.fluid} />
        <div className="absolute inset-0 opacity-75 pointer-events-none bg-gradient-to-t from-black via-transparent to-black" />
      </div>
      <div className="relative px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold leading-none tracking-widest text-center uppercase">
          <span>Welcome to </span>
          <br />
          <span className="mt-1 text-6xl">NXTLVL</span>
        </h2>
        <div className="mx-auto mt-12 prose text-white text-shadow">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam qui
            veniam aliquid. Doloremque culpa assumenda voluptatem tempore optio!
            Laudantium et assumenda, officia quas voluptatum incidunt dolores
            aliquam quasi eligendi beatae.
          </p>
          <p>
            Eius sequi facilis cum, dolore incidunt odit similique saepe quis
            tempora, dolorem quae, facere autem ut cupiditate. Dicta placeat
            officiis labore animi! Ut architecto quas distinctio dolore
            inventore tempora. Harum.
          </p>
        </div>
        <button
          type="button"
          className="block w-full max-w-xs px-4 py-4 mx-auto my-24 text-2xl font-bold leading-none tracking-widest text-center uppercase border-2 border-white"
        >
          Sign up
        </button>
      </div>
    </article>
  );
}

export { Welcome };
