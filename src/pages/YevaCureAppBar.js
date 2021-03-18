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
    background: `white`,
    boxShadow: 'none',
    padding: '1.5em',
    transition: 'all 0.5s ease',
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
