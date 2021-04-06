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
import logoName from './../assets/logoName.png'
import { Redirect } from 'react-router'

const useStyles = makeStyles((theme) => ({
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
    textAlign: 'start',
    color: `${COLORS.col4}`,
    textDecoration: 'none',
    '&:hover': {
      color: `${COLORS.col3}`,
      cursor: 'pointer',
      letterSpacing: '5px',
      transition: '0.5s',
    },
  },
  menu2: {
    textAlign: 'start',
    color: `${COLORS.col4}`,
    textDecoration: 'none',
    fontSize: '1rem',
    padding: '4px',
    '&:hover': {
      color: `${COLORS.col3}`,
      cursor: 'pointer',
      transform: 'scale(1.3)',
      transition: '0.3s',
    },
  },
  menuOption: {
    background: `white`,
    width: '20em',
    textAlign: 'center',
  },
  hr: {
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0), ${COLORS.col4}, rgba(0, 0, 0, 0))`,
    height: '2px',
    margin: 'auto',
  },
  menuContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  menuItems: {
    display: 'flex',
    left: '70%',
  },
  logo: {
    display: 'flex',
    left: '5%',
  },
  logoImg: {},
  menuDiv: {
    position: 'absolute',
    right: '20em',
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
      <img src={logo} height={50} className={classes.logoImg} />
      <img src={logoName} height={30} />
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
              {/*<Divider className={classes.hr} />*/}
            </>
          )
        })}
      </List>
    </div>
  )

  const DesktopMenu = (
    <div className={classes.menuContainer}>
      <div>
        <img src={logo} height={50} />
        <img src={logoName} height={30} />
      </div>
      <div className={classes.menuDiv}>
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
          <img src={logoName} height={30} />
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
