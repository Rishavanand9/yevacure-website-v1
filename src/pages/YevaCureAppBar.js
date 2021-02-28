import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import logo from './../assets/logo.png'
import withWidth from '@material-ui/core/withWidth'
import Menu from './../components/Menu'
import { COLORS } from './../constants/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '-webkit-fill-available',
    margin: -8,
  },
  scaleImage: {
    transform: 'scale(0.7)',
    margin: '-10px',
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    color: `${COLORS.col3}`,
  },
  title2: {
    flexGrow: 1,
    textAlign: 'center',
    display: 'block',
    alignItems: 'center',
    color: `${COLORS.col5}`,
  },
  appBar: {
    background: `${COLORS.col1}`,
    boxShadow: 'none',
    padding: '1% 2%',
    transition: '0.5s',
  },
  appBar2: {
    position: 'fixed',
    transition: '0.5s',
    top: 0,
    background: '#222629d6',
    paddingBottom: '16px',
    boxShadow: '0 10px 6px -6px #61892f',
  },
  toolBar: {
    alignItems: 'flex-end',
  },
  button: {
    color: '#61892f',
    borderRadius: '2em',
    border: `2px solid ${COLORS.col4}`,
    '&:hover': {
      boxShadow: `0 0 40px ${COLORS.col4}`,
    },
  },
}))

function YevaCureAppBar(props) {
  const classes = useStyles()
  const { width } = props
  const isMobile = width == 'xs' || width == 'sm ' ? true : false
  const { isFixed } = props

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        className={!isFixed ? classes.appBar : classes.appBar2}
      >
        <Toolbar className={classes.toolBar}>
          <div className={!isFixed ? classes.title : classes.title2}>
            <img
              src={logo}
              alt="Logo"
              height={100}
              className={isFixed ? classes.scaleImage : null}
            />
            <Typography variant="h4">YEVACURE</Typography>
            {!isFixed && (
              <>
                <Typography variant="h4">PHARMACEUTICALS</Typography>
                <Typography variant="overline">Health done right</Typography>
              </>
            )}
          </div>
        </Toolbar>
        <Menu />
      </AppBar>
    </div>
  )
}

export default withWidth()(YevaCureAppBar)
