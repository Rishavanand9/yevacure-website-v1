import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//import { makeStyles } from '@material-ui/core/styles'
import YevaCureAppBar from './YevaCureAppBar'
import YevaCureFooter from './YevaCureFooter'
import Contact from './../components/Contact'
import Home from './../components/Home'
import About from './../components/About'
import Products from '../components/products/Product-list'
import ProductDescription from '../components/products/Product-Description'

/*
const useStyles = makeStyles((theme) => ({
  content: {
    position: 'relative',
  },
}))
*/

function YevaCure() {
  //const classes = useStyles()

  return (
    <>
      <YevaCureAppBar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/contact-us">
            <Contact />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/products/product-desc">
            <ProductDescription />
          </Route>
        </Switch>
      </Router>
      <YevaCureFooter />
    </>
  )
}

export default YevaCure
