import React from "react"
import { Fade } from "react-awesome-reveal"

// Types
import { WorkItem } from "./workData"

interface WorkGridProps {
  workItems: WorkItem[];
}

const WorkGrid = ({ workItems }: WorkGridProps) => {
  return (
    <div className="grid-cols-3 grid-flow-row gap-4">
      {
        workItems.map((workItem, index) => {
          return (
            <Fade key={index} cascade>
              <a className="mb-8 block" data-href={workItem.slug} >
                <div key={index} className={`col-span-3 bg-center h-40 from-purple-500 to-cyan-500`} style={{backgroundImage: `url(${workItem.featuredImage.src})`}}>
                  <span>{workItem.title}</span>
                  <span>{workItem.position[0]}</span>
                  <div className="block">
                    <span>{workItem.startDate}</span> - <span>{workItem.endDate}</span>
                  </div>
                  
                  <span className="block">{workItem.content}</span>
                </div>
              </a>
            </Fade>
          )
        })
      }
    </div>
  )
}

export default WorkGrid