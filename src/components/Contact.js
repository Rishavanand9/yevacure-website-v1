import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid, Card, CardContent, Hidden } from '@material-ui/core'
import { COLORS } from './../constants/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: `100vh`,
    position: 'relative',
    marginTop: `5em`,
  },
  title: {
    textAlign: 'center',
    color: `${COLORS.col1}`,
  },
  title1: {
    textAlign: 'center',
    color: `${COLORS.col5}`,
    textDecoration: 'none',
    '&:hover': {
      color: `${COLORS.col5}`,
    },
  },
  cardRoot: {
    background: `white`,
    border: `none`,
    boxShadow: `0 11px 6px -4px${COLORS.col1}`,
  },
}))

function Contact() {
  const classes = useStyles()

  const ContactInfo = (
    <Card className={classes.cardRoot} variant="outlined">
      <CardContent>
        <Typography variant="h3" className={classes.title} gutterBottom>
          Lets Connect
        </Typography>
        <Typography variant="h6" className={classes.title} gutterBottom>
          Want to discuss about our products? <br />
          We’re always ready to help.
        </Typography>
        <div>
          <Typography variant="h6" className={classes.title} gutterBottom>
            CALL US:
          </Typography>
          <a href="tel:+918789864512" className={classes.title1}>
            <Typography variant="h6" gutterBottom>
              (+91) 8789864512
            </Typography>
          </a>
          <Typography variant="h6" className={classes.title} gutterBottom>
            EMAIL:
          </Typography>
          <a
            href="mailto:yevacure@gmail.com.com"
            className={classes.title1}
            target="_blank"
          >
            <Typography variant="h6" gutterBottom>
              yevacure@gmail.com.com
            </Typography>
          </a>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={1} xl={1} />
        <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
          {ContactInfo}
        </Grid>
        <Hidden mdDown>
          <Grid item md={12} lg={5} xl={5}>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdOFKaDb9pOAKaoUzUn_pplttQQhaCRGWRfxKmMFoBtdzXA9w/viewform?embedded=true"
              width="700"
              height="1000"
              frameborder=""
              marginheight="0"
              marginwidth="0"
            >
              Loading…
            </iframe>
          </Grid>
        </Hidden>
        <Hidden lgUp>
          <Grid item xs={12} sm={12}>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdOFKaDb9pOAKaoUzUn_pplttQQhaCRGWRfxKmMFoBtdzXA9w/viewform?embedded=true"
              width="400"
              height="1000"
              frameborder=""
              marginheight="0"
              marginwidth="0"
            >
              Loading…
            </iframe>
          </Grid>
        </Hidden>
        <Grid item xs={12} sm={12} md={12} lg={1} xl={1} />
      </Grid>
    </div>
  )
}

export default Contact
