import React from 'react'
import Home from './Home.js'
import { Resume } from './Resume.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export const App = () => {
  return(
    <Router>
      <Switch>
        <Route exact path='/' component={Resume} />
        <Route path='/resume' component={Resume} />
      </Switch>
    </Router>
  )
}
