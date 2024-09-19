import React from "react"
import WorkPage from "../components/work/workPage"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Work = (props) => {
  const { data } = props;
  return (
    <Layout>
      <WorkPage workItems={data} hasModal={false}></WorkPage>
    </Layout>
  )
}


export const Head = () => (
  <Seo
    title="The Void - Visual Media and Experience Designer"
    description="I am da voyyyd."
  ></Seo>
);


export default Work
