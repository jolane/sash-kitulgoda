import React from 'react'
import PropTypes from 'prop-types'
import styled, { injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import { container } from '../styles'

import Header from '../components/Header'
import Footer from '../components/Footer'

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      navOpen: false,
      light: false,
    }

    this.openNav = this.openNav.bind(this)
    this.closeNav = this.closeNav.bind(this)
    this.updateLightState = this.updateLightState.bind(this)
  }

  openNav() {
    const navOpen = true
    this.setState({ navOpen })
  }

  closeNav() {
    const navOpen = false
    this.setState({ navOpen })
  }

  updateLightState(bool) {
    const light = bool
    this.setState({ light })
  }

  render() {
    const { children, data } = this.props
    const { navOpen } = this.state
    const { openNav, closeNav } = this
    return (
      <SiteWrapper light={this.state.light}>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <ColorChangeArea />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Waypoint
          onEnter={() => this.updateLightState(false)}
          onLeave={() => this.updateLightState(true)}
        />
        <Main>{children({ ...this.props, navOpen, closeNav, openNav })}</Main>
        <Footer />
      </SiteWrapper>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

// Styles
/* eslint-disable */
injectGlobal`
  ${styledNormalize};
  @font-face {
    font-family: 'BrownStd';
    src: url('/fonts/brownstd-regular.woff2') format('woff2'), url('/fonts/brownstd-regular.woff') format('woff'), url('/fonts/brownstd-regular.ttf') format('truetype');
    font-weight: normal;
  }
  body, html {
	  background: #fff;
	  font-size: 14px;
	  line-height: 1.57;
    color: #000;
    font-family: "BrownStd", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1 {
    font-size: 1em;
    font-weight: normal;
    margin: 0;
  }
`
/* eslint-enable */

const SiteWrapper = styled.div`
  padding-top: 40px;
  transition: all 0.5s linear;
  background: rgba(0, 0, 0, 1);
  color: #fff;
  min-height: 100vh;
  ${props =>
    props.light &&
    `
    background: rgba(0, 0, 0, 0.05);
    color: #000;
  `};
`

const Main = styled.main`
  ${container};
`

const ColorChangeArea = styled(Waypoint)`
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 120vh;
`
