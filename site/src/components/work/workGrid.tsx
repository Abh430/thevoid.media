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
                  <BackgroundImage
                    src={resolvedImageSrc}
                    alt={workItem.featuredImage?.alt || workItem.title}
                    className=""
                    style={{
                      backgroundSize: '95%',
                      backgroundPosition: 'right center'
                    }}
                  >
                    <div key={index} className="grid-item col-span-3 p-5 bg-center transition backdrop-blur-none hover:backdrop-blur-lg bg-no-repeat h-40 flex flex-col flex-nowrap justify-center">
                      <span className="block text-zinc-50 font-semibold grid-item__title">{workItem.title}</span>
                      <span className="block text-zinc-200 text-xl">{workItem.position?.[0]}</span>
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

const GridItemModal = ({workItem, children, openModal}: {workItem: WorkItem, children: React.ReactNode, openModal?: (workItem: WorkItem) => void}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (openModal) {
      openModal(workItem);
    }
  };
  
  return (
    <a 
      className="mb-8 block relative overflow-hidden ease-in-out duration-800 bg-gradient-to-r from-0% from-indigo-950 cursor-pointer" 
      href={workItem.path}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}

const GridItemLink = ({workItem, children}: {workItem: WorkItem, children: React.ReactNode}) => {
  return (
    <Link className="mb-8 block relative overflow-hidden ease-in-out duration-800 bg-gradient-to-r from-0% from-indigo-950 cursor-pointer" href={workItem.path}  >
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