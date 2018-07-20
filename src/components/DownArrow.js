import React from 'react'
import styled from 'styled-components'

export default ({ onClickArrowButton }) => {
  return (
    <ArrowButtonWrapper onClick={onClickArrowButton}>
      <svg width="10px" height="32px" viewBox="0 0 10 32">
        <g transform="translate(-40.000000, -723.000000)" stroke="#FFFFFF">
          <g transform="translate(45.000000, 740.000000) rotate(-270.000000) translate(-45.000000, -740.000000) translate(29.000000, 735.000000)">
            <path d="M0,5 L30,5" strokeWidth="0.5" />
            <g
              strokeWidth="1"
              fillRule="evenodd"
              transform="translate(27.036255, 5.009766) rotate(-45.000000) translate(-27.036255, -5.009766) translate(23.536255, 1.509766)"
            >
              <path d="M0,6 L6,6" strokeWidth="0.5" />
              <path d="M6,6 L6,0" strokeWidth="0.5" />
            </g>
          </g>
        </g>
      </svg>
    </ArrowButtonWrapper>
  )
}

// Styles
const ArrowButtonWrapper = styled.button`
  padding: 0;
  border: 0;
  background-color: transparent;
  width: 0.714em;
  height: 2.285714em;
  margin: 5.714286em 0;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: translateY(0.7em);
  }
`
