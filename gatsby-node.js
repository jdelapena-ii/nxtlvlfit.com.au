const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      # allSanityPost {
      #   nodes {
      #     slug {
      #       current
      #     }
      #   }
      # }
      allSanityService {
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
  // const posts = result.data.allSanityPost.nodes || [];
  // posts.forEach((post) => {
  //   const {
  //     slug: { current: slug },
  //   } = post;
  //   createPage({
  //     path: `/posts/${slug}`,
  //     component: require.resolve('./src/templates/post.js'),
  //     context: { slug },
  //   });
  // });

  // Create service pages from Sanity
  const services = result.data.allSanityService.nodes || [];
  services.forEach((service) => {
    const {
      slug: { current: slug },
    } = service;
    createPage({
      path: `/services/${slug}`,
      component: require.resolve('./src/templates/service.js'),
      context: { slug },
    });
  });
};
