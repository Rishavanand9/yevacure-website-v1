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
      <img src={overview} class="overview-img" alt="overview" />
    </div>
  )

  const DescriptionBlock = (
    <div>
      <h1 class="overview-h1">
        Overview<b class="overview-yeva">.</b>
        <b class="overview-cure">&bull;</b>
      </h1>
      <p class="overview-p">
        {yevacure} quality is authenticated by our complete control over the
        manufacturing process right from procurement of the raw material till
        shipment of the finished product.
      </p>
      <p class="overview-p">
        We have a proud association with leading medical experts. In this long
        journey, we have always been renowned as the hallmark of ethics &
        unwavering consistency and commitment.
      </p>
      <p class="overview-p">
        <b>Why {yevacure} ?</b>
        <br />
        Quality has always been our key concern which is quite evident in the
        wide range of our products being manufactured by GMP certified plants
        and our compliance with the strictest manufacturing regulation of the
        pharma industry.
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
