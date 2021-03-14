import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Typography,
  IconButton,
  SwipeableDrawer,
  List,
  Divider,
} from '@material-ui/core'
import { COLORS } from './../constants/colors'
import withWidth from '@material-ui/core/withWidth'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import logo from './../assets/logo.png'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
  },
  root2: {
    margin: '2em auto 2em auto',
  },
  link: {
    textDecoration: 'none',
    textAlign: 'center',
    marginRight: '32px',
  },
  button: {
    color: '#61892f',
    borderRadius: '2em',
    '&:hover': {
      boxShadow: `0 0 40px ${COLORS.col4}`,
    },
  },
  menu: {
    marginLeft: '5%',
    marginTop: '5%',
    marginBottom: '5%',
    textAlign: 'start',
    color: `${COLORS.col4}`,
    textDecoration: 'none',
    '&:hover': {
      color: `${COLORS.col5}`,
      cursor: 'pointer',
      letterSpacing: '5px',
      transition: '0.5s',
    },
  },
  menu2: {
    textAlign: 'start',
    color: `${COLORS.col4}`,
    textDecoration: 'none',
    '&:hover': {
      color: `${COLORS.col5}`,
      cursor: 'pointer',
      transform: 'scale(1.2)',
      transition: '0.5s',
    },
  },
  menuOption: {
    background: `${COLORS.col1}`,
    width: '20em',
    height: '100vh',
    textAlign: 'center',
  },
  hr: {
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0), ${COLORS.col4}, rgba(0, 0, 0, 0))`,
    height: '2px',
    margin: 'auto',
  },
  menuContainer: {
    height: '80px',
  },
  menuItems: {
    display: 'flex',
    position: 'absolute',
    left: '5%',
  },
}))

const menuOptionValues = [
  { name: 'Home', path: '/', icon: '' },
  { name: 'Products', path: '/products', icon: '' },
  { name: 'Contact Us', path: '/contact-us', icon: '' },
]

function Menu(props) {
  const classes = useStyles()
  const { width } = props
  const [state, setState] = React.useState({
    left: false,
  })
  const isMobile = width == 'xs' || width == 'sm ' ? true : false

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const MenuOptions = (
    <div className={classes.menuOption}>
      <img src={logo} height={50} />

      <hr />
      <List>
        {menuOptionValues.map((item) => {
          return (
            <>
              <a href={item.path} className={classes.link}>
                <Typography variant={'h6'} className={classes.menu}>
                  {item.name}{' '}
                </Typography>
              </a>
              <Divider className={classes.hr} />
            </>
          )
        })}
      </List>
    </div>
  )

  const DesktopMenu = (
    <div className={classes.menuContainer}>
      <List className={classes.menuItems}>
        {menuOptionValues.map((item) => {
          return (
            <>
              <a href={item.path} className={classes.link}>
                <Typography variant={'h6'} className={classes.menu2}>
                  {item.name}{' '}
                </Typography>
              </a>
            </>
          )
        })}
      </List>
    </div>
  )

  return (
    <div className={!isMobile ? classes.root : classes.root2}>
      {(isMobile && (
        <IconButton
          className={classes.button}
          onClick={toggleDrawer('left', true)}
        >
          <MenuRoundedIcon />
        </IconButton>
      )) ||
        DesktopMenu}
      <SwipeableDrawer
        anchor={'left'}
        open={state['left']}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {MenuOptions}
      </SwipeableDrawer>
    </div>
  )
}

export default withWidth()(Menu)
