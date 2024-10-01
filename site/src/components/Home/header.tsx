import React from "react"
import {Fade} from "react-awesome-reveal"
import { StaticImage } from "gatsby-plugin-image"
import { navigate } from 'gatsby';

interface HeaderColumnProps {
  activeItem?: string
  scrollPos?: number
}

const HeaderColumn = ({}: HeaderColumnProps) => {
  return (
        <header className="lg:sticky lg:top-0 mx-auto w-2/12 px-4 sm:px-6 lg:px-0 lg:pt-12 flex gap-10 flex-col align-middle max-h-screen">
          <div className="text-center lg:text-left flex justify-center">
              <a href="/">
                <StaticImage style={{
                      // gridArea: "1/1",
                      // maxHeight: 600,
                      width: '200px'
                    }}
                    className=""
                    src="../../images/void-combo-logo-stacked.png" 
                    layout="fullWidth"
                    formats={["auto", "webp", "avif"]}
                    alt="The Void Logo" />
              </a>
              <h1 className="text-zinc-100 sr-only font-semibold">
                THE VOID
              </h1>

            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              
            </div>
          </div>

          <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
            {/* <img
              className="rounded-xl w-auto h-full object-cover flex justify-center"
              src={hero}
              alt=""
            ></img> */}
            <ul id="navigation">
              <li className="relative">
                <a href="#about" data-to-scrollspy-id="about">ABOUT</a>
              </li>
              <li className="relative">
                <a href="#work" data-to-scrollspy-id="work">WORK</a>
              </li>
              <li className="relative">
                <a href="#contact" data-to-scrollspy-id="contact">CONTACT</a>
              </li>
            </ul>
          </div>
        </header>
    
  )
}

export default HeaderColumn
