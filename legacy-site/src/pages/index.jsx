import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled, {css} from 'react-emotion';
import { ThemeProvider } from 'emotion-theming';
import { Flex } from 'grid-emotion';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Contact from '../components/Contact';
import GridItem from '../components/GridItem';
import HomepageSection from '../components/HomepageSection';
import { TimelineMax, TweenMax, CSSPlugin, Sine, Power3 } from "gsap";


const Hero = styled(Flex)`
  height: 500px;
  text-align: center;
  h1 {
    line-height: 2.5rem;
    letter-spacing: 0.2rem;

  }
  h3 {
    font-family: ${props => props.theme.fontFamily.body};
    margin-top: 2rem;

    font-weight: 400;
    font-size: 1.3rem;
  }
  @media (min-width: ${props => props.theme.breakpoint.s}) {
    h1 {
      line-height: 3.5rem;
    }
    h3 {
      font-size: 1.5rem;
    }
  }
  @media (min-width: ${props => props.theme.breakpoint.m}) {
    height: 700px;
    padding-top: 120px;

    h1 {
      line-height: 4.5rem;
    }
    h3 {
      font-size: 1.85rem;
    }
  }
`;

const Wrapper = styled(Flex)`
  max-width: ${props => props.theme.maxWidth};
  background: rgba( ${props => props.theme.colors.bgRGB}, 0.25);
  padding: 20px;
`;

const PrimaryBG = styled.section`
  background: rgba( ${props => props.theme.colors.bgRGB}, 0.25);
  color: ${props => props.theme.colors.textInvert};
  h1,
  h2,
  h3,
  h4 {
    color: ${props => props.theme.colors.textInvert};
  }
`;



class IndexPage extends Component {

  constructor (props) {
    super(props);
    //instantiate headline refs
    this.headlineRotatorContainer1 = null;
    this.headlineRotatorContainer2 = null;
    this.headlineStaticText = null;
    this.headlineElements1 = [];
    this.headlineElements2 = [];
    this.headlineContainer = null;

    //instantiate timeline
    this.headlineTimeline = null;


    this.state = {
      homepageSections: null,
      headlineOptions: [{headline1: 'Life', headline2: 'Art'}, {headline1: 'Time', headline2: 'Space'}, {headline1: 'Form', headline2: 'Function'}, {headline2: 'Emotion', headline1: 'Creativity'}],
      headline1: {headline1: null, headline2: null},
      headline2: {headline1: null, headline2: null}
    }

  }

  setBannerAnimation() {
    	let currentHeadlineIndex = 0;
      this.headlineTimeline = new TimelineMax({ repeat: -1, ease: Sine.easeIn });
    	// let headline2a = this.headlineRef2a;
      // let headline2b = this.headlineRef2b;
    	// let headline1a = this.headlineRef1a;
      // let headline1b = this.headlineRef1b;
      //for referencing component methods inside animation callbacks
      let componentRef = this;
    	// let staticTextContainer = this.headlineContainer;

      this.setState({headline1: this.state.headlineOptions[currentHeadlineIndex]});
    	currentHeadlineIndex = this.setHeadlineIndex(currentHeadlineIndex);
    	// headline2.html(this.state.headlineOptions[currentHeadlineIndex]);

      this.setState({headline2: this.state.headlineOptions[currentHeadlineIndex]});

      //set a containers as visible, hide b containers
    	this.headlineTimeline.set(this.headlineElements2, { opacity: 0, y: 40 });
      // this.headlineTimeline.set(this.headlineRef2b, { opacity: 0, y: 40 });

      this.headlineTimeline.set(this.headlineElements1, { opacity: 100, y: 0 });
    	// this.headlineTimeline.set(this.headlineRef1a, { opacity: 100, y: 0 });

    	//animate headline 2 in, 1 out
    	this.headlineTimeline.to(this.headlineElements1, 0.5, {
    		opacity: 0, y: '-=40', ease: Power3.easeOut, delay: 5,
    		onStart: function () {
          let containerLength = componentRef.headlineElements2;

          containerLength.map((el, index) => {
            if (el != null) {
      				TweenMax.to(componentRef['headlineRotatorContainer' + (index + 1)], 0.5, { width: el.offsetWidth, ease: Power1.easeIn });
            }
          })
    		}
    	})
    	.to(this.headlineElements2, 0.75, {
    		opacity: 100, y: 0, ease: Power3.easeIn,
    		onComplete: function () {
    			currentHeadlineIndex = componentRef.setHeadlineIndex(currentHeadlineIndex);

    			// headline1.html(this.state.headlineOptions[currentHeadlineIndex]);
          componentRef.setState({headline1: componentRef.state.headlineOptions[currentHeadlineIndex]});
    		}
    	}, '-=0.375')
    	.set(this.headlineElements1, { y: 40, opacity: 0 });

    	//animate headline 1 in, 2 out
    	this.headlineTimeline.to(this.headlineElements2, 0.5, {
    		opacity: 0, y: '-=40' , ease: Power3.easeOut, delay: 5,
    		onStart: function () {
          let containerLength = componentRef.headlineElements1;

          containerLength.map((el, index) => {
            if(el != null) {
        				TweenMax.to(componentRef['headlineRotatorContainer' + (index+1)], 0.5, { width: el.offsetWidth, ease: Power1.easeIn });
            }
          })
    		}
    	})
    	.to(this.headlineElements1, 0.75, {
    		opacity: 100, y: 0, ease: Power3.easeIn,
    		onComplete: function () {
    			currentHeadlineIndex = componentRef.setHeadlineIndex(currentHeadlineIndex);
          componentRef.setState({headline2: componentRef.state.headlineOptions[currentHeadlineIndex]});
    		}
    	}, '-=0.375')
    	.set(this.headlineElements2, { y: 40, opacity: 0 });

    }
  //
  setHeadlineIndex(currentHeadlineIndex) {
    var newHeadlineIndex = Math.floor(Math.random() * this.state.headlineOptions.length);
    if (currentHeadlineIndex != newHeadlineIndex) {
      currentHeadlineIndex = newHeadlineIndex;
    } else {
      currentHeadlineIndex = newHeadlineIndex !== 0 ? newHeadlineIndex - 1 : this.state.headlineOptions.length - 1;
    }

    return currentHeadlineIndex;
  }

  componentDidMount(){
    let {data} = this.props;
    this.setState({homepageSections: this.getHomepageSections(data)});
    //temporarily hardocde headlines, move them into ACF options later on
    // this.setState({headlineOptions: []});
    this.setBannerAnimation();
  }

  componentWillUnmount(){
    this.headlineTimeline.kill();
  }

  getHomepageSections(data){
    return data.pages.edges.map((c, index) => (
      <HomepageSection
      uid={c.node.id}
      key={c.node.id}
      image={c.node.acf.featured_image.localFile.childImageSharp.fluid}
      content={c.node.content}
      alt={c.node.title}
      title={c.node.title}
      index={index}
      slug={c.node.slug}
      videoTiles={c.node.acf.video_tiles}
      photoTiles={c.node.acf.photo_tiles}
      />
    ))
  }



  render() {

    return (
      <Layout isDetail={false}>

        {/*
          <Wrapper p={4} mb={[4, 4, 7]} mx="auto" justifyContent="space-between" flexWrap="wrap">
            {data.posts.edges.map(c => (
              <GridItem
                uid={c.node.id}
                key={c.node.id}
                image={c.node.acf.preview_image.localFile.childImageSharp.fluid}
                alt={c.node.title}
                title={c.node.title}
                subtitle={c.node.acf.thumbnail_subtext}
                link={c.node.slug}
              />
            ))}
          </Wrapper>
        */}
        <Hero justifyContent="center" alignItems="center" flexDirection="column">
          <h1 className="hero__headline">
            <div>
              <div ref={div => this.headlineRotatorContainer1 = div} className="hero__text-rotator" id="home-text-rotator1">
                <span ref={span => this.headlineElements1[0] = span} className="hero__text-rotate text-rotate--1" style={{ position: 'absolute', top: 0, left: 0, transition: props => props.theme.globalTransition }}>{this.state.headline1.headline1}</span>
                <span ref={span => this.headlineElements2[0] = span} className="hero__text-rotate text-rotate--1" style={{ position: 'absolute', top: 0, left: 0, transition: props => props.theme.globalTransition }} >{this.state.headline2.headline1}</span>
              </div>
              <span ref={span => this.headlineStaticText = span}>
                Reflecting
              </span>
                <div ref={div => this.headlineRotatorContainer2 = div} className="hero__text-rotator" id="home-text-rotator2">
                  <span ref={span => this.headlineElements1[1] = span} className="hero__text-rotate text-rotate--2" style={{ position: 'absolute', top: 0, left: 0, transition: props => props.theme.globalTransition }}>{this.state.headline1.headline2}</span>
                  <span ref={span => this.headlineElements2[1] = span} className="hero__text-rotate text-rotate--2" style={{ position: 'absolute', top: 0, left: 0, transition: props => props.theme.globalTransition }}>{this.state.headline2.headline2}</span>
                </div>
            </div>
          </h1>
        </Hero>
          <PrimaryBG>
            <Wrapper flexDirection="column" p={4} mx="auto">
              {this.state.homepageSections}
            </Wrapper>
          </PrimaryBG>
          <Contact />
          <Footer />
      </Layout>
    )
  }

};

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.shape({
    pages: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
    posts: PropTypes.shape({
      edges: PropTypes.array.isRequired
    })
  }).isRequired,
};

export const pageQuery = graphql`
query IndexQuery {
  posts: allWordpressPost(sort: {fields: [date]}) {
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
                fluid(maxWidth: 900, maxHeight: 900, quality: 90, traceSVG: {color: "#021212"}, cropFocus: ENTROPY) {
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
  pages: allWordpressPage(sort: {fields: [menu_order]}) {
    edges {
      node {
        id
        slug
        title
        content
        excerpt
        date
        modified
        slug
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
                  mainImages: fluid(maxWidth: 1200, quality: 90, traceSVG: {color: "#021212"}, cropFocus: ENTROPY) {
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
                fluid(maxWidth: 1800, maxHeight: 540, quality: 90, traceSVG: {color: "#021212"}, cropFocus: ENTROPY) {
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
}`;
