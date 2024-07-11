/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { useSiteMetadata } from "./hooks/use-site-metadata"

const schema = {
  "@context": "http://schema.org",
  "@type": "WebSite",
  name: "The Void Portfolio Site",
  url: "https://thevoid.media",
  contactPoint: {
      "@type": "ContactPoint",
      "email": "inquiries@thevoid.media",
      "contactType": "Inquiries"
    }
};

interface SEOProps {
  title?: string
  description?: string
  pathname?: string
  children?: React.ReactNode
  customImage?: string
}



export const SEO = ({ title, description, pathname, customImage, children }: SEOProps) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl, author } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: customImage ? `${customImage}` : `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    icon: `${siteUrl}/icon.png`,
    author,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.author} />
      <meta name="og:url" content={seo.url} />
      <meta name="og:description" content={seo.description} />
      <meta name="og:title" content={seo.title} />
      <meta name="og:image" content={seo.image} />
      <meta name="og:locale" content="en_US" />
      <meta name="og:type" content="website" />
      <link rel="icon" href={seo.icon} />
      

      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>

      {children}
    </>
  )
}

export default SEO
