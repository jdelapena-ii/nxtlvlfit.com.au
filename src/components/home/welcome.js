import React from 'react';
import GatsbyImage from 'gatsby-image';

import { Link } from 'gatsby';
import { useGraphQL } from '../../hooks';

function Welcome() {
  const { allefVinicius } = useGraphQL();
  return (
    <article className="relative flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 flex">
        <GatsbyImage
          fluid={allefVinicius.childImageSharp.fluid}
          className="flex-1"
        />
        <div className="absolute inset-0 bg-black bg-opacity-75 pointer-events-none bg-gradient-to-t from-black via-transparent to-black sm:bg-transparent" />
      </div>
      <div className="relative px-4 py-12 sm:px-6 lg:px-8 text-shadow">
        <h1 className="font-bold leading-none tracking-widest text-center uppercase sm:text-2xl">
          <span className="mt-1 text-4xl sm:text-6xl">Level up </span>
          <br />
          <span>your fitness and mobility</span>
        </h1>
        <div className="mx-auto mt-12 prose text-white">
          <p>
            NXTLVL Functional Movement Centre is your ultimate fitness and
            mobility destination, catering for all ages and fitness levels in a
            fun, friendly, and functional environment.
          </p>
          <p>
            Over three boutique, industrial-designed areas, you can transform
            your body and smash your fitness goals your way.
          </p>
          <p>
            NXTLVL offers a range of training options: 1-on-1 personal training,
            Functional Fitness, Power Lifting, Olympic Lifting, and our
            world-class calisthenics program.
          </p>
          <p>
            Need to get moving again? Recover and condition with massage,
            infrared sauna, and practical expert advice.
          </p>
          <p>
            Grab a refreshment or coffee and catch up with friends before or
            after your workout.
          </p>
          <p>
            NXTLVL is where Port Macquarie meets their fitness goals while
            keeping training diverse, challenging, and fun!
          </p>
          <p>
            All are welcome at NXTLVL – click below for your FREE trial or
            arrange a grand tour with Rich or Kez here.
          </p>
        </div>
        <Link
          to="/membership/"
          className="block w-full max-w-xs px-4 py-4 mx-auto my-24 text-2xl font-bold leading-none tracking-widest text-center uppercase transition duration-150 ease-in-out border-2 border-white hover:bg-white hover:text-black focus:bg-white focus:text-black"
        >
          Sign up
        </Link>
      </div>
    </article>
  );
}

export { Welcome };
