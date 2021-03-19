import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import ImageDisplay from './ImageDisplay/ImageDisplay'
import Overview from './Overview/Overview'

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
    </div>
  )
}

export default Home
