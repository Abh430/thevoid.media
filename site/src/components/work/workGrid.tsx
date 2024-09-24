import React, { useState, useEffect } from "react";
import { Link } from "gatsby"

import { Fade } from "react-awesome-reveal"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

// Types
import { WorkItem } from "./workData"

interface WorkGridProps {
  workItems: WorkItem[];
  openModal?: (workItem: WorkItem) => void;
  hasModal: boolean;
}

const WorkGrid = ({ workItems, openModal, hasModal }: WorkGridProps) => {
  return (
    <>
    <div className="grid-cols-3 grid-flow-row gap-4">
      {
        workItems.map((workItem, index) => {

          const img = getImage(workItem.featuredImage.src.childImageSharp);
          const bgImage = convertToBgImage(img);
          
          return (
              <Fade key={index} cascade>
                <GridItem workItem={workItem} openModal={openModal} hasModal={hasModal} >
                  
                <BackgroundImage
                  Tag="div"
                  className=""
                  style={{
                    backgroundSize: '95%',
                    backgroundPosition: 'right center'
                  }}
                  // fluid={bgImage?.fluid}
                  // Spread bgImage into BackgroundImage:
                  {...bgImage}
                  preserveStackingContext
                >
                  <div key={index} className="grid-item col-span-3 p-5 bg-center bg-no-repeat h-40 flex flex-col flex-nowrap justify-center">
                    <span className="block text-zinc-50 font-semibold grid-item__title">{workItem.title}</span>
                    <span className="block text-zinc-200 text-xl">{workItem.position[0]}</span>
                    <div className="block grid-item__description">
                      <span>{workItem.startDate}</span> - <span>{workItem.endDate}</span>
                    </div>
                    
                    <span className="block overflow-hidden grid-item__description">{workItem.content}</span>

                  </div>
                  </BackgroundImage>
                </GridItem>
              </Fade>
          )
        })
      }
    </div>
    </>
  )
}

const GridItemModal = ({workItem, children, openModal}) => {
  return (
    <a className="mb-8 block relative overflow-hidden ease-in-out duration-800 transition-all bg-gradient-to-r from-0% hover:from-60% from-indigo-950 cursor-pointer" data-href={workItem.slug} onClick={() => openModal(workItem)}  >
      {children}
    </a>
  )
}


const GridItemLink = ({workItem, children}) => {
  return (
    <Link className="mb-8 block relative overflow-hidden ease-in-out duration-800 transition-all bg-gradient-to-r from-0% hover:from-60% from-indigo-950 cursor-pointer" to={workItem.path}  >
      {children}
    </Link>
  )
}

const GridItem = ({workItem, children, openModal, hasModal}) => {
  return (
    <>
    {hasModal ? 
      <GridItemModal workItem={workItem} openModal={openModal}>
        {children}
      </GridItemModal>
      :
      <GridItemLink workItem={workItem}>
        {children}
      </GridItemLink>
    }
    </>
  )


}

export default WorkGrid