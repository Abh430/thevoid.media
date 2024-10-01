import React from "react"
import { Fade } from "react-awesome-reveal"

// Components
import WorkGrid from "./workGrid"

interface WorkPageProps {
  openModal?: (workItem: any) => void
  workItems?: any;
  hasModal: boolean;
}

const WorkPage = ({workItems, hasModal, openModal}: WorkPageProps) => {
  return (
    <div id="work" className="max-w-7xl mx-auto">
      
        {/* <div className="mt-10  flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row content-center justify-center align-middle text-center">
          
        </div> */}

      <div className="lg:mb-20 sm:mb-10 px-8">
        <Fade cascade>
          <h2 className="text-zinc-50 pt-2 pb-8 text-2xl font-semibold">WORK</h2>
        </Fade>
        <WorkGrid workItems={workItems} openModal={openModal} hasModal={hasModal} />
      </div>
    </div>
  )
}

export default WorkPage
