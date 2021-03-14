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
    color: `${COLORS.col3}`,
  },
  appBar: {
    background: `${COLORS.col1}`,
    boxShadow: 'none',
    padding: '1% 2%',
    transition: 'all 0.5s ease',
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

  const MobileAppBar = (
    <div className={classes.title2}>
      <img src={logo} alt="Logo" height={100} />
      <Typography variant="h4">YEVACURE</Typography>
      <>
        <Typography variant="h4">PHARMACEUTICALS</Typography>
        <Typography variant="caption">Health done right</Typography>
      </>
    </div>
  )

  const DesktopAppBar = (
    <div className={classes.title}>
      <img src={logo} alt="Logo" height={200} />
      <Typography variant="h2">YEVACURE</Typography>
      <>
        <Typography variant="h2">PHARMACEUTICALS</Typography>
        <Typography variant="h5">Health done right</Typography>
      </>
    </div>
  )
  return (
    <div className={classes.root} id="currentAppBar">
      <AppBar position="static" className={classes.appBar}>
        <Menu />
        <Toolbar className={classes.toolBar}>
          {!isMobile && DesktopAppBar}
          {isMobile && MobileAppBar}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withWidth()(YevaCureAppBar)
