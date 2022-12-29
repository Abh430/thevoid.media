import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, Link } from 'gatsby';
import styled from 'react-emotion';
import { Flex } from 'grid-emotion';
import { rgba } from 'polished';
import ReactSVG from 'react-svg';
import Navigation from '../components/Navigation';
import config from '../../config/website';

const HeaderSection = styled.header`
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  background: rgba(${props => props.theme.colors.bgRGB}, 0.6);
  @media (min-width: ${props => props.theme.breakpoint.m}) {

  }
`;

const LogoContainer = styled(Link)`
  text-align: center;
  margin-top: 30px;
`;

const Logo = styled(ReactSVG)`
  width: 200px;

  @media (min-width: ${props => props.theme.breakpoint.m}) {
    width: 250px;
  }
`;

const StickyBanner = styled(Flex)`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: ${props => rgba(`${props.theme.colors.bg}`, 0.8)};
  z-Index: 1000;
  padding: 20px;
`;

const Header = ({ menu, isDetail, location }) => {

  return <HeaderSection>

    <StickyBanner justifyContent="space-between" alignItems="center" flexDirection="row">
      <LogoContainer to="/">
        <Logo src={config.siteLogo} />
        <span style={{visibility: "hidden"}}>{config.siteTitleAlt}</span>
      </LogoContainer>
      <Navigation menu={menu}  isDetail={isDetail} location={location} />
    </StickyBanner>
  </HeaderSection>
};

export default Header;

const siteLogoPath = config.siteLogo;

Header.propTypes = {

}
