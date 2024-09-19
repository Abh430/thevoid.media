import * as React from "react"

// Components
import AboutPage from "../about/aboutPage"
import WorkPage from "../work/workPage"
import ContactPage from "../contact/contactPage"

import ScrollSpy from "react-ui-scrollspy";

//data
import { getWorkPageData } from "../work/workData";


const BodyBlock = (props) => {
  const { openModal } = props;
  const workItems = getWorkPageData();
  
  return (
    <main className="max-w-10/12 2-10/12 px-4 sm:px-6 lg:px-0 gap-10">
      <ScrollSpy offsetTop={0} offsetBottom={40}>
        <AboutPage />
        <WorkPage  workItems={workItems} hasModal={true} openModal={openModal} />
        <ContactPage />
      </ScrollSpy>
    </main>
  )
}

export default BodyBlock;