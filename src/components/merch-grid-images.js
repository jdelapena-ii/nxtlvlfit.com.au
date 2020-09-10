import React, { Fragment, useState } from 'react';
import GatsbyImage from 'gatsby-image';
import PropTypes from 'prop-types';

import { useGraphQL } from '../hooks';
import { GradientContainer } from './gradient-container';
import { Heading } from './heading';

const categories = ['All', 'Clothing', 'Equipment', 'Accessories'];

function MerchGridImages() {
  const { allMerchandiseJson } = useGraphQL();

  const [filter, setFilter] = useState(categories[0]);

  const products =
    filter === categories[0]
      ? allMerchandiseJson.nodes
      : allMerchandiseJson.nodes.filter(
          (product) => product.category.toLowerCase() === filter.toLowerCase()
        );

  return (
    <GradientContainer>
      <article className="relative px-4 py-12 sm:px-6 lg:px-8">
        <Heading eyebrowText="Products available ">Instore Only</Heading>
        <ProductFilter filter={filter} setFilter={setFilter} />
        <ul className="grid mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 sm:gap-x-6 lg:gap-x-8">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </ul>
      </article>
    </GradientContainer>
  );
}

function ProductFilter({ filter, setFilter }) {
  return (
    <div className="mt-12">
      <div className="flex items-center justify-center sm:hidden">
        <label htmlFor="categories" className="block w-full max-w-xs">
          <span className="text-sm tracking-widest uppercase">Category</span>
          <select
            id="categories"
            name="categories"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full bg-black rounded-none form-select"
          >
            {categories.map((category) => (
              <option>{category}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="items-center justify-center hidden sm:flex">
        {categories.map((category, index) => (
          <Fragment key={category}>
            <button
              type="button"
              onClick={() => setFilter(category)}
              className="flex leading-none tracking-widest uppercase"
            >
              {category}
            </button>
            {index !== categories.length - 1 && (
              <span aria-hidden className="mx-4 text-xl leading-none">
                |
              </span>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

ProductFilter.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func.isRequired,
};

function Product({ product }) {
  return (
    <li className="w-full max-w-xs mx-auto">
      <a href="#contact-form">
        <div className="relative h-0 aspect-ratio-square">
          <div className="absolute inset-0 flex">
            <GatsbyImage
              fluid={product.image.childImageSharp.fluid}
              className="flex-1"
            />
          </div>
        </div>
        <dl className="flex justify-between mt-4 space-x-4 leading-tight">
          <dt className="text-sm tracking-widest uppercase">{product.name}</dt>
          <dd className="font-bold">${product.price / 100}</dd>
        </dl>
      </a>
    </li>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export { MerchGridImages };
