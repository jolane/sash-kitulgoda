import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import Grid from '../components/Grid'
import ContentBlock from '../components/ContentBlock'

class InfoPage extends React.Component {
  constructor(props) {
    super()

    this.state = {
      backgroundImage: '/images/info/creative-world.gif',
    }
    this.updateBackgroundImage = this.updateBackgroundImage.bind(this)
  }

  componentDidMount() {
    const imgObjs = []
    ;[
      'creative-world',
      'business',
      'watch-paint-dry',
      'marketing-and-advertising',
      'havent-looked-back',
      'digital-experiences',
      'young-lion',
      'london',
      'melbourne',
    ].forEach(imgName => {
      new Image().src = `/images/info/${imgName}.gif`
    })
  }

  updateBackgroundImage(imageBaseName) {
    const backgroundImage = `/images/info/${imageBaseName}.gif`
    this.setState({ backgroundImage })
  }

  render() {
    return (
      <PageWrapper backgroundImage={this.state.backgroundImage}>
        <Grid>
          <ContentBlock>
            <p>
              Before venturing into the{' '}
              <HoverPoint
                onMouseOver={() => this.updateBackgroundImage('creative-world')}
              >
                creative world
              </HoverPoint>{' '}
              I tried to make my parents happy by studying{' '}
              <HoverPoint
                onMouseOver={() => this.updateBackgroundImage('business')}
              >
                business
              </HoverPoint>. I walked into my first finance lecture and realised
              I’d rather{' '}
              <HoverPoint
                onMouseOver={() =>
                  this.updateBackgroundImage('watch-paint-dry')
                }
              >
                watch paint dry
              </HoverPoint>. I escaped with a major in{' '}
              <HoverPoint
                onMouseOver={() =>
                  this.updateBackgroundImage('marketing-and-advertising')
                }
              >
                marketing and advertising
              </HoverPoint>, enrolled in design school and{' '}
              <HoverPoint
                onMouseOver={() =>
                  this.updateBackgroundImage('havent-looked-back')
                }
              >
                haven’t looked back
              </HoverPoint>.
            </p>
            <p>
              In my career so far I’ve crafted{' '}
              <HoverPoint
                onMouseOver={() =>
                  this.updateBackgroundImage('digital-experiences')
                }
              >
                digital experiences
              </HoverPoint>{' '}
              for the likes of Google, Nike and Toyota; been a finalist for a
              Cannes{' '}
              <HoverPoint
                onMouseOver={() => this.updateBackgroundImage('young-lion')}
              >
                Young Lion
              </HoverPoint>{' '}
              and helped re-brand a number of start-ups.
            </p>
            <p>
              I’ve recently moved from{' '}
              <HoverPoint
                onMouseOver={() => this.updateBackgroundImage('melbourne')}
              >
                Melbourne
              </HoverPoint>{' '}
              to{' '}
              <HoverPoint
                onMouseOver={() => this.updateBackgroundImage('london')}
              >
                London
              </HoverPoint>{' '}
              and am looking for freelance and full time opportunities.
            </p>
          </ContentBlock>
          <ContentBlock>
            <p>Agencies, studios and clients</p>
            <p>
              R/GA<br />
              SouthSouthWest<br />
              CHE Proximity<br />
              Cornwell<br />
              Big Red<br />
              Nightingale Housing<br />
              Intrepid Travel
            </p>
          </ContentBlock>
        </Grid>
      </PageWrapper>
    )
  }
}

export default InfoPage

// Styles
const PageWrapper = styled.div`
  background-image: url(${props => props.backgroundImage});
  background-position: 55% 0;
  background-repeat: no-repeat;
  background-size: contain;
  padding-top: 63px;
  margin-top: -63px;
`

const HoverPoint = styled.span`
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`
