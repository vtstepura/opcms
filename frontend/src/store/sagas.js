import { all, fork } from 'redux-saga/effects'

import clientSagas from './clients/sagas'
import historySagas from './history/sagas'
import authSagas from './auth/sagas'

const sagas = [
  clientSagas,
  historySagas,
  authSagas
]

export default function* (services = {}) {
  yield all(sagas.map(saga => fork(saga, services)))
}
