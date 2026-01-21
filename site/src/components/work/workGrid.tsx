import React from "react";
import Link from "next/link"
import { Fade } from "react-awesome-reveal"
import { BackgroundImage } from "../BackgroundImage"
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
          // Resolve image path - handle both relative and absolute paths
          const imageSrc = workItem.featuredImage?.src || '';
          const resolvedImageSrc = imageSrc.startsWith('/') 
            ? imageSrc 
            : imageSrc.startsWith('../') 
              ? imageSrc.replace('../', '/')
              : `/img/${imageSrc}`;
          
          return (
              <Fade key={index} cascade>
                <GridItem workItem={workItem} openModal={openModal} hasModal={hasModal} >
                  {/* Work title and info above the image */}
                  <div className="p-5 pb-2">
                    <span className="block text-zinc-50 font-semibold grid-item__title">{workItem.title}</span>
                    <span className="block text-zinc-200 text-xl">{workItem.position?.[0]}</span>
                  </div>
                  
                  {/* Image with grayscale effect - full color on hover/active */}
                  <div className="relative h-40 overflow-hidden rounded-b-xl">
                    <div className="absolute inset-0 grayscale group-hover:grayscale-0 group-active:grayscale-0 transition-all duration-500">
                      <BackgroundImage
                        src={resolvedImageSrc}
                        alt={workItem.featuredImage?.alt || workItem.title}
                        className="h-full"
                        style={{
                          backgroundSize: '95%',
                          backgroundPosition: 'right center'
                        }}
                      >
                        <div className="h-full" />
                      </BackgroundImage>
                    </div>
                    
                    {/* Description overlay - background slides down, then content fades in */}
                    <div className="absolute inset-0">
                      {/* Background box that slides down to cover full image */}
                      <div className="absolute inset-x-0 top-0 h-full bg-black/80 backdrop-blur-sm rounded-b-xl -translate-y-full group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-300" />
                      
                      {/* Content that fades in after background slides */}
                      <div className="relative p-4 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 delay-150">
                        <div className="text-zinc-200 text-sm">
                          <span>{workItem.startDate}</span> - <span>{workItem.endDate}</span>
                        </div>
                        <span className="block text-zinc-300 text-sm mt-1">{workItem.content}</span>
                      </div>
                    </div>
                  </div>
                </GridItem>
              </Fade>
          )
        })
      }
    </div>
    </>
  )
}

const GridItemModal = ({workItem, children, openModal}: {workItem: WorkItem, children: React.ReactNode, openModal?: (workItem: WorkItem) => void}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (openModal) {
      openModal(workItem);
    }
  };
  
  return (
    <a 
      className="group mb-8 block relative rounded-xl ease-in-out duration-800 bg-black/20 hover:bg-black/40 cursor-pointer" 
      href={workItem.path}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}

const GridItemLink = ({workItem, children}: {workItem: WorkItem, children: React.ReactNode}) => {
  return (
    <Link className="group mb-8 block relative rounded-xl ease-in-out duration-800 bg-gradient-to-r from-0% from-indigo-950 cursor-pointer" href={workItem.path}  >
      {children}
    </Link>
  )
}

const GridItem = ({workItem, children, openModal, hasModal}: {workItem: WorkItem, children: React.ReactNode, openModal?: (workItem: WorkItem) => void, hasModal: boolean}) => {
  return (
    <>
    {hasModal && openModal ? 
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