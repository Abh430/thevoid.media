import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import ExportedImage from "next-image-export-optimizer"
import {Fade} from "react-awesome-reveal"

interface HeaderColumnProps {
  activeItem?: string
  scrollPos?: number
  headerRef: any
}

const HeaderColumn = ({headerRef}: HeaderColumnProps) => {
  const router = useRouter();
  
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If we're on the home page, scroll to the anchor
    if (router.pathname === '/') {
      e.preventDefault();
      const hash = href.split('#')[1];
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Update URL without page reload
        router.push(href, undefined, { shallow: true, scroll: false });
      }
    }
    // Otherwise, navigate to home page with anchor
    // The default Link behavior will handle this
  };

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
            {/* <img
              className="rounded-xl w-auto h-full object-cover flex justify-center"
              src={hero}
              alt=""
            ></img> */}
            <ul id="navigation" ref={headerRef} className="flex flex-row lg:flex-col gap-6 lg:gap-0">
              <li className="relative">
                <Link 
                  className="navLink" 
                  href="/#about" 
                  data-to-scrollspy-id="about"
                  onClick={(e) => handleAnchorClick(e, '/#about')}
                >
                  ABOUT
                </Link>
              </li>
              <li className="relative">
                <Link 
                  className="navLink" 
                  href="/#work" 
                  data-to-scrollspy-id="work"
                  onClick={(e) => handleAnchorClick(e, '/#work')}
                >
                  WORK
                </Link>
              </li>
              <li className="relative">
                <Link 
                  className="navLink" 
                  href="/#contact" 
                  data-to-scrollspy-id="contact"
                  onClick={(e) => handleAnchorClick(e, '/#contact')}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </header>
    
  )
}

export default HeaderColumn
