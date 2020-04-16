import { put, call, takeLeading } from 'redux-saga/effects'
import { toastr } from 'react-redux-toastr'


import * as actions from './actions'

function* indexResource(api, { resource, thunk }) {
  try {
    const detail = yield call([api, api.get], `/${resource}`)
    yield put(actions.resourceGetSuccess(resource, detail, thunk))
  } catch (e) {
    yield put(actions.resourceGetFailure(resource, e, thunk))
  }
}

function* createResource(api, { data }, { resource, client_id, thunk }) {
  const id = 93
  try {
    const detail = yield call([api, api.post], `/${resource}`,  data)
    yield put(actions.resourceCreateSuccess(resource, detail, { data }, thunk))
    yield put(actions.resourceGetRequest(`history?client_id=${client_id}`, detail, thunk))
    toastr.success('Success!', 'Created new history!')
  } catch (e) {
    yield put(actions.resourceCreateFailure(resource, e, { data }, thunk))
    toastr.error('Oops! Something went wrong...')
  }
}


function* watchResourceCreateRequest(api, { payload, meta }) {
  yield call(createResource, api, payload, meta)
}

function* watchResourceIndexRequest(api, { meta }) {
  yield call(indexResource, api, meta)
}

export default function* ({ api }) {
  yield takeLeading(actions.RESOURCE_GET_REQUEST, watchResourceIndexRequest, api)
  yield takeLeading(actions.RESOURCE_CREATE_REQUEST, watchResourceCreateRequest, api)
}
