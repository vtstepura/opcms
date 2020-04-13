import React, { Component } from 'react'
import { connect } from 'react-redux'

import { resourceCreateRequest } from '../store/auth/actions'
import SignIn from '../components/SignIn'

class SignInContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      form: {
        client_id: this.props.match.params.id,
        email: '',
        password: ''
      }
    }
  }

  componentDidMount() {
  }

  handleChange = (event) => {
    const fieldName = event.target.name
    const fleldVal = event.target.value

    this.setState({ form: {...this.state.form, [fieldName]: fleldVal}})
  }

  render() {
    const { form } = this.state
    return (
      <SignIn
        {...this.props}
        handleChange={this.handleChange}
        form={form}
      />
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  onCreateAuth: (data) => dispatch(resourceCreateRequest('authentications', data))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer)
