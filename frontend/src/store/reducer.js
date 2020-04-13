import { combineReducers } from 'redux'
import {reducer as toastrReducer} from 'react-redux-toastr'

import clients from './clients/reducer'
import history from './history/reducer'
import auth from './auth/reducer'

const reducers = {
  clients,
  history,
  auth,
  toastr: toastrReducer
}

export default combineReducers(reducers)
