import React from "react"
import Layout from "../components/layout"
import ContactPage from "../components/contact/contactPage"
import Seo from "../components/seo"

const Contact = () => {
  return (
    <>
      <Seo title="The Void - Visual Media and Experience Designer" />
      <Layout>
        <div className="max-w-7xl mx-auto mt-10 flex text-white xxs:flex-col sm:flex-row">
          <ContactPage />
        </div>
      </Layout>
    </>
  )
}

export default Contact
