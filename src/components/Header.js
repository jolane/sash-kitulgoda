import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'gatsby-link'

import { container } from '../styles'

const Header = ({ siteTitle }) => (
  <Wrapper>
    <h1>
      <Link to="/" title="Home">
        {siteTitle}
      </Link>
    </h1>
    <Nav>
      <Link to="/" title="Work">
        Work
      </Link>
      <Link to="/info" activeClassName="active" title="Info">
        Info
      </Link>
    </Nav>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

export default Header

// Styles
const Wrapper = styled.header`
  ${container};
  margin: 0 auto 40px;
  border-top: 1px solid white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0 150px;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  text-align: right;
  a {
    color: inherit;
    display: inline-block;
    margin: 0 20px;
    text-decoration: none;
    position: relative;

    &.active {
      text-decoration: underline;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`
