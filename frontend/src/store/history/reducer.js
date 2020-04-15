import * as constant from './actions'

const initialResourceState = {
  data: [],
  loading: false,
  errors: {},
  pagy: {}
}

export default (state = initialResourceState, { type, payload }) => {
  switch (type) {
  case constant.RESOURCE_GET_REQUEST:
    return {
      ...state,
      loading: true
    }
  case constant.RESOURCE_GET_SUCCESS:
    return {
      ...state,
      loading: false,
      data: payload.response.data,
      pagy: payload.pagy
    }
  case constant.RESOURCE_GET_FAILURE:
    return {
      ...state,
      loading: false,
      errors: payload.errors
    }

  case constant.RESOURCE_CREATE_REQUEST:
    return {
      ...state,
      loading: true
    }
  case constant.RESOURCE_CREATE_SUCCESS:
    return {
      ...state,
      loading: false
    }
  case constant.RESOURCE_CREATE_FAILURE:
    return {
      ...state,
      loading: false,
      errors: payload
    }

  default:
    return state
  }
}
