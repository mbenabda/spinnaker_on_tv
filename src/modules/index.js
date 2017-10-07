import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Project from './project'

export default () => (
    <Router>
        <Route exact path="/" component={Project}/>
    </Router>
)
