import React from "react"
import { GetStaticProps } from "next"
import WorkPage from "../components/work/workPage"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { getWorkPageData, WorkItem } from "../components/work/workData"

interface WorkProps {
  workItems: WorkItem[]
}

const Work = ({ workItems }: WorkProps) => {
  return (
    <>
      <Seo title="The Void - Visual Media and Experience Designer" />
      <Layout>
        <WorkPage workItems={workItems} hasModal={false}></WorkPage>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps<WorkProps> = async () => {
  const workItems = getWorkPageData()
  
  return {
    props: {
      workItems,
    },
  }
}

export default Work
