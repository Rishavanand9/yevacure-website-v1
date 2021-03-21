import React from 'react'
import './Overview.css'
import overview from '../../assets/Homepage/overview.png'
import { Grid, Hidden } from '@material-ui/core'

function Overview() {
  const yevacure = (
    <>
      <b class="overview-yeva">Yeva</b>
      <b class="overview-cure">cure</b>
    </>
  )

  const OverviewBlock = (
    <div>
      <img src={overview} class="overview-img" />
    </div>
  )

  const DescriptionBlock = (
    <div>
      <h1 class="overview-h1">
        Overview<b class="overview-yeva">&bull;</b>
        <b class="overview-cure">&bull;</b>
      </h1>
      <p class="overview-p">
        {yevacure} Pharmaceuticals Pvt. Ltd discovers, develops, manufactures
        and commercializes a diverse portfolio of health medicines designed to
        meet the real-world needs of society.
      </p>
      <p class="overview-p">
        {yevacure} is much more than the sum of its parts. We all work together
        with a common purpose, sharing knowledge and resources, for the best
        interest of our customers, colleagues and shareholders.
      </p>
    </div>
  )

  const DesktopContent = (
    <>
      <Grid item md={6} lg={6} xl={6}>
        {OverviewBlock}
      </Grid>
      <Grid item md={6} lg={6} xl={6}>
        {DescriptionBlock}
      </Grid>
    </>
  )

  const MobileContent = (
    <>
      <Grid item xs={12} sm={12}>
        {DescriptionBlock}
      </Grid>
      <Grid item xs={12} sm={12}>
        {OverviewBlock}
      </Grid>
    </>
  )

  return (
    <div class="overview-root">
      <Grid container spacing={4}>
        <Hidden smDown>{DesktopContent}</Hidden>
        <Hidden mdUp>{MobileContent}</Hidden>
      </Grid>
    </div>
  )
}

export default Overview
