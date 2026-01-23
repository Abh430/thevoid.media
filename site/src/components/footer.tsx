import Link from "next/link"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook, faGithub, faPatreon, faTiktok, faThreads } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const siteLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Work", href: "/#work" },
    { label: "Contact", href: "/#contact" },
  ]

  const externalLinks = [
    { label: "Shop", href: "https://shop.thevoid.media" },
    { label: "Merch", href: "https://merch.thevoid.media" },
    { label: "Subscribe", href: "https://patreon.thevoid.media" },
  ]

  const socialLinks = [
    { icon: faInstagram, href: "https://www.instagram.com/thevoid.media/", label: "Instagram" },
    { icon: faFacebook, href: "https://www.facebook.com/TheVoidVisual", label: "Facebook" },
    { icon: faTiktok, href: "https://www.tiktok.com/@thevoid.media", label: "TikTok" },
    { icon: faThreads, href: "https://www.threads.net/@thevoid.media", label: "Threads" },
    { icon: faGithub, href: "https://github.com/Abh430", label: "GitHub" },
    { icon: faPatreon, href: "https://patreon.thevoid.media", label: "Patreon" },
    { icon: faEnvelope, href: "mailto:andrew@thevoid.media", label: "Email" },
  ]

  return (
    <footer className="mt-16 border-t border-zinc-700">
      <div className="max-w-7xl mx-auto py-4 px-2">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {/* Site Navigation Column */}
          <div>
            <ul className="space-y-2">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-zinc-100 transition-colors duration-200 text-sm font-montserrat"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External Links Column */}
          <div>
            <ul className="space-y-2">
              {externalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-zinc-100 transition-colors duration-200 text-sm font-montserrat"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links Column */}
          <div>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="text-zinc-400 hover:text-zinc-100 transition-colors duration-200"
                  aria-label={social.label}
                  title={social.label}
                >
                  <FontAwesomeIcon icon={social.icon} size="lg" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-2 border-t border-zinc-800">
          <p className="text-center text-zinc-500 text-xs font-montserrat">
            &copy; {currentYear} Void Media, LLC. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
