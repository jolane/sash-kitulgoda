import React from 'react'
import styled from 'styled-components'

const ThreeImages = ({ src1, src2, src3, alt }) => {
  return (
    <Wrapper>
      <Img src={src1} alt={alt} />
      <Img src={src2} alt={alt} />
      <Img src={src3} alt={alt} />
    </Wrapper>
  )
}

export default ThreeImages

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: flex-start;
  padding-top: 80px;
`

const Img = styled.img`
  width: 22%;
  display: block;
  margin: 0 4.4%;
  align-self: center;
`
