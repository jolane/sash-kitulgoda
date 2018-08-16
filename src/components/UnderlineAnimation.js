import React, { Component } from 'react'
import styled from 'styled-components'

export default class UnderlineAnimation extends Component {
  constructor() {
    super()
    this.state = {
      stage: 'start',
    }
  }
  render() {
    return (
      <Wrapper
        stage={this.state.stage}
        onMouseOver={() => this.setState({ stage: 'over' })}
        onMouseOut={() => {
          this.setState({ stage: 'out' })
          setTimeout(() => {
            this.setState({ stage: 'start' })
          }, 500)
        }}
      >
        {this.props.children}
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  overflow: hidden;
  line-height: 1;
  transform: translateY(0.2em);
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 80%;
    height: 1px;
    background-color: currentColor;
    bottom: 0;
    left: 10%;
    ${props =>
      props.stage === 'start' &&
      `
			transition: none;
			transform: translateX(-120%);
		`};
    ${props =>
      props.stage === 'over' &&
      `
			transform: translateX(-50%);
			transition: all 0.3s linear;
		`};
    ${props =>
      props.stage === 'out' &&
      `
			transform: translateX(130%);
			transition: all 0.3s linear;
		`};
  }
`
