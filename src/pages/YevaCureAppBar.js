import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import withWidth from '@material-ui/core/withWidth'
import Menu from './../components/Menu'
import { COLORS } from './../constants/colors'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowDown'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '105%',
  },
  appBar: {
    position: 'fixed',
    top: 0,
    left: 0,
    background: `rgba(255,255,255,0.9)`,
    boxShadow: 'none',
    padding: '1.5em',
    transition: 'all 0.5s ease',
    boxShadow: '0 6px 10px #afccb2',
  },
  toolBar: {
    alignItems: 'flex-end',
    height: 'auto',
  },
}))

function YevaCureAppBar(props) {
  const classes = useStyles()
  const { width } = props
  const [arrow, setArrow] = useState(false)
  const isMobile = width == 'xs' || width == 'sm ' ? true : false

  return (
    <div className={classes.root} id="currentAppBar">
      <AppBar position="static" className={classes.appBar}>
        <Menu />
      </AppBar>
    </div>
  )
}

export default withWidth()(YevaCureAppBar)
