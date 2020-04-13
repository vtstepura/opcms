import React, { Component } from 'react'
import { connect } from 'react-redux'
import { resourceGetRequest, resourceCreateRequest } from '../store/history/actions'

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
      currentPage: 1
    }
  }

  componentDidMount() {
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

  render() {
    console.log(this.state.historyForm)
    return (
      <div>
      <NavBar />
      <History
        {...this.props}
        onSetDate={this.onSetDate}
        handleChange={this.handleChange}
        historyForm={this.state.historyForm}
        currentPage={this.state.currentPage}
        onChange={this.onChange}
      />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  history: state.history.data,
  pagy: state.history.pagy
})

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps.match.params
  return ({
    getHistory: () => dispatch(resourceGetRequest(`history?client_id=${id}`)),
    onCreateHistory: (data) => dispatch(resourceCreateRequest('history', data)),
    getHistoryPagitation: (page) => dispatch(resourceGetRequest(`history?client_id=${id}&page=${page}`))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryContainer)
