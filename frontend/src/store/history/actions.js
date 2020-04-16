export const RESOURCE_GET_REQUEST = 'GET_HISTORY_REQUEST'
export const RESOURCE_GET_SUCCESS = 'GET_HISTORY_SUCCEEDED'
export const RESOURCE_GET_FAILURE = 'GET_HISTORY_FAILED'

export const resourceGetRequest = (resource) => ({
  type: RESOURCE_GET_REQUEST,
  meta: {
    resource,
    thunk: `${resource}Index`
  }
})

export const resourceGetSuccess = (resource, detail, thunk) => ({
  type: RESOURCE_GET_SUCCESS,
  payload: detail,
  meta: {
    thunk,
    resource
  }
})

export const resourceGetFailure = (resource, error, thunk) => ({
  type: RESOURCE_GET_FAILURE,
  error: true,
  payload: error,
  meta: {
    resource,
    thunk
  }
})

export const RESOURCE_CREATE_REQUEST = 'CREATE_HISTORY_REQUEST'
export const RESOURCE_CREATE_SUCCESS = 'CREATE_HISTORY_SUCCEEDED'
export const RESOURCE_CREATE_FAILURE = 'CREATE_HISTORY_FAILED'

export const resourceCreateRequest = (resource, data, client_id) => ({
  type: RESOURCE_CREATE_REQUEST,
  payload: { data },
  meta: {
    resource,
    client_id,
    thunk: `${resource}Create`
  }
})

export const resourceCreateSuccess = (resource, detail, request, thunk) => ({
  type: RESOURCE_CREATE_SUCCESS,
  payload: detail,
  meta: {
    request,
    thunk,
    resource
  }
})

export const resourceCreateFailure = (resource, error, request, thunk) => ({
  type: RESOURCE_CREATE_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
    resource,
    thunk
  }
})
