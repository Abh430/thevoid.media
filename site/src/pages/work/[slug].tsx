import React from "react"
import { GetStaticProps, GetStaticPaths } from "next"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import WorkSingleton from "../../components/work/workSingleton"
import { getWorkItemBySlug, getAllWorkItems, WorkItem } from "../../components/work/workData"

interface WorkPageProps {
  workItem: WorkItem
}

const WorkPage = ({ workItem }: WorkPageProps) => {
  if (!workItem) {
    return (
      <>
        <Seo title="Work Not Found" />
        <Layout>
          <div className="max-w-7xl mx-auto relative box-border">
            <div>Work item not found</div>
          </div>
        </Layout>
      </>
    )
  }

  return (
    <>
      <Seo title={`${workItem.title} - The Void`} />
      <Layout>
        <div className="max-w-7xl mx-auto relative box-border">
          <WorkSingleton workItem={workItem} />
        </div>
      </Layout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const workItems = getAllWorkItems()
  
  const paths = workItems.map((item) => ({
    params: { slug: item.slug },
  }))
  
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<WorkPageProps> = async ({ params }) => {
  const slug = params?.slug as string
  const workItem = getWorkItemBySlug(slug)
  
  if (!workItem) {
    return {
      notFound: true,
    }
  }
  
  return {
    props: {
      workItem,
    },
  }
}

export default WorkPage
