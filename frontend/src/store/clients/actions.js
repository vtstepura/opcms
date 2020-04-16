export const RESOURCE_GET_REQUEST = 'GET_CLIENTS_REQUEST'
export const RESOURCE_GET_SUCCESS = 'GET_CLIENTS_SUCCEEDED'
export const RESOURCE_GET_FAILURE = 'GET_CLIENTS_FAILED'

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

export const RESOURCE_CREATE_REQUEST = 'CREATE_CLIENT_REQUEST'
export const RESOURCE_CREATE_SUCCESS = 'CREATE_CLIENT_SUCCEEDED'
export const RESOURCE_CREATE_FAILURE = 'CREATE_CLIENT_FAILED'

export const resourceCreateRequest = (resource, data, currentPage) => ({
  type: RESOURCE_CREATE_REQUEST,
  payload: { data },
  meta: {
    resource,
    currentPage,
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

export const RESOURCE_DELETE_REQUEST = 'DELETE_CLIENT_REQUEST'
export const RESOURCE_DELETE_SUCCESS = 'DELETE_CLIENT_SUCCEEDED'
export const RESOURCE_DELETE_FAILURE = 'DELETE_CLIENT_FAILED'

export const resourceDeleteRequest = (resource, currentPage) => ({
  type: RESOURCE_DELETE_REQUEST,
  meta: {
    resource,
    currentPage,
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

export const RESOURCE_SHOW_REQUEST = 'SHOW_CLIENT_REQUEST'
export const RESOURCE_SHOW_SUCCESS = 'SHOW_CLIENT_SUCCEEDED'
export const RESOURCE_SHOW_FAILURE = 'SHOW_CLIENT_FAILED'

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

export const RESOURCE_UPDATE_REQUEST = 'UPDATE_CLIENT_REQUEST'
export const RESOURCE_UPDATE_SUCCESS = 'UPDATE_CLIENT_SUCCEEDED'
export const RESOURCE_UPDATE_FAILURE = 'UPDATE_CLIENT_FAILED'

export const resourceUpdateRequest = (resource, data, currentPage) => ({
  type: RESOURCE_UPDATE_REQUEST,
  payload: { data },
  meta: {
    resource,
    currentPage,
    thunk: `${resource}Update`
  }
})

export const resourceUpdateSuccess = (resource, detail, request, thunk) => ({
  type: RESOURCE_UPDATE_SUCCESS,
  payload: detail,
  meta: {
    request,
    thunk,
    resource
  }
})

export const resourceUpdateFailure = (resource, error, request, thunk) => ({
  type: RESOURCE_UPDATE_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
    resource,
    thunk
  }
})
