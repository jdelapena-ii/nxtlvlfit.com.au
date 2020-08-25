import React from 'react';
import GatsbyImage from 'gatsby-image';

import { Link } from 'gatsby';
import { useGraphQL } from '../../hooks';

function MeetTheTeam() {
  const { meghanHolmes } = useGraphQL();
  return (
    <article className="relative flex flex-col justify-between overflow-hidden">
      <GatsbyImage fluid={meghanHolmes.childImageSharp.fluid} />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <Link
          to="/meet-us/"
          className="block w-full max-w-xs px-4 py-4 mx-auto my-24 text-2xl font-bold leading-none tracking-widest text-center uppercase border-2 border-white text-shadow"
        >
          Meet the Team
        </Link>
      </div>
    </article>
  );
}

export { MeetTheTeam };
