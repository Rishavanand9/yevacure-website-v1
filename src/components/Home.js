import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ImageDisplay from './ImageDisplay/ImageDisplay'
import Overview from './Overview/Overview'
import VisionMission from './VisionMission/VisionMission'
import Manufacture from './Manufacture/Manufacture'
import Values from './Values/Values'
import Proficiency from './Proficiency/Proficiency'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    marginTop: '10em',
  },
}))

function Home() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <ImageDisplay />
      <Overview />
      <VisionMission />
      <Manufacture />
      <Values />
      <Proficiency />
    </div>
  )
}

export default Home
