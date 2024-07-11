import React from "react"
import { Fade } from "react-awesome-reveal"


const WorkGrid = ({ projects }) => {
  return (
    <div className="grid grid-cols-3 grid-flow-row gap-4">
          <div className="col-span-2 h-20 bg-gradient-to-br from-purple-500 to-cyan-500">
            <Fade cascade>
              <div className="">
                
              </div>
            </Fade>
          </div>
          <div className="col-span-1 h-20 bg-gradient-to-br from-purple-500 to-cyan-500">
            <Fade cascade>
              <div className="">
                
              </div>
            </Fade>
          </div>
          <div className="col-span h-20 bg-gradient-to-br from-purple-500 to-cyan-500">
            <Fade cascade>
              <div className="">
                
              </div>
            </Fade>
          </div>
          <div className="col-span-2 h-20 bg-gradient-to-br from-purple-500 to-cyan-500">
            <Fade cascade>
              <div className="">
                
              </div>
            </Fade>
          </div>
        </div>
  )
}

export default WorkGrid