import React, { Component } from 'react'
import { connect } from 'react-redux'

import Client from '../components/Client'
import NavBar from '../components/NavBar'
import { resourceGetRequest, resourceCreateRequest, resourceDeleteRequest, resourceUpdateRequest } from '../store/clients/actions'

class ClientsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      client: {
        name: '',
        project: '',
        department: '',
        estimate: '',
        budget: '',
        start_date: null
      },
      currentPage: 1,
      departments: [
        {id:1, name: 'MileStep'},
        {id: 2, name: 'LibiSoft'}
      ],
      colors: [ '#CAF7AD', '#FFFFC3', '#F4AD9C', '#DEACC3', '#FFFFFF', '#E5E5E5'],
      client_id: null,
      color: '',
      colorPickerOpen: false
    }
  }

  componentDidMount() {
    this.props.getClients()
  }

  handleChange = (event) => {
    const fieldName = event.target.name
    const fleldVal = event.target.value

    this.setState({ client: {...this.state.client, [fieldName]: fleldVal} })
  }

  handleSetStartDate = (date) => {
    this.setState({ client: { ...this.state.client, start_date: date }})
  }

  onChange = (page) => {
    this.setState ({ currentPage: page })

    this.props.getClientsPagination(page)
  }

  handleCreateClient = (data) => {
    const { currentPage } = this.state

    this.props.onCreateClient(data)
    this.props.getClientsPagination(currentPage)
  }

  handleDeleteClient = (id) => {

    const { currentPage } = this.state

    this.props.onDeleteClient(id)
  }

  handleOpenColorPicker= (id, color) => {
    this.setState({
      client_id: id,
      colorPickerOpen: true,
      color
    })
  }

  handleChangeColor = (color) => {
    this.setState({ color })
  }

  handleCloseColorPicker = () => {
    this.setState({ colorPickerOpen: false })
  }

  handleSaveColor = () => {
    const { client_id, color } = this.state

    this.props.setColor(client_id, { color })

    this.setState({ colorPickerOpen: false })
  }

  handleCancel = () => {
    this.setState({
      client_id: null,
      colorPickerOpen: false
     })
  }

  render() {
    return (
      <div>
        <NavBar history={this.props.history} />
        <Client
          {...this.props}
          client={this.state.client}
          handleChange={this.handleChange}
          currentPage={this.state.currentPage}
          pagy={this.props.pagy}
          onChange={this.onChange}
          handleCreateClient={this.handleCreateClient}
          departments={this.state.departments}
          colors={this.state.colors}
          handleOpenColorPicker={this.handleOpenColorPicker}
          handleChangeColor={this.handleChangeColor}
          colorPickerOpen={this.state.colorPickerOpen}
          handleCloseColorPicker={this.handleCloseColorPicker}
          color={this.state.color}
          handleSaveColor={this.handleSaveColor}
          history={this.props.history}
          handleCancel={this.handleCancel}
          client_id={this.state.client_id}
          handleDeleteClient={this.handleDeleteClient}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  clients: state.clients.data,
  pagy: state.clients.pagy,
  isClientsLoading: state.clients.loading
})

const mapDispatchToProps = (dispatch) => ({
  getClients: () => dispatch(resourceGetRequest('clients')),
  getClientsPagination: (page) => dispatch(resourceGetRequest(`clients?page=${page}`)),
  onCreateClient: (data) => dispatch(resourceCreateRequest('clients', data)),
  onDeleteClient: (id) => dispatch(resourceDeleteRequest(`clients/${id}`)),
  setColor: (id, data) => dispatch(resourceUpdateRequest(`clients/${id}`, data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ClientsContainer)
