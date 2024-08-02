import React from "react"
import { Fade } from "react-awesome-reveal"

// Types
import { WorkItem } from "./workData"

interface WorkGridProps {
  workItem: WorkItem;
}

const WorkSection = ({ workItem }: WorkGridProps) => {
  return (
    <div className="grid-cols-3 grid-flow-row gap-4">
      {

      }
      <div className="">test</div>
    </div>
  )
}

export default WorkSection