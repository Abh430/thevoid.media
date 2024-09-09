import React from "react"
import { graphql } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import WorkPage from "../../components/work/workPage"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const Work = (props) => {
  console.log(props)
  const workItem = props.data.workJson;

  return (
    <Layout>
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
        <body>
          {
            workItem.sections.map((section, index) => {
              console.log(section);
              
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

                          <div className="py-2">
                            <GatsbyImage style={{
                            // gridArea: "1/1",
                            // maxHeight: 600,
                            maxWidth: 1200,
                            }}
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
        </body>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    workJson(id: { eq: $id }) {
      content
      externalLink
      sections {
        content
        columns
        title
          images {
            src {
              childImageSharp {
                gatsbyImageData(
                placeholder: BLURRED, 
                formats: AUTO)
              }
            }
            alt
          }
      }
      position
      slug
      title
      featuredImage {
        src {
          childImageSharp {
            gatsbyImageData(
            placeholder: BLURRED, 
            formats: AUTO,
            width: 800,
            height: 800,)
          }
        }
        alt
      }
      order
      endDate
      startDate
    }
  }
`

export const Head = () => (
  <Seo
    title="The Void - Visual Media and Experience Designer"
    description="I am da voyyyd."
  ></Seo>
);


export default Work
