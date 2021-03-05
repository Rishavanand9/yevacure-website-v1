import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { COLORS } from './../constants/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    marginTop: '10px',
    'grid-template-columns': '25% 25% 25% 25%',
  },
  link: {
    textDecoration: 'none',
    textAlign: 'center',
  },
  menu: {
    marginLeft: 'auto',
    marginRight: 'auto',
    color: `${COLORS.col5}`,
    textDecoration: 'none',
    '&:hover': {
      color: `${COLORS.col4}`,
      cursor: 'pointer',
      letterSpacing: '3px',
      transition: '0.5s',
    },
  },
}))

function Menu() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {/*
      <a href="/" className={classes.link}>
        <Typography variant={'overline'} className={classes.menu}>
          Home
        </Typography>
      </a>

      <a href="/about" className={classes.link}>
        <Typography variant={'overline'} className={classes.menu}>
          About
        </Typography>
      </a>
      */}
      <a href="/products" className={classes.link}>
        <Typography variant={'overline'} className={classes.menu}>
          Products
        </Typography>
      </a>
      <a href="/contact-us" className={classes.link}>
        <Typography variant={'overline'} className={classes.menu}>
          Contact Us
        </Typography>
      </a>
    </div>
  )
}

export default Menu
