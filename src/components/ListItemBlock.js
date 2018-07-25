import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Waypoint from 'react-waypoint'

import { column, lineAinmation } from '../styles'

class ListItemBlock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inViewport: false,
    }
  }
  render() {
    const { to, title, src } = this.props
    return (
      <Wrapper to={to} inViewport={this.state.inViewport}>
        <Waypoint onEnter={() => this.setState({ inViewport: true })} />
        <Title inViewport={this.state.inViewport}>{title}</Title>
        <Content>
          <SrinkOnHover>
            <ExpandOnHover>
              <Img src={src} alt={`Project - ${title}`} />
            </ExpandOnHover>
          </SrinkOnHover>
        </Content>
      </Wrapper>
    )
  }
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
  opacity: 0;
  transform: translateY(40px);
  transition: transform 0.4s linear 0.3s, opacity 0.4s linear 0.3s;

  ${props =>
    props.inViewport &&
    `
      transform: translateY(0);
      opacity: 1;
    `};
`

const Title = styled.h4`
  position: absolute;
  left: 0;
  top: 80px;
  z-index: 2;
  width: 310px;
  padding-top: 21px;
  margin: 0;
  ${column};
  ${lineAinmation};
`
const Content = styled.div`
  width: 100%;
  padding-bottom: 56.3%;
  position: relative;
`
const SrinkOnHover = styled.div`
  position: absolute;
  transition: all 0.4s linear;
  overflow: hidden;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  ${Wrapper}:hover & {
    height: calc(100% - 20px);
    width: calc(100% - 20px);
    top: 10px;
    left: 10px;
  }
`

const ExpandOnHover = styled.div`
  transition: all 0.4s linear;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${Wrapper}:hover & {
    height: calc(100% + 40px);
    width: calc(100% + 40px);
  }
`

const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
