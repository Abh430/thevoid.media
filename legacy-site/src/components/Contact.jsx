import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'react-emotion';
import { Flex } from 'grid-emotion';
import { rgba } from 'polished';

const Wrapper = styled(Flex)`
  max-width: ${props => props.theme.maxWidth};
`;

const Contact = styled(Wrapper)`
  margin: 0 auto;
  h1,
  h2,
  h3 {
    color: ${props => props.theme.colors.text};
  }
  h3 {
    font-family: ${props => props.theme.fontFamily.body};
    margin-top: 1rem;
    font-size: 1.85rem;
    font-weight: 400;
  }
  @media (max-width: ${props => props.theme.breakpoint.m}) {
    font-size: 1.5rem;
  }
`;

const ContactSection = ({ data }) => (
  <Contact px={4} py={6} justifyContent="center" alignItems="center" flexDirection="column">
    <h3>Questions? Criticims? Bad jokes? Commissions? Secrets to the universe?</h3>
    <h3>Email me: <a target='blank' href={'mailto:' + data.site.siteMetadata.contactEmail}>{data.site.siteMetadata.contactEmail}</a></h3>
  </Contact>
)

export default props => (
<StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            contactEmail
          }
        }
      }
    `}
    render={data =>
      <ContactSection data={data} />
    }
  />
);


ContactSection.propTypes = {
  data: PropTypes.shape({
      site: PropTypes.shape({
        siteMetadata: PropTypes.shape({
          contactEmail: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
};
