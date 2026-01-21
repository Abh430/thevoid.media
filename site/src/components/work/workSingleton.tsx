import React from "react"
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { WorkItem } from "./workData"

interface WorkSingletonProps {
  workItem: WorkItem
  onClose?: () => void
  isModal?: boolean
}

const WorkSingleton = ({ workItem, onClose, isModal = false }: WorkSingletonProps) => {
  if(!workItem) return null;

  // Helper to resolve image paths
  const resolveImagePath = (src: string): string => {
    if (!src) return '';
    if (src.startsWith('/')) return src;
    if (src.startsWith('../')) return src.replace('../', '/');
    return `/img/${src}`;
  };

  return (
      <div className="">
        <header className="block">
          <h1 className="text-zinc-50 py-2 text-4xl font-semibold">
            {workItem.title} 
            {workItem.externalLink && (
              <a href={workItem.externalLink} target="_blank" rel="noopener noreferrer">
                <span className="sr-only">link out</span> 
                <FontAwesomeIcon className="text-indigo-400" icon={faArrowUpRightFromSquare} />
              </a>
            )}
          </h1>
          <span className="text-zinc-200 text-xl">
            {
              workItem.position?.map((position, index) => {
                //add comma if we arent at the end of the array
                return <span key={index}>{position}{index !== workItem.position.length - 1 ? `, ` : `` }</span>
              })
            }
          </span>

          <span className="block text-zinc-400 text-md">
              {
                `${workItem.startDate} - ${workItem.endDate}`
              }
            </span>
        </header>
        <div>
          {
            workItem.sections?.map((section, index) => {
              return (
                <section className="mt-12" key={index}>
                  <h2 className="text-zinc-100 py-2 text-xl font-semibold">{section.title}</h2>
                  <p className="text-zinc-300">{section.content}</p>
                  <div className={`grid xl:gap-4 ${section.columns ? `xl:grid-cols-${section.columns}` : 'xl:grid-cols-1'}`}>
                    {
                      section.images &&
                      section.images.map((image, imgIndex) => {
                        if(!image.src) return null;
                        const resolvedSrc = resolveImagePath(image.src);
                        
                        if (!resolvedSrc) return null;
                        return (
                          <div className="py-2" key={imgIndex}>
                            <div style={{ maxWidth: 1200, position: 'relative', width: '100%', height: 'auto' }}>
                              <Image
                                src={resolvedSrc}
                                alt={image.alt || ''}
                                width={1200}
                                height={800}
                                style={{ width: '100%', height: 'auto', maxWidth: 1200 }}
                                loading={isModal ? "eager" : "lazy"}
                                className=""
                              />
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                </section>
              )
            })
          }
        </div>
      </div>
  )
}

export default WorkSingleton
