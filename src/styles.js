import { css } from 'styled-components'

export const container = css`
  width: 96%;
  max-width: 1440px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
`

export const column = css`
  width: 350px;
  margin-right: 40px;
  &:last-child {
    margin-right: 0;
  }
`
