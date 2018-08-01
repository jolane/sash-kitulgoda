import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Waypoint from 'react-waypoint'

import { lineAinmation } from '../styles'

const Wrapper = styled.div`
  width: 100%;
  padding: 3em 0.75em 0 0;
  box-sizing: border-box;
  position: relative;
  opacity: 0.05;
  transition: opacity 0.5s ease-in, padding 0.5s ease-in;
  ${lineAinmation};

  ${props =>
    props.inViewport &&
    `
      padding-top: 1.5em;
      opacity: 1;
    `};
`

class ContentBlock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inViewport: false,
    }
  }
  render() {
    const { children } = this.props
    return (
      <Waypoint onEnter={() => this.setState({ inViewport: true })}>
        <Wrapper inViewport={this.state.inViewport}>{children}</Wrapper>
      </Waypoint>
    )
  }
}
export default ContentBlock
