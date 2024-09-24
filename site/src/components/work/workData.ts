import { graphql, useStaticQuery } from "gatsby"
//import gatsby image types
//import { GatsbyImage } from "gatsby-plugin-image"
// import { workQuery } from "../../pages/work"


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

export const sortWorkPageOrder = (data: WorkItem[]) => {
  return data.map((edge: any) => edge.node).sort((a: WorkItem, b: WorkItem) => a.order - b.order);
}

export function getWorkPageData(){
  const data = useStaticQuery(workQuery);
  const work = sortWorkPageOrder(data.allWorkJson.edges);
  return work;
}