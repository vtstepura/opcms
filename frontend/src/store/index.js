import configureStore from './configure'
import api from '../services/api'

export const store = configureStore({}, { api: api.create() })
