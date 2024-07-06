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
}

const Layout = ({children, hasFooter = true}: LayoutProps) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
      {hasFooter && <Footer></Footer>}
    </div>
  )
}

export default Layout
