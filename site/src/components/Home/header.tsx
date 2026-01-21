import React from "react"
import Image from "next/image"
import {Fade} from "react-awesome-reveal"

interface HeaderColumnProps {
  activeItem?: string
  scrollPos?: number
  headerRef: any
}

const HeaderColumn = ({headerRef}: HeaderColumnProps) => {
  return (
        <header className="lg:sticky lg:top-0 mx-auto w-2/12 px-4 sm:px-6 lg:px-0 lg:pt-12 flex gap-10 flex-col align-middle max-h-screen">
          <div className="text-center lg:text-left flex justify-center">
              <a href="/">
                <Image
                    className=""
                    src="/images/void-combo-logo-stacked.png" 
                    alt="The Void Logo"
                    width={200}
                    height={200}
                    style={{ width: '200px', height: 'auto' }}
                  />
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
            <ul id="navigation" ref={headerRef}>
              <li className="relative">
                <a className="navLink" href="#about" data-to-scrollspy-id="about">ABOUT</a>
              </li>
              <li className="relative">
                <a className="navLink" href="#work" data-to-scrollspy-id="work">WORK</a>
              </li>
              <li className="relative">
                <a className="navLink" href="#contact" data-to-scrollspy-id="contact">CONTACT</a>
              </li>
            </ul>
          </div>
        </header>
    
  )
}

export default HeaderColumn
