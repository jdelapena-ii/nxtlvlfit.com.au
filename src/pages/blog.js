import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Layout, SEO, BlogPost } from '../components';
import { SearchIcon } from '../components/vectors/search-icon';

function BlogPage({
  data: {
    allSanityPost: { nodes },
  },
}) {
  /**
   * Filter posts from search input
   */
  const [searchQuery, setSearchQuery] = useState('');
  const [posts, setPosts] = useState(nodes);

  // Filter search results from search results
  useMemo(() => {
    const filteredPosts = nodes.filter(
      (node) =>
        node.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        node.categories.find(
          ({ title }) =>
            title.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
        )
    );
    setPosts(filteredPosts);
  }, [nodes, searchQuery]);

  /**
   * Filter posts from select menu
   */
  const [categories, setCategories] = useState([]);

  // State for filtering posts from select menu
  const [filter, setFilter] = useState('All');

  // Get unique categories
  useMemo(() => {
    const cat = [];
    // Push all category titles to cat array
    posts.map((post) => {
      return post.categories.map((category) => cat.push(category.title));
    });
    // Filter duplicates and sort alphabetically
    setCategories([...new Set(cat)].sort((a, b) => a.localeCompare(b)));
  }, [posts]);

  // Filter by tag
  const filtered = useMemo(
    () =>
      filter === 'All'
        ? posts
        : posts.filter((post) => {
            return post.categories.some(({ title }) => title === filter);
          }),
    [filter, posts]
  );

  return (
    <Layout>
      <SEO title="Blog" />
      <article className="mt-12 px-4 space-y-12 sm:px-6 lg:px-8">
        <div className="mx-auto text-center">
          <h1 className="heading-1">Welcome to our blog.</h1>
          <div className="grid max-w-2xl gap-x-6 gap-y-10 mx-auto mt-4 sm:grid-cols-2">
            <div className="relative">
              <label htmlFor="search-input">
                <span className="absolute inset-y-0 inline-flex items-center left-3">
                  <SearchIcon className="w-5 h-5 text-gray-400" />
                </span>
                <input
                  id="search-input"
                  name="search-input"
                  type="search"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="text-black w-full pl-10 rounded-full form-input"
                />
              </label>
            </div>
            <div>
              <select
                id="category-filter"
                name="category-filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="text-black w-full pl-4 rounded-full form-select"
              >
                <option value="All">Select a category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-12 sm:grid-cols-2 mt-28 sm:mt-40 lg:grid lg:grid-cols-3 lg:gap-12">
          {searchQuery !== '' && !posts.length ? (
            <p className="text-center">
              No results found! Please try a different search.
            </p>
          ) : (
            filtered.map((post) => (
              <BlogPost
                key={post.id}
                post={post}
                filter={filter}
                setFilter={setFilter}
              />
            ))
          )}
        </div>
      </article>
    </Layout>
  );
}

BlogPage.propTypes = {
  data: PropTypes.object,
};

export const graphqlQuery = graphql`
  query MyQuery {
    allSanityPost(sort: { order: DESC, fields: publishedAt }) {
      nodes {
        _createdAt(formatString: "MMMM DD, YYYY")
        _rawBody(resolveReferences: { maxDepth: 50 })
        categories {
          title
          id
        }
        id
        mainImage {
          asset {
            fluid(maxWidth: 1920) {
              ...GatsbySanityImageFluid
            }
          }
        }
        publishedAt(formatString: "MMMM DD, YYYY")
        slug {
          current
        }
        title
      }
    }
  }
`;

export default BlogPage;
