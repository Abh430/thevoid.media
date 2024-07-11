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
            <h1 className="text-zinc-100 text-4xl font-semibold opacity-70">
              THE VOID
            </h1>
          </Fade>

            <p className="mt-3 text-base text-zinc-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              This is a section that describes who I am and what I do.
            </p>

            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              
              {/* <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="/about"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 border border-purple text-base font-medium rounded-md text-black hover:text-white bg-transparent hover:bg-purple md:py-3 md:text-lg md:px-10"
                >
                  Get To Know Us
                </a>
              </div> */}
            </div>
          </div>

          <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
            {/* <img
              className="rounded-xl w-auto h-full object-cover flex justify-center"
              src={hero}
              alt=""
            ></img> */}
            <StaticImage style={{
                  // gridArea: "1/1",
                  // maxHeight: 600,
                  width: '200px'
                }}
                className="background-image"
                src="../../images/removed-Holographic.webp" 
                layout="fullWidth"
                formats={["auto", "webp", "avif"]}
                alt="Forward Escape" />
          </div>
        </header>
    
  )
}

export default HeaderColumn
