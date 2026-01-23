/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import Footer from "./footer"
import Navbar from "./navbar"

interface LayoutProps {
  children: React.ReactNode
  hasFooter?: boolean
  hasNav?: boolean
}

const Layout = ({children, hasFooter = true, hasNav = true}: LayoutProps) => {
  return (
    <div className="bg-zinc-900	box-border relative max-w-7xl mx-auto px-6 xl:px-0">
      {hasNav && <Navbar></Navbar>}
      {children}
      {hasFooter && <Footer></Footer>}
    </div>
  )
}

export default Layout
