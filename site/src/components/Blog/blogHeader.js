import Link from "next/link"
import ExportedImage from "next-image-export-optimizer"
import React from "react"
import { Fade } from "react-awesome-reveal"

const BlogHeader = ({ post }) => {
  const resolveImagePath = (src) => {
    if (!src) return '';
    if (typeof src === 'string') {
      if (src.startsWith('/')) return src;
      if (src.startsWith('../')) return src.replace('../', '/');
      return `/img/${src}`;
    }
    return '';
  };

  return (
    <div className="max-w-7xl xxs:mx-4 sm:mx-auto mt-10">
      <Fade duration={2200}>
        <div className="flex flex-row justify-space xxs:flex-col-reverse xs:flex-col-reverse sm:flex-row mb-5">
          <div className="max-h-80 w-11/12 xxs:ml-0 xxs:mr-0 sm:ml-5 sm:mr-5 xxs:mt-5 xxs:mb-5 flex flex-col justify-center bg-gradient-to-r from-pink to-purple p-8 rounded-xl lg:m-5 xxs:w-full xs:w-full sm:w-full lg:w-full">
            <Link
              href={post.slug}
              style={{
                textDecoration: "none",
              }}
            >
              <h1 className="text-white text-2xl font-simibold">
                {post.frontmatter.title}
              </h1>
            </Link>
            <p className="text-lg mt-4 text-white opacity-70 xxs:text-sm sm:text-lg">
              {post.frontmatter.description}
            </p>
          </div>
          <div className="my-5 mr-5 xxs:w-full xs:w-full sm:w-full lg:w-full">
            <div className="overflow-hidden rounded-xl xxs:w-full">
              {post.frontmatter.featuredimage && (
                <Link
                  href={post.slug}
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <div className="max-h-80 w-auto h-full object-cover flex justify-center" style={{ position: 'relative', width: '100%', height: '320px' }}>
                    <ExportedImage
                      src={resolveImagePath(post.frontmatter.featuredimage)}
                      alt={post.frontmatter.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="img"
                    />
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default BlogHeader
