import React from "react"
import { GetStaticProps, GetStaticPaths } from "next"
import Link from "next/link"
import ExportedImage from "next-image-export-optimizer"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { getBlogPostBySlug, getAllBlogPosts } from "../../lib/data-loader"
import LeftIcon from "../../images/left-icon.svg"
import RightIcon from "../../images/right-icon.svg"

interface BlogPostProps {
  post: {
    slug: string
    frontmatter: {
      title: string
      date: string
      description?: string
      featuredimage?: string
      templateKey?: string
    }
    html: string
  }
  previous?: {
    slug: string
    frontmatter: {
      title: string
      templateKey?: string
    }
  }
  next?: {
    slug: string
    frontmatter: {
      title: string
      templateKey?: string
    }
  }
}

const BlogPost = ({ post, previous, next }: BlogPostProps) => {
  if (!post) {
    return (
      <>
        <Seo title="Blog Post Not Found" />
        <Layout>
          <div>Post not found</div>
        </Layout>
      </>
    )
  }

  const date = new Date(post.frontmatter.date)
  const formattedDate = date.toLocaleDateString("en-US", { 
    year: "numeric", 
    month: "short", 
    day: "numeric" 
  })
  const titleDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  const isoDate = date.toISOString().split("T")[0]

  const nextSlug = next ? next.slug : "/"
  const previousSlug = previous ? previous.slug : "/"
  const nextLinkStatus = next?.frontmatter.templateKey === "blog-post"
  const previousLinkStatus = previous?.frontmatter.templateKey === "blog-post"

  // Resolve featured image path
  const resolveImagePath = (src?: string): string => {
    if (!src) return '';
    if (src.startsWith('/')) return src;
    if (src.startsWith('../')) return src.replace('../', '/');
    return `/img/${src}`;
  };

  return (
    <>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || "Blog post"}
      />
      <Layout>
        <main className="pt-8 pb-16 lg:pt-16 lg:pb-24">
          <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
            <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
              <header className="mb-4 lg:mb-6 not-format">
                <h1 className="mb-4 text-3xl font-extrabold leading-tight text-[#000000] lg:mb-6 lg:text-4xl dark:text-black">
                  {post.frontmatter.title}
                </h1>
              </header>
              {post.frontmatter.featuredimage && (
                <div className="post-content-image">
                  <div style={{ position: 'relative', width: '100%', height: '400px' }}>
                    <ExportedImage
                      src={resolveImagePath(post.frontmatter.featuredimage)}
                      alt={post.frontmatter.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="lg:mb-2 overflow-hidden rounded-xl"
                    />
                  </div>
                </div>
              )}
              <p className="text-base text-gray-500 dark:text-gray-400 lg:mb-2">
                <time dateTime={isoDate} title={titleDate}>
                  {formattedDate}
                </time>
              </p>

              <div
                className="post-content-body text-[#000000]"
                style={{
                  fontSize: '1rem',
                  lineHeight: '1.5',
                }}
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
              <div className="flex items-center justify-between pt-8">
                <div>
                  {previousLinkStatus && (
                    <Link
                      href={previousSlug}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: "#131313",
                      }}
                      className="text-base"
                    >
                      <Image src={LeftIcon} alt="LeftIcon" width={30} height={30} />
                      <span>
                        {previous.frontmatter.title?.length > 30
                          ? previous.frontmatter.title.slice(0, 30) + "..."
                          : previous.frontmatter.title}
                      </span>
                    </Link>
                  )}
                </div>
                <div>
                  {nextLinkStatus && (
                    <Link
                      href={nextSlug}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: "#131313",
                      }}
                      className="text-base"
                    >
                      <span>
                        {next.frontmatter.title?.length > 30
                          ? next.frontmatter.title.slice(0, 30) + "..."
                          : next.frontmatter.title}
                      </span>
                      <ExportedImage src={RightIcon} alt="RightIcon" width={30} height={30} />
                    </Link>
                  )}
                </div>
              </div>
            </article>
          </div>
        </main>
      </Layout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllBlogPosts()
  
  const paths = posts
    .filter(post => post.frontmatter.templateKey === 'blog-post')
    .map((post) => ({
      params: { slug: post.slug.replace(/^\//, '') },
    }))
  
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({ params }) => {
  const slug = params?.slug as string
  const posts = await getAllBlogPosts()
  const postIndex = posts.findIndex(p => p.slug === `/${slug}` || p.slug === slug)
  
  if (postIndex === -1) {
    return {
      notFound: true,
    }
  }
  
  const post = posts[postIndex]
  const previous = postIndex < posts.length - 1 ? posts[postIndex + 1] : null
  const next = postIndex > 0 ? posts[postIndex - 1] : null
  
  return {
    props: {
      post,
      previous: previous || undefined,
      next: next || undefined,
    },
  }
}

export default BlogPost
