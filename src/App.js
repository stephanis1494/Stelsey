import React from 'react'
import Home from './components/views/Home.js'
import { Resume } from './components/views/Resume.js'
import { ResumeChelsey } from './components/views/ResumeChelsey.js'
import { UnknownRoute } from './components/views/UnknownRoute.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export const App = () => {
  return(
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/resume' component={Resume} />
        <Route exact path='/chelsey-resume' component={ResumeChelsey} />
        <Route component={UnknownRoute} />
      </Switch>
    </Router>
  )
}
