import { graphql, useStaticQuery } from "gatsby"

export interface WorkItem {
  title: string
  content: string
  position: string[]
  slug: string
  externalLink: string
  sections: WorkSection[]
  featuredImage: FeaturedImage
  colSpan?: number
}

export interface FeaturedImage {
  src: string
  alt: string
}

export interface WorkSection {
  title: string
  content: string
  images: string[]
}
//TODO: Add types for the data returned from the query
export function getWorkPageData(){
  const data = useStaticQuery(graphql`
    query MyQuery {
      allWorkJson {
        edges {
          node {
            content
            externalLink
            sections {
              content
              images
              title
            }
            position
            slug
            title
            featuredImage {
              src
              alt
            }
          }
        }
      }
    }
  `)
    
  return data.allWorkJson.edges.map((edge: any) => edge.node)
}