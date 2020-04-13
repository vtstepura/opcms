export const RESOURCE_CREATE_REQUEST = 'CREATE_AUTH_REQUEST'
export const RESOURCE_CREATE_SUCCESS = 'CREATE_AUTH_SUCCEEDED'
export const RESOURCE_CREATE_FAILURE = 'CREATE_AUTH_FAILED'

export const resourceCreateRequest = (resource, data) => ({
  type: RESOURCE_CREATE_REQUEST,
  payload: { data },
  meta: {
    resource,
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

export const RESOURCE_SHOW_REQUEST = 'SHOW_USER_REQUEST'
export const RESOURCE_SHOW_SUCCESS = 'SHOW_USER_SUCCEEDED'
export const RESOURCE_SHOW_FAILURE = 'SHOW_USER_FAILED'

export const resourceShowRequest = (resource) => ({
  type: RESOURCE_SHOW_REQUEST,
  meta: {
    resource,
    thunk: `${resource}Show`
  }
})

export const resourceShowSuccess = (resource, detail, request, thunk) => ({
  type: RESOURCE_SHOW_SUCCESS,
  payload: detail,
  meta: {
    request,
    thunk,
    resource
  }
})

export const resourceShowFailure = (resource, error, request, thunk) => ({
  type: RESOURCE_SHOW_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
    resource,
    thunk
  }
})

export const RESOURCE_DELETE_REQUEST = 'DELETE_AUTH_REQUEST'
export const RESOURCE_DELETE_SUCCESS = 'DELETE_AUTH_SUCCEEDED'
export const RESOURCE_DELETE_FAILURE = 'DELETE_AUTH_FAILED'

export const resourceDeleteRequest = (resource) => ({
  type: RESOURCE_DELETE_REQUEST,
  meta: {
    resource,
    thunk: `${resource}Delete`
  }
})

export const resourceDeleteSuccess = (resource, detail, request, thunk) => ({
  type: RESOURCE_DELETE_SUCCESS,
  payload: detail,
  meta: {
    request,
    thunk,
    resource
  }
})

export const resourceDeleteFailure = (resource, error, request, thunk) => ({
  type: RESOURCE_DELETE_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
    resource,
    thunk
  }
})
