import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import YevaCureAppBar from './YevaCureAppBar'
import Contact from './../components/Contact'

const useStyles = makeStyles((theme) => ({
  content: {
    position: 'relative',
  },
}))

function YevaCure() {
  const classes = useStyles()
  const [header, setHeader] = useState(false)

  const onScroll = () => {
    const scrollY = window.scrollY > 0 ? true : false //Don't get confused by what's scrolling - It's not the window
    setHeader(scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
  })

  return (
    <>
      <YevaCureAppBar isFixed={header} />
      <h1>hekajbfaksjbfjabfabfkj</h1>

      <h1>hekajbfaksjbfjabfabfkj</h1>
      <h1>hekajbfaksjbfjabfabfkj</h1>

      <h1>hekajbfaksjbfjabfabfkj</h1>

      <h1>hekajbfaksjbfjabfabfkj</h1>

      <h1>hekajbfaksjbfjabfabfkj</h1>

      <h1>hekajbfaksjbfjabfabfkj</h1>

      <h1>hekajbfaksjbfjabfabfkj</h1>
      <h1>hekajbfaksjbfjabfabfkj</h1>

      <h1>hekajbfaksjbfjabfabfkj</h1>

      <h1>hekajbfaksjbfjabfabfkj</h1>

      <h1>hekajbfaksjbfjabfabfkj</h1>

      <h1>hekajbfaksjbfjabfabfkj</h1>

      <h1>hekajbfaksjbfjabfabfkj</h1>
      <h1>hekajbfaksjbfjabfabfkj</h1>

      <h1>hekajbfaksjbfjabfabfkj</h1>

      <h1>hekajbfaksjbfjabfabfkj</h1>

      <h1>hekajbfaksjbfjabfabfkj</h1>

      <h1>hekajbfaksjbfjabfabfkj</h1>

      <h1>hekajbfaksjbfjabfabfkj</h1>
      <h1>hekajbfaksjbfjabfabfkj</h1>

      <h1>hekajbfaksjbfjabfabfkj</h1>

      <h1>hekajbfaksjbfjabfabfkj</h1>

      <h1>hekajbfaksjbfjabfabfkj</h1>

      <h1>hekajbfaksjbfjabfabfkj</h1>

      <h1>hekajbfaksjbfjabfabfkj</h1>
      <h1>hekajbfaksjbfjabfabfkj</h1>

      <h1>hekajbfaksjbfjabfabfkj</h1>

      <h1>hekajbfaksjbfjabfabfkj</h1>

      <h1>hekajbfaksjbfjabfabfkj</h1>

      <h1>hekajbfaksjbfjabfabfkj</h1>

      <h1>hekajbfaksjbfjabfabfkj</h1>
      <h1>hekajbfaksjbfjabfabfkj</h1>

      <h1>hekajbfaksjbfjabfabfkj</h1>

      <h1>hekajbfaksjbfjabfabfkj</h1>

      <h1>hekajbfaksjbfjabfabfkj</h1>

      <h1>hekajbfaksjbfjabfabfkj</h1>

      <h1>hekajbfaksjbfjabfabfkj</h1>
      <h1>hekajbfaksjbfjabfabfkj</h1>

      <h1>hekajbfaksjbfjabfabfkj</h1>

      <h1>hekajbfaksjbfjabfabfkj</h1>

      <h1>hekajbfaksjbfjabfabfkj</h1>

      <h1>hekajbfaksjbfjabfabfkj</h1>

      <h1>hekajbfaksjbfjabfabfkj</h1>
      <h1>hekajbfaksjbfjabfabfkj</h1>

      <h1>hekajbfaksjbfjabfabfkj</h1>

      <h1>hekajbfaksjbfjabfabfkj</h1>

      <h1>hekajbfaksjbfjabfabfkj</h1>

      <h1>hekajbfaksjbfjabfabfkj</h1>

      <Router>
        <Switch>
          <Route path="/contact-us">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default YevaCure
