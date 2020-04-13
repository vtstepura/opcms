import * as constant from './actions'

const initialResourceState = {
  data: [],
  client: {},
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
  case constant.RESOURCE_DELETE_REQUEST:
    return {
      ...state,
      loading: true
    }
  case constant.RESOURCE_DELETE_SUCCESS:
    return {
      ...state,
      loading: false
    }
  case constant.RESOURCE_DELETE_FAILURE:
    return {
      ...state,
      loading: false,
      errors: payload
    }
  case constant.RESOURCE_SHOW_REQUEST:
    return {
      ...state,
      loading: true
    }
  case constant.RESOURCE_SHOW_SUCCESS:
    return {
      ...state,
      loading: false,
      client: payload.data
    }
  case constant.RESOURCE_SHOW_FAILURE:
    console(payload)
    return {
      ...state,
      loading: false,
      errors: payload
    }
    case constant.RESOURCE_UPDATE_REQUEST:
      return {
        ...state,
        loading: true
      }
    case constant.RESOURCE_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case constant.RESOURCE_UPDATE_FAILURE:
      return {
        ...state,
        loading: false,
        errors: payload
      }

  default:
    return state
  }
}
