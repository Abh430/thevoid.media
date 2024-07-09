import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import {Link as GatsbyLink} from 'gatsby'  ;
import Img from 'gatsby-image';
import styled from 'react-emotion';
import { rgba } from 'polished';
import { Flex } from 'grid-emotion';
import { Link, animateScroll as scroll } from "react-scroll";
import { randomNumber } from '../utils/randomNumber';

{
  // ADD SCROLL SPY
}

const NavContainer = styled(Flex)`
  position: relative;
`;

const LinkContainer = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  color: ${props => props.theme.colors.white};
  list-style: none;
  margin: 0;
  height: 100vh;
  position: absolute;
  top: 85px;
  transform: translateX(0%);
  width: 275px;
  transition: ${props => props.theme.globalTransition};
  background: ${props => rgba(`${props.theme.colors.bg}`, 0.8)};

  @media (min-width: ${props => props.theme.breakpoint.m}) {
    top:0;
    background: none;
  }

  li {
    margin: 0;
  }

  @media (min-width: ${props => props.theme.breakpoint.m}) {
    position: relative;
    height: auto;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }
`;

const Hamburger = styled.nav`
  .navContainer__toggle {
    display: block;
    text-indent: -9999px;
    position: absolute;
    top: -30px;
    right: 0;
    cursor: pointer;
    border-radius: 9px;
    background: ${props => props.theme.colors.white};

    span {
      display: block;
      position: absolute;
      height: 6px;
      width: calc(100% - 14px);
      background: ${props => props.theme.colors.greyDark};
      border-radius: 9px;
      opacity: 1;
      left: 7px;
      transform: rotate(0deg);
      transition: ${props => props.theme.globalTransition};

        &:nth-child(1) {
          top: 8px;

        }
        &:nth-child(2), &:nth-child(3) {
          top: 20px;

        }
        &:nth-child(4) {
          top: 32px;

        }
      }
    }
  }

  .active {
    &${LinkContainer} {
      transform: translateX(calc(-100% + 25px));
    }

    & ~ #css-toggle-menu span{
      &:nth-child(1) {
        top: 19px;
        width: 0%;
        left: 50%;
      }
      &:nth-child(2) {
        transform: rotate(45deg);
      }
      &:nth-child(3) {
        transform: rotate(-45deg);
      }
      &:nth-child(4) {
        top: 19px;
        width: 0%;
        left: 50%;
      }
    }
  }

  .navContainer__toggle {
    width: 60px;
  	height: 46px;

    @media (min-width: ${props => props.theme.breakpoint.m}) {
      display: none;
    }
  }
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  transition: ${props => props.theme.globalTransition};
  color: ${props => props.theme.colors.white};
  padding: 22px;
  font-size: 21px;
  display: inline-block;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }

  &.is-active {
    color: ${props => props.theme.colors.primary};
  }
`;

const StyledGatsbyLink = styled.a`
cursor: pointer;
transition: ${props => props.theme.globalTransition};
color: ${props => props.theme.colors.white};
padding: 22px;
font-size: 21px;
display: inline-block;

&:hover {
  color: ${props => props.theme.colors.primary};
}

&.is-active {
  color: ${props => props.theme.colors.primary};
}
`;

  let navLink = [];
  let active = false;
class Navigation extends Component {
  constructor (props) {
    super(props);
    this.navRef = null;

    this.state = {
      navActive: false
    }

    this.navClickHandler = this.navClickHandler.bind(this);
  }

  navClickHandler = e => {
    this.setState({navActive: !this.state.navActive});
  }

  menuClickHandler = e => {
    if (this.navRef != null && this.navRef.contains(e.target)) {
      return;
    }

    if (this.state.navActive) {
      this.setState({navActive: false});
    }
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.menuClickHandler, false);
  }
  componentWillMount(){
  }

  componentDidUnmount(){
    document.removeEventListener('mousedown', this.menuClickHandler, false);
  }

render() {
  let navActiveClass = this.state.navActive ? "active" : "";

  return (
  <NavContainer flexDirection="column">
    <div ref={div => this.navRef = div}>
      <Hamburger>
        <LinkContainer className={navActiveClass}>
          {

            this.props.menu.map(c => (
              c.node.items.map((d, index) => {
                active = this.props.location.pathname === "/" + d.object_slug;

                if (!this.props.isDetail) {
                  navLink = [<StyledLink to={d.object_slug} key={index} activeClass="is-active" spy={true} smooth={true} offset={-110}>{d.title}</StyledLink>];
                } else {
                  navLink = [<StyledGatsbyLink href={"/" + d.object_slug} key={index} className={active ? "is-active" : ""} >{d.title}</StyledGatsbyLink>];
                }
                return(
                  <li key={index}>
                    {navLink}
                  </li>)
              })

            ))
          }
        </LinkContainer>
        <div className="navContainer__toggle" id="css-toggle-menu" onClick={this.navClickHandler}>
          Menu Toggle
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Hamburger>
      </div>
    </NavContainer>
  )
}
}

export default Navigation;
// export default props => (data}
//     render={ =>
//       <Navigation data={data}  />
//     }
//   />
// );

Navigation.propTypes = {
  data: PropTypes.shape({
    allWordpressWpApiMenusMenusItems: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }).isRequired
  })
};
