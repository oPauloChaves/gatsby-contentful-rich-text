import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'

import Layout from '../components/layout'
import Slider from '../components/slider'
import Hero from '../components/hero'

const shortcodes = { Slider, Hero }

export default function PageTemplate({ data }) {
  const { bodyMarkdown } = data.page

  return (
    <Layout>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{bodyMarkdown.childMdx.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  )
}

export const query = graphql`
  query pageQuery($id: String!) {
    page: contentfulPage(id: { eq: $id }) {
      bodyMarkdown {
        childMdx {
          body
        }
      }
    }
  }
`
