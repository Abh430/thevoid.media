import { Link } from "gatsby"
import React from "react"

const Footer = () => {
  return (
    <div className="m-4">
      <div className="max-w-7xl mx-auto mt-10 h-auto lg:mb-8 sm:mb-4 xs:mb-4 xxs:mb-4">
        <div className="footer p-10 mt-10 rounded-xl">
          <div className="grid grid-cols-2 xxs:grid-cols-1 lg:grid-cols-2">
            <div className="self-center xxs:hidden lg:block">
              <ul className="text-xl text-zinc-400 font-montserrat font-medium">
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/work">Work</Link>
                </li>
                {/* <li>
                  <Link to="/blog">Blog</Link>
                </li> */}
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="place-self-end">
              <p className="text-white text-lg font-bold mt-20">
                <span className="text-zinc-400 font-montserrat font-semibold mt-20">
                  &copy; {new Date().getFullYear()} Void Media, LLC. All Rights Reserved.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
