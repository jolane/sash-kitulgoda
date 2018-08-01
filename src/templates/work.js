import React from 'react'
import styled from 'styled-components'
import { scroller } from 'react-scroll'

import { column } from '../styles'

import Grid from '../components/Grid'
import ContentBlock from '../components/ContentBlock'
import ArrowButton from '../components/ArrowButton'
import DownArrow from '../components/DownArrow'

// Sections
import FullWidthImage from '../components/sections/FullWidthImage'
import ThreeImages from '../components/sections/ThreeImages'
import TwoImages from '../components/sections/TwoImages'

const renderContent = (section, index) => {
  switch (section.type) {
    case 'image':
      return (
        <FullWidthImage
          src={section.src}
          alt={section.alt}
          key={(section.type, index)}
        />
      )
    case 'text':
      return (
        <TextBlock key={(section.type, index)}>
          <ContentBlock>
            <p>{section.text}</p>
          </ContentBlock>
        </TextBlock>
      )
    case 'threeImages':
      return (
        <ThreeImages
          key={(section.type, index)}
          src1={section.src1}
          src2={section.src2}
          src3={section.src3}
          alt={section.alt}
        />
      )
    case 'twoImages':
      return (
        <TwoImages
          key={(section.type, index)}
          src1={section.src1}
          src2={section.src2}
          alt={section.alt}
        />
      )
  }
}

export default ({ data }) => {
  const { name, designedAt, description, website, sections } = data.workYaml
  return (
    <div>
      <Grid>
        <ContentBlock>
          <p>
            {name}
            <br />
            {designedAt}
          </p>
        </ContentBlock>
        <ContentBlock>
          <p>{description}</p>
          {website && (
            <ArrowButton href={website} title={`${name} Webiste`}>
              Visit Website
            </ArrowButton>
          )}
        </ContentBlock>
      </Grid>
      <DownArrow
        onClickArrowButton={() =>
          scroller.scrollTo('work-content', {
            duration: 400,
            smooth: 'easeInOutQuart',
          })
        }
      />
      <WorkContent name="work-content">
        {sections.map((section, index) => renderContent(section, index))}
      </WorkContent>
      <ArrowButton to={`/work`}>Next Project</ArrowButton>
    </div>
  )
}

export const workQuery = graphql`
  query WorkPageQuery($slug: String!) {
    workYaml(fields: { slug: { eq: $slug } }) {
      name
      designedAt
      website
      description
      sections {
        type
        src
        text
        src1
        src2
        src3
        alt
      }
    }
  }
`

// Styles
const WorkContent = styled.div`
  ${column};
  width: 100%;
  padding: 0 0 8.5em;
  border-bottom: 1px solid currentColor;
  margin-bottom: 2.857143em;
`

const TextBlock = styled.div`
  ${column};
  margin: 5.714286em 0;
`
