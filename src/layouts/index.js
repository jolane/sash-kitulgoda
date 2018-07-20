import React from 'react'
import PropTypes from 'prop-types'
import styled, { injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'
import Helmet from 'react-helmet'

import { container } from '../styles'

import Header from '../components/Header'
import Footer from '../components/Footer'

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      backgroundAlpha: 1,
      fontColor: '#fff',
    }

    this.updateScrollPercentage = this.updateScrollPercentage.bind(this)
  }
  componentDidMount() {
    window.addEventListener('scroll', () => {
      this.updateScrollPercentage()
    })
  }
  updateScrollPercentage() {
    // top should equal 1 && bottom should equal 0.05
    const alpha =
      1 -
      window.pageYOffset /
        (document.body.offsetHeight - window.innerHeight) *
        0.95

    if (alpha > 0.7) {
      this.setState({ backgroundAlpha: 1, fontColor: '#fff' })
    } else {
      this.setState({ backgroundAlpha: 0.05, fontColor: '#000' })
    }
  }
  render() {
    const { children, data } = this.props
    return (
      <SiteWrapper
        style={{
          backgroundColor: `rgba(0, 0, 0, ${this.state.backgroundAlpha}`,
          color: this.state.fontColor,
        }}
      >
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Main>{children()}</Main>
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
    color: #fff;
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
`

const Main = styled.main`
  ${container};
`
