import React from "react"
import WorkPage from "../components/work/workPage"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"

import { sortWorkPageOrder } from "../components/work/workData"

const Work = (props) => {
  const { data } = props;
  // console.log(props, workQuery);
  const workItems = sortWorkPageOrder(data.allWorkJson.edges);
  return (
    <Layout>
      <WorkPage workItems={workItems} hasModal={false}></WorkPage>
    </Layout>
  )
}


export const Head = (props) => {

  return (
    <Seo
      title="The Void - Visual Media and Experience Designer"
    >
    </Seo>
  );
}

export const workQuery = graphql`
query {
  allWorkJson {
    edges {
      node {
        content
        externalLink
        path: gatsbyPath(filePath: "/work/{workJson.title}")
        sections {
          content
          columns
          title
          images {
            src {
              childImageSharp {
                gatsbyImageData(
                placeholder: BLURRED, 
                formats: AUTO,) 
              }
            }
            alt
          }
        }
        position
        slug
        title
        featuredImage {
          src {
            childImageSharp {
              gatsbyImageData(
              placeholder: BLURRED, 
              formats: AUTO,
              width: 1000,
              )
            }
          }
          alt
        }
        order
        endDate
        startDate
      }
    }
  }
  }
`;


export default Work
