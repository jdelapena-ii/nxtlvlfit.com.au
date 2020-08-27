import React from 'react';

import { Heading } from '../heading';
import { useGraphQL, useInstagram } from '../../hooks';

function Instagram() {
  const {
    site: { siteMetadata },
  } = useGraphQL();

  const posts = useInstagram();

  return (
    <article className="px-4 py-12 space-y-12 bg-black bg-opacity-75 sm:px-6 lg:px-8">
      <div className="text-center">
        <Heading eyebrowText="What we're up to on ">Instagram</Heading>
        <a
          href={siteMetadata.social.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="uppercase"
        >
          {siteMetadata.social.instagram.handle}
        </a>
      </div>
      <div className="grid w-full max-w-4xl grid-cols-2 mx-auto md:grid-cols-4">
        {posts.map((post) => (
          <a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-0 overflow-hidden aspect-ratio-square"
          >
            <img
              src={post.src}
              alt={post.caption}
              srcSet={post.srcSet.join(', ')}
            />
            <div
              aria-hidden
              className="absolute inset-0 p-4 overflow-y-auto transition duration-300 ease-in-out bg-black bg-opacity-75 opacity-0 overscroll-y-auto hover:opacity-100"
            >
              {post.caption}
            </div>
          </a>
        ))}
      </div>
    </article>
  );
}

export { Instagram };
