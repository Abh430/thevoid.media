/* eslint no-unused-expressions: 0 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { injectGlobal } from 'react-emotion';
import { ThemeProvider } from 'emotion-theming';
import { ParallaxProvider } from 'react-scroll-parallax';
import * as Scroll from "react-scroll";
import * as THREE from "three";
// import BackgroundAnimation from '../components/BackgroundAnimation.js';
import SEO from './SEO';
import Header from '../components/Header';
import theme from '../../config/theme';
import "./Layout.css";

injectGlobal`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    h1, h2, h3, h4, h5, h6 {
      color: ${theme.colors.primary};
    }
  }
  @media (max-width: ${theme.breakpoint.m}), (max-device-width: ${theme.breakpoint.m}) {
    html {
      font-size: 16px !important;
      h1 {
        font-size: 3.157rem
      }
      h2 {
        font-size: 2.369rem;
      }
      h3 {
        font-size: 1.777rem;
      }
      h4 {
        font-size: 1.333rem;
      }
      h5 {
        font-size: 1rem;
      }
    }
  }
  @media (max-width: ${theme.breakpoint.s}), (max-device-width: ${theme.breakpoint.s}) {
    html {
      h1 {
        font-size: 2.441rem
      }
      h2 {
        font-size: 1.953rem;
      }
      h3 {
        font-size: 1.563rem;
      }
      h4 {
        font-size: 1.25rem;
      }
      h5 {
        font-size: 1rem;
      }
    }
  }
  body {
    color: ${theme.colors.text};
    background-color: ${theme.colors.bg};
  }
  canvas {
    position: fixed;
    top:0;
    left: 0;
    z-index: -100;
    opacity: 0.65;
  }
  ::selection {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.text};
  }
  a {
    color: ${theme.colors.primary};
    transition: ${theme.globalTransition};
    text-decoration: none;
    &:hover, &:focus {
      color: ${theme.colors.primaryLight};
    }
  }
  a:not([href]):not([tabindex]) {
    text-decoration: none;
    &:hover, &:focus {
      text-decoration: none;
    }
    &:focus {
      outline: 0;
    }
  }

  .hero__headline {
    margin-top: 180px;

    @media (min-width: ${theme.breakpoint.m}) {

    }
  }

  .hero__text-rotator {
    display: block;
    position: relative;
    width: 120px;
    height: 40px;
    margin: 12px auto;


    & + span {
      display: block;
    }
  }

  @media (min-width ${theme.breakpoint.s}), (min-device-width: ${theme.breakpoint.s}) {
    .hero__text-rotator {
      height: 56px;
      margin: 12px auto;
    }
  }

  @media (min-width: ${theme.breakpoint.m}), (min-device-width: ${theme.breakpoint.m}) {
    .hero__text-rotator {
      display: inline-block;
      width: 140px;
      height: 72px;
      margin: 0 15px;

      & + span {
        display: inline-block;
      }
    }
  }
`;


let lastScrollY = 0;
class Layout extends Component {
  constructor(props) {
    super(props);
    // this.handleScroll = this.handleScroll.bind(this);

    this.mountRef = null;

    this.state = {
      scrollPosition: null,
      location: {}
    }
  }


  // handleScroll(){
  //   lastScrollY = window.scrollY;
  //
  //   this.setState({scrollPosition: lastScrollY});
  // };


  componentDidMount(){

    this.setState({
      scrollPosition: window.scrollY,
      location: window.location
    });

    // window.addEventListener('scroll', this.handleScroll, true);
    import('../components/BackgroundAnimation.js').then((backgroundAnimation) => {
      backgroundAnimation.default(this.mountRef);
    })

    // backgroundAnimation(this.mountRef);
  }

  componentWillUnmount() {
    // window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const data = this.props.data;

    return (
      <ThemeProvider theme={theme}>
        <ParallaxProvider>
          <div ref={ref => (this.mountRef = ref)}>
          <React.Fragment>
            <SEO />
            <Header menu={data.allWordpressWpApiMenusMenusItems.edges} isDetail={this.props.isDetail} location={this.state.location} />
            {this.props.children}
          </React.Fragment>
          </div>
        </ParallaxProvider>
      </ThemeProvider>
    )
  }
}

export default props => (
  <StaticQuery query={graphql`
    query menu {
      allWordpressWpApiMenusMenusItems(filter: {wordpress_id: {eq: 2}}) {
      edges {
        node {
          id
          wordpress_id
          children {
            id
          }
          name
          slug
          count
          items {
            wordpress_id
            order
            wordpress_parent
            title
            url
            attr
            target
            classes
            xfn
            description
            type
            type_label
            object_slug
            }
          }
        }
      }
    }
    `}
    render={data => <Layout data={data} {...props} />}
  />
)

Layout.propTypes = {
  menu: PropTypes.array.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,

};
