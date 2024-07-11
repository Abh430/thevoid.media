import React from "react"
import {Fade} from "react-awesome-reveal"
import { StaticImage } from "gatsby-plugin-image"

interface HeaderColumnProps {
  activeItem?: string
  scrollPos?: number
}

const HeaderColumn = ({activeItem, scrollPos}: HeaderColumnProps) => {
  return (
   
        <header className="lg:sticky lg:top-0 mx-auto w-1/3 px-4 sm:px-6 lg:px-0 xl:pt-28 flex gap-10 lg:flex-start lg:flex flex-col max-h-screen">
          <div className="text-center lg:text-left  justify-center">

            <Fade duration={2200}>
              <StaticImage style={{
                    // gridArea: "1/1",
                    // maxHeight: 600,
                    width: '200px'
                  }}
                  className="background-image"
                  src="../../images/void-combo-logo.png" 
                  layout="fullWidth"
                  formats={["auto", "webp", "avif"]}
                  alt="Forward Escape" />
              <h1 className="text-zinc-100 text-4xl font-semibold opacity-70">
                THE VOID
              </h1>
            </Fade>

            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              
            </div>
          </div>

          <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
            {/* <img
              className="rounded-xl w-auto h-full object-cover flex justify-center"
              src={hero}
              alt=""
            ></img> */}
            
          </div>
        </header>
    
  )
}

export default HeaderColumn
