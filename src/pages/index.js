import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import MainBoard from "../components/MainBoard/MainBoard.jsx"
import MainProject from "../components/MainProject/MainProject.jsx"
import { graphql } from "gatsby"
import MainIntro from "../components/MainIntro/MainIntro.jsx"

const IndexPage = ({ data }) => {
  const projects = data.allMarkdownRemark.edges.map(d => d.node.frontmatter)
  return (
    <Layout>
      <MainBoard />
      <MainIntro />
      <MainProject projects={projects} />
    </Layout>
  )
}

export const Head = () => (
  <Seo
    title="DDo Studio"
    description="뚜에블뎅 스튜디오입니다."
  />
)

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date
            title
            imagealt
            Image {
              childImageSharp {
                gatsbyImageData(
                  blurredOptions: { width: 100 }
                  width: 300
                  placeholder: DOMINANT_COLOR
                )
              }
            }
          }
        }
      }
    }
  }
`
