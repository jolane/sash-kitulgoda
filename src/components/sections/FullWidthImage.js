import React from 'react'
import styled from 'styled-components'

export default ({ src, alt }) => {
  return (
    <Wrapper>
      <FullWidthImage src={src} alt={alt} />
    </Wrapper>
  )
}

// Styles
const Wrapper = styled.div`
  margin-bottom: 40px;
  &:last-child {
    margin-bottom: 0;
  }
`

const FullWidthImage = styled.img`
  display: block;
  width: 100%;
`
