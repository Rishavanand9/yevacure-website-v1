import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid, Card, CardContent, Hidden } from '@material-ui/core'
import { COLORS } from './../constants/colors'
import card from './../assets/card.jpg'
import hiring from './../assets/hiring.png'

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
  hiring: {
    maxWidth: '-webkit-fill-available',
    opacity: '0.8',
    '&:hover': {
      opacity: '0.5',
      filter: `none`,
    },
  },
  title1: {
    textAlign: 'center',
    color: `${COLORS.col4}`,
    textDecoration: 'none',
    '&:hover': {
      color: `${COLORS.col5}`,
    },
  },
  cardRoot: {
    background: `white`,
    backgroundImage: `url(${card})`,
    border: `none`,
    boxShadow: `0 11px 6px -4px${COLORS.col1}`,
    marginBottom: `3em`,
  },
  cardRoot2: {
    width: 'fit-content',
    paddingTop: '2em',
    backgroundImage: `url(${card})`,
    boxShadow: `0 11px 6px -4px${COLORS.col1}`,
    marginBottom: `5em`,
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
          <a href="tel:‎+911204223763" className={classes.title1}>
            <Typography variant="h6" gutterBottom>
              ‎ (+91) 120 422 3763
            </Typography>
          </a>
          <Typography variant="h6" className={classes.title} gutterBottom>
            EMAIL:
          </Typography>
          <a
            href="mailto:yevacurepharmaceuticals@gmail.com"
            className={classes.title1}
            target="_blank"
          >
            <Typography variant="h6" gutterBottom>
              yevacurepharmaceuticals@gmail.com
            </Typography>
          </a>
        </div>
      </CardContent>
    </Card>
  )

  const Hiring = (
    <Card className={classes.cardRoot} variant="outlined">
      <CardContent>
        <Typography variant="h4" className={classes.title} gutterBottom>
          Join us &nbsp;↓
        </Typography>

        <a
          target={'_blank'}
          href={
            'https://docs.google.com/forms/d/e/1FAIpQLSe5__IKq8Maedx0ilQUE-F3rZ4Pv_3APX6OoaM6J7KausorNg/viewform?usp=sf_link'
          }
        >
          <img src={hiring} className={classes.hiring} />
        </a>
      </CardContent>
    </Card>
  )

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={1} xl={1} />
        <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
          {ContactInfo}
          {Hiring}
        </Grid>
        <Hidden mdDown>
          <Grid item md={12} lg={5} xl={5}>
            <Card className={classes.cardRoot2} variant="outlined">
              <Typography variant="h5" className={classes.title} gutterBottom>
                Help us reach you
              </Typography>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdaB1vGN0KHxc1Tr2eDH8pcQCrLNW5PCX8CxdIms_HOwrnekg/viewform?embedded=true"
                width="700"
                height="1200"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
              >
                Loading…
              </iframe>
            </Card>
          </Grid>
        </Hidden>
        <Hidden lgUp>
          <Grid item xs={12} sm={12}>
            <Card className={classes.cardRoot2} variant="outlined">
              <Typography variant="h5" className={classes.title} gutterBottom>
                Help us reach you
              </Typography>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdaB1vGN0KHxc1Tr2eDH8pcQCrLNW5PCX8CxdIms_HOwrnekg/viewform?embedded=true"
                width="400"
                height="1200"
                frameborder="0"
                marginheight="0"
                marginwidth="1"
              >
                Loading…
              </iframe>
            </Card>
          </Grid>
        </Hidden>
        <Grid item xs={12} sm={12} md={12} lg={1} xl={1} />
      </Grid>
    </div>
  )
}

export default Contact
