import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import ImageDisplay from './ImageDisplay/ImageDisplay'
import Description from './Description/Description'

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
      <Description />
    </div>
  )
}

export default Home
