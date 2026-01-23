import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

export const navItems = [
  { label: "ABOUT", href: "/#about", scrollId: "about" },
  { label: "WORK", href: "/#work", scrollId: "work" },
  { label: "CONTACT", href: "/#contact", scrollId: "contact" },
]

interface NavLinksProps {
  className?: string
  linkClassName?: string
  vertical?: boolean
}

export const NavLinks = ({ className = "", linkClassName = "", vertical = false }: NavLinksProps) => {
  const router = useRouter()

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If we're on the home page, scroll to the anchor
    if (router.pathname === '/') {
      e.preventDefault()
      const hash = href.split('#')[1]
      const element = document.getElementById(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        // Update URL without page reload
        router.push(href, undefined, { shallow: true, scroll: false })
      }
    }
    // Otherwise, navigate to home page with anchor
    // The default Link behavior will handle this
  }

  const defaultLinkClass = "navLink"

  return (
    <ul className={`flex ${vertical ? 'flex-col gap-0' : 'flex-row gap-6'} ${className}`}>
      {navItems.map((item) => (
        <li key={item.scrollId} className="relative">
          <Link
            className={linkClassName || defaultLinkClass}
            href={item.href}
            data-to-scrollspy-id={item.scrollId}
            onClick={(e) => handleAnchorClick(e, item.href)}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
