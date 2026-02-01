exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityPost {
        nodes {
          slug { current }
        }
      }
    }
  `);

  result.data.allSanityPost.nodes.forEach(post => {
    createPage({
      path: `/article/${post.slug.current}`,
      component: require.resolve("./src/templates/article-post.jsx"),
      context: { slug: post.slug.current }
    });
  });
};
