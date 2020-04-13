import { put, call, takeLatest } from 'redux-saga/effects'
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

function* createResource(api, { data }, { resource, thunk }) {
  try {
    const detail = yield call([api, api.post], `/${resource}`,  data)
    yield put(actions.resourceCreateSuccess(resource, detail, thunk))
    toastr.success('Success!', 'Created new client!')
  } catch (e) {
    yield put(actions.resourceCreateFailure(resource, e, { data }, thunk))
    toastr.error('Oops! Something went wrong...')
  }
}


function* deleteResource(api, { resource, thunk }) {
  try {
    const detail = yield call([api, api.delete], `/${resource}`)
    yield put(actions.resourceDeleteSuccess(resource, detail, thunk))
    toastr.success('Success! Deleted client!')
  } catch (e) {
    yield put(actions.resourceDeleteFailure(resource, e, thunk))
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

function* updateResource(api, { data }, { resource, thunk }) {
  try {
    const detail = yield call([api, api.put], `/${resource}`,  data)
    yield put(actions.resourceUpdateSuccess(resource, detail, { data }, thunk))
    toastr.success('Success', 'Updated!')
  } catch (e) {
    yield put(actions.resourceUpdateFailure(resource, e, { data }, thunk))
    toastr.error('Oops! Something went wrong...')
  }
}

function* watchResourceCreateRequest(api, { payload, meta }) {
  yield call(createResource, api, payload, meta)
}

function* watchResourceUpdateRequest(api, { payload, meta }) {
  yield call(updateResource, api, payload, meta)
}

function* watchResourceDeleteRequest(api, { meta }) {
  yield call(deleteResource, api, meta)
}

function* watchResourceShowRequest(api, { meta }) {
  yield call(showResource, api, meta)
}

function* watchResourceIndexRequest(api, { meta }) {
  yield call(indexResource, api, meta)
}

export default function* ({ api }) {
  yield takeLatest(actions.RESOURCE_GET_REQUEST, watchResourceIndexRequest, api)
  yield takeLatest(actions.RESOURCE_CREATE_REQUEST, watchResourceCreateRequest, api)
  yield takeLatest(actions.RESOURCE_UPDATE_REQUEST, watchResourceUpdateRequest, api)
  yield takeLatest(actions.RESOURCE_DELETE_REQUEST, watchResourceDeleteRequest, api)
  yield takeLatest(actions.RESOURCE_SHOW_REQUEST, watchResourceShowRequest, api)
}
