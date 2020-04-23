const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const pageTemplate = path.resolve('./src/templates/page.js')
    resolve(
      graphql(
        `
          {
            pages: allContentfulPage {
              edges {
                node {
                  id
                  slug
                }
              }
            }
          }
        `,
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.pages.edges
        posts.forEach((post) => {
          let pagePath = '/'
          if (post.node.slug !== 'home') {
            pagePath = `/${slug}`
          }

          createPage({
            path: pagePath,
            component: pageTemplate,
            context: {
              id: post.node.id,
              slug: post.node.slug,
            },
          })
        })
      }),
    )
  })
}
