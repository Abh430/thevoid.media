const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

const posts = await graphql(`
  {
  allWordpressPost(sort: {fields: [date]}) {
    edges {
      node {
        id
        slug
        title
        content
        excerpt
        date
        modified
        link
        acf {
          vimeo_code
          thumbnail_subtext
          preview_image {
            localFile {
              childImageSharp {
                thumb: fluid(maxWidth: 900, maxHeight: 400, quality: 90, traceSVG: {color: "#021212"}, cropFocus: ENTROPY) {
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
                mainImages: fluid(maxWidth: 1200,  quality: 90, traceSVG: {color: "#021212"}, cropFocus: ENTROPY) {
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
              }
            }
          }
        }
      }
    }
  }
}
`);

  const pages = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            slug
            title
            content
            excerpt
            date
            modified
            link
            acf {
              video_tiles {
                video_title
                vimeo_link
              }
              photo_tiles {
                photo {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 900, maxHeight: 500, quality: 90, traceSVG: {color: "#021212"}, cropFocus: ENTROPY) {
                        tracedSVG
                        aspectRatio
                        src
                        srcSet
                        sizes
                      }
                    }
                  }
                }
                photo_title
                photo_description
                store_link
              }
              banner_video
              featured_image {
                localFile {
                  childImageSharp {
                    fluid (
                      maxWidth: 1800
                      maxHeight: 540
                      quality: 90
                      traceSVG: { color: "#021212" }
                      cropFocus: ENTROPY
                    ){
                      tracedSVG
                      aspectRatio
                      src
                      srcSet
                      sizes
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);



  const caseTemplate = path.resolve('src/templates/case.jsx');
  const categoryTemplate = path.resolve('src/templates/workCategory.jsx');

  // pages.data.allWordpressPage.edges.forEach(edge => {
  //   createPage({
  //     path: `/${edge.node.slug}`,
  //     component: caseTemplate,
  //     context: {
  //         uid: edge.node.id,
  //     },
  //     image: edge.node.acf.featured_image.localFile.childImageSharp.fluid
  //   });
  // });

  posts.data.allWordpressPost.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.slug}`,
      component: caseTemplate,
      context: {
          uid: edge.node.id,
          image: edge.node.acf.preview_image.localFile.childImageSharp.fluid
      },
    });
  });

  pages.data.allWordpressPage.edges.forEach(edge => {

    createPage({
      path: `/${edge.node.slug}`,
      component: categoryTemplate,
      context: {
          uid: edge.node.id,
          video: edge.node.acf.banner_video,
          image: edge.node.acf.featured_image.localFile.childImageSharp.fluid,
          slug: edge.node.slug,
          isDetail: true,
      },

    });
  });
};
