exports.createPages = async function ({ actions, graphql }) {
  actions.createPage({
    path: '/',
    component: require.resolve(`./src/templates/index-page/index-page-template.jsx`),
    context: { slug: '/' },
  })
}