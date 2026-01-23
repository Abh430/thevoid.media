import React, { useState, useEffect } from "react"
import Link from "next/link"
import ExportedImage from "next-image-export-optimizer"
import { NavLinks } from "./navigation"

const Navbar = () => {
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
    <nav className="bg-transparent relative z-50">
      <div className="max-w-7xl mx-auto px-3 py-5 sm:py-6 rounded-md">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="w-full justify-between flex items-center">
            <Link
              className="text-white flex-shrink-0 font-montserrat font-semibold z-50"
              href="/"
              onClick={closeMenu}
            >
              <ExportedImage
                className="max-w-[100px] max-h-[100px] lg:max-w-[140px] lg:max-h-[140px]"
                src="/images/void-combo-logo-stacked.png"
                alt="The Void Logo"
                width={200}
                height={200}
                style={{ width: 'auto', height: 'auto' }}
              />
              <span className="sr-only">THE VOID</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <NavLinks />
            </div>

            {/* Hamburger Button - Mobile Only */}
            <button
              className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none !bg-zinc-900 !rounded-md hover:bg-zinc-800 "
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
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 !bg-black/65 backdrop-blur-sm z-40 transition-all duration-300 ease-in-out md:hidden ${
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
    </nav>
  )
}

export default Navbar
