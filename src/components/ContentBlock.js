import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  padding: 1.5em 0.75em 0 0;
  border-top: 1px solid currentColor;
  box-sizing: border-box;
`

const ContentBlock = ({ children }) => <Wrapper>{children}</Wrapper>

ContentBlock.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ContentBlock
