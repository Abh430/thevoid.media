import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import Img from 'gatsby-image';
import { rgba } from 'polished';
import { Box } from 'grid-emotion';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import config from '../../config/website';
import MediaTiles from '../components/MediaTiles';

const Hero = styled.section`
  width: 100%;
  position: relative;
  overflow: hidden;
  .gatsby-image-outer-wrapper {
    position: static !important;
    > div {
      position: static !important;
    }
  }
`;

const Wrapper = styled(Box)`
  max-width: ${props => props.theme.maxWidth};
`;

const TitleWrapper = styled(Box)`
  width: 100%;

  background: ${props => rgba(`${props.theme.colors.bg}`, 0.6)};
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
  max-width: ${props => props.theme.maxWidthText};
  text-align: center;
  margin: 0 auto;
  padding: 0 32px;
`;

const SubTitle = styled.h3`
  color: ${props => props.theme.colors.text};
  max-width: ${props => props.theme.maxWidthText};
  margin: 0 auto;
  text-align: center;
`;

const Content = styled.main`
  margin-top: 1rem;
  margin-bottom: 1rem;
  p {
    text-align: justify;
  }
  p,
  ul,
  ol,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  blockquote {
    max-width: ${props => props.theme.maxWidthText};
    margin-left: auto;
    margin-right: auto;
  }
  li {
    margin-left: 1.45rem;
  }
  .block-img {
    max-width: 100%;
    margin-top: 6rem;
    margin-bottom: 6rem;
    text-align: center;
  }
  @media (max-width: ${props => props.theme.breakpoint.m}) {
    margin-top: 6rem;
    margin-bottom: 6rem;
    .block-img {
      margin-top: 3rem;
      margin-bottom: 3rem;
    }
  }
`;

//add banner video based on this example: https://codepen.io/abennington/pen/ZONqqv

const CaseTemplate = ({ data: { wordpressPage: caseNode }, pageContext }) => {
  return (

    <Layout menu={pageContext.menu} isDetail={pageContext.isDetail}>
      <Helmet title={`${caseNode.title} | ${config.siteTitle}`} />
      <SEO caseNode={caseNode} casePath={caseNode.uid} caseSEO='page' />
      <Hero>
        <Img fluid={pageContext.image} />
        <TitleWrapper py={4}>
          <Title>{caseNode.title}</Title>
        </TitleWrapper>
      </Hero>
      <Wrapper py={4} px={4} mx="auto">
        <Content dangerouslySetInnerHTML={{ __html: caseNode.content }} />
        <MediaTiles uid={caseNode.id} videoTiles={caseNode.acf.video_tiles} photoTiles={caseNode.acf.photo_tiles} showAll={true}/>
      </Wrapper>
      <Footer isCase />
    </Layout>
  );
};

export default CaseTemplate;

CaseTemplate.propTypes = {
  data: PropTypes.shape({
    wordpressPage: PropTypes.object.isRequired,
  }).isRequired,
};

export const pageQuery = graphql`
query PageBySlug($slug: String) {
  wordpressPage(slug: { eq: $slug }) {
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
        photo_title
        photo_description
        store_link
      }
      featured_image {
        localFile {
          childImageSharp {
            fluid (
              maxWidth: 900
              maxHeight: 900
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
`;
