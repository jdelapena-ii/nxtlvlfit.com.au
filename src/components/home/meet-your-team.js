import React from 'react';
import GatsbyImage from 'gatsby-image';

import { Link } from 'gatsby';
import { useGraphQL } from '../../hooks';

function MeetYourTeam() {
  const { scottWebb } = useGraphQL();
  return (
    <article className="relative flex flex-col justify-between overflow-hidden">
      <GatsbyImage fluid={scottWebb.childImageSharp.fluid} />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <Link
          to="/meet-us/"
          className="block w-full max-w-xs px-4 py-4 mx-auto my-24 text-2xl font-bold leading-none tracking-widest text-center uppercase transition duration-300 ease-in-out border-2 border-white text-shadow hover:bg-white hover:text-black hover:text-shadow-none focus:bg-white focus:text-black focus:text-shadow-none"
        >
          Meet your Team
        </Link>
      </div>
    </article>
  );
}

export { MeetYourTeam };
