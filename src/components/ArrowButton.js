import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

export default ({
  children,
  to,
  title,
  onClickArrowButton,
  href,
  hideOnDesktop,
}) => {
  var ArrowButtonSwitch = ArrowButtonWrapper

  if (to && !onClickArrowButton) {
    ArrowButtonSwitch = ArrowButtonSwitch.withComponent(Link)
  } else if (href && !to) {
    ArrowButtonSwitch = ArrowButtonSwitch.withComponent('a')
  }

  return (
    <ArrowButtonSwitch
      onClick={onClickArrowButton}
      to={to}
      href={href}
      title={title}
      target={href ? `_blank` : null}
      hideOnDesktop={hideOnDesktop}
    >
      {children}
      <Svg width="32px" height="10px" viewBox="0 0 32 10" version="1.1">
        <g
          transform="translate(-491.000000, -1861.000000)"
          stroke="currentColor"
        >
          <g transform="translate(508.000000, 1866.000000) rotate(-360.000000) translate(-508.000000, -1866.000000) translate(492.000000, 1861.000000)">
            <g>
              <path d="M0,5 L30,5" strokeWidth="0.5" />
              <g
                id="Group"
                transform="translate(27.036255, 5.009766) rotate(-45.000000) translate(-27.036255, -5.009766) translate(23.536255, 1.509766)"
                strokeWidth="0.5"
              >
                <path d="M0,6 L6,6" id="Line-2-Copy-3" />
                <path d="M6,6 L6,0" id="Line-2-Copy-4" />
              </g>
            </g>
          </g>
        </g>
      </Svg>
    </ArrowButtonSwitch>
  )
}

// Styles
const ArrowButtonWrapper = styled.button`
  color: inherit;
  background-color: transparent;
  border: 0;
  margin: 0;
  padding: 0;
  cursor: pointer;
  ${props => props.hideOnDesktop && `display: none;`};
  @media screen and (max-width: 786px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

const Svg = styled.svg`
  display: inline-block;
  margin-left: 1.4em;
  height: 0.714286em;
  width: 2.285714em;
  transition: all 0.2s;
  *:hover > & {
    transform: translateX(0.7em);
  }
`
