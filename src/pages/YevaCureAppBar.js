import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import CloseIcon from '@material-ui/icons/Close'
import Button from '@material-ui/core/Button'
import logo from './../assets/logo.png'
import { COLORS } from './../constants/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '-webkit-fill-available',
    margin: -8,
  },
  menuButton: {
    color: `${COLORS.col4}`,
    border: `2px solid ${COLORS.col4}`,
    margin: 'auto',
    '&:hover': {
      boxShadow: `0 0 40px ${COLORS.col4}`,
      transform: 'rotateZ(720deg)',
      transition: '0.4s ease',
    },
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    color: `${COLORS.col3}`,
  },
  title2: {
    flexGrow: 1,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    color: `${COLORS.col5}`,
  },
  appBar: {
    background: `${COLORS.col1}`,
    boxShadow: 'none',
    padding: '4%',
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

export default function YevaCureAppBar(props) {
  const classes = useStyles()
  const [menu, setMenu] = useState(false)
  const { isFixed } = props

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        className={!isFixed ? classes.appBar : classes.appBar2}
      >
        <Toolbar className={classes.toolBar}>
          <div className={!isFixed ? classes.title : classes.title2}>
            <img src={logo} alt="Logo" height={100} />
            <Typography variant="h4">YEVACURE</Typography>
            {!isFixed && (
              <>
                <Typography variant="h4">PHARMACEUTICALS</Typography>
                <Typography variant="h6">Health done right</Typography>
              </>
            )}
          </div>

          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={(e) => {
              e.stopPropagation()
              setMenu(!menu)
            }}
          >
            {!menu ? <MenuRoundedIcon /> : <CloseIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}
