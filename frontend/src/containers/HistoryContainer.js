import React, { Component } from 'react'
import { connect } from 'react-redux'
import { resourceGetRequest, resourceCreateRequest } from '../store/history/actions'
import { resourceShowRequest } from '../store/clients/actions'

import History from '../components/History'
import NavBar from '../components/NavBar'

class HistoryContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      historyForm: {
        client_id: this.props.match.params.id,
        action: '',
        date: new Date()
      },
      currentPage: 1,
      currentClient: {
        name: this.props.location.state.attributes.name,
        project: this.props.location.state.attributes.project,
        department: this.props.location.state.attributes.department
      }
    }
  }

  componentDidMount() {
    this.props.onShowClient()

    this.props.getHistory()
  }

  handleChange = (event) => {
    const fieldName = event.target.name
    const fleldVal = event.target.value

    this.setState({ historyForm: {...this.state.historyForm, [fieldName]: fleldVal} })
  }

  onSetDate = (date) => {
    this.setState({ history: { ...this.state.history, date: date }})
  }

  onChange = (page) => {
    this.setState ({ currentPage: page })

    this.props.getHistoryPagitation(page)
  }

  handleCreateHistory = (e, data) => {
    e.preventDefault()

    this.props.onCreateHistory(data)
    this.props.getHistoryPagitation(this.state.currentPage)

    this.setState({
      historyForm: {
        client_id: this.props.match.params.id,
        action: '',
        date: ''
      },
    })
  }


  render() {
    return (
      <div>
        <NavBar history={this.props.history} />
        <History
          {...this.props}
          onSetDate={this.onSetDate}
          handleChange={this.handleChange}
          historyForm={this.state.historyForm}
          currentPage={this.state.currentPage}
          onChange={this.onChange}
          handleCreateHistory={this.handleCreateHistory}
          client={this.state.currentClient}
          historyData={this.props.historyData}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  historyData: state.history.data,
  pagy: state.history.pagy,
  loading: state.clients.loading,
  client: state.clients.client
})

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps.match.params
  return ({
    onShowClient: () => dispatch(resourceShowRequest(`/clients/${id}`)),
    getHistory: () => dispatch(resourceGetRequest(`history?client_id=${id}`)),
    onCreateHistory: (data) => dispatch(resourceCreateRequest('history', data)),
    getHistoryPagitation: (page) => dispatch(resourceGetRequest(`history?client_id=${id}&page=${page}`)),
    onShowClient: () => dispatch(resourceShowRequest(`/clients/${id}`))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryContainer)
