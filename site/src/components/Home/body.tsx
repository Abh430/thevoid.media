import * as React from "react"

// Components
import AboutPage from "../about/aboutPage"
import WorkPage from "../work/workPage"
import ContactPage from "../contact/contactPage"

import ScrollSpy from "react-ui-scrollspy";

const BodyBlock = (props) => {
  const { openModal, headerRef, bodyRef } = props;

  return (
    <main className="max-w-10/12 2-10/12 px-4 sm:px-6 lg:px-0 gap-10">
      {/* <ScrollSpy offsetTop={10} offsetBottom={0} updateHistoryStack={false} onUpdateCallback={onUpdate}> */}
        <AboutPage />
        <WorkPage  workItems={props.workItems} hasModal={true} openModal={openModal} />
        <ContactPage />
      {/* </ScrollSpy> */}
    </main>
  )
}

export default BodyBlock;