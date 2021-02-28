import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { AdbOutlined } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {},
}))

function About() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <h1>About</h1>
    </div>
  )
}

export default About
