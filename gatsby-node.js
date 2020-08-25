const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityPost {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts from Sanity
  const posts = result.data.allSanityPost.nodes || [];
  posts.forEach((post) => {
    const {
      slug: { current: slug },
    } = post;
    createPage({
      path: `/posts/${slug}`,
      component: require.resolve('./src/templates/post.js'),
      context: { slug },
    });
  });
};
