import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import { ClientsContainer, HistoryContainer, EditClientContainer } from '../containers'



const PrivateRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route component={ClientsContainer} exact path='/' />
        <Route component={HistoryContainer} exact path='/history/:id' />
        <Route component={EditClientContainer} exact path='/client/:id/edit' />
      </Switch>
    </Router>
  )
}

export default PrivateRoutes
