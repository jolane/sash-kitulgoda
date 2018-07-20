import React from 'react'
import styled from 'styled-components'

import { container, column } from '../styles'

const Footer = () => (
  <Wrapper>
    <Inner>
      <Col>Get in touch</Col>
      <Col>
        <FooterLink href="mailto:sash@sash.com" title="Say Hello">
          Say Hello
        </FooterLink>
        <FooterLink
          href="https://www.instagram.com/sashsash_/"
          title="Instagram"
          target="_blank"
        >
          Instagram
        </FooterLink>
        <FooterLink
          href="https://www.linkedin.com/in/sash-kitulgoda-893a41a8/"
          target="_blank"
          title="Linkedin"
        >
          LinkedIn
        </FooterLink>
      </Col>
      <Col>© Sash Kitulgoda</Col>
    </Inner>
  </Wrapper>
)

export default Footer

const Wrapper = styled.footer`
  ${container};
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
`

const Col = styled.div`
  ${column};
  &:last-child {
    margin-left: auto;
    margin-right: 0;
    text-align: right;
    width: auto;
  }
`

const FooterLink = styled.a`
  display: inline-block;
  color: inherit;
  text-decoration: none;
  & + & {
    margin-left: 2.86em;
  }
`
