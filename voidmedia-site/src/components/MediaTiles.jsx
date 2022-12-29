import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'react-emotion';
import { Flex } from 'grid-emotion';
import { Parallax } from 'react-scroll-parallax';
import ReactPlayer from 'react-player';
import Modal from '../components/Modal';
import ImageGallery from 'react-image-gallery';
import { rgba } from 'polished';
import { randomNumber } from '../utils/randomNumber';

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

const TilesSection = styled(Flex)`
  margin-bottom: 40px;


  @media (min-width: ${props => props.theme.breakpoint.m}) {
    margin: 20px 0;

    &:first-child {
      margin-top: 0;
    }
  }
`;

const GalleryButton = styled.button`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  cursor: pointer;
  transition: ${props => props.theme.globalTransition};
  overflow: hiddne;

  img {
    transition: ${props => props.theme.globalTransition} !important;
  }

  &:hover {
    /* &:not(.gallery-button__video) {
      transform: scale(1.05);
    } */

    img {
      transform: scale(1.05);
    }
  }
`;

const MediaTile = styled.div`
  flex-basis: 100%;
  max-width: 100%;
  width: 100%;
  text-align: center;
  position: relative;
  padding: 1rem 0;
  margin: ${props => props.theme.globalMargin} 0;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: ${props => props.theme.breakpoint.m}) {
    flex-basis: calc(99.9% * 1 / 2 - ${props => props.theme.globalMargin});
    max-width: calc(99.9% * 1 / 2 - ${props => props.theme.globalMargin});
    width: calc(99.9% * 1 / 2 - ${props => props.theme.globalMargin});
    margin: ${props => props.theme.globalMargin} 0;
  }
`;

class MediaTiles extends Component {
  // props = { uid, videoTiles, photoTiles, showSingle = false }

  constructor (props) {
    super(props);

    this.state = {
      isModalOpen: false,
      // galleryContent: this.setGalleryContent(this.props.photoTiles[0]),
      galleryContent: null,
      modalLabel: "",
      modalisVideo: false,
      // mediaTileContent: this.setMediaTile(this.props.photoTiles, this.props.videoTiles)
      mediaTileContent: this.setMediaTile(this.props.photoTiles, this.props.videoTiles)
    };

    // this.handleModalOpen = this.handleModalOpen.bind(this);
    // this.handleModalClose = this.handleModalClose.bind(this);
    // this.getModalContent = this.getModalContent.bind(this);
    // this.setGalleryContent = this.setGalleryContent.bind(this);
    // this.setMediaTile = this.setMediaTile.bind(this);
}



  handleModalOpen(event, index, isVideo) {
    // console.log('handleModalOpen: ', event);
    this.setState({
      isModalOpen: true,
      galleryContent: this.getModalContent(this.props.photoTiles, this.props.videoTiles, index, isVideo)
    })

  }

  handleModalClose = event => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: false })
  }

  //builds an array of image url data for react-image-gallery
  getModalContent = (photoTile, videoTiles, index, isVideo) => {
    let content = [];

    if (!isVideo && null != photoTile && null != photoTile.length && photoTile[index] && photoTile[index].photo.length) {
      photoTile[index].photo.map((photo, index) => {
        content.push({
          index: index,
          fluid: photo.localFile.childImageSharp.mainImages,
          original: photo.localFile.childImageSharp.mainImages.src,
          srcSet: photo.localFile.childImageSharp.mainImages.srcSet,
          sizes: photo.localFile.childImageSharp.mainImages.sizes
        });
        }
      );
    } else if (isVideo && null != videoTiles && null != videoTiles[index].vimeo_link) {
      content.push({
        index: index,
        vimeo_link: videoTiles[index].vimeo_link,
        video_title: videoTiles[index].video_title
      });
    }

    //add videos to gallery
    return content;
  }

  setModalType = (modalContent) => {
    let content = [];

    if (null != modalContent && modalContent.length) {
      //video modal
      if (null != modalContent[0].vimeo_link) {
        content.push(
          <div style={{"position": "relative", "paddingTop" : "56.25%"}}>
            <ReactPlayer
                url={modalContent[0].vimeo_link}
                width="100%"
                height="100%"
                loop={true}
                playing={true}
                light={false}
                config={{
                  vimeo: {
                    playerOptions: {
                      preload: true,
                      background: false,
                      autoplay: true
                    }
                  }
                }}
                style={{"width": "100%", "maxWidth" : "100%", "position": "absolute", "top": "0", "left": "0"}}/>
          </div>
        );
      } //photo modal
      else if (null != modalContent[0].fluid) {
        content.push(
          <ImageGallery items={modalContent} lazyLoad={true} showThumbnails={false} useTranslate3D={true}/>
        );
      }
    }

    return content;
  }

  //Sets the gallery content to the current tile images
  //TODO: Expand this function to one that sets the gallery button
  setVideoThumbnail = (tile, index) => {
    let thumbnail = [];
      thumbnail.push(
        <div key={index}>
          <GalleryButton onClick={(e) => this.handleModalOpen(e, index, true)} className="gallery-button__video">
            <ReactPlayer url={tile.vimeo_link} width="100%" height="100%" loop={true} playing={true} light={true} style={{"width": "100%", "maxWidth" : "100%", "position": "absolute", "top": "0", "left": "0"}}/>
            <span className="sr-only">Show Image Gallery</span>
          </GalleryButton>
        </div>
      )

    return thumbnail;
  }

  //Sets the gallery content to the current tile images
  setGalleryThumbnail = (tile, index) => {
    let thumbnail = [];
    if (null != tile.photo && tile.photo.length) {
      //in case i want to use show single in the future
      if (this.props.showSingle) {
        thumbnail.push(<Img fluid={tile.photo[0].localFile.childImageSharp.thumb} fadeIn={true} title="placeholder" alt="placeholder" />);
      } else {
        thumbnail.push(
          <div key={index}>
            <GalleryButton onClick={(e) => this.handleModalOpen(e, index, false)}>
              <Img fluid={tile.photo[0].localFile.childImageSharp.thumb} />
              <span className="sr-only">Show Image Gallery</span>
            </GalleryButton>
          </div>
        )
      }
    }

    return thumbnail;
  }

  setMediaTile = (photoTiles, videoTiles) => {
    //push all media tiles into array
    let children = [];

    if (null != videoTiles && videoTiles.length) {
      videoTiles.map((tile, index) => (
        (ReactPlayer.canPlay(tile.vimeo_link) ?
          children.push(
            <MediaTile key={index}>
              <h4 style={{"textAlign" : "left", "marginBottom" : "1rem"}}>{tile.video_title}</h4>
              <div style={{"position": "relative", "paddingTop" : "56.25%"}}>
              {this.setVideoThumbnail(tile, index)}
              </div>
            </MediaTile>

          ) : null)
      ))
    }

    //add photo gallerys to media tiles list
    if (null != photoTiles && photoTiles.length) {
      photoTiles.map((tile, index) => {

        children.push(
          <MediaTile key={index}>
            <h4 style={{"textAlign" : "left", "marginBottom" : "1rem"}}>{tile.photo_title}</h4>
            <div>
              {this.setGalleryThumbnail(tile, index)}
            </div>
          </MediaTile>
        )
      })
    }

    if (!this.props.showAll) {
      children = children.slice(0, 4);
    }

    return children;
  }

  //TODO: Move modal component here, pass state as props. Update gallery state on button press
  render(){
  return (
    <TilesSection flexDirection="row" justifyContent="space-between" flexWrap="wrap" style={{"maxWidth": "100%"}} key={this.props.index}>
        {this.state.mediaTileContent}
        <Modal isModalOpen={this.state.isModalOpen} handleModalClose={this.handleModalClose}>
          {this.setModalType(this.state.galleryContent)}
        </Modal>
   </TilesSection>
 )}
};

export default MediaTiles;

MediaTiles.propTypes = {
  uid: PropTypes.string.isRequired,
  photoTiles: PropTypes.array,
  VideoTiles: PropTypes.array
};
