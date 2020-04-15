import React from 'react'
import { Container } from 'react-bootstrap'
import HistoryForm from './HistoryForm'
import HistoryTable from './HistoryTable'
import ClientInformation from './ClientInformation'
import Paginator from '../Paginator'

const History = ({ historyData, historyForm, onSetDate, handleChange, onCreateHistory, pagy, currentPage, onChange, handleCreateHistory, client }) => {
  return (
    <div className='history'>
      <div className='history-list'>
        <ClientInformation client={client} />
        <HistoryForm
          handleChange={handleChange}
          handleCreateHistory={handleCreateHistory}
          historyForm={historyForm}
        />
        <HistoryTable history={historyData} />
    </div>
    <Paginator
      currentPage={currentPage}
      totalPages={pagy.pages}
      onChange={onChange}
    />
  </div>
  )

}

export default History
