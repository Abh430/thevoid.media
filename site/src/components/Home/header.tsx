import React, { useState, useEffect } from "react"
import Link from "next/link"
import ExportedImage from "next-image-export-optimizer"
import { NavLinks } from "../navigation"

interface HeaderColumnProps {
  activeItem?: string
  scrollPos?: number
  headerRef?: React.RefObject<HTMLDivElement | null>
}

const HeaderColumn = ({headerRef}: HeaderColumnProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close menu when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape)
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-zinc-900/95 backdrop-blur-sm mx-auto w-full lg:w-2/12 py-5 sm:py-2 px-4 sm:px-6 lg:px-0 lg:pt-12 lg:pb-4 flex gap-4 lg:gap-10 flex-row lg:flex-col items-center lg:items-start justify-between lg:justify-start align-middle lg:max-h-screen">
        <div className="text-center lg:text-left flex justify-center lg:justify-start">
          <Link href="/" onClick={closeMenu}>
            <ExportedImage
              className="max-w-[100px] max-h-[100px] lg:max-w-[140px] lg:max-h-[140px]"
              src="/images/void-combo-logo-stacked.png"
              alt="The Void Logo"
              width={200}
              height={200}
              style={{ width: 'auto', height: 'auto' }}
            />
          </Link>
          <h1 className="text-zinc-100 sr-only font-semibold">
            THE VOID
          </h1>

          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          </div>
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden lg:block lg:inset-y-0 lg:right-0 lg:w-1/2 my-12 lg:my-8">
          <div ref={headerRef}>
            <NavLinks className="lg:flex-col lg:gap-0" />
          </div>
        </div>

        {/* Hamburger Button - Mobile Only */}
        <button
          className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none !bg-zinc-900 !rounded-md hover:bg-zinc-800"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 !bg-black/65 backdrop-blur-sm z-40 transition-all duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMenu}
      >
        <div
          className={`flex flex-col items-center justify-center min-h-screen transition-all duration-300 delay-100 ${
            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <NavLinks
            vertical
            className="text-center"
            linkClassName="navLink text-2xl py-3 block"
            onLinkClick={closeMenu}
          />
        </div>
      </div>
    </>
  )
}

export default HeaderColumn
