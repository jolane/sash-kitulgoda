import React from 'react'
import styled from 'styled-components'

const TwoImages = ({ src1, src2, alt }) => {
  return (
    <Wrapper>
      <Img src={src1} alt={alt} />
      <Img src={src2} alt={alt} />
    </Wrapper>
  )
}

export default TwoImages

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: flex-start;
  margin-bottom: 40px;
`

const Img = styled.img`
  width: calc(50% - 20px);
  display: block;
  align-self: center;
`
