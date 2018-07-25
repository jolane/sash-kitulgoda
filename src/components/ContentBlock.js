import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Waypoint from 'react-waypoint'

const Wrapper = styled.div`
  width: 100%;
  padding: 3em 0.75em 0 0;
  box-sizing: border-box;
  position: relative;
  opacity: 0.05;
  transition: all 0.5s ease-in;
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
