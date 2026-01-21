import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import remarkGfm from 'remark-gfm'

const contentDirectory = path.join(process.cwd(), 'src/content')

// Load and parse JSON files
export function loadJsonFile<T>(filename: string): T {
  const filePath = path.join(contentDirectory, filename)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(fileContents)
}

// Helper to resolve image paths from JSON files
function resolveImagePath(src: string): string {
  if (!src) return '';
  // Handle relative paths like "../../images/..."
  if (src.startsWith('../')) {
    // Convert "../../images/..." to "/images/..."
    // Replace all "../" at the start with "/"
    return src.replace(/^(\.\.\/)+/, '/');
  }
  // Already absolute
  if (src.startsWith('/')) {
    return src;
  }
  // Default to /img/ for other paths
  return `/img/${src}`;
}

// Helper to process images in work items
function processWorkItemImages(data: any): any {
  // Process featured image
  if (data.featuredImage?.src) {
    data.featuredImage.src = resolveImagePath(data.featuredImage.src);
  }
  
  // Process section images
  if (data.sections) {
    data.sections = data.sections.map((section: any) => {
      if (section.images) {
        section.images = section.images.map((img: any) => ({
          ...img,
          src: resolveImagePath(img.src),
        }));
      }
      return section;
    });
  }
  
  return data;
}

// Load all work items from JSON files
export function getAllWorkItems() {
  const workDir = path.join(contentDirectory, 'work')
  const files = fs.readdirSync(workDir)
  
  const workItems = files
    .filter((file) => file.endsWith('.json'))
    .map((file) => {
      const filePath = path.join(workDir, file)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const data = JSON.parse(fileContents)
      
      // Process image paths
      const processedData = processWorkItemImages(data)
      
      // Construct path from title
      const slug = processedData.title.toLowerCase().replace(/\s+/g, '-')
      return {
        ...processedData,
        slug,
        path: `/work/${slug}`,
      }
    })
    .sort((a, b) => (a.order || 0) - (b.order || 0))
  
  return workItems
}

// Get single work item by slug
export function getWorkItemBySlug(slug: string) {
  const workItems = getAllWorkItems()
  return workItems.find((item) => item.slug === slug || item.path === `/work/${slug}`) || null
}

// Load and process markdown files
export async function loadMarkdownFile(filePath: string) {
  const fullPath = path.join(contentDirectory, filePath)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  // Process markdown to HTML
  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkHtml)
    .process(content)
  
  const htmlContent = processedContent.toString()
  
  return {
    frontmatter: data,
    html: htmlContent,
    content,
  }
}

// Get all blog posts (markdown files in blog directory)
export async function getAllBlogPosts() {
  const blogDir = path.join(contentDirectory, 'blog')
  
  if (!fs.existsSync(blogDir)) {
    return []
  }
  
  const files = fs.readdirSync(blogDir)
  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith('.md'))
      .map(async (file) => {
        const filePath = path.join(blogDir, file)
        const fileContents = fs.readFileSync(filePath, 'utf8')
        const { data, content } = matter(fileContents)
        
        // Process markdown to HTML
        const processedContent = await remark()
          .use(remarkGfm)
          .use(remarkHtml)
          .process(content)
        
        const html = processedContent.toString()
        
        // Generate slug from filename
        const slug = file.replace(/\.md$/, '')
        
        return {
          slug: `/${slug}`,
          frontmatter: data,
          html,
          content,
        }
      })
  )
  
  // Sort by date descending
  return posts.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date || 0).getTime()
    const dateB = new Date(b.frontmatter.date || 0).getTime()
    return dateB - dateA
  })
}

// Get blog post by slug
export async function getBlogPostBySlug(slug: string) {
  const posts = await getAllBlogPosts()
  return posts.find((post) => post.slug === slug || post.slug === `/${slug}`)
}
