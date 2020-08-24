import React from 'react';
import { Link } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import PropTypes from 'prop-types';

import { useGraphQL } from '../../hooks';

function ServicesGrid() {
  const {
    svenMieke,
    kateBlush,
    allefVinicius,
    meghanHolmes,
    brigitteTohm,
    massageImage,
  } = useGraphQL();
  return (
    <div className="grid p-2 bg-black md:grid-cols-2 lg:grid-cols-3">
      <Service
        label="Functional Fitness"
        slug="/"
        image={svenMieke.childImageSharp.fluid}
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          hic dolores quam cumque possimus quas, animi quisquam ex magnam fugit
          molestias, laudantium, ad non aliquid sed? Doloribus reiciendis vel
          odio.
        </p>
      </Service>
      <Service
        label="Calisthenics"
        slug="/"
        image={kateBlush.childImageSharp.fluid}
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          hic dolores quam cumque possimus quas, animi quisquam ex magnam fugit
          molestias, laudantium, ad non aliquid sed? Doloribus reiciendis vel
          odio.
        </p>
      </Service>
      <Service
        label="Olympic Lifting"
        slug="/"
        image={allefVinicius.childImageSharp.fluid}
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          hic dolores quam cumque possimus quas, animi quisquam ex magnam fugit
          molestias, laudantium, ad non aliquid sed? Doloribus reiciendis vel
          odio.
        </p>
      </Service>
      <Service
        label="Power Lifting"
        slug="/"
        image={meghanHolmes.childImageSharp.fluid}
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          hic dolores quam cumque possimus quas, animi quisquam ex magnam fugit
          molestias, laudantium, ad non aliquid sed? Doloribus reiciendis vel
          odio.
        </p>
      </Service>
      <Service
        label="Infrared Sauna"
        slug="/"
        image={brigitteTohm.childImageSharp.fluid}
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          hic dolores quam cumque possimus quas, animi quisquam ex magnam fugit
          molestias, laudantium, ad non aliquid sed? Doloribus reiciendis vel
          odio.
        </p>
      </Service>
      <Service
        label="Sports Massage"
        slug="/"
        image={massageImage.childImageSharp.fluid}
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          hic dolores quam cumque possimus quas, animi quisquam ex magnam fugit
          molestias, laudantium, ad non aliquid sed? Doloribus reiciendis vel
          odio.
        </p>
      </Service>
    </div>
  );
}

function Service({ children, image, label, slug }) {
  return (
    <div className="relative h-0 aspect-ratio-square">
      <div className="absolute inset-0 flex bg-black">
        <div className="absolute inset-0 flex">
          <GatsbyImage fluid={image} className="flex-1" />
        </div>
        <div className="relative flex items-center justify-center flex-1 p-4 bg-black bg-opacity-25">
          <div className="w-full px-8 py-4 font-bold text-center uppercase border-2 border-white">
            {label}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 flex p-2 transition duration-300 ease-in-out bg-black opacity-0 hover:opacity-100">
        <div className="flex flex-col justify-between flex-1 px-4 py-12 text-center border-2 border-white">
          <div>
            <h3 className="font-bold tracking-widest uppercase">{label}</h3>
            <div className="mt-4 prose text-white">{children}</div>
          </div>
          <span>
            <Link
              to={slug}
              className="inline-block px-8 py-2 text-sm tracking-widest uppercase border-2 border-white"
            >
              Learn more
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

Service.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export { ServicesGrid };
