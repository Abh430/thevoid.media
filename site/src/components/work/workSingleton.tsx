import React from "react"
import { graphql } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

const WorkSingleton = (props) => {
  const { workItem } = props;

if(!workItem) return null;

  return (
      <div className="max-w-7xl mx-auto relative box-border">
        <header className="block">
          <h1 className="text-zinc-50 py-2 text-4xl font-semibold">{workItem.title} <a href={workItem.externalLink}>link out</a></h1>
          <span className="text-zinc-200 text-xl">
            {
              workItem.position.map((position, index) => {
                //add comma if we arent at the end of the array
                return <span key={index}>{position}{index != workItem.position.length - 1 ? `, ` : `` }</span>
              })
            }
          </span>

          <span className="block text-zinc-400 text-md">
              {
                `${workItem.startDate} - ${workItem.endDate}`
              }
            </span>
            <p className="block my-4 text-zinc-300 text-md">
              {workItem.content}
            </p>
        </header>
        <div>
          {
            workItem.sections.map((section, index) => {
              return (
                <section className="mt-12" key={index}>
                  <h2 className="text-zinc-100 py-2 text-xl font-semibold">{section.title}</h2>
                  <p className="text-zinc-300">{section.content}</p>
                  <div className={"grid xl:gap-4 " + (section.columns ? "xl:grid-cols-" + section.columns : "xl:grid-cols-1")}>
                    {
                      section.images &&
                      section.images.map((image, index) => {
                        if(!image.src) return null;
                        const img = getImage(image.src.childImageSharp);
                        
                        if (!img) return null;
                        return (

                          <div className="py-2" key={index}>
                            <GatsbyImage style={{
                            // gridArea: "1/1",
                            // maxHeight: 600,
                            maxWidth: 1200,
                            }}
                            loading={props.isModal ? "eager" : "lazy"}
                            key={index}
                            className=""
                            image={img}
                            alt={image.alt} />
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
