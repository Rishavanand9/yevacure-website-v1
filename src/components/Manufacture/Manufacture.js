import React from 'react'
import './Manufacture.css'
import manufacture from '../../assets/Homepage/manufacture.png'
import { Grid, Hidden } from '@material-ui/core'

function Manufacture() {
  const yevacure = (
    <>
      <b class="overview-yeva">Yeva</b>
      <b class="overview-cure">cure</b>
    </>
  )

  const ImgBlock = (
    <div>
      <img src={manufacture} class="overview-img" alt="manufacture" />
    </div>
  )

  const DescriptionBlock = (
    <div>
      <h3 class="manufacture-h3">
        Manufacturing<b class="overview-cure">.</b>
        <b class="overview-yeva">&bull;</b>
      </h3>
      <p class="manufacture-p">
        {yevacure} manufactures its quality health products in the finest
        manufacturing facility that has been set up meeting stringent guidelines
        of any regulatory body including World Health Organization.
      </p>
      <p class="manufacture-p">
        The manufacturing site is well connected with excellent roads and has
        most reliable transportation to most major cities across India. Morever
        skilled and well trained manpower resources are adequately poised to
        overcome any of unforeseen challenges in production and quality.
      </p>
    </div>
  )

  const DesktopContent = (
    <>
      <Grid item md={6} lg={6} xl={6}>
        {DescriptionBlock}
      </Grid>
      <Grid item md={6} lg={6} xl={6}>
        {ImgBlock}
      </Grid>
    </>
  )

  const MobileContent = (
    <>
      <Grid item xs={12} sm={12}>
        {DescriptionBlock}
      </Grid>
      <Grid item xs={12} sm={12}>
        {ImgBlock}
      </Grid>
    </>
  )

  return (
    <div class="manufacture-root">
      <Grid container spacing={4}>
        <Hidden smDown>{DesktopContent}</Hidden>
        <Hidden mdUp>{MobileContent}</Hidden>
      </Grid>
    </div>
  )
}

export default Manufacture
