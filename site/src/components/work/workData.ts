import { graphql, useStaticQuery } from "gatsby"

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
}

export interface Image {
  src: string
  alt: string
}

export interface WorkSection {
  title: string
  content: string
  images: Image[]
}

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