import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { rgba } from 'polished';
import { Link } from 'gatsby';
import { Flex } from 'grid-emotion';

const Wrapper = styled.footer`
  background: ${props => rgba(`${props.theme.colors.bg}`, 0.6)};
  color: ${props => props.theme.colors.greyLight};
  a {
    color: ${props => props.theme.colors.bg};
    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`;

const Inner = styled(Flex)`
  @media (max-width: ${props => props.theme.breakpoint.l}) {
    justify-content: center;
    flex-direction: column;
    text-align: center;
    div:last-child {
      margin-top: 1rem;
    }
  }
`;

const StyledLink = styled(Link)`
  transform: translateX(0);
  transition: all 200ms ease-out;
  &:before {
    content: '←';
    padding-right: 8px;
  }
  &:hover {
    color: ${props => props.theme.colors.bg};
    transform: translateX(-6px);
  }
`;

const Footer = ({ isCase }) => {
  const year = new Date().getFullYear();
  return (
    <Wrapper>
      <Inner justifyContent="space-between" p={4}>
        {/* TODO: Move this bit to a breadcrum snipit
          isCase ? (
          <React.Fragment>
            <StyledLink to="/">Return to home</StyledLink>
            <div>Contact Us</div>
          </React.Fragment>
        ) : ('') */}
        <React.Fragment>
          <div>
            Copyright &copy; {year} Void Media, LLC
          </div>
        </React.Fragment>
      </Inner>
    </Wrapper>
  );
};

export default Footer;

Footer.propTypes = {
  isCase: PropTypes.bool,
};

Footer.defaultProps = {
  isCase: false,
};
