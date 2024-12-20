import React from "react"
import { graphql } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import WorkPage from "../../components/work/workPage"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

import WorkSingleton from "../../components/work/workSingleton"

const Work = (props) => {
  const workItem = props.data.workJson;

  return (
    <Layout>
      <div className="max-w-7xl mx-auto relative box-border">
        <WorkSingleton workItem={workItem} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    workJson(id: { eq: $id }) {
      content
      externalLink
      sections {
        content
        columns
        title
          images {
            src {
              childImageSharp {
                gatsbyImageData(
                placeholder: BLURRED, 
                formats: AUTO)
              }
            }
            alt
          }
      }
      position
      slug
      path: gatsbyPath(filePath: "/work/{workJson.title}")
      title
      featuredImage {
        src {
          childImageSharp {
            gatsbyImageData(
            placeholder: BLURRED, 
            formats: AUTO,
            width: 1200,)
          }
        }
        alt
      }
      order
      endDate
      startDate
    }
  }
`

export const Head = (props) => {
  return (
    <Seo
      title="The Void - Visual Media and Experience Designer"
    >
    </Seo>
  );
}


export default Work
