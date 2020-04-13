import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { middleware as thunkMiddleware } from 'redux-saga-thunk'
import { createLogger } from 'redux-logger'

import reducer from './reducer'
import rootSaga from './sagas'

const configureStore = (initState, services = {}) => {
  const logger = createLogger({
    collapsed: true,
    diff: true
  })

  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    reducer,
    initState,
    applyMiddleware(logger, thunkMiddleware, sagaMiddleware)
  )

  sagaMiddleware.run(rootSaga, services)
  return store
}

export default configureStore
