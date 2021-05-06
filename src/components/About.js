import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

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
