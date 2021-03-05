import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {},
}))

function Home() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <h1>Home</h1>
    </div>
  )
}

export default Home