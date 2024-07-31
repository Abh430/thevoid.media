import * as React from "react"
import Layout from "../components/layout"

// Components
import Header from "../components/Home/header"
import Body from "../components/Home/body"
import Seo from "../components/seo"

import ScrollSpy from "react-ui-scrollspy";

const IndexPage = () => (

  <div className="min-h-screen w-screen">
    <Layout hasFooter={false} hasNav={false}>
      
        <div className="max-w-7xl mx-auto lg:px-6 md:px-3 relative box-border flex flex-row gap-7 justify-between">
          <Header />
          <Body />
        </div>
    </Layout>
  </div>
);



export const Head = () => (
  <Seo
    title="The Void - Visual Media and Experience Designer"
    description="I am da voyyyd."
  ></Seo>
);

export default IndexPage
