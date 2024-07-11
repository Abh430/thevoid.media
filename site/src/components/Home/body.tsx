import * as React from "react"

// Components
import AboutPage from "../about/aboutPage"
import WorkPage from "../work/workPage"
import ContactPage from "../contact/contactPage"


const BodyBlock = () => {

  return (
    <main className="max-w-2/3 w-2/3 px-4 sm:px-6 lg:px-0 gap-10 ml-auto ">
        <AboutPage />
        <WorkPage />
        <ContactPage />
    </main>
  )
}

export default BodyBlock;