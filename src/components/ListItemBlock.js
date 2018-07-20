import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'gatsby-link'

import { column } from '../styles'

const ListItemBlock = ({ to, title, src }) => (
  <Wrapper to={to}>
    <Title>{title}</Title>
    <Content>
      <Img src={src} alt={`Project - ${title}`} />
    </Content>
  </Wrapper>
)

ListItemBlock.propTypes = {
  title: PropTypes.string.isRequired,
}

export default ListItemBlock

// Styles
const Wrapper = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  padding-left: 280px;
  position: relative;
  & + & {
    margin-top: 80px;
  }
`

const Title = styled.h4`
  position: absolute;
  left: 0;
  top: 80px;
  z-index: 2;
  width: 310px;
  border-top: 1px solid currentColor;
  padding-top: 21px;
  margin: 0;
  ${column};
`
const Content = styled.div`
  width: 100%;
`

const Img = styled.img`
  display: block;
  width: 100%;
`
