import React from 'react'
import styled from 'styled-components'

import { column } from '../styles'

import ContentBlock from '../components/ContentBlock'
import ListItemBlock from '../components/ListItemBlock'

const IndexPage = ({ data, navOpen }) => (
  <div>
    <Grid>
      <ContentBlock>
        Designer / Art Director<br />
        From Melbourne <br />
        Living in London
        {navOpen}
      </ContentBlock>
      <ContentBlock>
        <p>
          I’m a designer/art director specialising in all things digital and
          have experience working for the likes of R/GA, SouthSouthWest and
          Cornwell.
        </p>
        <p>
          When not nerding out on design you can find me drinking coffee and
          listening to James Blake.
        </p>
      </ContentBlock>
    </Grid>
    {data.allWorkYaml.edges
      .sort((a, b) => a.node.order - b.node.order)
      .map(node => {
        const { fields, name, hero } = node.node
        return (
          <ListItemBlock
            title={name}
            to={fields.slug}
            src={hero}
            key={fields.slug}
          />
        )
      })}
  </div>
)

export default IndexPage

export const IndexQuery = graphql`
  query IndexQuery {
    allWorkYaml {
      edges {
        node {
          name
          hero
          order
          fields {
            slug
          }
        }
      }
    }
  }
`

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 100px;

  @media screen and (max-width: 786px) {
    flex-direction: column;
  }

  > div {
    ${column};
    > *:first-child {
      margin-top: 0;
    }
  }
`
