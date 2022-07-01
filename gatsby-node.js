const path = require("path")
const webpack = require("webpack")

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
      {
              allMarkdownRemark(
        filter: {frontmatter: {collectionType: {eq: "corporate-insurance"}}}
      ) {
        group(field: frontmatter___type) {
          fieldValue
        }
        edges {
          node {
            html
            frontmatter {
              path
            }
          }
        }
      }
      }
    `
  )

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create pages for each markdown file.
  const blogPostTemplate = path.resolve(`src/templates/corporate-insurance.js`)
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const path = node.frontmatter.path
    createPage({
      path,
      component: blogPostTemplate,
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        html: node.html,
        pagePath: path
      }
    })
  })
}

exports.onCreateWebpackConfig = ({
                                   actions
                                 }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        process: require.resolve("process/browser"),
        zlib: require.resolve("browserify-zlib"),
        stream: require.resolve("stream-browserify"),
        util: require.resolve("util"),
        buffer: require.resolve("buffer"),
        assert: require.resolve("assert")
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
        process: "process/browser"
      })
    ]
  })
}