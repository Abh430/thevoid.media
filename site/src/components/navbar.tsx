import React from "react"
import Link from "next/link"
import ExportedImage from "next-image-export-optimizer"
import { NavLinks } from "./navigation"

const Navbar = () => {
  return (
    <nav className="bg-transparent">
      <div className="max-w-7xl mx-auto px-3 py-5 sm:py-6 rounded-md">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="w-full justify-between flex items-center">
            <Link
              className="text-white flex-shrink-0 font-montserrat font-semibold"
              href="/"
            >
              <ExportedImage
                className="max-w-[120px] max-h-[120px] lg:max-w-[180px] lg:max-h-[180px]"
                src="/images/void-combo-logo-stacked.png"
                alt="The Void Logo"
                width={350}
                height={350}
                style={{ width: 'auto', height: 'auto' }}
              />
              <span className="sr-only">THE VOID</span>
            </Link>
            <NavLinks />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
