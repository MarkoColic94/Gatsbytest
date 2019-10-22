import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout' 

const ArticleTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiLanding.title}</h1>
    <Img fixed={data.strapiLanding.Background_Image.childImageSharp.fixed}/>
    <p>{data.strapiLanding.Subheader}</p>
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiLanding(id: {eq: $id}) {
      Title
      Subheader
      Background_Image {
          childImageSharp {
            fixed(width: 200, height: 125) {
              ...GatsbyImageSharpFixed
            }
          }
        }
    }
  }
`