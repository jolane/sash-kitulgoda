import React from 'react'
import styled from 'styled-components'

import ArrowButton from './ArrowButton'

import { container, column } from '../styles'

const Footer = ({ navOpen }) => (
  <Wrapper navOpen={navOpen}>
    <Inner navOpen={navOpen}>
      <Col>Get in touch</Col>
      <Col>
        <FooterLink href="mailto:sash@sash.com" title="Say Hello">
          Say Hello
          <ArrowButton />
        </FooterLink>
        <FooterLink
          href="https://www.instagram.com/sashsash_/"
          title="Instagram"
          target="_blank"
        >
          Instagram
          <ArrowButton />
        </FooterLink>
        <FooterLink
          href="https://www.linkedin.com/in/sash-kitulgoda-893a41a8/"
          target="_blank"
          title="Linkedin"
        >
          LinkedIn
          <ArrowButton />
        </FooterLink>
      </Col>
      {!navOpen && <Col>© Sash Kitulgoda</Col>}
    </Inner>
  </Wrapper>
)

export default Footer

const Wrapper = styled.footer`
  ${container};
  @media screen and (max-width: 786px) {
    ${props =>
      props.navOpen &&
      `
      position: fixed;
      bottom: 0;
      left: 6.25%;
      z-index:1002;
      padding: 0;
    `};
  }
`
const Inner = styled.div`
  width: 100%;
  border-top: 1px solid currentColor;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1.5em 0 5.7em;
  margin-top: 8.6em;

  @media screen and (max-width: 786px) {
    flex-direction: column;
    align-items: flex-start;
    ${props =>
      props.navOpen &&
      `
      margin: 0;
      padding: 1.5em 0 0;
    `};
  }
`

const Col = styled.div`
  ${column};
  &:last-child {
    margin-left: auto;
    margin-right: 0;
    text-align: right;
    width: auto;
    @media screen and (max-width: 786px) {
      margin-left: 0;
    }
  }
  @media screen and (max-width: 786px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 2em;
    width: 100%;
  }
`

const FooterLink = styled.a`
  display: inline-block;
  color: inherit;
  text-decoration: none;

  button: {
    display: none;
  }

  & + & {
    margin-left: 2.86em;
  }
  @media screen and (max-width: 786px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 2em;
    & + & {
      margin-left: 0;
    }
    button: {
      display: inline-block;
    }
  }
`
