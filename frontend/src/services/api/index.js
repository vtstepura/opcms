import merge from 'lodash.merge'

import { apiUrl } from '../../constants/api'

const checkStatus = (response) => {
  if (response.ok) return response

  return response.json().then(json => Promise.reject(json)) // eslint-disable-line
}

export const parseJSON = response => (
  response.text()
    .then((responseBody) => responseBody ? JSON.parse(responseBody) : {})
)

export const parseSettings = ({
  method = 'get', data, locale, ...otherSettings
} = {}) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Accept-Language': locale,
    'Access-Control-Allow-Origin': '*'
  }
  const settings = merge({
    body: data ? JSON.stringify(data) : undefined,
    credentials: 'include',
    method,
    headers
  }, otherSettings)
  return settings
}

export const parseEndpoint = (endpoint, params) => {
  const url = endpoint.indexOf('http') === 0 ? endpoint : apiUrl + endpoint
  const querystring = params ? `?${JSON.stringify(params)}` : ''
  return `${url}${querystring}`
}

const api = {}

api.request = (endpoint, { params, ...settings } = {}) => {
  return fetch(parseEndpoint(endpoint, params), parseSettings(settings))
    .then(checkStatus)
    .then(parseJSON)
}

['delete', 'get'].forEach((method) => {
  api[method] = (endpoint, settings) => api.request(endpoint, { method, ...settings })
});
['post', 'put', 'patch'].forEach((method) => {
  api[method] = (endpoint, data, settings) => api.request(endpoint, { method, data, ...settings })
})

api.create = (settings = {}) => ({
  settings,

  setToken(token) {
    this.settings.headers = {
      ...this.settings.headers,
      Authorization: token
    }
  },

  unsetToken() {
    this.settings.headers = {
      ...this.settings.headers,
      Authorization: undefined
    }
  },

  request(endpoint, settings) {
    return api.request(endpoint, merge({}, this.settings, settings))
  },

  post(endpoint, data, settings) {
    return this.request(endpoint, { method: 'post', data, ...settings })
  },

  get(endpoint, settings) {
    return this.request(endpoint, { method: 'get', ...settings })
  },

  put(endpoint, data, settings) {
    return this.request(endpoint, { method: 'put', data, ...settings })
  },

  patch(endpoint, data, settings) {
    return this.request(endpoint, { method: 'patch', data, ...settings })
  },

  delete(endpoint, settings) {
    return this.request(endpoint, { method: 'delete', ...settings })
  }
})

export default api
