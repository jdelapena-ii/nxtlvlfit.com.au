import React from 'react';
import { Link } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import PropTypes from 'prop-types';

import { Heading } from '../heading';
import { useGraphQL } from '../../hooks';

function BlogPosts() {
  const { nxtlvlBurn } = useGraphQL();
  return (
    <article className="px-4 py-12 space-y-12 bg-black bg-opacity-75 sm:px-6 lg:px-8">
      <Heading eyebrowText="The latest from our ">Blog</Heading>
      <div className="flex flex-col w-full max-w-4xl p-4 pb-12 mx-auto space-y-12 border-2 border-white ">
        <div className="grid gap-y-24">
          <BlogPost
            category="The Recovery Zone"
            heading="10 Simple Ways To Recharge"
            copy={<Copy />}
            image={nxtlvlBurn.childImageSharp.fluid}
          />
          <BlogPost
            category="The Recovery Zone"
            heading="The Benefits of Infrared Saunas"
            copy={<Copy />}
            image={nxtlvlBurn.childImageSharp.fluid}
            reversed
          />
        </div>
        <Link
          to="/"
          className="inline-block max-w-xs px-24 py-4 mx-auto text-xl tracking-widest text-center uppercase transition duration-300 ease-in-out border-2 border-white hover:text-black hover:bg-white"
        >
          See More
        </Link>
      </div>
    </article>
  );
}

function BlogPost({ category, heading, copy, image, reversed = false }) {
  function Image() {
    return (
      <div>
        <div className="relative h-0 aspect-ratio-square">
          <div className="absolute inset-0 flex">
            <GatsbyImage fluid={image} className="flex-1" />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="grid items-center md:grid-cols-2 gap-x-4">
      {!reversed && <Image />}
      <div className={`py-4 ${reversed ? 'md:text-right' : 'md:text-left'}`}>
        <div className="font-bold uppercase">{category}</div>
        <div className="space-y-8">
          <div className="prose">
            <h3>{heading}</h3>
            {copy}
          </div>
          <Link
            to="/"
            className="inline-block px-8 py-2 text-sm tracking-widest text-black uppercase transition duration-300 ease-in-out bg-white border-2 border-white hover:text-white hover:bg-transparent"
          >
            Read more
          </Link>
        </div>
      </div>
      {reversed && <Image />}
    </div>
  );
}

BlogPost.propTypes = {
  category: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  reversed: PropTypes.bool,
};

function Copy() {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni pariatur
        veniam tempora eaque minus quibusdam minima, quis omnis autem sint rem.
        Labore iusto commodi porro quisquam ratione quae eveniet in!
      </p>
      <p>
        Perferendis voluptatum recusandae dolorum quaerat iste? In magni quasi
        harum mollitia vero repudiandae itaque nemo quae, amet, aperiam ut.
      </p>
    </>
  );
}

export { BlogPosts };
