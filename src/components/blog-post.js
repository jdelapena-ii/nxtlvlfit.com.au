import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import GatsbyImage from 'gatsby-image';

function BlogPost({ post, setFilter }) {
  return (
    <article
      key={post.id}
      className="flex duration-300 ease-in-out transform bg-white rounded-lg shadow hover:shadow-xl hover:scale-105"
    >
      <div className="flex flex-col flex-1 overflow-hidden rounded-lg shadow-sm">
        <div className="relative">
          <Link
            aria-hidden="true"
            tabIndex="-1"
            to={`/posts/${post.slug.current}`}
            className="relative block h-0 overflow-hidden aspect-ratio-4/3"
          >
            <div className="absolute inset-0 w-full h-full">
              <GatsbyImage
                fluid={post.mainImage.asset.fluid}
                className="h-full"
              />
            </div>
          </Link>
          <div className="absolute flex space-x-4">
            {post.categories.map((category) => (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setFilter(category.title);
                }}
                key={category.id}
                className="px-5 py-2 ml-6 text-xl leading-none text-white transform -translate-y-1/2 button bg-pink-600 border-pink-600 rounded-full"
              >
                {category.title}.
              </button>
            ))}
          </div>
        </div>
        <Link
          to={`/posts/${post.slug.current}`}
          className="px-6 focus:shadow-none group"
        >
          <h2
            title={post.title}
            className="mt-10 text-2xl font-bold leading-tight text-gray-600 clamp-2 font-display group-focus:underline"
          >
            {post.title}
          </h2>
          <div className="mt-4 prose">
            <p className="clamp-3 text-black">
              {post._rawBody.map((i) => `${i.children[0].text} `)}
            </p>
          </div>
        </Link>
        <div className="mt-auto prose">
          <p className="px-6 py-6 text-gray-600">
            <time>{post.publishedAt}</time>
          </p>
        </div>
      </div>
    </article>
  );
}

BlogPost.propTypes = {
  post: PropTypes.object.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export { BlogPost };
