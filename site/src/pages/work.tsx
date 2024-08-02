import React from "react"
import WorkPage from "../components/work/workPage"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Work = () => {
  return (
    <Layout>

      <WorkPage></WorkPage>
    </Layout>
  )
}

{/* <Seo
title="The Void - Work"
description="Holo is a visually striking and highly customizable open source theme built on the powerful Gatsby framework and integrated with the versatile Decap CMS"
></Seo> */}

export const Head = () => (
  <Seo
    title="The Void - Visual Media and Experience Designer"
    description="I am da voyyyd."
  ></Seo>
);


export default Work
