import { getAllWorkItems, getWorkItemBySlug } from "../../lib/data-loader"

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
  src: string
  alt: string
}

export interface WorkSection {
  title: string
  content: string
  images: Image[]
  columns?: number
}

export function getWorkPageData(): WorkItem[] {
  return getAllWorkItems() as WorkItem[]
}

// Re-export functions from data-loader for convenience
export { getAllWorkItems, getWorkItemBySlug }