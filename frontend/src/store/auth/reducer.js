import * as constant from './actions'

const initialResourceState = {
  data: {},
  loading: false,
  errors: {}
}

export default (state = initialResourceState, { type, payload }) => {
  switch (type) {

  case constant.RESOURCE_CREATE_REQUEST:
    return {
      ...state,
      loading: true
    }
  case constant.RESOURCE_CREATE_SUCCESS:
    return {
      ...state,
      loading: false,
      data: payload
    }
  case constant.RESOURCE_CREATE_FAILURE:
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
    console.log(payload)
    return {
      ...state,
      loading: false,
      data: payload
    }
  case constant.RESOURCE_SHOW_FAILURE:
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
        loading: false,
        data: {}
      }
    case constant.RESOURCE_DELETE_FAILURE:
      return {
        ...state,
        loading: false,
        errors: payload
      }

  default:
    return state
  }
}
