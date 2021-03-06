import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import logo from './../assets/logo.png'
import withWidth from '@material-ui/core/withWidth'
import Menu from './../components/Menu'
import { COLORS } from './../constants/colors'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowDown'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '105%',
    margin: -8,
  },
  animatedbounce: {
    textAlign: 'center',
  },
  wrap: {
    margin: '3em auto 3em auto',
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
  title3: {
    margin: 'auto',
    color: `${COLORS.col3}`,
  },
  title2: {
    flexGrow: 1,
    textAlign: 'center',
    display: 'block',
    alignItems: 'center',
    marginTop: '10em',
    color: `${COLORS.col3}`,
  },
  appBar: {
    background: `${COLORS.col1}`,
    boxShadow: 'none',
    height: '100vh',
    padding: '1% 2%',
    transition: 'all 0.5s ease',
  },
  appBar2: {
    position: 'fixed',
    transition: 'all 0.5s ease',
    height: 'auto',
    top: 0,
    background: `${COLORS.col1}`,
    paddingBottom: '16px',
    boxShadow: '0 10px 6px -6px #61892f',
  },
  toolBar: {
    alignItems: 'flex-end',
  },

  fixedAppBarInner: {
    display: 'flex',
  },
}))

function YevaCureAppBar(props) {
  const classes = useStyles()
  const { width } = props
  const [arrow, setArrow] = useState(false)
  const isMobile = width == 'xs' || width == 'sm ' ? true : false
  const { isFixed } = props

  const MobileAppBar = (
    <div className={classes.title2}>
      <img src={logo} alt="Logo" height={100} />
      <Typography variant="h4">YEVACURE</Typography>
      <>
        <Typography variant="h4">PHARMACEUTICALS</Typography>
        <Typography variant="caption">Health done right</Typography>
      </>
      <div className={classes.wrap}>
        {!arrow ? (
          <KeyboardArrowDownIcon fontSize="large" />
        ) : (
          <KeyboardArrowUpIcon fontSize="large" />
        )}
      </div>
    </div>
  )

  const DesktopAppBar = (
    <div className={classes.title}>
      <img
        src={logo}
        alt="Logo"
        className={isFixed ? classes.scaleImage : null}
      />
      <Typography variant="h2">YEVACURE</Typography>
      <>
        <Typography variant="h2">PHARMACEUTICALS</Typography>
        <Typography variant="h5">Health done right</Typography>
      </>
      <div className={classes.wrap}>
        {!arrow ? (
          <KeyboardArrowDownIcon fontSize="large" />
        ) : (
          <KeyboardArrowUpIcon fontSize="large" />
        )}
      </div>
    </div>
  )
  return (
    <div className={classes.root} id="currentAppBar">
      <AppBar
        position="static"
        className={!isFixed ? classes.appBar : classes.appBar2}
      >
        {!isFixed && <Menu />}
        <Toolbar className={classes.toolBar}>
          {!isFixed && !isMobile && DesktopAppBar}
          {!isFixed && isMobile && MobileAppBar}
          {isFixed && (
            <div className={classes.fixedAppBarInner}>
              <Menu />
              <img src={logo} height={isMobile ? 85 : 100} />
              <Typography variant="h5" className={classes.title3}>
                YEVACURE
              </Typography>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withWidth()(YevaCureAppBar)
