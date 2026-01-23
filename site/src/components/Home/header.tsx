import React from "react"
import Link from "next/link"
import ExportedImage from "next-image-export-optimizer"
import { NavLinks } from "../navigation"

interface HeaderColumnProps {
  activeItem?: string
  scrollPos?: number
  headerRef: any
}

const HeaderColumn = ({headerRef}: HeaderColumnProps) => {
  return (
    <header className="sticky top-0 z-50 bg-zinc-900/95 backdrop-blur-sm mx-auto w-full lg:w-2/12 py-5 sm:py-2 px-4 sm:px-6 lg:px-0 lg:pt-12 lg:pb-4 flex gap-4 lg:gap-10 flex-row lg:flex-col items-center lg:items-start justify-between lg:justify-start align-middle lg:max-h-screen">
      <div className="text-center lg:text-left flex justify-center lg:justify-start">
        <Link href="/">
          <ExportedImage
            className="max-w-[120px] max-h-[120px] lg:max-w-[180px] lg:max-h-[180px]"
            src="/images/void-combo-logo-stacked.png"
            alt="The Void Logo"
            width={350}
            height={350}
            style={{ width: 'auto', height: 'auto' }}
          />
        </Link>
        <h1 className="text-zinc-100 sr-only font-semibold">
          THE VOID
        </h1>

        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        </div>
      </div>

      <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-12 lg:my-8">
        <div ref={headerRef}>
          <NavLinks className="lg:flex-col lg:gap-0" />
        </div>
      </div>
    </header>
  )
}

export default HeaderColumn
