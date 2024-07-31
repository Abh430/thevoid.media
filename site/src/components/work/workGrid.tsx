import React from "react"
import { Fade } from "react-awesome-reveal"

// Types
import { WorkItem } from "./workData"

interface WorkGridProps {
  workItems: WorkItem[];
}

const WorkGrid = ({ workItems }: WorkGridProps) => {
  console.log(workItems);
  
  return (
    <div className="grid-cols-3 grid-flow-row gap-4">
      {
        workItems.map((workItem, index) => {
          return (
            <Fade cascade>
              <a className="" data-href={workItem.slug} >
                <div key={index} className={`col-span-3 bg-center h-60 from-purple-500 to-cyan-500`} style={{backgroundImage: `url(${workItem.featuredImage.src})`}}>
                  <span>{workItem.title}</span>
                  <span>{workItem.position[0]}</span>
                  <span>{workItem.content}</span>
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