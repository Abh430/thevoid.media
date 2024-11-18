import { Link } from "gatsby"
import React from "react"

import { SocialMediaLinks, EmailContact } from "./contact/contactPage"

const Footer = () => {
  return (
    <div className="m-4 border-t">
      <div className="max-w-7xl mx-auto mt-10 h-auto lg:mb-8 sm:mb-4 xs:mb-4 xxs:mb-4">
        <div className="footer pt-4 mt-4 rounded-xl">
          <div className="grid grid-cols-2 xxs:grid-cols-1 lg:grid-cols-2">
            <div className="self-center xxs:hidden lg:block">
              <ul className="text-sm text-zinc-400 font-montserrat">
                <li>
                  <Link  className="text-sm text-zinc-400 font-montserrat" to="/about">About</Link>
                </li>
                <li>
                  <Link  className="text-sm text-zinc-400 font-montserrat" to="/work">Work</Link>
                </li>
                {/* <li>
                  <Link to="/blog">Blog</Link>
                </li> */}
                {/* <li>
                  <Link to="/blog">Store</Link>
                </li> */}
                <li>
                  <Link  className="text-sm text-zinc-400 font-montserrat" to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="place-self-end  mt-20">
              <SocialMediaLinks />
              <p className="text-white text-lg font-bold">
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
