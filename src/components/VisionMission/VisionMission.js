import React from 'react'
import './VisionMission.css'
import { Grid } from '@material-ui/core'
import visionImg from '../../assets/Homepage/visionImg.png'
import missionImg from '../../assets/Homepage/missionImg.png'

function VisionMission() {
  const Vision = (
    <div class="visionmission-content">
      <img src={visionImg} height={100} alt="vision" />
      <h4 class="visionmission-h4">
        <b class="overview-yeva">&bull;</b> Vision{' '}
        <b class="overview-cure">&bull;</b>
        <p class="visionmission-p">
          Our products, services and people will be the most valued by health
          customers around the country
        </p>
      </h4>
    </div>
  )

  const Mission = (
    <div class="visionmission-content">
      <img src={missionImg} height={100} alt="mission" />
      <h4 class="visionmission-h4">
        <b class="overview-yeva">&bull;</b> Mission{' '}
        <b class="overview-cure">&bull;</b>
      </h4>
      <p class="visionmission-p">
        To provide the best quality health products and making world a better
        place to sustain.
      </p>
    </div>
  )

  return (
    <div class="visionmission-root">
      <Grid container spacing={4}>
        <Grid item md={6} lg={6} xl={6} xs={12} sm={12}>
          {Vision}
        </Grid>
        <Grid item md={6} lg={6} xl={6} xs={12} sm={12}>
          {Mission}
        </Grid>
      </Grid>
    </div>
  )
}

export default VisionMission
