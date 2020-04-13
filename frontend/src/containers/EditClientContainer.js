import React, { Component } from 'react'
import { connect } from 'react-redux'
import isEmpty from 'lodash.isempty'

import NavBar from '../components/NavBar'
import EditClient from '../components/EditClient'
import { resourceShowRequest, resourceUpdateRequest } from '../store/clients/actions'

class EditClientContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      clientForm: {
      },
      departments: [
        {id:1, name: 'MileStep'},
        {id: 2, name: 'LibiSoft'}
      ]
    }
  }

  componentDidMount() {
    this.props.onShowClient()

    this.setState({ clientForm: this.props.client })
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousProps.client !== this.props.client) {
        this.setState({ clientForm: this.props.client.attributes })
    }
}

  handleChange = (event) => {
    const fieldName = event.target.name
    const fleldVal = event.target.value

    this.setState({ clientForm: {...this.state.clientForm, [fieldName]: fleldVal}})
  }

  handleSetStartDate = (date) => {
    this.setState({ client: { ...this.state.client, start_date: date }})
  }

  render() {
    const { clientForm } = this.state
    console.log(clientForm)
    return (
      !isEmpty(this.props.client) &&
      <div>
        <NavBar />
        <EditClient
          {...this.props}
          clientForm={this.state.clientForm}
          handleChange={this.handleChange}
          handleSetStartDate={this.handleSetStartDate}
          departments={this.state.departments}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  client: state.clients.client
})

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps.match.params
  return ({
    onShowClient: () => dispatch(resourceShowRequest(`/clients/${id}`)),
    onUpdateClient: (data) => dispatch(resourceUpdateRequest(`/clients/${id}`, data))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(EditClientContainer)
