import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"


const IndexPage = ({data}) => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div className="container">
    {data.allStrapiLanding.edges.map(document => (
        <div key={document.node.id}>
        <h2>
          <Link style={{ textDecoration: 'none' }} to={`/${document.node.id}`}>
            {document.node.Title}
          </Link>
        </h2>
        <Img fixed={document.node.Background_Image.childImageSharp.fixed} alt="" />
        </div>
      ) )}
      </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiLanding {
      edges {
        node {
          id
          Background_Image {
            childImageSharp {
              fixed(width: 200, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          Title
          Subheader
        }
      }
    }
  }
`
