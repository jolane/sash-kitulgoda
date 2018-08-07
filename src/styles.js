import { css } from 'styled-components'

export const container = css`
  width: 96%;
  max-width: 1440px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 786px) {
    width: 87.5%;
  }
`

export const column = css`
  width: 350px;
  margin-right: 40px;
  &:last-child {
    margin-right: 0;
  }
`

export const lineAinmation = css`
  &:before {
    content: '';
    display: block;
    width: 0;
    height: 1px;
    background: currentColor;
    position: absolute;
    top: 0;
    left: 0;
    transition: width 0.5s ease-in;
    ${props =>
      props.inViewport &&
      `
      width: 100%;
    `};
  }
`
