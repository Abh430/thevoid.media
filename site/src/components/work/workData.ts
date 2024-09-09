import { graphql, useStaticQuery } from "gatsby"
//import gatsby image types
//import { GatsbyImage } from "gatsby-plugin-image"


export interface WorkItem {
  title: string
  content: string
  position: string[]
  order: number
  startDate: string
  endDate: string
  slug: string
  externalLink?: string
  sections: WorkSection[]
  featuredImage: Image
  colSpan?: number
  path: string
}

export interface Image {
  src: any
  alt: string
}

export interface WorkSection {
  title: string
  content: string
  images: Image[]
  columns?: number
}

export function getWorkPageData(){
  const data = useStaticQuery(graphql`
    query MyQuery {
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
                    formats: AUTO,
                    width: 800,
                    height: 800,)
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
  `)
  const work = data.allWorkJson.edges.map((edge: any) => edge.node).sort((a: WorkItem, b: WorkItem) => a.order - b.order);
  return work;
}