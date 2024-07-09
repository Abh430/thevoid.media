import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'react-emotion';
import { Flex } from 'grid-emotion';
import { Parallax } from 'react-scroll-parallax';
import ReactPlayer from 'react-player'
import { rgba } from 'polished';
import { randomNumber } from '../utils/randomNumber';
import MediaTiles from '../components/MediaTiles';
// import GridItem from '../components/GridItem';


const ServiceImage = styled(Parallax)`
  flex-basis: 100%;
  max-width: 100%;
  width: 100%;
  text-align: center;
  margin: 40px 0 65px;
  overflow: hidden;
  max-height: 280px;
  position: relative;


  &:after {
    /* box-shadow: inset 0px 10px 13px 11px rgba(0,0,0,0.7); */
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: -10%;
    width: 120%;
    z-index: 10;
  }

  &:before {
    /* box-shadow: inset 0px -10px 13px 11px rgba(0,0,0,0.7); */
  }

  img {

  }
  @media (max-width: ${props => props.theme.breakpoint.l}) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
    img {
      width: 100%;
    }
  }
  @media (max-width: ${props => props.theme.breakpoint.m}) {
    margin: 40px 0 25px;
  }
  @media (max-width: ${props => props.theme.breakpoint.s}) {
    img {
      width: 100%;
    }
  }


`;

const ServiceText = styled.div`
  flex-basis: 100%;
  max-width: 100%;
  width: 100%;
  @media (max-width: ${props => props.theme.breakpoint.l}) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
  }
  ol,
  ul {
    list-style: none;
    margin-left: 0;
  }
  li:before {
    content: '－';
    padding-right: 8px;
  }
`;

const WorkSection = styled(Flex)`
  margin-bottom: 90px;


  &:last-child {
    margin-bottom: 0;
  }

  h2 {
    margin-bottom: 0px;
  }

  @media (min-width: ${props => props.theme.breakpoint.m}) {
    margin: 120px 0;

    &:first-child {
      margin-top: 0;
    }

    h2 {
      margin-bottom: 1.4rem;
    }
  }
`;

const HomepageSection = ({ uid, image, alt, title, content, index, slug, videoTiles, photoTiles }) => {
  return (
  <WorkSection w={1} py={5} key={uid} justifyContent="space-between" flexWrap="nowrap" flexDirection="column" id={slug}>
    <h2>{title}</h2>
    <ServiceImage y={[-30, 10]}>
      <Img fluid={image} alt={alt} />
    </ServiceImage>
    <ServiceText>
      <div dangerouslySetInnerHTML={{__html: content}} />
    </ServiceText>
    <MediaTiles uid={uid} videoTiles={videoTiles} photoTiles={photoTiles} showSingle={false} showAll={false} index={index}/>
   <Link to={slug} state={{isDetail: true}}>See all {title}</Link>
 </WorkSection>
)};

export default HomepageSection;

HomepageSection.propTypes = {
  uid: PropTypes.string.isRequired,
  image: PropTypes.any,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};
