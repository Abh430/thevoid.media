import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import Img from 'gatsby-image';
import { Box } from 'grid-emotion';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import config from '../../config/website';

const Hero = styled.section`
  width: 100%;
  height: 100vh;
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
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${props => props.theme.colors.bg};
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.text};
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
  margin-top: 9rem;
  margin-bottom: 9rem;
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

const CaseTemplate = ({ data: { wordpressPost: caseNode } }) => {

  return (
    <Layout>
      <Helmet title={`${caseNode.title} | ${config.siteTitle}`} />
      <SEO caseNode={caseNode} casePath={caseNode.uid} caseSEO='post' />
      <Hero>
        <Img fluid={caseNode.acf.preview_image.localFile.childImageSharp.fluid} />
        <TitleWrapper py={4}>
          <Title>{caseNode.title}</Title>
        </TitleWrapper>
      </Hero>
      <Wrapper py={4} px={4} mx="auto">

        <Content dangerouslySetInnerHTML={{ __html: caseNode.content }} />
      </Wrapper>
      <Footer isCase />
    </Layout>
  );
};

export default CaseTemplate;

CaseTemplate.propTypes = {
  data: PropTypes.shape({
    wordpressPost: PropTypes.object.isRequired,
  }).isRequired,
};

export const pageQuery = graphql`
query PostBySlug($id: String) {
  wordpressPost(id: { eq: $id }) {
    id
    slug
    title
    content
    excerpt
    date
    modified
    link
    acf {
      preview_image {
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
