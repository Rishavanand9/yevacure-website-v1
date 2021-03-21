import React from 'react'
import { Grid } from '@material-ui/core'
import withWidth from '@material-ui/core/withWidth'
import './Proficiency.css'

function Proficiency(props) {
  const { width } = props
  const isMobile = width == 'xs' || width == 'sm ' ? true : false

  return (
    <div class="proficiency-root">
      <h1 class="proficiency-h1">
        <b class="overview-yeva">&bull;</b> Core Proficiency{' '}
        <b class="overview-yeva">&bull;</b>
      </h1>
      <Grid container spacing={2}></Grid>
    </div>
  )
}

export default withWidth()(Proficiency)
