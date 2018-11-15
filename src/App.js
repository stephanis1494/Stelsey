import React from 'react'
import Home from './components/views/Home.js'
import { Resume } from './components/views/Resume.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export const App = () => {
  return(
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/resume' component={Resume} />
      </Switch>
    </Router>
  )
}
