import React from 'react'
import styled from 'styled-components'

import { column } from '../styles'

export default ({ children }) => {
  return <Grid>{children}</Grid>
}

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 100px;

  @media screen and (max-width: 786px) {
    flex-direction: column;
  }

  > div {
    ${column};
    > *:first-child {
      margin-top: 0;
    }
  }
`
