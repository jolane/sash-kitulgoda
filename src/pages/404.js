import React from 'react'

import { column } from '../styles'

import Grid from '../components/Grid'
import ContentBlock from '../components/ContentBlock'
import ArrowButton from '../components/ArrowButton'

const NotFoundPage = ({ history }) => (
  <div>
    <Grid>
      <ContentBlock>
        <p>¯\_(ツ)_/¯</p>
      </ContentBlock>
      <ContentBlock>
        <p>Oops, something went wrong.</p>
        {history && history.goBack ? (
          <ArrowButton onClickArrowButton={() => history.goBack()}>
            Go Back
          </ArrowButton>
        ) : (
          <ArrowButton to={`/`}>Go to Home</ArrowButton>
        )}
      </ContentBlock>
    </Grid>
  </div>
)

export default NotFoundPage
