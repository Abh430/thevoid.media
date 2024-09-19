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
  console.log(workItems);
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
    <a className="mb-8 block relative overflow-hidden bg-gradient-to-r from-zinc-600 cursor-pointer" data-href={workItem.slug} onClick={() => openModal(workItem)}  >
      {children}
    </a>
  )
}


const GridItemLink = ({workItem, children}) => {
  return (
    <Link className="mb-8 block relative overflow-hidden bg-gradient-to-r from-zinc-600 cursor-pointer" to={workItem.path}  >
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