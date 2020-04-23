import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default function PageTemplate({ data }) {
  const { page } = data
  return (
    <Layout>
      <h1>{page.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: page.bodyMarkdown.childMarkdownRemark.html,
        }}
      />
    </Layout>
  )
}

export const query = graphql`
  query pageQuery($id: String!) {
    page: contentfulPage(id: { eq: $id }) {
      id
      slug
      title
      bodyMarkdown {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
