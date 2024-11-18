import React from "react"
import AboutPage from "../components/about/aboutPage"

import Seo from "../components/seo"

import Layout from "../components/layout"

const About = () => {
  return (
    <Layout>
      <AboutPage></AboutPage>
    </Layout>
  )
}

export const Head = (props) => {

  return (
    <Seo
      title="The Void - Visual Media and Experience Designer"
    >
    </Seo>
  );
}

export default About
