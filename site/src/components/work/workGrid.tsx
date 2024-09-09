import React from "react"
import { Fade } from "react-awesome-reveal"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

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
          const img = getImage(workItem.featuredImage.src.childImageSharp);
          const bgImage = convertToBgImage(img);
          
          return (
            <Fade key={index} cascade>
              <a className="mb-8 block relative overflow-hidden bg-gradient-to-r from-zinc-600 cursor-pointer" data-href={workItem.slug} onClick={() => showModal(workItem.path)}  >
                
              <BackgroundImage
                Tag="div"
                className="pl-5"
                style={{
                  backgroundSize: '90%',
                  backgroundPosition: 'right center'
                }}
                // fluid={bgImage?.fluid}
                // Spread bgImage into BackgroundImage:
                {...bgImage}
                preserveStackingContext
              >
                <div key={index} className={`col-span-3 bg-center bg-no-repeat  h-40 `}>
                  <span>{workItem.title}</span>
                  <span>{workItem.position[0]}</span>
                  <div className="block">
                    <span>{workItem.startDate}</span> - <span>{workItem.endDate}</span>
                  </div>
                  
                  <span className="block">{workItem.content}</span>
                  {/* {false && img && <GatsbyImage style={{
                    // gridArea: "1/1",
                    // maxHeight: 600,
                    // maxWidth: 1200,
                    }}
                    key={index}
                    className="absolute right-0 inset-y-0 opacity-20"
                    image={img}
                    alt={workItem.featuredImage.alt} />} */}

                </div>
                </BackgroundImage>
              </a>
            </Fade>
          )
        })
      }
    </div>
  )
}

function showModal(modalTarget: string){
  console.log("show modal: " + modalTarget);
}

export default WorkGrid