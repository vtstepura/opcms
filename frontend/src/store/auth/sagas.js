import { put, call, takeLatest } from 'redux-saga/effects'
import { toastr } from 'react-redux-toastr'

import * as actions from './actions'

function* createResource(api, { data }, { resource, thunk }) {
  try {
    const detail = yield call([api, api.post], `/${resource}`,  data)
    yield put(actions.resourceCreateSuccess(resource, detail, { data }, thunk))
    toastr.success('Success', 'You successfully loggin!')
  } catch (e) {
    yield put(actions.resourceCreateFailure(resource, e, { data }, thunk))
    toastr.error('Oops! Something went wrong...')
  }
}

function* showResource(api, { resource, thunk }) {
  try {
    const detail = yield call([api, api.get], `/${resource}`)
    yield put(actions.resourceShowSuccess(resource, detail, thunk))
  } catch (e) {
    yield put(actions.resourceShowFailure(resource, e, thunk))
  }
}

function* deleteResource(api, { resource, thunk }) {
  try {
    const detail = yield call([api, api.delete], `/${resource}`)
    yield put(actions.resourceDeleteSuccess(resource, detail, thunk))
    toastr.success('Success', 'You successfully loggout!')
  } catch (e) {
    yield put(actions.resourceDeleteFailure(resource, e, thunk))
    toastr.error('Oops! Something went wrong...')
  }
}


function* watchResourceCreateRequest(api, { payload, meta }) {
  yield call(createResource, api, payload, meta)
}

function* watchResourceShowRequest(api, { meta }) {
  yield call(showResource, api, meta)
}

function* watchResourceDeleteRequest(api, { meta }) {
  yield call(deleteResource, api, meta)
}

export default function* ({ api }) {
  yield takeLatest(actions.RESOURCE_CREATE_REQUEST, watchResourceCreateRequest, api)
  yield takeLatest(actions.RESOURCE_SHOW_REQUEST, watchResourceShowRequest, api)
  yield takeLatest(actions.RESOURCE_DELETE_REQUEST, watchResourceDeleteRequest, api)
}
