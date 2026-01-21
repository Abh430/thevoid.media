# Gatsby to Next.js Migration Notes

## Completed Migration Steps

### 1. Project Setup
- ✅ Created `next.config.js` with image optimization settings
- ✅ Updated `package.json` with Next.js dependencies
- ✅ Removed all Gatsby-specific dependencies
- ✅ Added Next.js equivalents (next, next-pwa, next-sitemap, remark, etc.)

### 2. Data Layer Conversion
- ✅ Created `src/lib/data-loader.ts` to replace GraphQL queries
- ✅ Created `src/lib/site-config.ts` for site metadata
- ✅ Updated `workData.ts` to use direct data loading instead of `useStaticQuery`
- ✅ Updated `use-site-metadata.tsx` to use config directly

### 3. Image Handling
- ✅ Replaced `GatsbyImage` with Next.js `Image` component
- ✅ Replaced `StaticImage` with Next.js `Image` component
- ✅ Created `BackgroundImage` component to replace `gatsby-background-image`
- ✅ Updated image path resolution in data loader
- ✅ Updated all components using images:
  - `navbar.tsx`
  - `workGrid.tsx`
  - `workSingleton.tsx`
  - `blogHeader.js`
  - `blogsContainer.js`
  - `header.tsx`

### 4. Routing & Pages
- ✅ Converted `index.tsx` to use Next.js router
- ✅ Converted `work.tsx` to use `getStaticProps`
- ✅ Created `work/[slug].tsx` dynamic route with `getStaticPaths` and `getStaticProps`
- ✅ Created `blog/[slug].tsx` dynamic route for blog posts
- ✅ Updated all pages to use Next.js `Link` component
- ✅ Converted `Head` exports to use `Seo` component directly in JSX

### 5. Components Updated
- ✅ `navbar.tsx` - Next.js Link and Image
- ✅ `footer.tsx` - Next.js Link
- ✅ `seo.tsx` - Next.js Head component
- ✅ `layout.tsx` - No changes needed
- ✅ All work components
- ✅ All blog components
- ✅ Home components

### 6. Global Setup
- ✅ Created `_app.tsx` with global styles, fonts, and Google Analytics
- ✅ Modal root creation in `_app.tsx`
- ✅ Google Analytics via `next/script`

### 7. Static Files
- ✅ Created `scripts/copy-static.js` to copy static files to public
- ✅ Build script updated to run copy-static before build

### 8. Static Export Configuration
- ✅ Enabled static export in `next.config.js` (`output: 'export'`)
- ✅ Configured images for static export (`unoptimized: true`)
- ✅ Enabled trailing slashes for static hosting compatibility
- ✅ All pages use `getStaticProps` and `getStaticPaths` (no server-side features)

## Remaining Tasks

### Manual Steps Required

1. **Copy Static Files**: Run the copy script before first build:
   ```bash
   npm run copy-static
   ```
   Or it will run automatically during `npm run build`

2. **Move Images**: Ensure `src/images` are accessible at `/images` in public directory
   - The copy script handles this automatically

3. **Update Image Paths**: Some image paths in JSON files may need manual adjustment if they don't resolve correctly

4. **Test Build**: Run the build and fix any remaining issues:
   ```bash
   npm run build
   ```

5. **PWA Configuration**: If using PWA features, configure `next-pwa` in `next.config.js`

6. **Sitemap**: Configure `next-sitemap` if needed (already in postbuild script)

## Key Differences from Gatsby

1. **Data Fetching**: No GraphQL - use direct file system access in `getStaticProps`
2. **Images**: Next.js Image requires width/height or fill prop
3. **Routing**: Use `next/link` with `href` instead of `to`
4. **Navigation**: Use `useRouter().push()` instead of `navigate()`
5. **SEO**: Use `next/head` in components instead of `Head` export
6. **Build Time**: Images are optimized on-demand, not at build time

## Files to Remove (After Testing)

- `gatsby-config.js`
- `gatsby-node.js`
- `gatsby-browser.js`
- `gatsby-ssr.js`
- Gatsby build artifacts in `public/` directory

## Static Export

The app is configured to export static HTML and JavaScript files. When you run `npm run build`, Next.js will generate a fully static site in the `out/` directory that can be deployed to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

### Build Output
- Static files are generated in the `out/` directory
- All pages are pre-rendered as HTML
- Images are unoptimized (required for static export)
- Client-side routing works via Next.js router

### Deployment
Simply upload the contents of the `out/` directory to your static hosting service.

## Notes

- Image paths in JSON files are automatically resolved from relative to absolute paths
- Background images use a custom component that wraps Next.js Image
- Modal system uses React Portal (already implemented)
- All Gatsby-specific APIs have been replaced with Next.js equivalents
- Static export disables Next.js Image optimization - images are served as-is
