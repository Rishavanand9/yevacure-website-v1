import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import withWidth from '@material-ui/core/withWidth'
import Menu from './../components/Menu'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '105%',
  },
  appBar: {
    position: 'fixed',
    top: 0,
    left: 0,
    background: `#ffffff99`,
    transition: 'all 0.5s ease',
    boxShadow: 'none',
    padding: '1em',
  },
  toolBar: {
    alignItems: 'flex-end',
    height: 'auto',
  },
  stripe: {
    backgroundColor: '#262d7d',
    background: 'none',
    margin: -20,
    flexGrow: 1,
    width: '-webkit-fill-available',
    height: '3em',
  },
}))

function YevaCureAppBar(props) {
  const classes = useStyles()
  //const { width } = props
  //const isMobile = width === 'xs' || width === 'sm ' ? true : false

  return (
    <>
      <div className={classes.root} id="currentAppBar">
        <AppBar position="static" className={classes.appBar}>
          <div className={classes.stripe} />

          <Menu />
        </AppBar>
      </div>
    </>
  )
}

export default withWidth()(YevaCureAppBar)
