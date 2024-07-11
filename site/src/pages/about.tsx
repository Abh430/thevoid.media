import React from "react"
import AboutPage from "../components/about/aboutPage"

import Seo from "../components/seo"

import Layout from "../components/layout"

const About = () => {
  return (
    <Layout>
      <Seo
        title="About - Holo"
        description="Holo is a visually striking and highly customizable open source theme built on the powerful Gatsby framework and integrated with the versatile Decap CMS."
      ></Seo>
      <AboutPage></AboutPage>
    </Layout>
  )
}

export default About
