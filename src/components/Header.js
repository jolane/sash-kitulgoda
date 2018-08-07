import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'gatsby-link'

import ArrowButton from '../components/ArrowButton'

import { container } from '../styles'

const Header = ({ siteTitle, openNav, closeNav, navOpen }) => (
  <Wrapper navOpen={navOpen}>
    <h1>
      <Link to="/" title="Home">
        {siteTitle}
      </Link>
    </h1>
    <Nav navOpen={navOpen}>
      <Link
        to="/"
        title="Work"
        activeClassName="active"
        onClick={() => closeNav()}
        exact
      >
        Work
        <ArrowButton />
      </Link>
      <Link
        to="/info"
        activeClassName="active"
        title="Info"
        onClick={() => closeNav()}
        exact
      >
        Info
        <ArrowButton />
      </Link>
    </Nav>
    <NavToggle onClick={() => (navOpen ? closeNav() : openNav())}>
      {navOpen ? `Close` : `Menu`}
    </NavToggle>
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
  border-top: 1px solid currentColor;
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
    button {
      display: none;
    }

    @media screen and (max-width: 786px) {
      text-align: left;
      margin: 0;
      border-top: 1px solid currentColor;
      padding: 1em 0 2.8em;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      button {
        display: inline-block;
      }
    }
  }

  @media screen and (max-width: 786px) {
    display: none;
    ${props =>
      props.navOpen &&
      `
      display: flex;
      top: 10em;
      position: absolute;
      height: calc(100vh - 10em);
      background-color: #000;
      width: 100%;
      z-index: 1001;
      flex-direction: column;
      justify-content: flex-start;
    `};
  }
`

const NavToggle = styled.button`
  border: 0;
  background: transparent;
  color: inherit;
  font-size: 1em;
  font-family: inherit;
  cursor: pointer;
  display: none;
  padding: 0;
  margin: 0;
  @media screen and (max-width: 786px) {
    display: block;
  }
`
