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
          By incorporating a
          triple-bottom-line approach into all aspects of our business, and with
          Yevacure's expertise on how to nourish, protect and innovate on a
          large scale, we are dedicated to fostering healthy people, a healthy
          planet and a healthy business.
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
        We aim to have our finger on the pulse of emerging therapies &
        consequently have risen with many innovative products in the Human &
        Veterinary segment.
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
