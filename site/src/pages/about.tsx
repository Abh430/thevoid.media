import React from "react"
import AboutPage from "../components/about/aboutPage"
import Seo from "../components/seo"
import Layout from "../components/layout"

const About = () => {
  return (
    <>
      <Seo title="The Void - Visual Media and Experience Designer" />
      <Layout>
        <AboutPage></AboutPage>
      </Layout>
    </>
  )
}

export default About
