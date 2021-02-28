import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import YevaCureAppBar from './YevaCureAppBar'
import YevaCureFooter from './YevaCureFooter'
import Contact from './../components/Contact'
import Home from './../components/Home'

const useStyles = makeStyles((theme) => ({
  content: {
    position: 'relative',
  },
}))

function YevaCure() {
  const classes = useStyles()
  const [header, setHeader] = useState(false)

  const onScroll = () => {
    const scrollY = window.scrollY > 120 ? true : false //Don't get confused by what's scrolling - It's not the window
    setHeader(scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
  })

  return (
    <>
      <YevaCureAppBar isFixed={header} />
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/contact-us">
            <Contact />
          </Route>
        </Switch>
      </Router>
      <YevaCureFooter />
    </>
  )
}

export default YevaCure
