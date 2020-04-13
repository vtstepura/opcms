import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import { SignInContainer } from '../containers'



const PublicRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route component={SignInContainer} exact path='/' />
      </Switch>
    </Router>
  )
}

export default PublicRoutes
