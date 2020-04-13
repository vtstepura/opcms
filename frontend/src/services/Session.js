import React, { Component } from 'react'
import isEmpty from 'lodash.isempty'
import { connect } from 'react-redux'

import PublicRoutes from '../routes/PublicRoutes'
import PrivateRoutes from '../routes/PrivateRoutes'

import { resourceShowRequest } from '../store/auth/actions'

class Session extends Component {
  componentDidMount() {
    this.props.getUser()
  }

  render() {
    const { currentUser, loading } = this.props
    if (loading) return null
    if (!isEmpty(currentUser)) return <PrivateRoutes />
    return <PublicRoutes />
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.auth.data,
  loading: state.auth.loading
})

const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(resourceShowRequest('authentications'))
})

export default connect(mapStateToProps, mapDispatchToProps)(Session)
