import React from "react"
import { graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileMedicalAlt } from "@fortawesome/free-solid-svg-icons"

import Layout from "layouts/layout"
import Heading from "components/typography/heading"
import "styles/project.css"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <main className="min-h-screen bg-gray-50 text-gray-900 pt-10">
        <div className="max-w-5xl mx-auto  pb-20 px-4 lg:px-8 text-left">
          <div className="">
            <h1 className="pl-0 p-4 text-5xl text-gray-900 font-bold md:p-0  lg:pt-10">
              <FontAwesomeIcon icon={faFileMedicalAlt} size="2x" />
              <br />
              <br />
              {frontmatter.title}
            </h1>
            <br />
            <span className="mt-4 bg-yellow-300 p-2 text-gray-900">
              Lab Reports Management Web App
            </span>
          </div>
          <div
            className="blog-post-content mt-24"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`
